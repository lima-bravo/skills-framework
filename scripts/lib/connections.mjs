/**
 * Parse and resolve ## Connections lines (id-first, name fallback).
 */

function normName(s) {
  return s
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/\s*\([^)]*\)\s*$/, '')
    .trim();
}

/**
 * Parse a Connections section body into connection records.
 * @returns {{ id: number|null, name: string, href: string|null, rationale: string, raw: string, resolvedBy: 'id'|'name'|null }[]}
 */
export function parseConnectionLines(body) {
  const results = [];
  for (const line of body.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('→') && !trimmed.startsWith('-')) continue;
    const content = trimmed.replace(/^[→-]\s*/, '');

    // [142·Name](path) or [**142·Name**](path) or [**Name**](path)
    const linkM = content.match(
      /\[(\*\*)?(\d+)·([^\]*]+)(\*\*)?\]\(([^)]+)\)\s*(?:—|-)\s*(.*)/,
    );
    if (linkM) {
      results.push({
        id: Number(linkM[2]),
        name: linkM[3].trim(),
        href: linkM[5],
        rationale: (linkM[6] || '').trim(),
        raw: line,
        resolvedBy: 'id',
      });
      continue;
    }

    const legacyM = content.match(/\[\*\*([^*]+)\*\*\]\(([^)]+)\)\s*(?:—|-)\s*(.*)/);
    if (legacyM) {
      results.push({
        id: null,
        name: legacyM[1].trim(),
        href: legacyM[2],
        rationale: (legacyM[3] || '').trim(),
        raw: line,
        resolvedBy: null,
      });
      continue;
    }

    const boldM = content.match(/\*\*([^*]+)\*\*\s*(?:—|-)\s*(.*)/);
    if (boldM) {
      results.push({
        id: null,
        name: boldM[1].trim(),
        href: null,
        rationale: (boldM[2] || '').trim(),
        raw: line,
        resolvedBy: null,
      });
    }
  }
  return results;
}

export function resolveConnectionTarget(conn, { byId, byName, byPath }, sourceFile) {
  if (conn.id != null && byId.has(conn.id)) {
    return { targetId: conn.id, resolvedBy: 'id' };
  }

  const name = conn.name;
  let targetId =
    byName.get(name.toLowerCase())?.id ??
    byName.get(normName(name))?.id ??
    null;

  if (targetId == null && conn.href) {
    const normalized = conn.href.replace(/^\.\//, '').split('#')[0];
    const base = normalized.split('/').pop();
    for (const [file, meta] of byPath.entries()) {
      if (file === normalized || file.endsWith('/' + base) || file === base) {
        targetId = meta.id;
        break;
      }
    }
  }

  if (targetId != null) {
    return { targetId, resolvedBy: conn.id != null ? 'id' : 'name' };
  }
  return { targetId: null, resolvedBy: null };
}

export function parseConnectionsFromMd(md) {
  const chunks = md.split(/\n(?=## )/);
  const chunk = chunks.find((c) => c.startsWith('## Connections'));
  if (!chunk) return [];
  const body = chunk.replace(/^## Connections[^\n]*\n/, '');
  return parseConnectionLines(body);
}

export { normName };
