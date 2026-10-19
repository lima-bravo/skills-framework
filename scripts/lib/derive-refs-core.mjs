/**
 * Derive raw ref entries from card ## References sections.
 */
import fs from 'node:fs';
import path from 'node:path';
import { REF_DIR } from './manifest.mjs';
import { parseSkillMarkdown } from './parse-skill.mjs';
import { readText } from './read-text.mjs';

export function deriveRefs(manifest) {
  const raw = [];

  for (const [file, meta] of Object.entries(manifest.skills)) {
    const full = path.join(REF_DIR, file);
    if (!fs.existsSync(full)) continue;
    const md = readText(full);
    const { references } = parseSkillMarkdown(md, { includeReferences: true });

    for (const ref of references) {
      if (!ref.title) continue;
      raw.push({
        title: ref.title,
        authorYear: ref.authorYear || '',
        skills: [
          {
            id: meta.id,
            name: meta.name,
            color: meta.color,
          },
        ],
      });
    }
  }

  return raw;
}
