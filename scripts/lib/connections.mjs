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
function parseConnectionContent(content) {
  const idLink = content.match(/\[(\*\*)?(\d+)·([^\]*]+)(\*\*)?\]\(([^)]+)\)/);
  if (idLink) {
    const rest = content.slice(idLink.index + idLink[0].length);
    const dashM = rest.match(/\s*(?:—|-)\s*(.*)/);
    return {
      id: Number(idLink[2]),
      name: idLink[3].trim(),
      href: idLink[5],
      rationale: dashM ? dashM[1].trim() : '',
      resolvedBy: 'id',
    };
  }

  const anyLink = content.match(/\[(?:\*\*)?([^\]*]+)(?:\*\*)?\]\(([^)]+)\)/);
  if (anyLink) {
    const rest = content.slice(anyLink.index + anyLink[0].length);
    const dashM = rest.match(/\s*(?:—|-)\s*(.*)/);
    return {
      id: null,
      name: anyLink[1].replace(/\*\*/g, '').trim(),
      href: anyLink[2],
      rationale: dashM ? dashM[1].trim() : '',
      resolvedBy: null,
    };
  }

  const boldM = content.match(/\*\*([^*]+)\*\*\s*(?:—|-)\s*(.*)/);
  if (boldM) {
    return {
      id: null,
      name: boldM[1].trim(),
      href: null,
      rationale: boldM[2].trim(),
      resolvedBy: null,
    };
  }

  return null;
}

export function parseConnectionLines(body) {
  const results = [];
  for (const line of body.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('→') && !trimmed.startsWith('-')) continue;
    const content = trimmed.replace(/^[→-]\s*/, '');
    const parsed = parseConnectionContent(content);
    if (parsed) results.push({ ...parsed, raw: line });
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
