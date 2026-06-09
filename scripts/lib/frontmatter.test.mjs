#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadManifest } from './manifest.mjs';
import {
  parseFrontmatter,
  stringifyFrontmatter,
  validateFrontmatterSync,
} from './frontmatter.mjs';
import { parseSkillMarkdown } from './parse-skill.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REF = path.resolve(__dirname, '../../Skills Reference');
const PILOT = 'Applied-AI/ai-authority-boundaries.md';

const manifest = loadManifest();
const meta = manifest.skills[PILOT];
assert(meta, 'pilot card in manifest');

const md = fs.readFileSync(path.join(REF, PILOT), 'utf8');
const parsed = parseSkillMarkdown(md, { includeReferences: true });

assert(parsed.connections.length >= 1, 'pilot has connections');
assert(parsed.references.length >= 1, 'pilot has references');

const fm = {
  id: meta.id,
  name: meta.name,
  category: meta.category,
  cardType: meta.cardType,
  tagline: parsed.tagline,
  connections: parsed.connections
    .filter((c) => c.id != null)
    .map((c) => ({ id: c.id, rationale: c.rationale })),
  references: parsed.references
    .filter((r) => r.title)
    .map((r) => ({
      title: r.title,
      authorYear: r.authorYear,
      ...(r.note ? { supports: r.note } : {}),
    })),
};

const roundTrip = stringifyFrontmatter(fm) + '# Test\n\n## Definition\n\nBody.\n';
const { data } = parseFrontmatter(roundTrip);
assert.equal(data.id, meta.id);
assert.equal(data.connections.length, fm.connections.length);
assert.equal(data.references.length, fm.references.length);

const syncErrors = validateFrontmatterSync(data, meta, PILOT);
assert.equal(syncErrors.length, 0, syncErrors.join('; '));

const reparsed = parseSkillMarkdown(roundTrip, { includeReferences: true });
assert.equal(reparsed.connections.length, fm.connections.length);
assert.equal(reparsed.references.length, fm.references.length);
assert.equal(reparsed.sections.some((s) => s.title === 'Connections'), false);

console.log('OK   frontmatter round-trip on pilot fixture');
