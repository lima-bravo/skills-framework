#!/usr/bin/env node
/**
 * check-counts.mjs — single source of truth for every hard-coded count.
 *
 * Derives the canonical numbers from skills-manifest.json (+ plugins/ and the
 * generated graph), then asserts that every count written into the prose docs
 * matches. Fails (exit 1) on any drift, printing file:line, expected vs found.
 *
 * This exists because the hand-maintained counts silently drifted once already
 * (226 vs the real 244). Run it via `npm run check:counts`; it is also chained
 * into `npm run build` so a stale count breaks the build instead of shipping.
 *
 * When a count legitimately changes: update the cards/manifest, rebuild, then
 * run this — it tells you exactly which prose lines still need editing.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REF_DIR = path.join(ROOT, 'Skills Reference');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

// ---- Canonical numbers, derived (never hand-typed) ----
const manifest = readJson(path.join(REF_DIR, 'skills-manifest.json'));
const skillFiles = Object.keys(manifest.skills);
const totalSkills = skillFiles.length;
const categories = new Set(Object.values(manifest.skills).map((s) => s.category)).size;
const chains = Object.values(manifest.skills).filter(
  (s) => s.category === 'Pre-built Chains',
).length;
const nonChainCards = totalSkills - chains;
const nonChainCategories = categories - 1; // every category except Pre-built Chains
const refs = manifest.refs.length;

// connections: read from the generated graph (authoritative, always fresh)
let connections = null;
const graphPath = path.join(ROOT, 'docs', 'graph.html');
if (fs.existsSync(graphPath)) {
  const m = fs.readFileSync(graphPath, 'utf8').match(/(\d+)\s+connections/i);
  if (m) connections = Number(m[1]);
}

// plugin skills: count generated SKILL.md, fall back to config
let pluginSkills = 0;
const PLUGINS = path.join(ROOT, 'plugins');
if (fs.existsSync(PLUGINS)) {
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'SKILL.md') pluginSkills += 1;
    }
  };
  walk(PLUGINS);
}

const C = {
  totalSkills,
  categories,
  chains,
  nonChainCards,
  nonChainCategories,
  refs,
  connections,
  pluginSkills,
};

console.log('Canonical (from manifest/build):', JSON.stringify(C));

// ---- Assertions: [regex with capture group(s)] => [expected value(s)] ----
// Each entry: { file, re, expect: number | number[] }. The regex is run global;
// every match is checked, so repeated phrasings are all covered.
const A = [
  // CLAUDE.md
  ['CLAUDE.md', /library of (\d+) mental model cards/g, totalSkills],

  // README.md
  ['README.md', /\*\*(\d+) skills\*\* across \*\*\d+ categories\*\*/g, totalSkills],
  ['README.md', /filters across \*\*(\d+) skills\*\*/g, totalSkills],
  ['README.md', /deck's \*\*(\d+) reference cards\*\*/g, totalSkills],
  ['README.md', /generates \*\*(\d+) procedural skills\*\*/g, pluginSkills],
  ['README.md', /\*\*(\d+)\*\* sources/g, refs],
  ['README.md', /refs \((\d+) skills\)/g, totalSkills],
  ['README.md', /`disciplined-thinking` \| (\d+) /g, pluginCount('disciplined-thinking')],
  ['README.md', /`delivery-and-flow` \| (\d+) /g, pluginCount('delivery-and-flow')],
  ['README.md', /`consulting-craft` \| (\d+) /g, pluginCount('consulting-craft')],
  ['README.md', /`innovation-strategy` \| (\d+) /g, pluginCount('innovation-strategy')],
  ['README.md', /`applied-ai` \| (\d+) /g, pluginCount('applied-ai')],
  ['README.md', /`leadership` \| (\d+) /g, pluginCount('leadership')],

  // Skills Reference/skill-primer.md
  ['Skills Reference/skill-primer.md', /one of (\d+) in a framework/g, totalSkills],
  ['Skills Reference/skill-primer.md', /(\d+) skills across \d+ categories/g, totalSkills],

  // Skills Reference/training-guide.md
  ['Skills Reference/training-guide.md', /\*\*(\d+) skills\*\* across \*\*\d+ categories\*\*/g, totalSkills],
  ['Skills Reference/training-guide.md', /\((\d+) mental-model cards plus (\d+) pre-built/g, [nonChainCards, chains]],
  ['Skills Reference/training-guide.md', /shows all (\d+) skills as/g, totalSkills],
  ['Skills Reference/training-guide.md', /manifest\.json` \((\d+) total\)/g, totalSkills],
  ['Skills Reference/training-guide.md', /\*\*Mental model cards\*\* \((\d+) cards across (\d+) categories\)/g, [nonChainCards, nonChainCategories]],
  ['Skills Reference/training-guide.md', /With (\d+) skills, the question/g, totalSkills],
  ['Skills Reference/training-guide.md', /framework has (\d+) skills/g, totalSkills],
  ['Skills Reference/training-guide.md', /(\d+) skills across \d+ categories · canonical/g, totalSkills],

  // Skills Reference/_ai-index.md
  ['Skills Reference/_ai-index.md', /\| (\d+) skills \| (\d+) categories \| (\d+) graph connections/g, [totalSkills, categories, connections]],
  ['Skills Reference/_ai-index.md', /(\d+) cards are pre-built chains/g, chains],

  // life-decision.md framework-total footer
  ['Skills Reference/Pre-built-Chains/life-decision.md', /\*\*Skills covered:\*\* (\d+) across (\d+) categories/g, [totalSkills, categories]],
];

function pluginCount(id) {
  const dir = path.join(PLUGINS, id, 'skills');
  if (!fs.existsSync(dir)) return null;
  return fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory()).length;
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

let problems = 0;
let assertionsRun = 0;
for (const [rel, re, expectRaw] of A) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) {
    console.error(`MISSING FILE  ${rel}`);
    problems += 1;
    continue;
  }
  const expect = Array.isArray(expectRaw) ? expectRaw : [expectRaw];
  const text = fs.readFileSync(file, 'utf8');
  let m;
  let matched = 0;
  re.lastIndex = 0;
  while ((m = re.exec(text)) !== null) {
    matched += 1;
    assertionsRun += 1;
    for (let g = 0; g < expect.length; g += 1) {
      const found = Number(m[g + 1]);
      const want = expect[g];
      if (want === null) continue; // canonical value unavailable (e.g. graph not built)
      if (found !== want) {
        console.error(`DRIFT  ${rel}:${lineOf(text, m.index)}  found ${found}, expected ${want}  ::  ${m[0].trim()}`);
        problems += 1;
      }
    }
  }
  if (matched === 0) {
    console.error(`NO MATCH  ${rel}  pattern not found (did the wording change?): ${re}`);
    problems += 1;
  }
}

console.log(`\n${assertionsRun} count occurrence(s) checked.`);
if (problems) {
  console.error(`\n✗ ${problems} count problem(s). Fix the prose to match canonical, or update this checker if the wording changed.`);
  process.exit(1);
}
console.log('✓ all hard-coded counts match the manifest.');
