#!/usr/bin/env node
/**
 * Build training-guide.html and skill-primer.html from their markdown sources.
 * Run after build-deck.mjs, or independently.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REF_DIR = path.resolve(__dirname, '..', 'Skills Reference');

// ── Shared page chrome ────────────────────────────────────────────────────────

const HEAD = (title) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} — Skills Framework</title>
<style>
:root{
  --bg:#F1F5F9;--card:#fff;--text:#1E293B;--sub:#64748B;--border:#E2E8F0;
  --hdr-bg:#1E293B;--hdr-muted:#94A3B8;
  --surface-dark:#0F172A;--border-dark:#334155;--text-on-dark:#F1F5F9;
  --accent:#3B82F6;
}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}
#hdr{background:var(--hdr-bg);color:#fff;padding:1.25rem 1.5rem;display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.3);}
#hdr h1{font-size:1.1rem;font-weight:700;letter-spacing:-.01em;white-space:nowrap;}
#hdr span{color:var(--hdr-muted);font-size:.8rem;margin-left:.25rem;}
#hdr-nav{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin-left:auto;}
.nav-btn{display:inline-flex;align-items:center;gap:.35rem;padding:.4rem .9rem;background:var(--hdr-bg);color:var(--hdr-muted);border:1px solid var(--border-dark);border-radius:999px;font-size:.78rem;font-weight:600;text-decoration:none;letter-spacing:.04em;transition:background .15s,color .15s;cursor:pointer;}
.nav-btn:hover{background:var(--border-dark);color:var(--text-on-dark);}
.nav-btn.active{background:var(--accent);color:#fff;border-color:var(--accent);}
#content{max-width:760px;margin:0 auto;padding:2.5rem 1.5rem 4rem;}
h1.page-title{font-size:1.9rem;font-weight:800;line-height:1.2;margin-bottom:.4rem;color:var(--text);}
.page-subtitle{font-size:1rem;font-style:italic;color:var(--sub);margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:2px solid var(--border);}
h2{font-size:1.15rem;font-weight:800;color:var(--text);margin:2.25rem 0 .75rem;padding-bottom:.4rem;border-bottom:1px solid var(--border);}
h3{font-size:.95rem;font-weight:700;color:var(--text);margin:1.5rem 0 .5rem;}
h4{font-size:.85rem;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.06em;margin:1.25rem 0 .4rem;}
p{font-size:.92rem;line-height:1.75;color:#334155;margin-bottom:.85rem;}
ul,ol{margin:.25rem 0 .85rem 1.4rem;}
li{font-size:.92rem;line-height:1.7;color:#334155;margin-bottom:.3rem;}
li p{margin-bottom:.2rem;}
strong{color:var(--text);font-weight:700;}
em{font-style:italic;}
code{background:#E2E8F0;color:#1E293B;padding:.1rem .35rem;border-radius:3px;font-size:.82em;font-family:ui-monospace,monospace;}
hr{border:none;border-top:1px solid var(--border);margin:2rem 0;}
table{width:100%;border-collapse:collapse;margin:.5rem 0 1.25rem;font-size:.85rem;}
th{background:#F8FAFC;text-align:left;padding:.55rem .75rem;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--sub);border-bottom:2px solid var(--border);}
td{padding:.5rem .75rem;border-bottom:1px solid var(--border);color:#334155;vertical-align:top;}
tr:last-child td{border-bottom:none;}
blockquote{border-left:3px solid var(--accent);padding:.4rem .9rem;background:#EFF6FF;border-radius:0 6px 6px 0;margin:.5rem 0 1rem;}
blockquote p{color:#1E3A5F;margin:0;}
.back-link{display:inline-flex;align-items:center;gap:.3rem;font-size:.8rem;color:var(--sub);text-decoration:none;margin-bottom:1.75rem;}
.back-link:hover{color:var(--accent);}
@media(max-width:600px){#content{padding:1.5rem 1rem 3rem;}h1.page-title{font-size:1.4rem;}}
</style>
</head>
<body>`;

const NAV = (activePage) => `<div id="hdr">
  <h1>Skills Framework <span>Reference Deck</span></h1>
  <div id="hdr-nav">
    <a href="index.html" class="nav-btn${activePage === 'deck' ? ' active' : ''}">⊞ Card Deck</a>
    <a href="graph.html" class="nav-btn${activePage === 'graph' ? ' active' : ''}">⬡ Graph</a>
    <a href="training-guide.html" class="nav-btn${activePage === 'guide' ? ' active' : ''}">📖 Guide</a>
    <a href="skill-primer.html" class="nav-btn${activePage === 'primer' ? ' active' : ''}">✉ Primer</a>
  </div>
</div>`;

const FOOT = `</body></html>`;

// ── Markdown → HTML (lightweight, covers the constructs in our guides) ────────

function mdToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let i = 0;
  let inList = null;   // 'ul' | 'ol' | null
  let inTable = false;

  function flushList() {
    if (inList) { out.push(`</${inList}>`); inList = null; }
  }
  function flushTable() {
    if (inTable) { out.push('</tbody></table>'); inTable = false; }
  }

  function inlineHtml(text) {
    // Bold+italic, bold, italic, code, links
    return text
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  }

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip the first h1 — we render it separately as page-title
    if (trimmed.startsWith('# ') && out.length === 0) { i++; continue; }

    // Headings
    if (/^#{1,4} /.test(trimmed)) {
      flushList(); flushTable();
      const level = trimmed.match(/^(#+)/)[1].length;
      const text = trimmed.replace(/^#+\s+/, '');
      // Skip subtitle lines (italic under h1) — rendered separately
      if (level === 1) { i++; continue; }
      const tag = `h${Math.min(level, 4)}`;
      out.push(`<${tag}>${inlineHtml(text)}</${tag}>`);
      i++; continue;
    }

    // HR
    if (/^---+$/.test(trimmed)) {
      flushList(); flushTable();
      // Skip decorative double-hr at end of cards
      i++; continue;
    }

    // Table
    if (trimmed.startsWith('|')) {
      flushList();
      const cells = trimmed.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      if (!inTable) {
        // Check if next line is separator
        const nextLine = (lines[i + 1] || '').trim();
        if (/^\|[-| :]+\|$/.test(nextLine)) {
          out.push('<table><thead><tr>');
          cells.forEach(c => out.push(`<th>${inlineHtml(c)}</th>`));
          out.push('</tr></thead><tbody>');
          inTable = true;
          i += 2; // skip header + separator
          continue;
        }
      }
      out.push('<tr>');
      cells.forEach(c => out.push(`<td>${inlineHtml(c)}</td>`));
      out.push('</tr>');
      i++; continue;
    } else if (inTable) {
      flushTable();
    }

    // Unordered list
    if (/^[-*] /.test(trimmed)) {
      flushTable();
      if (inList !== 'ul') { flushList(); out.push('<ul>'); inList = 'ul'; }
      out.push(`<li>${inlineHtml(trimmed.replace(/^[-*] /, ''))}</li>`);
      i++; continue;
    }

    // Ordered list
    if (/^\d+\. /.test(trimmed)) {
      flushTable();
      if (inList !== 'ol') { flushList(); out.push('<ol>'); inList = 'ol'; }
      out.push(`<li>${inlineHtml(trimmed.replace(/^\d+\. /, ''))}</li>`);
      i++; continue;
    }

    // Blank line
    if (trimmed === '') {
      flushList(); flushTable();
      i++; continue;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushList(); flushTable();
      out.push(`<blockquote><p>${inlineHtml(trimmed.replace(/^> /, ''))}</p></blockquote>`);
      i++; continue;
    }

    // Regular paragraph
    flushList(); flushTable();

    // Collect consecutive non-blank, non-special lines as one paragraph
    const paraLines = [];
    while (i < lines.length) {
      const l = lines[i].trim();
      if (l === '' || /^#{1,4} /.test(l) || /^---+$/.test(l) ||
          /^[-*] /.test(l) || /^\d+\. /.test(l) || l.startsWith('|') ||
          l.startsWith('> ')) break;
      paraLines.push(l);
      i++;
    }
    if (paraLines.length) {
      out.push(`<p>${inlineHtml(paraLines.join(' '))}</p>`);
    }
  }

  flushList();
  flushTable();
  return out.join('\n');
}

function extractTitleAndSubtitle(md) {
  const titleMatch = md.match(/^# (.+)/m);
  const subtitleMatch = md.match(/^\*([^*\n]+)\*/m);
  return {
    title: titleMatch ? titleMatch[1].trim() : 'Guide',
    subtitle: subtitleMatch ? subtitleMatch[1].trim() : '',
  };
}

// ── Build one guide page ──────────────────────────────────────────────────────

function buildGuide(mdFile, outFile, navKey) {
  const md = fs.readFileSync(path.join(REF_DIR, mdFile), 'utf8');
  const { title, subtitle } = extractTitleAndSubtitle(md);
  const bodyHtml = mdToHtml(md);

  const html = [
    HEAD(title),
    NAV(navKey),
    '<div id="content">',
    `<h1 class="page-title">${title}</h1>`,
    subtitle ? `<p class="page-subtitle">${subtitle}</p>` : '',
    bodyHtml,
    '</div>',
    FOOT,
  ].join('\n');

  fs.writeFileSync(path.join(REF_DIR, outFile), html, 'utf8');
  console.log(`Wrote ${outFile} (${(html.length / 1024).toFixed(0)} KB)`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

buildGuide('training-guide.md', 'training-guide.html', 'guide');
buildGuide('skill-primer.md',   'skill-primer.html',   'primer');
