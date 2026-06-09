/**
 * Shared markdown skill parser (remark/unified).
 */
import fs from 'node:fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { toString } from 'mdast-util-to-string';
import { parseConnectionLines } from './connections.mjs';
import { parseFrontmatter, splitFrontmatter } from './frontmatter.mjs';

function stripFooter(md) {
  return md.replace(/\n\*Part of[\s\S]*$/i, '').trim();
}

export function extractSectionRaw(md, sectionTitle) {
  const re = new RegExp(
    `## ${sectionTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^\\n]*\\n([\\s\\S]*?)(?=\\n## |\\n\\*Part of|$)`,
  );
  const m = md.match(re);
  return m ? m[1] : '';
}

function parseTaglineFromMd(md) {
  const { data, body } = parseFrontmatter(md);
  if (data?.tagline) return String(data.tagline).trim();
  const tag = body.match(/\*\*Tagline:\*\*\s*(.+)/);
  if (tag) return tag[1].trim();
  const italic = body.match(/^# [^\n]+\n\*([^*\n]+)\*/m) || body.match(/^\*([^*\n]+)\*/m);
  return italic ? italic[1].trim() : '';
}

function parseTitleFromMd(md) {
  const { data, body } = parseFrontmatter(md);
  if (data?.name) return String(data.name).trim();
  const m = body.match(/^# ([^\n]+)/m);
  return m ? m[1].trim() : '';
}

function connectionsFromFrontmatter(data) {
  if (!Array.isArray(data?.connections)) return null;
  return data.connections.map((c) => ({
    id: c.id,
    name: '',
    href: null,
    rationale: c.rationale ?? '',
    raw: `→ [${c.id}·]`,
    resolvedBy: 'id',
  }));
}

function referencesFromFrontmatter(data) {
  if (!Array.isArray(data?.references)) return null;
  return data.references.map((r) => ({
    title: r.title,
    authorYear: r.authorYear ?? '',
    note: r.supports ?? r.note ?? '',
  }));
}

/**
 * Parse skill markdown into structured sections.
 */
export function parseSkillMarkdown(md, opts = {}) {
  const { includeReferences = false } = opts;
  const { data: fmData, body: fmBody } = parseFrontmatter(md);
  const body = stripFooter(fmData ? fmBody : md);
  const tagline = parseTaglineFromMd(md);
  const title = parseTitleFromMd(md);

  const tree = unified().use(remarkParse).parse(body);

  const sections = [];
  let current = null;

  for (const node of tree.children ?? []) {
    if (node.type === 'heading' && node.depth === 2) {
      if (current) sections.push(current);
      current = { title: toString(node).trim(), body: '', nodes: [] };
      continue;
    }
    if (current && node.type !== 'yaml') {
      current.nodes.push(node);
    }
  }
  if (current) sections.push(current);

  for (const s of sections) {
    s.body = nodesToBodyText(s.nodes);
    delete s.nodes;
  }

  const skipMachine = !!fmData;
  let allSections = sections;
  if (skipMachine) {
    allSections = sections.filter(
      (s) => s.title !== 'Connections' && s.title !== 'References',
    );
  }

  const filtered = includeReferences
    ? allSections
    : allSections.filter((s) => s.title !== 'References');

  const connections =
    connectionsFromFrontmatter(fmData) ??
    parseConnectionLines(extractSectionRaw(fmData ? fmBody : md, 'Connections'));

  const references =
    referencesFromFrontmatter(fmData) ??
    parseReferenceLines(extractSectionRaw(fmData ? fmBody : md, 'References'));

  return {
    title,
    tagline,
    frontmatter: fmData,
    sections: filtered,
    allSections,
    connections,
    references,
    body,
  };
}

function nodesToBodyText(nodes) {
  const lines = [];
  for (const node of nodes) {
    if (node.type === 'paragraph') {
      lines.push(toString(node));
    } else if (node.type === 'list') {
      for (const item of node.children ?? []) {
        lines.push(`- ${toString(item).trim()}`);
      }
    } else if (node.type === 'heading' && node.depth >= 3) {
      lines.push(`### ${toString(node)}`);
    } else if (node.type === 'thematicBreak') {
      // skip
    } else {
      const t = toString(node).trim();
      if (t) lines.push(t);
    }
  }
  return lines.join('\n').trim();
}

function parseReferenceLines(body) {
  const refs = [];
  for (const line of body.split('\n')) {
    const t = line.trim();
    if (!t.startsWith('-')) continue;

    const articleM = t.match(
      /^-\s*(.+?)\s*\((\d{4}[^)]*)\)\s+"([^"]+)"\s+\*([^*]+)\*\.?\s*(.*)$/,
    );
    if (articleM) {
      refs.push({
        title: articleM[3].trim(),
        authorYear: `${articleM[1].trim()} (${articleM[2].trim()}) — ${articleM[4].trim()}`,
        note: (articleM[5] || '').trim(),
      });
      continue;
    }

    const authorFirst = t.match(/^-\s*(.+?)\s*\((\d{4}[^)]*)\)\s+\*([^*]+)\*\.?\s*(.*)$/);
    if (authorFirst) {
      const tail = (authorFirst[4] || '').trim();
      const dotM = tail.match(/^([^.]+)\.\s*(.*)$/s);
      refs.push({
        title: authorFirst[3].trim(),
        authorYear: `${authorFirst[1].trim()} (${authorFirst[2].trim()})`,
        note: dotM ? dotM[2].trim() : tail,
      });
      continue;
    }

    const m = t.match(/^-\s*\*([^*]+)\*\s*(?:—|-)\s*(.+)$/);
    if (!m) {
      refs.push({ raw: t });
      continue;
    }
    const rest = m[2].trim();
    const yearM = rest.match(/^(.+?)\s*\((\d{4}[^)]*)\)\s*(?:—|-)\s*(.*)$/);
    if (yearM) {
      refs.push({
        title: m[1].trim(),
        authorYear: `${yearM[1].trim()} (${yearM[2].trim()})`,
        note: (yearM[3] || '').trim(),
      });
      continue;
    }
    const dashM = rest.match(/^(.+?)\s*(?:—|-)\s*(.*)$/);
    if (dashM && dashM[2]) {
      refs.push({
        title: m[1].trim(),
        authorYear: dashM[1].trim(),
        note: dashM[2].trim(),
      });
      continue;
    }
    refs.push({
      title: m[1].trim(),
      authorYear: rest,
      note: '',
    });
  }
  return refs;
}

export function readAndParseSkill(filePath, opts) {
  const md = fs.readFileSync(filePath, 'utf8');
  return parseSkillMarkdown(md, opts);
}
