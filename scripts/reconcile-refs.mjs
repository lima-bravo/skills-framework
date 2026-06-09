#!/usr/bin/env node
/**
 * Merge card-derived refs + manifest refs into one canonical bibliography.
 * Usage: node scripts/reconcile-refs.mjs [--write]
 */
import fs from 'node:fs';
import { loadManifest, MANIFEST_PATH } from './lib/manifest.mjs';
import { deriveRefs } from './lib/derive-refs-core.mjs';
import { mergeBibliography, diffDerivedSubset } from './lib/refs-normalize.mjs';

const WRITE = process.argv.includes('--write');

function main() {
  const manifest = loadManifest();
  const fromCards = deriveRefs(manifest);
  const merged = mergeBibliography([
    ...fromCards.flatMap((r) => [{ ...r, skills: r.skills }]),
    ...manifest.refs.flatMap((r) => [{ ...r, skills: r.skills ?? [] }]),
  ]);

  console.log(
    `Cards: ${fromCards.length} raw entries → manifest: ${manifest.refs.length} → merged: ${merged.length}`,
  );

  const cardCanonical = mergeBibliography(fromCards);
  const problems = diffDerivedSubset(cardCanonical, merged);

  if (problems === 0) {
    console.log('✓ reconcile-refs: card-derived bibliography matches merged manifest');
  } else {
    console.error(`\n✗ ${problems} discrepancy(ies) after merge preview`);
  }

  if (WRITE) {
    manifest.refs = merged;
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
    console.log(`Wrote ${merged.length} refs to skills-manifest.json`);
  }

  process.exit(problems && !WRITE ? 1 : 0);
}

main();
