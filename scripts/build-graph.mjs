#!/usr/bin/env node
/**
 * Build docs/graph.html from markdown skill files.
 * Nodes: all skills in skills-manifest.json + reference nodes from manifest.refs.
 * Edges: parsed from each skill's ## Connections section + ref-to-skill links.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REF_DIR = path.join(ROOT, 'Skills Reference');
const DOCS_DIR = path.join(ROOT, 'docs');
const TEMPLATE = path.join(REF_DIR, 'graph.template.html');
const MANIFEST = path.join(REF_DIR, 'skills-manifest.json');
const OUT = path.join(DOCS_DIR, 'graph.html');

// Ensure docs/ exists
fs.mkdirSync(DOCS_DIR, { recursive: true });

// Ref node IDs start here (matches existing graph.html convention)
const REF_ID_BASE = 1000;

function parseTagline(md) {
  // First bold-italic tagline after the h1
  const m = md.match(/\*\*Tagline:\*\*\s*(.+)/);
  if (m) return m[1].trim();
  // Fallback: first *italic* line
  const m2 = md.match(/^\*([^*]+)\*/m);
  return m2 ? m2[1].trim() : '';
}

function parseConnections(md) {
  // Split on section headers and find the Connections chunk
  const chunks = md.split(/\n(?=## )/);
  const chunk = chunks.find(c => c.startsWith('## Connections'));
  if (!chunk) return [];
  // Strip the header line, then parse bullet lines
  const body = chunk.replace(/^## Connections[^\n]*\n/, '');

  const names = [];
  for (const line of body.split('\n')) {
    // Format A: - **Name** — or → **Name** —
    const mA = line.match(/(?:^[-*]|→)\s*\*\*([^*]+)\*\*/);
    if (mA) { names.push(mA[1].trim()); continue; }
    // Format B: → [**Name**](link.md) — (markdown link)
    const mB = line.match(/→\s*\[\*\*([^*]+)\*\*\]/);
    if (mB) names.push(mB[1].trim());
  }
  return names;
}

function truncate(s, len = 60) {
  if (!s) return '';
  return s.length > len ? s.slice(0, len - 1) + '…' : s;
}

function main() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const template = fs.readFileSync(TEMPLATE, 'utf8');

  if (!template.includes('__GRAPH_JSON__')) {
    throw new Error('graph.template.html missing __GRAPH_JSON__ placeholder');
  }

  // ── Build byName lookup ──────────────────────────────────────────────────
  // Normalise: collapse Unicode dashes/hyphens, strip parenthetical suffixes
  function normName(s) {
    return s.toLowerCase()
      .replace(/[–—]/g, '-') // en-dash / em-dash → hyphen
      .replace(/\s*\([^)]*\)\s*$/, '') // strip trailing parentheticals e.g. "(Salience Model)"
      .trim();
  }

  const byName = new Map(); // normalised name → id
  for (const [, meta] of Object.entries(manifest.skills)) {
    byName.set(normName(meta.name), meta.id);
    // Also index the full normalised name without stripping, so exact matches still win
    byName.set(meta.name.toLowerCase(), meta.id);
  }

  // ── Skill nodes ──────────────────────────────────────────────────────────
  const nodes = [];
  const linkSet = new Set(); // "source:target" for dedup
  const links = [];

  function addLink(source, target) {
    const key = source < target ? `${source}:${target}` : `${target}:${source}`;
    if (!linkSet.has(key)) {
      linkSet.add(key);
      links.push({ source, target });
    }
  }

  for (const [file, meta] of Object.entries(manifest.skills)) {
    const mdPath = path.join(REF_DIR, file);
    if (!fs.existsSync(mdPath)) {
      console.warn(`  WARN: missing file ${file}, skipping`);
      continue;
    }
    const md = fs.readFileSync(mdPath, 'utf8');
    const tagline = parseTagline(md) || '';

    nodes.push({
      id: meta.id,
      name: meta.name,
      category: meta.category,
      color: meta.color,
      tagline: truncate(tagline, 80),
    });

    // Parse connections → edges
    for (const connName of parseConnections(md)) {
      const targetId = byName.get(connName.toLowerCase()) ?? byName.get(normName(connName));
      if (targetId != null && targetId !== meta.id) {
        addLink(meta.id, targetId);
      }
    }
  }

  // ── Reference nodes + edges ──────────────────────────────────────────────
  for (let i = 0; i < manifest.refs.length; i++) {
    const ref = manifest.refs[i];
    const refId = REF_ID_BASE + i;
    nodes.push({
      id: refId,
      name: truncate(ref.title, 30),
      fullTitle: ref.title,
      authorYear: ref.authorYear,
      category: 'Sources',
      color: '#F59E0B',
      tagline: ref.authorYear,
      type: 'reference',
    });
    for (const skill of ref.skills ?? []) {
      links.push({ source: skill.id, target: refId });
    }
  }

  // ── Stats ────────────────────────────────────────────────────────────────
  const skillNodeCount = Object.keys(manifest.skills).length;
  const skillLinkCount = links.filter(l => l.source < REF_ID_BASE && l.target < REF_ID_BASE).length;
  const statsStr = `${skillNodeCount} skills &middot; ${skillLinkCount} connections`;

  // ── Category colours ─────────────────────────────────────────────────────
  const catColors = {};
  for (const [cat, meta] of Object.entries(manifest.categories)) {
    catColors[cat] = meta.color ?? meta;
  }
  // Always include Sources colour for ref nodes
  catColors['Sources'] = '#F59E0B';

  // ── Write output ──────────────────────────────────────────────────────────
  const graphData = { nodes, links };
  let out = template
    .replace('__GRAPH_JSON__', () => `const GRAPH = ${JSON.stringify(graphData)};`)
    .replace('__CAT_COLORS_JSON__', () => `const CAT_COLORS = ${JSON.stringify(catColors)};`)
    .replace('__GRAPH_STATS__', statsStr);

  fs.writeFileSync(OUT, out, 'utf8');
  console.log(
    `Wrote ${OUT} (${skillNodeCount} skills, ${skillLinkCount} connections, ` +
    `${manifest.refs.length} refs, ${(out.length / 1024).toFixed(0)} KB)`
  );
}

main();
