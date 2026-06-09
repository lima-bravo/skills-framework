#!/usr/bin/env node
/**
 * Generate Skills Reference/_ai-index.md from manifest + hand-edited preamble/clusters.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadManifest } from './lib/manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REF = path.join(__dirname, '..', 'Skills Reference');
const PREAMBLE = path.join(REF, '_ai-index.preamble.md');
const CLUSTERS = path.join(REF, '_ai-index.clusters.md');
const OUT = path.join(REF, '_ai-index.md');

function readConnectionsFromGraph() {
  const graphPath = path.join(__dirname, '..', 'docs', 'graph.html');
  if (!fs.existsSync(graphPath)) return null;
  const html = fs.readFileSync(graphPath, 'utf8');
  const m = html.match(/(\d+)\s+connections/i);
  return m ? Number(m[1]) : null;
}

function generateInventory(manifest) {
  const byCategory = new Map();
  for (const [, meta] of Object.entries(manifest.skills)) {
    if (!byCategory.has(meta.category)) byCategory.set(meta.category, []);
    byCategory.get(meta.category).push(meta);
  }
  for (const list of byCategory.values()) {
    list.sort((a, b) => a.id - b.id);
  }

  const catOrder = Object.keys(manifest.categories);
  const lines = [
    '## Skill inventory by category',
    '',
    'Format: `id·Name` — file at `Category/filename.md`',
    '',
  ];

  for (const cat of catOrder) {
    const skills = byCategory.get(cat);
    if (!skills?.length) continue;
    const color = manifest.categories[cat];
    lines.push(`### ${cat} (${skills.length} skills) — ${color}`);
    const entries = skills.map((s) => `\`${s.id}·${s.name}\``).join(' ');
    lines.push(entries);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

function main() {
  const manifest = loadManifest();
  const totalSkills = Object.keys(manifest.skills).length;
  const categories = Object.keys(manifest.categories).length;
  const chains = Object.values(manifest.skills).filter(
    (s) => s.category === 'Pre-built Chains',
  ).length;
  const connections = readConnectionsFromGraph();

  let preamble = fs.readFileSync(PREAMBLE, 'utf8');
  const header = `<!-- Last updated: ${new Date().toISOString().slice(0, 10)} | ${totalSkills} skills | ${categories} categories | ${connections ?? '?'} graph connections -->`;
  preamble = preamble.replace('<!-- GENERATED_HEADER -->', header);
  preamble = preamble.replace(
    'Pre-built Chains are multi-model',
    `${chains} cards are pre-built chains (multi-model`,
  );

  const inventory = generateInventory(manifest);
  const clusters = fs.readFileSync(CLUSTERS, 'utf8');
  const footer = `*Skills Framework · ${totalSkills} skills · ${categories} categories · \`skills-manifest.json\` is authoritative*`;
  const clustersOut = clusters.replace('<!-- GENERATED_FOOTER -->', footer);

  const body = [preamble.trimEnd(), inventory, clustersOut.trimEnd()].join('\n\n');
  fs.writeFileSync(OUT, body + '\n', 'utf8');
  console.log(`Wrote ${OUT} (${totalSkills} skills, ${categories} categories)`);
}

main();
