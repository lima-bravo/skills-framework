#!/usr/bin/env node
/**
 * Derive manifest.refs from card ## References sections.
 * Report-only by default; --write updates skills-manifest.json refs array.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { REF_DIR, loadManifest, MANIFEST_PATH } from './lib/manifest.mjs';
import { parseSkillMarkdown } from './lib/parse-skill.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WRITE = process.argv.includes('--write');

function normKey(title, authorYear) {
  return `${title}`.toLowerCase().replace(/\s+/g, ' ').trim() + '|' + `${authorYear}`.toLowerCase().trim();
}

function parseRefLine(line) {
  const t = line.trim();
  if (!t.startsWith('-')) return null;
  // - *Title* — Author (Year) — note
  const m = t.match(/^-\s*\*([^*]+)\*\s*(?:—|-)\s*(.+)$/);
  if (!m) return { raw: t };

  const rest = m[2].trim();
  const yearM = rest.match(/^(.+?)\s*\((\d{4}|[^)]+)\)\s*(?:—|-)\s*(.*)$/);
  if (yearM) {
    return {
      title: m[1].trim(),
      authorYear: `${yearM[1].trim()} (${yearM[2].trim()})`,
      note: (yearM[3] || '').trim(),
    };
  }
  const dashM = rest.match(/^(.+?)\s*(?:—|-)\s*(.*)$/);
  if (dashM) {
    return {
      title: m[1].trim(),
      authorYear: dashM[1].trim(),
      note: (dashM[2] || '').trim(),
    };
  }
  return { title: m[1].trim(), authorYear: rest, note: '' };
}

export function deriveRefs(manifest) {
  const derived = new Map(); // key -> { title, authorYear, skills: Map id -> skill }

  for (const [file, meta] of Object.entries(manifest.skills)) {
    const full = path.join(REF_DIR, file);
    if (!fs.existsSync(full)) continue;
    const md = fs.readFileSync(full, 'utf8');
    const { references } = parseSkillMarkdown(md, { includeReferences: true });

    for (const ref of references) {
      if (!ref.title) continue;
      const key = normKey(ref.title, ref.authorYear || '');
      if (!derived.has(key)) {
        derived.set(key, {
          title: ref.title,
          authorYear: ref.authorYear || '',
          skills: new Map(),
        });
      }
      derived.get(key).skills.set(meta.id, {
        id: meta.id,
        name: meta.name,
        color: meta.color,
      });
    }
  }

  const refs = [...derived.values()].map((r) => ({
    title: r.title,
    authorYear: r.authorYear,
    skills: [...r.skills.values()].sort((a, b) => a.id - b.id),
  }));
  refs.sort((a, b) => a.title.localeCompare(b.title));
  return refs;
}

function diffRefs(derived, existing) {
  const dMap = new Map(derived.map((r) => [normKey(r.title, r.authorYear), r]));
  const eMap = new Map(existing.map((r) => [normKey(r.title, r.authorYear), r]));

  let problems = 0;
  for (const [key, d] of dMap) {
    const e = eMap.get(key);
    if (!e) {
      console.error(`MISSING in manifest: ${d.title} — ${d.authorYear}`);
      problems += 1;
      continue;
    }
    const dIds = new Set(d.skills.map((s) => s.id));
    const eIds = new Set((e.skills ?? []).map((s) => s.id));
    for (const id of dIds) {
      if (!eIds.has(id)) {
        console.error(`SKILL missing on ref "${d.title}": skill id ${id}`);
        problems += 1;
      }
    }
    for (const id of eIds) {
      if (!dIds.has(id)) {
        console.error(`EXTRA skill on manifest ref "${d.title}": id ${id} not in card References`);
        problems += 1;
      }
    }
  }
  for (const [key, e] of eMap) {
    if (!dMap.has(key)) {
      console.error(`ORPHAN manifest ref (not in cards): ${e.title} — ${e.authorYear}`);
      problems += 1;
    }
  }
  return problems;
}

function main() {
  const manifest = loadManifest();
  const derived = deriveRefs(manifest);
  console.log(`Derived ${derived.length} refs from cards (manifest has ${manifest.refs.length})`);

  const problems = diffRefs(derived, manifest.refs);
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
