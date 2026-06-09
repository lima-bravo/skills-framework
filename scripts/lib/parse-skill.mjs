/**
 * Shared markdown skill parser (remark/unified).
 */
import fs from 'node:fs';
import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import { parseConnectionLines } from './connections.mjs';

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
  const tag = md.match(/\*\*Tagline:\*\*\s*(.+)/);
  if (tag) return tag[1].trim();
  const italic = md.match(/^\*([^*\n]+)\*/m);
  return italic ? italic[1].trim() : '';
}

function parseTitleFromMd(md) {
  const m = md.match(/^# ([^\n]+)/m);
  return m ? m[1].trim() : '';
}

/**
 * Parse skill markdown into structured sections.
 * @param {string} md raw file contents
 * @param {{ includeReferences?: boolean }} opts
 */
export function parseSkillMarkdown(md, opts = {}) {
  const { includeReferences = false } = opts;
  const body = stripFooter(md);
  const tagline = parseTaglineFromMd(md);
  const title = parseTitleFromMd(md);

  const tree = unified().use(remarkParse).use(remarkFrontmatter, ['yaml']).parse(body);

  let frontmatter = null;
  visit(tree, 'yaml', (node) => {
    try {
      // minimal YAML: key: value lines only for Phase 7
      frontmatter = {};
      for (const line of node.value.split('\n')) {
        const m = line.match(/^(\w+):\s*(.+)$/);
        if (m) frontmatter[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    } catch {
      frontmatter = null;
    }
  });

  const sections = [];
  let current = null;

  const children = tree.children ?? [];
  for (const node of children) {
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

  const filtered = includeReferences
    ? sections
    : sections.filter((s) => s.title !== 'References');

  const connections = parseConnectionLines(extractSectionRaw(body, 'Connections'));

  const references = parseReferenceLines(extractSectionRaw(body, 'References'));

  return {
    title,
    tagline,
    frontmatter,
    sections: filtered,
    allSections: sections,
    connections,
    references,
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
    const m = t.match(/^-\s*\*([^*]+)\*\s*(?:—|-)\s*([^(]+)(?:\((\d{4})\))?\s*(?:—|-)\s*(.*)/);
    if (m) {
      refs.push({
        title: m[1].trim(),
        authorYear: `${m[2].trim()}${m[3] ? ` (${m[3]})` : ''}`.trim(),
        note: (m[4] || '').trim(),
      });
      continue;
    }
    refs.push({ raw: t });
  }
  return refs;
}

export function readAndParseSkill(filePath, opts) {
  const md = fs.readFileSync(filePath, 'utf8');
  return parseSkillMarkdown(md, opts);
}
