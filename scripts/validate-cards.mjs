#!/usr/bin/env node
/**
 * Card structure validator.
 * Step 2.1: warn-only (exit 0). Step 2.4: strict (exit 1 on errors).
 */
import fs from 'node:fs';
import path from 'node:path';
import { REF_DIR, loadManifest, buildLookups } from './lib/manifest.mjs';
import { parseConnectionsFromMd, resolveConnectionTarget } from './lib/connections.mjs';

const STRICT = process.argv.includes('--strict');
const SCHEMA = JSON.parse(
  fs.readFileSync(path.join(REF_DIR, 'schemas/skill-card.v1.json'), 'utf8'),
);

const STANDARD_SECTIONS = SCHEMA.cardTypes.standard.requiredSections;
const STEP_RE = /^Step \d+/i;

function parseSections(md) {
  let text = md.replace(/\n\*Part of[\s\S]*$/i, '').trim();
  const firstH2 = text.search(/^## /m);
  if (firstH2 >= 0) text = text.slice(firstH2);
  const sections = [];
  for (const chunk of text.split(/\n(?=## )/)) {
    const m = chunk.match(/^## ([^\n]+)\n([\s\S]*)/);
    if (!m) continue;
    sections.push({ title: m[1].trim(), body: m[2].trim() });
  }
  return sections;
}

function normalizeText(s) {
  return s
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[–—]/g, '-')
    .trim();
}

function parseTitle(md) {
  const m = md.match(/^# ([^\n]+)/m);
  return m ? m[1].trim() : '';
}

function parseTagline(md) {
  const tag = md.match(/\*\*Tagline:\*\*\s*(.+)/);
  if (tag) return tag[1].trim();
  const italic = md.match(/^\*([^*\n]+)\*/m);
  return italic ? italic[1].trim() : '';
}

function warn(file, msg) {
  console.warn(`WARN  ${file}: ${msg}`);
}

function error(file, msg) {
  console.error(`ERROR ${file}: ${msg}`);
}

function fail(file, msg) {
  if (STRICT) error(file, msg);
  else warn(file, msg);
}

function validateStandardOrExtended(file, cardType, sections) {
  const titles = sections.map((s) => s.title);
  const defIdx = titles.indexOf('Definition');
  const mmIdx = titles.indexOf('Mental Model');
  const heurIdx = titles.indexOf('Practitioner Heuristics');
  const failIdx = titles.indexOf('Common Failure Modes');
  const workIdx = titles.indexOf('Worked Example');
  const connIdx = titles.indexOf('Connections');
  const refIdx = titles.indexOf('References');

  for (const req of STANDARD_SECTIONS) {
    if (!titles.includes(req)) fail(file, `missing required section: ${req}`);
  }

  const order = [defIdx, mmIdx, heurIdx, failIdx, workIdx, connIdx, refIdx];
  if (order.some((i) => i === -1)) return;
  for (let i = 1; i < order.length; i += 1) {
    if (order[i] <= order[i - 1]) {
      fail(file, 'standard sections out of order');
      break;
    }
  }

  if (refIdx !== titles.length - 1) {
    fail(file, '## References must be the last section before footer');
  }

  if (cardType === 'standard') {
    const allowed = new Set(STANDARD_SECTIONS);
    for (const t of titles) {
      if (!allowed.has(t) && !STEP_RE.test(t)) {
        fail(file, `unexpected section on standard card: ${t}`);
      }
    }
  }

  if (cardType === 'extended') {
    const known = new Set(SCHEMA.cardTypes.extended.knownExtendedSections);
    const extras = titles.filter(
      (t) =>
        !STANDARD_SECTIONS.includes(t) &&
        !STEP_RE.test(t) &&
        t !== 'Definition' &&
        t !== 'Mental Model',
    );
    for (const t of extras) {
      if (!known.has(t)) {
        warn(file, `extended section not in schema whitelist: ${t}`);
      }
    }
    if (mmIdx >= 0 && heurIdx >= 0) {
      const between = titles.slice(mmIdx + 1, heurIdx);
      const unexpected = between.filter((t) => !known.has(t));
      for (const t of unexpected) {
        fail(file, `extra section "${t}" must sit between Mental Model and Practitioner Heuristics`);
      }
    }
  }
}

function validateChain(file, sections) {
  const steps = sections.filter((s) => STEP_RE.test(s.title));
  if (steps.length === 0) {
    warn(file, 'chain card has no ## Step N sections (some chains use alternate section names)');
  }
  if (sections.length === 0) fail(file, 'chain card has no ## sections');
}

function main() {
  const manifest = loadManifest();
  const lookups = buildLookups(manifest);
  let warnings = 0;
  let errors = 0;

  const origWarn = console.warn;
  const origError = console.error;
  console.warn = (...args) => {
    warnings += 1;
    origWarn(...args);
  };
  console.error = (...args) => {
    errors += 1;
    origError(...args);
  };

  for (const [file, meta] of Object.entries(manifest.skills)) {
    const full = path.join(REF_DIR, file);
    if (!fs.existsSync(full)) {
      fail(file, 'manifest file missing on disk');
      continue;
    }

    const md = fs.readFileSync(full, 'utf8');
    const title = parseTitle(md);
    const tagline = parseTagline(md);
    const sections = parseSections(md);
    const cardType = meta.cardType ?? 'standard';

    if (normalizeText(title) !== normalizeText(meta.name)) {
      fail(file, `title "${title}" != manifest name "${meta.name}"`);
    }
    if (!tagline) fail(file, 'missing tagline');

    if (cardType === 'chain') validateChain(file, sections);
    else validateStandardOrExtended(file, cardType, sections);

    for (const conn of parseConnectionsFromMd(md)) {
      const { targetId, resolvedBy } = resolveConnectionTarget(
        conn,
        lookups,
        file,
      );
      if (targetId == null) {
        fail(file, `unresolved connection: ${conn.name || conn.raw}`);
      } else if (conn.id == null && !STRICT) {
        warn(file, `connection without id prefix: ${conn.name} (resolved by ${resolvedBy})`);
      }
    }
  }

  console.warn = origWarn;
  console.error = origError;

  console.log(
    `validate-cards: ${Object.keys(manifest.skills).length} cards, ${warnings} warning(s), ${errors} error(s)${STRICT ? ' (strict)' : ' (warn-only)'}`,
  );

  if (STRICT && errors > 0) process.exit(1);
  process.exit(0);
}

main();
