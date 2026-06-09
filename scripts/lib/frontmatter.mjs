import YAML from 'yaml';

export function splitFrontmatter(md) {
  if (!md.startsWith('---\n')) return { frontmatter: null, body: md };
  const end = md.indexOf('\n---\n', 4);
  if (end === -1) return { frontmatter: null, body: md };
  const raw = md.slice(4, end);
  const body = md.slice(end + 5);
  return { frontmatter: raw, body };
}

export function parseFrontmatter(md) {
  const { frontmatter, body } = splitFrontmatter(md);
  if (!frontmatter) return { data: null, body: md };
  try {
    const data = YAML.parse(frontmatter);
    return { data: data && typeof data === 'object' ? data : null, body };
  } catch {
    return { data: null, body: md };
  }
}

export function stringifyFrontmatter(data) {
  return `---\n${YAML.stringify(data, { lineWidth: 0 }).trimEnd()}\n---\n\n`;
}

function normalizeText(s) {
  return String(s ?? '')
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[–—]/g, '-')
    .trim();
}

/**
 * Validate frontmatter against manifest entry.
 * @returns {string[]} error messages
 */
export function validateFrontmatterSync(data, meta, file) {
  const errors = [];
  if (!data || typeof data !== 'object') {
    errors.push('invalid or missing frontmatter object');
    return errors;
  }
  const fields = ['id', 'name', 'category', 'cardType', 'tagline'];
  for (const f of fields) {
    if (data[f] === undefined || data[f] === null || data[f] === '') {
      errors.push(`frontmatter missing ${f}`);
    }
  }
  if (data.id !== meta.id) {
    errors.push(`frontmatter id ${data.id} != manifest id ${meta.id}`);
  }
  if (normalizeText(data.name) !== normalizeText(meta.name)) {
    errors.push(`frontmatter name "${data.name}" != manifest "${meta.name}"`);
  }
  if (data.category !== meta.category) {
    errors.push(`frontmatter category "${data.category}" != manifest "${meta.category}"`);
  }
  if (data.cardType !== meta.cardType) {
    errors.push(`frontmatter cardType "${data.cardType}" != manifest "${meta.cardType}"`);
  }
  if (Array.isArray(data.connections)) {
    for (const c of data.connections) {
      if (!Number.isInteger(c?.id)) errors.push(`connection missing id on ${file}`);
      if (!c?.rationale?.trim()) errors.push(`connection ${c?.id} missing rationale on ${file}`);
    }
  }
  if (Array.isArray(data.references)) {
    for (const r of data.references) {
      if (!r?.title?.trim()) errors.push(`reference missing title on ${file}`);
    }
  }
  return errors;
}

export function hasFrontmatter(md) {
  return md.startsWith('---\n');
}
