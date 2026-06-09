#!/usr/bin/env node
/**
 * Compare deck/graph build metrics to baseline fixtures.
 * Write baseline: node scripts/snapshot-test.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BASELINE = path.join(__dirname, 'fixtures/baseline/build-snapshot.json');
const DECK = path.join(ROOT, 'docs/deck.html');
const GRAPH = path.join(ROOT, 'docs/graph.html');

function extractDeckSkills(html) {
  const m = html.match(/__SKILLS_JSON__\s*=\s*(\[[\s\S]*?\]);/);
  if (!m) {
    const m2 = html.match(/const SKILLS\s*=\s*(\[[\s\S]*?\]);/);
    if (!m2) throw new Error('deck.html: cannot find skills JSON');
    return JSON.parse(m2[1]);
  }
  return JSON.parse(m[1]);
}

function extractGraph(html) {
  const m = html.match(/const GRAPH\s*=\s*(\{[\s\S]*?\});/);
  if (!m) throw new Error('graph.html: cannot find GRAPH');
  return JSON.parse(m[1]);
}

function deckMetrics(skills) {
  const sectionCounts = {};
  let connectionLines = 0;
  for (const s of skills) {
    const titles = [...(s.modal || '').matchAll(/<h3>([^<]+)<\/h3>/g)].map((x) => x[1]);
    sectionCounts[s.id] = titles.length;
    connectionLines += (s.modal || '').split('class="connection"').length - 1;
  }
  return {
    skillCount: skills.length,
    connectionLines,
    sectionCounts,
  };
}

function main() {
  const write = process.argv.includes('--write');
  const deckHtml = fs.readFileSync(DECK, 'utf8');
  const graphHtml = fs.readFileSync(GRAPH, 'utf8');
  const skills = extractDeckSkills(deckHtml);
  const graph = extractGraph(graphHtml);
  const skillLinks = graph.links.filter(
    (l) => l.source < 1000 && l.target < 1000,
  ).length;

  const current = {
    ...deckMetrics(skills),
    graphSkillLinks: skillLinks,
    graphNodes: graph.nodes.length,
  };

  if (write || !fs.existsSync(BASELINE)) {
    fs.writeFileSync(BASELINE, JSON.stringify(current, null, 2) + '\n', 'utf8');
    console.log(`Wrote baseline ${BASELINE}`);
    return;
  }

  const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
  let problems = 0;

  for (const key of ['skillCount', 'connectionLines', 'graphSkillLinks', 'graphNodes']) {
    if (current[key] !== baseline[key]) {
      console.error(`DRIFT ${key}: found ${current[key]}, expected ${baseline[key]}`);
      problems += 1;
    }
  }

  for (const [id, count] of Object.entries(baseline.sectionCounts ?? {})) {
    if (current.sectionCounts[id] !== count) {
      console.error(`DRIFT sectionCount id=${id}: found ${current.sectionCounts[id]}, expected ${count}`);
      problems += 1;
    }
  }

  if (problems) {
    console.error(`\n✗ ${problems} snapshot problem(s). Run with --write after intentional change.`);
    process.exit(1);
  }
  console.log('✓ snapshot-test: deck and graph metrics match baseline');
}

main();
