#!/usr/bin/env node
/**
 * Rewrite Connections lines to id-prefixed format: [142·Name](path)
 */
import fs from 'node:fs';
import path from 'node:path';
import { REF_DIR, loadManifest, buildLookups } from './lib/manifest.mjs';
import { parseConnectionLines, resolveConnectionTarget } from './lib/connections.mjs';

function migrateFile(file, lookups) {
  const full = path.join(REF_DIR, file);
  let md = fs.readFileSync(full, 'utf8');
  const m = md.match(/(## Connections[^\n]*\n)([\s\S]*?)(?=\n## |\n\*Part of|$)/);
  if (!m) return { file, changed: false, lines: 0 };

  const [fullMatch, header, body] = m;
  const lines = body.split('\n');
  let changed = 0;

  const newLines = lines.map((line) => {
    if (!line.trim().startsWith('→')) return line;
    if (/\[\d+·/.test(line)) return line;

    const parsed = parseConnectionLines(line.trim())[0];
    if (!parsed) return line;

    const { targetId } = resolveConnectionTarget(parsed, lookups, file);
    if (targetId == null) {
      console.warn(`  skip unresolved: ${file} :: ${parsed.name}`);
      return line;
    }

    let href = parsed.href;
    if (!href) {
      const target = lookups.byId.get(targetId);
      const sourceDir = path.posix.dirname(file);
      const targetDir = path.posix.dirname(target.file);
      href =
        sourceDir === targetDir
          ? path.posix.basename(target.file)
          : path.posix.relative(sourceDir, target.file);
    }

    const indent = line.match(/^(\s*)/)[1];
    const dash = line.includes(' — ') ? ' — ' : ' - ';
    const rationale =
      parsed.rationale || line.split(/ — | - /).slice(1).join(' — ').trim();
    return `${indent}→ [${targetId}·${parsed.name}](${href})${dash}${rationale}`;
  });

  for (let i = 0; i < lines.length; i += 1) {
    if (newLines[i] !== lines[i]) changed += 1;
  }
  if (changed === 0) return { file, changed: false, lines: 0 };

  const newSection = header + newLines.join('\n');
  md = md.replace(fullMatch, newSection);
  fs.writeFileSync(full, md, 'utf8');
  return { file, changed: true, lines: changed };
}

function main() {
  const manifest = loadManifest();
  const lookups = buildLookups(manifest);
  let files = 0;
  let lines = 0;

  for (const file of Object.keys(manifest.skills)) {
    const r = migrateFile(file, lookups);
    if (r.changed) {
      files += 1;
      lines += r.lines;
      console.log(`  ${file}: ${r.lines} line(s)`);
    }
  }
  console.log(`Done: ${files} files, ${lines} connection line(s) updated`);
}

main();
