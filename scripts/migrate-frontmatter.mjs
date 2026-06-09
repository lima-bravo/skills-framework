#!/usr/bin/env node
/**
 * Migrate skill cards to YAML frontmatter.
 * Usage:
 *   node scripts/migrate-frontmatter.mjs --file Applied-AI/ai-authority-boundaries.md
 *   node scripts/migrate-frontmatter.mjs --category General-Thinking
 *   node scripts/migrate-frontmatter.mjs --cardType standard
 *   node scripts/migrate-frontmatter.mjs --dry-run --category Systems
 */
import fs from 'node:fs';
import path from 'node:path';
import { REF_DIR, loadManifest } from './lib/manifest.mjs';
import { parseSkillMarkdown } from './lib/parse-skill.mjs';
import { hasFrontmatter, stringifyFrontmatter } from './lib/frontmatter.mjs';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const fileArg = args.includes('--file') ? args[args.indexOf('--file') + 1] : null;
const categoryArg = args.includes('--category') ? args[args.indexOf('--category') + 1] : null;
const cardTypeArg = args.includes('--cardType') ? args[args.indexOf('--cardType') + 1] : null;

const SKIP_SECTIONS = new Set(['Connections', 'References']);

function buildBodyFromMd(md, meta) {
  if (hasFrontmatter(md)) {
    const { body } = parseSkillMarkdown(md);
    return body;
  }

  let text = md.replace(/\n\*Part of[\s\S]*$/i, '').trim();

  // Remove tagline line (*...*) immediately after title
  text = text.replace(/^# [^\n]+\n\*[^*\n]+\*\n+/, (m) => m.split('\n')[0] + '\n\n');

  const parts = text.split(/\n(?=## )/);
  const preamble = parts[0].trimEnd();
  const sections = parts.slice(1).filter((chunk) => {
    const title = chunk.match(/^## ([^\n]+)/)?.[1]?.trim();
    return title && !SKIP_SECTIONS.has(title);
  });

  const body = [preamble, ...sections].join('\n').trimEnd();
  const footer =
    '\n\n---\n\n*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*\n';
  return body + footer;
}

function buildFrontmatter(meta, parsed) {
  const fm = {
    id: meta.id,
    name: meta.name,
    category: meta.category,
    cardType: meta.cardType ?? 'standard',
    tagline: parsed.tagline || meta.name,
  };

  if (parsed.connections.length) {
    fm.connections = parsed.connections
      .filter((c) => c.id != null)
      .map((c) => ({
        id: c.id,
        rationale: c.rationale || '',
      }));
  }

  if (parsed.references.length) {
    fm.references = parsed.references
      .filter((r) => r.title)
      .map((r) => {
        const entry = {
          title: r.title,
          authorYear: r.authorYear || '',
        };
        if (r.note || r.supports) entry.supports = r.note || r.supports;
        return entry;
      });
  }

  return fm;
}

function migrateFile(file, meta) {
  const full = path.join(REF_DIR, file);
  const md = fs.readFileSync(full, 'utf8');
  if (hasFrontmatter(md)) return { file, status: 'skip', reason: 'already has frontmatter' };

  const parsed = parseSkillMarkdown(md, { includeReferences: true });
  const fm = buildFrontmatter(meta, parsed);
  const body = buildBodyFromMd(md, meta);
  const out = stringifyFrontmatter(fm) + body;

  if (!dryRun) fs.writeFileSync(full, out, 'utf8');
  return { file, status: dryRun ? 'dry-run' : 'migrated' };
}

function main() {
  const manifest = loadManifest();
  let files = Object.entries(manifest.skills);

  if (fileArg) {
    files = files.filter(([f]) => f === fileArg || f.endsWith(fileArg));
  }
  if (categoryArg) {
    files = files.filter(([f]) => f.startsWith(`${categoryArg}/`));
  }
  if (cardTypeArg) {
    files = files.filter(([, m]) => (m.cardType ?? 'standard') === cardTypeArg);
  }

  let migrated = 0;
  let skipped = 0;
  for (const [file, meta] of files) {
    const r = migrateFile(file, meta);
    if (r.status === 'skip') {
      skipped += 1;
      console.log(`  skip ${file}: ${r.reason}`);
    } else {
      migrated += 1;
      console.log(`  ${r.status} ${file}`);
    }
  }
  console.log(`Done: ${migrated} migrated, ${skipped} skipped${dryRun ? ' (dry-run)' : ''}`);
}

main();
