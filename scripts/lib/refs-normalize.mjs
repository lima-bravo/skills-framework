/**
 * Bibliography normalization — fuzzy title matching for merge/diff.
 */

export function cleanTitle(title) {
  return String(title ?? '')
    .replace(/[\u201C\u201D\u2018\u2019]/g, '')
    .replace(/^["']+|["']+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Title before em-dash journal suffix (manifest style). */
export function baseTitle(title) {
  const t = cleanTitle(title);
  const parts = t.split(/\s+[—–-]\s+/);
  return parts[0].trim();
}

/** Fold title to alphanumeric lowercase for grouping. */
export function titleFold(title) {
  return baseTitle(title)
    .toLowerCase()
    .replace(/^the\s+/, '')
    .replace(/[^a-z0-9]+/g, '');
}

/** Extract first 4-digit year from authorYear string. */
export function extractYear(authorYear) {
  const m = String(authorYear ?? '').match(/\b(1[0-9]{3}|20[0-9]{2})\b/);
  return m ? m[1] : '';
}

/**
 * Pick an existing group key for a folded title, or return the fold itself.
 * Merges short titles into longer ones when one is a prefix of the other.
 */
export function resolveGroupKey(fold, groups) {
  if (groups.has(fold)) return fold;

  let best = null;
  let bestLen = 0;
  for (const g of groups.keys()) {
    const shorter = fold.length <= g.length ? fold : g;
    const longer = fold.length > g.length ? fold : g;
    if (longer.startsWith(shorter) && shorter.length >= 6) {
      if (longer.length > bestLen) {
        best = g.length >= fold.length ? g : fold;
        bestLen = longer.length;
      }
    }
  }
  if (best) {
    // Re-key shorter entry under longer fold
    const existing = groups.get(best === fold ? [...groups.keys()].find((k) => k !== fold && (fold.startsWith(k) || k.startsWith(fold))) : best);
    return best;
  }

  for (const g of groups.keys()) {
    if (fold.startsWith(g) && g.length >= 8) return g;
    if (g.startsWith(fold) && fold.length >= 8) {
      // migrate g to fold (longer)
      const entry = groups.get(g);
      groups.delete(g);
      groups.set(fold, entry);
      return fold;
    }
  }
  return fold;
}

function pickCanonicalTitle(titles) {
  const cleaned = titles.map(cleanTitle).filter(Boolean);
  if (!cleaned.length) return '';
  // Prefer manifest-style long titles; tie-break by length
  return cleaned.sort((a, b) => b.length - a.length)[0];
}

function pickCanonicalAuthorYear(entries) {
  const withYear = entries.filter((e) => extractYear(e));
  if (withYear.length) {
    return withYear.sort((a, b) => b.length - a.length)[0];
  }
  return entries.sort((a, b) => b.length - a.length)[0] || '';
}

/**
 * Merge an array of ref records into canonical bibliography entries.
 * @param {{ title: string, authorYear?: string, skills?: {id,name,color}[] }[]} refs
 */
export function mergeBibliography(refs) {
  /** @type {Map<string, { titles: string[], authorYears: string[], skills: Map<number, object> }>} */
  const groups = new Map();

  for (const ref of refs) {
    if (!ref?.title) continue;
    const fold = titleFold(ref.title);
    if (!fold) continue;

    let key = fold;
    // prefix-merge with existing keys
    for (const g of [...groups.keys()]) {
      const shorter = fold.length <= g.length ? fold : g;
      const longer = fold.length > g.length ? fold : g;
      if (longer.startsWith(shorter) && shorter.length >= 6) {
        key = longer;
        if (g !== key && groups.has(g)) {
          const old = groups.get(g);
          groups.delete(g);
          if (!groups.has(key)) groups.set(key, old);
          else {
            const cur = groups.get(key);
            cur.titles.push(...old.titles);
            cur.authorYears.push(...old.authorYears);
            for (const [id, s] of old.skills) cur.skills.set(id, s);
          }
        }
        break;
      }
    }

    if (!groups.has(key)) {
      groups.set(key, { titles: [], authorYears: [], skills: new Map() });
    }
    const g = groups.get(key);
    g.titles.push(cleanTitle(ref.title));
    if (ref.authorYear) g.authorYears.push(ref.authorYear.trim());
    for (const s of ref.skills ?? []) {
      if (s?.id != null) g.skills.set(s.id, s);
    }
  }

  const out = [...groups.values()].map((g) => ({
    title: pickCanonicalTitle(g.titles),
    authorYear: pickCanonicalAuthorYear(g.authorYears),
    skills: [...g.skills.values()].sort((a, b) => a.id - b.id),
  }));
  out.sort((a, b) => a.title.localeCompare(b.title));
  return out;
}

/** Stable match key for diffing merged bibliographies. */
export function bibKey(ref) {
  const year = extractYear(ref.authorYear) || extractYear(ref.title);
  return `${titleFold(ref.title)}|${year}`;
}

/**
 * Diff card-derived bibliography against manifest.
 * @param {{ allowExtraSkills?: boolean, allowManifestOrphans?: boolean }} opts
 */
export function diffBibliography(a, b, opts = {}) {
  const { allowExtraSkills = false, allowManifestOrphans = false } = opts;
  const aMap = new Map(a.map((r) => [bibKey(r), r]));
  const bMap = new Map(b.map((r) => [bibKey(r), r]));
  let problems = 0;

  for (const [key, ar] of aMap) {
    const br = bMap.get(key);
    if (!br) {
      console.error(`MISSING: ${ar.title} — ${ar.authorYear}`);
      problems += 1;
      continue;
    }
    const aIds = new Set(ar.skills.map((s) => s.id));
    const bIds = new Set(br.skills.map((s) => s.id));
    for (const id of aIds) {
      if (!bIds.has(id)) {
        console.error(`SKILL missing on "${ar.title}": id ${id}`);
        problems += 1;
      }
    }
    if (!allowExtraSkills) {
      for (const id of bIds) {
        if (!aIds.has(id)) {
          console.error(`EXTRA skill on "${br.title}": id ${id}`);
          problems += 1;
        }
      }
    }
  }
  if (!allowManifestOrphans) {
    for (const [key, br] of bMap) {
      if (!aMap.has(key)) {
        console.error(`ORPHAN: ${br.title} — ${br.authorYear}`);
        problems += 1;
      }
    }
  }
  return problems;
}

/** Cards ⊆ manifest: every card ref and skill link exists in manifest. */
export function diffDerivedSubset(derived, manifest) {
  return diffBibliography(derived, manifest, {
    allowExtraSkills: true,
    allowManifestOrphans: true,
  });
}
