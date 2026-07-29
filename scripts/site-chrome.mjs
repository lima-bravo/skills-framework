// site-chrome.mjs — single source of truth for the docs site chrome (nav + footer).
// Consumed by build-chrome.mjs, which stamps it into every docs page so the
// header navigation and footer can never drift between pages again.

export const NAV = [
  { id: 'home',       href: 'index.html',            icon: '🏠', label: 'Home' },
  { id: 'situations', href: 'situation-finder.html', icon: '🔍', label: 'Situations' },
  { id: 'deck',       href: 'deck.html',             icon: '⊞', label: 'Card Deck' },
  { id: 'exec',       href: 'executive-scan.html',   icon: '⊛', label: 'Exec Scan' },
  { id: 'graph',      href: 'graph.html',            icon: '⬡', label: 'Graph' },
  { id: 'guide',      href: 'training-guide.html',   icon: '📖', label: 'Guide' },
];

// Render the canonical nav-link set. `cls` is the per-page button class
// (nav-btn on content pages, graph-btn on the deck, back-btn on the graph),
// so each page keeps its own styling while sharing one link set + order.
export function navHtml(activeId = null, cls = 'nav-btn') {
  return NAV
    .map((n) => {
      const on = n.id === activeId;
      return `<a href="${n.href}" class="${cls}${on ? ' active' : ''}"${on ? ' aria-current="page"' : ''}>${n.icon} ${n.label}</a>`;
    })
    .join('\n    ');
}

export const FOOTER_TEXT = '© 2026 J.L. Bonebakker · Focus2Flow B.V.';

// Single source of truth for the site favicon, stamped into every page's
// <head> by build-chrome.mjs. SVG-only by design — see docs/favicon.svg.
export const FAVICON_LINK = '<link rel="icon" type="image/svg+xml" href="favicon.svg">';
