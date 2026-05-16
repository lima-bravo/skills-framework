#!/usr/bin/env node
/** Validate all generated Cowork skills with skills-ref (npx). */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = path.join(__dirname, '..', 'dist', 'cowork');

function findSkillDirs(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'skills') {
        for (const s of fs.readdirSync(p, { withFileTypes: true })) {
          if (s.isDirectory()) acc.push(path.join(p, s.name));
        }
      } else {
        findSkillDirs(p, acc);
      }
    }
  }
  return acc;
}

const dirs = findSkillDirs(OUT_ROOT);
if (!dirs.length) {
  console.error('No skills found. Run npm run build:cowork first.');
  process.exit(1);
}

let failed = 0;
for (const d of dirs) {
  try {
    execSync(`npx --yes skills-ref validate "${d}"`, { stdio: 'pipe' });
    console.log(`ok ${path.basename(d)}`);
  } catch (e) {
    failed += 1;
    console.error(`FAIL ${d}\n${e.stderr?.toString() || e.message}`);
  }
}

console.log(`\n${dirs.length - failed}/${dirs.length} valid`);
process.exit(failed ? 1 : 0);
