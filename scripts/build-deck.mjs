#!/usr/bin/env node
/**
 * Build docs/deck.html from markdown skill files.
 * Stable ids: skills-manifest.json. Bibliography derived at build from card ## References.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSkillMarkdown, extractSectionRaw } from './lib/parse-skill.mjs';
import { loadManifest } from './lib/manifest.mjs';
import { applyBibliography } from './lib/build-bibliography.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REF_DIR = path.join(ROOT, 'Skills Reference');
const DOCS_DIR = path.join(ROOT, 'docs');
const TEMPLATE = path.join(REF_DIR, 'deck.template.html');
const MANIFEST = path.join(REF_DIR, 'skills-manifest.json');
const OUT = path.join(DOCS_DIR, 'deck.html');

// Ensure docs/ exists
fs.mkdirSync(DOCS_DIR, { recursive: true });

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseTagline(md) {
  return parseSkillMarkdown(md).tagline || '';
}

function parseSections(md, includeReferences = false) {
  const stripped = md.replace(/\n\*Part of[\s\S]*$/i, '').trim();
  const { allSections } = parseSkillMarkdown(md, { includeReferences: true });
  const sections = [];
  for (const s of allSections) {
    if (s.title === 'References' && !includeReferences) continue;
    const body = extractSectionRaw(stripped, s.title)
      .replace(/^---\s*$/gm, '')
      .replace(/\n---\s*$/g, '')
      .trim();
    if (body) sections.push({ title: s.title, body });
  }
  return sections;
}

function resolveLink(href, name, filePath, byPath, byName) {
  const normalized = href.replace(/^\.\//, '').split('#')[0];
  if (!normalized || normalized.endsWith('.html')) return null;
  const base = path.posix.basename(normalized);
  const fromSame = path.posix.join(path.posix.dirname(filePath), normalized);
  const candidates = [normalized, fromSame];
  for (const c of candidates) {
    const key = c.replace(/^\.\//, '');
    if (byPath.has(key)) return byPath.get(key).id;
    const match = [...byPath.keys()].find((k) => k.endsWith('/' + base) || k === base);
    if (match) return byPath.get(match).id;
  }
  return byName.get(name)?.id ?? null;
}

function inlineMd(text, filePath, byPath, byName) {
  const linkRe = /\[(\*\*([^*]+)\*\*|([^\]]+))\]\(([^)]+)\)/g;
  let out = '';
  let last = 0;
  let m;
  while ((m = linkRe.exec(text)) !== null) {
    out += formatTextChunk(text.slice(last, m.index));
    const name = (m[2] || m[3] || '').trim();
    const id = resolveLink(m[4], name, filePath, byPath, byName);
    out +=
      id != null
        ? `<a class="skill-link" href="#" data-id="${id}"><strong>${esc(name)}</strong></a>`
        : esc(name);
    last = m.index + m[0].length;
  }
  out += formatTextChunk(text.slice(last));
  return out;
}

function formatTextChunk(text) {
  let s = esc(text);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return s;
}

function buildModal(md, filePath, byPath, byName) {
  const includeRefs = /^## References\s*$/m.test(md);
  let html = '';
  for (const s of parseSections(md, includeRefs)) {
    const isConnections = s.title === 'Connections';
    const body = s.body.replace(/\n---\s*$/g, '').trim();
    let inner = '';

    if (isConnections) {
      for (const line of body.split('\n')) {
        if (!line.trim().startsWith('→')) continue;
        inner += `<p class="connection">→ ${inlineMd(line.replace(/^→\s*/, ''), filePath, byPath, byName)}</p>`;
      }
    } else {
      const lines = body.split('\n').filter((l) => l.trim());
      const isList = lines.length > 0 && lines.every((l) => /^\s*[-*]\s+/.test(l));
      if (isList) {
        inner =
          '<ul>\n' +
          lines
            .map((l) => `<li>${inlineMd(l.replace(/^\s*[-*]\s+/, ''), filePath, byPath, byName)}</li>`)
            .join('\n') +
          '\n</ul>';
      } else {
        const paras = body.split(/\n\n+/).filter((p) => p.trim() && p.trim() !== '---');
        inner = paras
          .map((p, i) => {
            const innerP = p
              .split('\n')
              .filter((ln) => ln.trim() !== '---')
              .map((ln) => inlineMd(ln, filePath, byPath, byName))
              .join('<br>\n');
            return `<p>${innerP}</p>${i < paras.length - 1 ? '\n<br>\n' : ''}`;
          })
          .join('');
      }
    }
    html += `<div class="ms-section"><h3>${esc(s.title)}</h3>${inner}</div>`;
  }
  return html;
}

function previewFromMd(md) {
  const def = parseSections(md).find((s) => s.title === 'Definition');
  if (!def) return '';
  const first = def.body.split(/\n\n+/)[0]?.trim() ?? '';
  return first.replace(/\*+/g, '').slice(0, 280);
}

function main() {
  const manifest = applyBibliography(loadManifest());
  const template = fs.readFileSync(TEMPLATE, 'utf8');

  const byPath = new Map();
  const byName = new Map();
  for (const [file, meta] of Object.entries(manifest.skills)) {
    byPath.set(file, meta);
    byName.set(meta.name, { id: meta.id, file });
  }

  const skills = [];
  for (const [file, meta] of Object.entries(manifest.skills)) {
    const md = fs.readFileSync(path.join(REF_DIR, file), 'utf8');
    const tagline = parseTagline(md) || '';
    const preview = previewFromMd(md);
    const modal = buildModal(md, file, byPath, byName);
    skills.push({
      id: meta.id,
      name: meta.name,
      tagline,
      category: meta.category,
      color: meta.color,
      preview,
      modal,
      file,
      searchText: [meta.name, tagline, preview].join(' ').toLowerCase(),
    });
  }
  const catOrder = Object.keys(manifest.categories);
  skills.sort((a, b) => {
    const ai = catOrder.indexOf(a.category);
    const bi = catOrder.indexOf(b.category);
    const ca = ai === -1 ? catOrder.length : ai;
    const cb = bi === -1 ? catOrder.length : bi;
    if (ca !== cb) return ca - cb;
    return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
  });

  if (!template.includes('__SKILLS_JSON__')) {
    throw new Error('deck.template.html missing __SKILLS_JSON__ placeholder');
  }

  let out = template
    .replace('__SKILLS_JSON__', () => JSON.stringify(skills))
    .replace('__REFS_DATA_JSON__', () => JSON.stringify(manifest.refs))
    .replace('__CAT_COLORS_JSON__', () => JSON.stringify(manifest.categories));

  const banner = '<!-- Generated by scripts/build-deck.mjs — do not edit by hand -->\n';
  if (!out.startsWith('<!-- Generated')) out = banner + out;

  fs.writeFileSync(OUT, out, 'utf8');
  console.log(`Wrote ${OUT} (${skills.length} skills, ${(out.length / 1024).toFixed(0)} KB)`);
}

main();
