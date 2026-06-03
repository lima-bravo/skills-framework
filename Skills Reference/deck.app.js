// At runtime, deck.template.html replaces __CAT_COLORS_JSON__ with the manifest's categories object.
// This file is a development reference; the inlined template is the source of truth for the built deck.
const CAT_COLORS = {"General Thinking": "#3B82F6", "Systems": "#0D9488", "Economics": "#16A34A", "Physics & Chemistry": "#EA580C", "Psychology": "#9333EA", "Startups": "#DC2626", "Business": "#475569", "Mathematics": "#4F46E5", "Network Effects": "#CA8A04", "Learning": "#059669", "Art": "#DB2777", "Delivery & Flow": "#0891B2", "Consulting Craft": "#7C3AED", "Pre-built Chains": "#B45309", "Leadership": "#1E40AF"};

let activecat = 'all', query = '';
const CAT_ORDER = Object.keys(CAT_COLORS);

function categoryIndex(category) {
  const i = CAT_ORDER.indexOf(category);
  return i === -1 ? CAT_ORDER.length : i;
}

/** Category order (framework), then name within category — keeps peers together in the grid. */
function compareSkills(a, b) {
  const byCat = categoryIndex(a.category) - categoryIndex(b.category);
  if (byCat !== 0) return byCat;
  return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
}

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function topOverlay() {
  const refs = document.getElementById('refs-overlay');
  const modal = document.getElementById('overlay');
  if (refs?.classList.contains('open')) return 'refs';
  if (modal?.classList.contains('open')) return 'modal';
  return null;
}

function buildFilters() {
  const el = document.getElementById('filters');
  el.replaceChildren();
  const btn = (cat, label, color) => {
    const b = document.createElement('button');
    b.className = 'fbtn' + (cat === 'all' ? ' active' : '');
    b.dataset.cat = cat;
    b.textContent = label;
    if (cat !== 'all' && color) b.style.color = color;
    b.addEventListener('click', () => { activecat = cat; render(); });
    el.appendChild(b);
  };
  const counts = {};
  SKILLS.forEach(s => { counts[s.category] = (counts[s.category] || 0) + 1; });
  btn('all', 'All  ' + SKILLS.length, null);
  CAT_ORDER.forEach(c => {
    if (counts[c]) {
      btn(c, c.replace('Pre-built Chains', '⛓ Chains').replace('Physics & Chemistry', 'Physics/Chem'), CAT_COLORS[c]);
    }
  });
}

function filtered() {
  const q = query.toLowerCase().trim();
  return SKILLS.filter(s => {
    if (activecat !== 'all' && s.category !== activecat) return false;
    if (!q) return true;
    const hay = s.searchText || [s.name, s.tagline, s.preview].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

function render() {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const stats = document.getElementById('stats');
  const fs = filtered().sort(compareSkills);

  document.querySelectorAll('.fbtn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === activecat);
    if (b.dataset.cat !== 'all' && CAT_COLORS[b.dataset.cat]) {
      b.style.background = b.classList.contains('active') ? CAT_COLORS[b.dataset.cat] : '';
      b.style.color = b.classList.contains('active') ? '#fff' : CAT_COLORS[b.dataset.cat];
      b.style.borderColor = b.classList.contains('active') ? CAT_COLORS[b.dataset.cat] : '';
    } else if (b.dataset.cat === 'all') {
      b.style.background = b.classList.contains('active') ? 'var(--hdr-bg)' : '';
      b.style.color = b.classList.contains('active') ? '#fff' : '';
      b.style.borderColor = b.classList.contains('active') ? 'var(--hdr-bg)' : '';
    }
  });

  const catCount = CAT_ORDER.length;
  stats.textContent = query
    ? `${fs.length} skill${fs.length !== 1 ? 's' : ''} match "${query}"`
    : `${fs.length} skill${fs.length !== 1 ? 's' : ''}${activecat !== 'all' ? ' in ' + activecat : ' across ' + catCount + ' categories'}`;

  grid.querySelectorAll('.card').forEach(c => c.remove());
  empty.style.display = fs.length ? 'none' : 'block';

  const frag = document.createDocumentFragment();
  fs.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    const isChain = s.category === 'Pre-built Chains';
    card.innerHTML = `
      <div class="card-accent" style="background:${s.color}"></div>
      <div class="card-body">
        <div class="card-cat" style="color:${s.color}">${esc(s.category)}</div>
        <div class="card-name">${esc(s.name)}</div>
        ${s.tagline ? `<div class="card-tagline">${esc(s.tagline)}</div>` : ''}
        <div class="card-preview">${esc(s.preview)}</div>
      </div>
      <div class="card-footer">
        ${isChain ? '<span class="card-chain-badge">⛓ Decision Chain</span>' : '<span></span>'}
        <span class="card-link">click to expand →</span>
      </div>`;
    card.addEventListener('click', () => openModal(s));
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

function openModal(s) {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  document.getElementById('modal-top').style.background = s.color;
  document.getElementById('modal-cat').style.color = s.color;
  document.getElementById('modal-cat').textContent = s.category;
  document.getElementById('modal-name').textContent = s.name;
  document.getElementById('modal-tagline').textContent = s.tagline || '';
  document.getElementById('modal-body').innerHTML = s.modal;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function closeModal() {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden', 'true');
  if (topOverlay() === null) document.body.style.overflow = '';
}

function buildRefsPanel(filter) {
  const q = (filter || '').toLowerCase();
  const body = document.getElementById('refs-body');
  const cnt = document.getElementById('refs-count');
  const shown = q
    ? REFS_DATA.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.authorYear.toLowerCase().includes(q) ||
        r.skills.some(sk => sk.name.toLowerCase().includes(q)))
    : REFS_DATA;
  cnt.textContent = shown.length + ' source' + (shown.length !== 1 ? 's' : '');
  body.innerHTML = shown.map(r => {
    const pills = r.skills.map(sk =>
      `<span class="ref-skill-pill" data-sid="${sk.id}"
        style="background:${sk.color}1a;color:${sk.color};border-color:${sk.color}55"
      >${esc(sk.name)}</span>`
    ).join('');
    return `<div class="ref-entry">
      <div class="ref-title">${esc(r.title)}</div>
      <div class="ref-author">${esc(r.authorYear)}</div>
      <div class="ref-skills">${pills}</div>
    </div>`;
  }).join('');
}

function openRefs() {
  buildRefsPanel('');
  const overlay = document.getElementById('refs-overlay');
  const panel = document.getElementById('refs-panel');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  panel.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('refs-search').focus();
}

function closeRefs() {
  const overlay = document.getElementById('refs-overlay');
  const panel = document.getElementById('refs-panel');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  panel.setAttribute('aria-hidden', 'true');
  if (topOverlay() === null) document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('overlay')) closeModal();
});

document.getElementById('search').addEventListener('input', debounce(e => {
  query = e.target.value;
  render();
}, 200));

document.getElementById('refs-btn').addEventListener('click', openRefs);
document.getElementById('refs-close').addEventListener('click', closeRefs);
document.getElementById('refs-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('refs-overlay')) closeRefs();
});
document.getElementById('refs-search').addEventListener('input', debounce(e => {
  buildRefsPanel(e.target.value);
}, 200));

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const top = topOverlay();
  if (top === 'refs') closeRefs();
  else if (top === 'modal') closeModal();
});

document.getElementById('refs-panel').addEventListener('click', e => {
  const pill = e.target.closest('.ref-skill-pill');
  if (!pill) return;
  const sid = parseInt(pill.dataset.sid, 10);
  const skill = SKILLS.find(s => s.id === sid);
  if (skill) { closeRefs(); openModal(skill); }
});

document.getElementById('modal-body').addEventListener('click', e => {
  const link = e.target.closest('.skill-link');
  if (!link) return;
  e.preventDefault();
  const sid = parseInt(link.dataset.id, 10);
  const target = SKILLS.find(s => s.id === sid);
  if (target) openModal(target);
});

buildFilters();
render();
