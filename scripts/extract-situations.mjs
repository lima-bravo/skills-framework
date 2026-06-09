#!/usr/bin/env node
/** One-off: extract situations.json from docs/situation-finder.html */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML = path.join(__dirname, '..', 'docs', 'situation-finder.html');
const OUT = path.join(__dirname, '..', 'Skills Reference', 'situations.json');

const html = fs.readFileSync(HTML, 'utf8');
const m = html.match(/const SECTIONS = (\[[\s\S]*?\n\]);/);
if (!m) throw new Error('SECTIONS array not found');

// eslint-disable-next-line no-new-func
const SECTIONS = new Function(
  `const S = (id, name, tag, chain) => ({ id, name, tag, chain: !!chain }); return ${m[1]}`,
)();

const out = {
  sections: SECTIONS.map((sec) => ({
    label: sec.label,
    situations: sec.situations.map((sit) => ({
      label: sit.label,
      keywords: sit.q,
      skills: sit.skills.map((sk) => ({
        id: sk.chain ? null : sk.id,
        name: sk.name,
        tag: sk.tag,
        chain: !!sk.chain,
      })),
    })),
  })),
};

fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`Wrote ${OUT} (${out.sections.length} sections)`);
