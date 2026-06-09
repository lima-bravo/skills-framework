#!/usr/bin/env node
/**
 * Build docs/graph.html from markdown skill files.
 * Nodes: all skills in skills-manifest.json + reference nodes from manifest.refs.
 * Edges: parsed from each skill's ## Connections section + ref-to-skill links.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildLookups } from './lib/manifest.mjs';
import { resolveConnectionTarget } from './lib/connections.mjs';
import { parseSkillMarkdown } from './lib/parse-skill.mjs';

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

  const { byName, byId, byPath } = buildLookups(manifest);

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
    const parsed = parseSkillMarkdown(md);
    const tagline = parsed.tagline || '';

    nodes.push({
      id: meta.id,
      name: meta.name,
      category: meta.category,
      color: meta.color,
      tagline: truncate(tagline, 80),
    });

    // Parse connections → edges (id-first, name fallback)
    for (const conn of parsed.connections) {
      const { targetId } = resolveConnectionTarget(conn, { byId, byName, byPath }, file);
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
