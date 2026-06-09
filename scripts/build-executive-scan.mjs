#!/usr/bin/env node
/**
 * Build docs/executive-scan.html from executive-scan.json + template.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadManifest, buildLookups } from './lib/manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const TEMPLATE = path.join(ROOT, 'Skills Reference', 'executive-scan.template.html');
const DATA = path.join(ROOT, 'Skills Reference', 'executive-scan.json');
const OUT = path.join(ROOT, 'docs', 'executive-scan.html');

function resolveSkillRef(sk, lookups, { forceChain = false } = {}) {
  const { byId, byName } = lookups;
  let id = sk.id;
  let name = sk.name;
  let chain = forceChain || sk.chain === true;

  if (id != null && byId.has(id)) {
    const canon = byId.get(id);
    name = canon.name;
    if (sk.chain === undefined && forceChain) {
      chain = canon.category === 'Pre-built Chains' || canon.cardType === 'chain';
    }
  } else if (sk.name) {
    const hit =
      byName.get(sk.name) ??
      byName.get(sk.name.toLowerCase()) ??
      [...byName.values()].find(
        (e) => e.name.toLowerCase() === sk.name.toLowerCase(),
      );
    if (hit) {
      id = hit.id;
      name = hit.name;
    } else {
      console.warn(`WARN  executive-scan: unresolved skill "${sk.name}" (id ${sk.id})`);
      id = sk.id ?? 0;
    }
  }

  return { id, name, tag: sk.tag, chain };
}

function hydrateDimensions(data, lookups) {
  return data.dimensions.map((dim) => ({
    id: dim.id,
    name: dim.name,
    color: dim.color,
    tagline: dim.tagline,
    skills: dim.skills.map((sk) => resolveSkillRef(sk, lookups)),
    chain: dim.chain ? resolveSkillRef(dim.chain, lookups, { forceChain: true }) : null,
    questions: dim.questions,
    overlap: dim.overlap ?? null,
  }));
}

function main() {
  const template = fs.readFileSync(TEMPLATE, 'utf8');
  if (!template.includes('__DIMENSIONS_JSON__')) {
    throw new Error('template missing __DIMENSIONS_JSON__');
  }

  const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
  const manifest = loadManifest();
  const lookups = buildLookups(manifest);
  const dimensions = hydrateDimensions(data, lookups);

  for (const dim of dimensions) {
    for (const sk of dim.skills) {
      if (sk.id != null && !lookups.byId.has(sk.id)) {
        throw new Error(`executive-scan: dimension ${dim.id} skill id ${sk.id} not in manifest`);
      }
    }
    if (dim.chain?.id != null && !lookups.byId.has(dim.chain.id)) {
      throw new Error(`executive-scan: dimension ${dim.id} chain id ${dim.chain.id} not in manifest`);
    }
  }

  const out = template.replace(
    '__DIMENSIONS_JSON__',
    JSON.stringify(dimensions, null, 2),
  );
  fs.writeFileSync(OUT, out, 'utf8');
  console.log(`Wrote ${OUT} (${dimensions.length} dimensions)`);
}

main();
