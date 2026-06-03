#!/usr/bin/env node
/** Validate all generated Cowork skills with skills-ref (npx). */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_ROOT = path.join(ROOT, 'plugins');
const REF_DIR = path.join(ROOT, 'Skills Reference');
const MANIFEST_PATH = path.join(REF_DIR, 'skills-manifest.json');
const CONFIG_PATH = path.join(__dirname, 'cowork-skills.config.json');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function slugFromFile(file) {
  return path.basename(file, '.md').replace(/_/g, '-');
}

/**
 * Local structural check: no SKILL.md should contain a repeated H2 heading
 * (regression guard for the duplicate "## Reference cards" build bug).
 */
function checkDuplicateHeadings(dirs) {
  let dupes = 0;
  for (const d of dirs) {
    const file = path.join(d, 'SKILL.md');
    if (!fs.existsSync(file)) continue;
    const headings = (fs.readFileSync(file, 'utf8').match(/^## .+$/gm) || []).map((h) =>
      h.trim(),
    );
    const seen = new Set();
    for (const h of headings) {
      if (seen.has(h)) {
        console.error(`DUP HEADING ${path.relative(ROOT, file)} → "${h}"`);
        dupes += 1;
      }
      seen.add(h);
    }
  }
  if (dupes === 0) console.log('ok no duplicate H2 headings in any SKILL.md');
  return dupes;
}

/**
 * Coverage report: which manifest cards are not represented by any generated
 * skill. A card is "covered" if it is a Pre-built Chain (becomes its own skill)
 * or appears as a source in at least one toolkit.
 */
function reportCoverage() {
  const manifest = readJson(MANIFEST_PATH);
  const config = readJson(CONFIG_PATH);

  const covered = new Set();
  for (const [file, meta] of Object.entries(manifest.skills)) {
    if (meta.category === 'Pre-built Chains') covered.add(file);
  }
  for (const toolkit of config.toolkits || []) {
    for (const source of toolkit.sources || []) covered.add(source);
  }

  const allFiles = Object.keys(manifest.skills);
  const unmapped = allFiles
    .filter((f) => !covered.has(f))
    .map((f) => ({ id: manifest.skills[f].id, name: manifest.skills[f].name, file: f }))
    .sort((a, b) => a.id - b.id);

  const pct = (((allFiles.length - unmapped.length) / allFiles.length) * 100).toFixed(0);
  console.log(
    `\nPlugin coverage: ${allFiles.length - unmapped.length}/${allFiles.length} cards mapped (${pct}%); ${unmapped.length} unmapped.`,
  );
  if (unmapped.length) {
    console.log('Unmapped cards (id · name):');
    for (const u of unmapped) console.log(`  ${u.id}·${u.name}`);
  }
  return unmapped.length;
}

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

// --- Local structural checks (no network) ---
const dupeHeadings = checkDuplicateHeadings(dirs);
reportCoverage();

// --- Schema validation via skills-ref (requires network for npx) ---
let failed = 0;
let skippedSchema = false;
for (const d of dirs) {
  try {
    execSync(`npx --yes skills-ref validate "${d}"`, { stdio: 'pipe' });
    console.log(`ok ${path.basename(d)}`);
  } catch (e) {
    const msg = e.stderr?.toString() || e.message || '';
    if (/getaddrinfo|ENOTFOUND|network|ETIMEDOUT|registry|404 Not Found/i.test(msg)) {
      skippedSchema = true;
      break;
    }
    failed += 1;
    console.error(`FAIL ${d}\n${msg}`);
  }
}

if (skippedSchema) {
  console.log('\nskills-ref schema validation skipped (offline or unavailable).');
} else {
  console.log(`\n${dirs.length - failed}/${dirs.length} valid`);
}

const exitCode = dupeHeadings > 0 || failed > 0 ? 1 : 0;
if (dupeHeadings > 0) {
  console.error(`\n${dupeHeadings} duplicate heading(s) found — build bug regression.`);
}
process.exit(exitCode);
