#!/usr/bin/env node
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readAndParseSkill } from './parse-skill.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REF = path.resolve(__dirname, '../../Skills Reference');

const fixtures = [
  {
    label: 'standard',
    file: 'General-Thinking/first-principles.md',
    expectSection: 'Definition',
  },
  {
    label: 'chain',
    file: 'Pre-built-Chains/improve-delivery-flow.md',
    expectSection: 'Step 1',
  },
  {
    label: 'extended',
    file: 'Applied-AI/ai-authority-boundaries.md',
    expectSection: 'The Six Registers of Restraint',
  },
];

let failed = 0;
for (const f of fixtures) {
  const parsed = readAndParseSkill(path.join(REF, f.file));
  const titles = parsed.allSections.map((s) => s.title);
  if (!titles.some((t) => t.startsWith(f.expectSection) || t === f.expectSection)) {
    console.error(`FAIL ${f.label}: missing section ${f.expectSection} in`, titles);
    failed += 1;
    continue;
  }
  if (!parsed.tagline) {
    console.error(`FAIL ${f.label}: missing tagline`);
    failed += 1;
    continue;
  }
  if (f.label === 'standard' && parsed.connections.length < 1) {
    console.error(`FAIL ${f.label}: expected connections`);
    failed += 1;
    continue;
  }
  console.log(`OK   ${f.label}: ${titles.length} sections, ${parsed.connections.length} connections`);
}

if (failed) {
  console.error(`\n${failed} fixture(s) failed`);
  process.exit(1);
}
console.log('\nAll parse-skill fixtures passed');
