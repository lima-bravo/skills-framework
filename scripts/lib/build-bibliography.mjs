import { deriveRefs } from './derive-refs-core.mjs';
import { mergeBibliography } from './refs-normalize.mjs';

/**
 * Build canonical bibliography: card ## References merged with manifest refs.
 * Idempotent when manifest is already reconciled.
 */
export function buildBibliography(manifest) {
  const fromCards = deriveRefs(manifest);
  const fromManifest = (manifest.refs ?? []).map((r) => ({
    title: r.title,
    authorYear: r.authorYear ?? '',
    skills: r.skills ?? [],
  }));
  return mergeBibliography([...fromCards, ...fromManifest]);
}

export function applyBibliography(manifest) {
  manifest.refs = buildBibliography(manifest);
  return manifest;
}
