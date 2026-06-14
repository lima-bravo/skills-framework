#!/usr/bin/env node
/**
 * Card structure validator.
 * Step 2.1: warn-only (exit 0). Step 2.4: strict (exit 1 on errors).
 */
import fs from 'node:fs';
import path from 'node:path';
import { REF_DIR, loadManifest, buildLookups } from './lib/manifest.mjs';
import { resolveConnectionTarget } from './lib/connections.mjs';
import { parseSkillMarkdown } from './lib/parse-skill.mjs';
import { validateFrontmatterSync } from './lib/frontmatter.mjs';

const STRICT = process.argv.includes('--strict');
const SCHEMA = JSON.parse(
  fs.readFileSync(path.join(REF_DIR, 'schemas/skill-card.v1.json'), 'utf8'),
);

const STANDARD_SECTIONS = SCHEMA.cardTypes.standard.requiredSections;
const STEP_RE = /^Step \d+/i;

function normalizeText(s) {
  return s
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[–—]/g, '-')
    .trim();
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

function validateStandardOrExtended(file, cardType, sections, hasFm) {
  const titles = sections.map((s) => s.title);
  const bodyRequired = hasFm
    ? STANDARD_SECTIONS.filter((s) => s !== 'Connections' && s !== 'References')
    : STANDARD_SECTIONS;
  const defIdx = titles.indexOf('Definition');
  const mmIdx = titles.indexOf('Mental Model');
  const heurIdx = titles.indexOf('Practitioner Heuristics');
  const failIdx = titles.indexOf('Common Failure Modes');
  const workIdx = titles.indexOf('Worked Example');
  const connIdx = titles.indexOf('Connections');
  const refIdx = titles.indexOf('References');

  for (const req of bodyRequired) {
    if (!titles.includes(req)) fail(file, `missing required section: ${req}`);
  }

  if (hasFm) {
    if (connIdx !== -1) fail(file, '## Connections must not appear in body when frontmatter present');
    if (refIdx !== -1) fail(file, '## References must not appear in body when frontmatter present');
  } else {
    for (const req of ['Connections', 'References']) {
      if (!titles.includes(req)) fail(file, `missing required section: ${req}`);
    }
  }

  const order = hasFm
    ? [defIdx, mmIdx, heurIdx, failIdx, workIdx]
    : [defIdx, mmIdx, heurIdx, failIdx, workIdx, connIdx, refIdx];
  if (order.some((i) => i === -1)) return;
  for (let i = 1; i < order.length; i += 1) {
    if (order[i] <= order[i - 1]) {
      fail(file, 'standard sections out of order');
      break;
    }
  }

  if (!hasFm && refIdx !== titles.length - 1) {
    fail(file, '## References must be the last section before footer');
  }

  if (cardType === 'standard') {
    const allowed = new Set(
      hasFm
        ? STANDARD_SECTIONS.filter((s) => s !== 'Connections' && s !== 'References')
        : STANDARD_SECTIONS,
    );
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

function validateChain(file, sections, frontmatter) {
  const steps = sections.filter((s) => STEP_RE.test(s.title));
  if (steps.length === 0 && !frontmatter?.skipStepValidation) {
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
    if (!md.startsWith('---\n')) {
      fail(file, 'missing YAML frontmatter (Phase 7 required)');
      continue;
    }
    const parsed = parseSkillMarkdown(md, { includeReferences: true });
    const title = parsed.title;
    const tagline = parsed.tagline;
    const sections = parsed.allSections;
    const cardType = meta.cardType ?? 'standard';
    const hasFm = parsed.frontmatter != null;

    if (hasFm) {
      for (const msg of validateFrontmatterSync(parsed.frontmatter, meta, file)) {
        fail(file, msg);
      }
      if (cardType !== 'chain' && !parsed.connections.length) {
        fail(file, 'frontmatter card missing connections');
      }
      if (cardType !== 'chain' && !parsed.references?.length) {
        fail(file, 'frontmatter card missing references');
      }
    }

    if (normalizeText(title) !== normalizeText(meta.name)) {
      fail(file, `title "${title}" != manifest name "${meta.name}"`);
    }
    if (!tagline) fail(file, 'missing tagline');

    if (cardType === 'chain') validateChain(file, sections, parsed.frontmatter);
    else validateStandardOrExtended(file, cardType, sections, hasFm);

    for (const conn of parsed.connections) {
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
