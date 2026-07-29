#!/usr/bin/env node
/**
 * build-chrome.mjs — stamp the canonical nav + footer into every docs page.
 *
 * Runs LAST in the build, after every page (templated, generated, or manual)
 * has been written to docs/. It finds the `<!--NAV-->…<!--/NAV-->` markers and
 * replaces their contents with the single nav-link set from site-chrome.mjs,
 * and replaces the inner text of the first <footer> with the canonical line.
 * This way the header navigation and footer can never drift between pages —
 * each page keeps its own button class + surrounding chrome, but the link set,
 * order, active state, and footer text all come from one source.
 *
 * quick-reference.html is deliberately excluded — it stays print-clean.
 * graph.html has no footer, so the footer step is simply skipped there.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { navHtml, FOOTER_TEXT, FAVICON_LINK } from './site-chrome.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.resolve(__dirname, '..', 'docs');

// filename → { active nav id, per-page button class }
const PAGES = {
  'index.html':            { active: 'home',       cls: 'nav-btn' },
  'situation-finder.html': { active: 'situations', cls: 'nav-btn' },
  'executive-scan.html':   { active: 'exec',       cls: 'nav-btn' },
  'deck.html':             { active: 'deck',       cls: 'graph-btn' },
  'graph.html':            { active: 'graph',      cls: 'back-btn' },
  'training-guide.html':   { active: 'guide',      cls: 'nav-btn' },
  'skill-primer.html':     { active: null,         cls: 'nav-btn' },
};

const NAV_RE = /<!--NAV-->[\s\S]*?<!--\/NAV-->/;
const FOOTER_RE = /(<footer\b[^>]*>)[\s\S]*?(<\/footer>)/;
const FAVICON_RE = /<link rel="icon"[^>]*>/;

let stamped = 0;
for (const [file, { active, cls }] of Object.entries(PAGES)) {
  const p = path.join(DOCS, file);
  if (!fs.existsSync(p)) {
    console.error(`build-chrome: ✗ missing ${file}`);
    process.exitCode = 1;
    continue;
  }
  let html = fs.readFileSync(p, 'utf8');

  if (!NAV_RE.test(html)) {
    console.error(`build-chrome: ✗ no <!--NAV-->…<!--/NAV--> markers in ${file}`);
    process.exitCode = 1;
    continue;
  }
  html = html.replace(NAV_RE, `<!--NAV-->\n    ${navHtml(active, cls)}\n    <!--/NAV-->`);

  // Footer is optional (graph has none); standardize it where present.
  if (FOOTER_RE.test(html)) {
    html = html.replace(FOOTER_RE, `$1${FOOTER_TEXT}$2`);
  }

  // Favicon: replace an existing tag in place, or insert one before </head>.
  if (FAVICON_RE.test(html)) {
    html = html.replace(FAVICON_RE, FAVICON_LINK);
  } else if (html.includes('</head>')) {
    html = html.replace('</head>', `  ${FAVICON_LINK}\n</head>`);
  } else {
    console.error(`build-chrome: ✗ no </head> to stamp favicon into ${file}`);
    process.exitCode = 1;
  }

  fs.writeFileSync(p, html, 'utf8');
  stamped += 1;
  console.log(`build-chrome: ✓ ${file} (nav: ${active ?? 'none'}/${cls})`);
}
console.log(`build-chrome: stamped ${stamped} page(s).`);
