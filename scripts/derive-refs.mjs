#!/usr/bin/env node
/**
 * Derive manifest.refs from card ## References sections.
 * Report-only by default; --write updates skills-manifest.json refs array.
 */
import fs from 'fs';
import { loadManifest, MANIFEST_PATH } from './lib/manifest.mjs';
import { deriveRefs } from './lib/derive-refs-core.mjs';
import { mergeBibliography, diffDerivedSubset } from './lib/refs-normalize.mjs';

const WRITE = process.argv.includes('--write');

function main() {
  const manifest = loadManifest();
  const raw = deriveRefs(manifest);
  const derived = mergeBibliography(raw);

  console.log(
    `Derived ${raw.length} raw ref lines → ${derived.length} canonical entries (manifest has ${manifest.refs.length})`,
  );

  const problems = diffDerivedSubset(derived, manifest.refs);
  if (problems === 0) {
    console.log('✓ derive-refs: 0 discrepancies');
  } else {
    console.error(`\n✗ ${problems} discrepancy(ies)`);
  }

  if (WRITE) {
    manifest.refs = derived;
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
    console.log(`Wrote ${derived.length} refs to skills-manifest.json`);
  }

  process.exit(problems && !WRITE ? 1 : 0);
}

main();
