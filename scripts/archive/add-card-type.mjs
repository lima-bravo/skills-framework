#!/usr/bin/env node
/** One-off: add cardType to skills-manifest.json (Step 1.1) */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const REF = path.join(ROOT, 'Skills Reference');
const MANIFEST = path.join(REF, 'skills-manifest.json');

const EXTENDED = new Set([
  'Business/ambidextrous-organization.md',
  'Business/open-innovation.md',
  'Startups/effectuation.md',
  'Business/organizational-slack.md',
  'Business/innovation-health-indicators.md',
  'Startups/opportunity-solution-trees.md',
  'Startups/pretotyping.md',
  'Startups/continuous-discovery.md',
  'Applied-AI/ai-authority-boundaries.md',
  'Applied-AI/minimal-capability-principle.md',
  'Applied-AI/prompt-injection.md',
  'Leadership/three-question-ritual.md',
  'Leadership/async-first-default.md',
  'Psychology/self-determination-theory.md',
  'Leadership/purpose-clarity.md',
  'Leadership/leaders-intent.md',
  'Leadership/brief-back-protocols.md',
  'Leadership/after-action-review.md',
  'Leadership/tactical-pause.md',
  'Innovation-Entrepreneurship/cobra-effect.md',
]);

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
let chain = 0;
let extended = 0;
let standard = 0;

for (const [file, meta] of Object.entries(manifest.skills)) {
  let cardType;
  if (meta.category === 'Pre-built Chains') {
    cardType = 'chain';
    chain += 1;
  } else if (EXTENDED.has(file)) {
    cardType = 'extended';
    extended += 1;
  } else {
    cardType = 'standard';
    standard += 1;
  }
  meta.cardType = cardType;
}

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log({ chain, extended, standard, total: chain + extended + standard });
