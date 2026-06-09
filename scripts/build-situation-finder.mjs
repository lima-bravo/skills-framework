#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadManifest, buildLookups } from './lib/manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const TEMPLATE = path.join(ROOT, 'Skills Reference', 'situation-finder.template.html');
const DATA = path.join(ROOT, 'Skills Reference', 'situations.json');
const OUT = path.join(ROOT, 'docs', 'situation-finder.html');

function hydrateSituations(data, lookups) {
  const { byName, byId } = lookups;
  return data.sections.map((sec) => ({
    label: sec.label,
    situations: sec.situations.map((sit) => ({
      q: sit.keywords,
      label: sit.label,
      skills: sit.skills.map((sk) => {
        let id = sk.id;
        let name = sk.name;
        if (sk.chain || id == null) {
          const hit =
            byName.get(sk.name.toLowerCase()) ??
            [...byName.values()].find(
              (e) => e.name.toLowerCase() === sk.name.toLowerCase(),
            );
          if (hit) {
            id = hit.id;
            name = hit.name;
          } else {
            id = 0;
          }
          return { id, name, tag: sk.tag, chain: true };
        }
        const canon = byId.get(id);
        if (canon) name = canon.name;
        return { id, name, tag: sk.tag, chain: false };
      }),
    })),
  }));
}

function main() {
  const template = fs.readFileSync(TEMPLATE, 'utf8');
  if (!template.includes('__SITUATIONS_JSON__')) {
    throw new Error('template missing __SITUATIONS_JSON__');
  }
  const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
  const manifest = loadManifest();
  const lookups = buildLookups(manifest);
  const sections = hydrateSituations(data, lookups);

  const out = template.replace(
    '__SITUATIONS_JSON__',
    JSON.stringify(sections, null, 2),
  );
  fs.writeFileSync(OUT, out, 'utf8');
  const sitCount = sections.reduce((n, s) => n + s.situations.length, 0);
  console.log(`Wrote ${OUT} (${sections.length} sections, ${sitCount} situations)`);
}

main();
