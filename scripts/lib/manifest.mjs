import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '../..');
export const REF_DIR = path.join(ROOT, 'Skills Reference');
export const MANIFEST_PATH = path.join(REF_DIR, 'skills-manifest.json');

export function loadManifest() {
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

function normName(s) {
  return s
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/\s*\([^)]*\)\s*$/, '')
    .trim();
}

export function buildLookups(manifest) {
  const byPath = new Map();
  const byName = new Map();
  const byId = new Map();
  for (const [file, meta] of Object.entries(manifest.skills)) {
    const entry = { ...meta, file };
    byPath.set(file, meta);
    byId.set(meta.id, entry);
    byName.set(meta.name, entry);
    byName.set(meta.name.toLowerCase(), entry);
    byName.set(normName(meta.name), entry);
  }
  return { byPath, byName, byId };
}

export { normName };
