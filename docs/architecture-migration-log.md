# Architecture Migration Log

## Baseline (Step 0.1)

| Metric | Value |
|--------|-------|
| Skills | 262 |
| Categories | 16 |
| Chains | 21 |
| Refs (manifest) | 317 → 386 → **391** |
| Graph connections | 1069 → **1072** |
| Plugin skills | 59 |

## Progress

| Step | Date | Commit | Verify | Notes |
|------|------|--------|--------|-------|
| 0.1–0.2 | 2026-06-09 | cfddeb8, 3d076d7 | build pass | baseline + script stubs |
| 1.1–1.2 | 2026-06-09 | 34a8eb3, c933a42 | cardType on 262 skills | AUTHORING.md |
| 2.1–2.4 | 2026-06-09 | 213ae68–3e80373 | strict validate in build | id connections migrated |
| 3.1–3.4 | 2026-06-09 | 5e03708–201a1fd | snapshot:test | remark parse-skill |
| 4.1–4.4 | 2026-06-09 | 4c319dd–d061309 | derive:refs 0 drift | 386 refs; reference-sections.json removed |
| 5.1–5.3 | 2026-06-09 | 3750dc7 | generate-ai-index in build | preamble + clusters split |
| 6.1–6.3 | 2026-06-09 | step-6.x | situation-finder generated | situations.json source |
| 7.1 | 2026-06-09 | a1260de | build pass | frontmatter schema + validator prep |
| 7.2 | 2026-06-09 | af7201c | snapshot:test | pilot ai-authority-boundaries |
| 7.3 | 2026-06-09 | 64190f6–5cc29d7 | 14 folder commits | 221 standard cards |
| 7.4a–c | 2026-06-09 | 1d35efd–341ee18 | all 262 have `---` | chains + extended; frontmatter required |
| 7.4d | 2026-06-09 | 3e5de6c | derive:refs 0 drift | refs 386 → 391 after reconcile |
| 7.5 | — | skipped | — | D1=Option A: manifest keeps full fields |
| 7.6 | 2026-06-09 | step-7.6 | full verify | docs + archive migration scripts |

## End state (Phase 7 complete)

- **262/262** cards use YAML frontmatter for machine fields (`connections`, `references`, metadata).
- Narrative sections remain markdown body per `cardType`.
- Build pipeline: deck → graph → guides → situation-finder → validate:cards --strict → generate-ai-index → check-counts.
- One-off scripts archived under `scripts/archive/`.

## Out of scope (future work)

- Manifest slim-down (Recommendation 7 Option B / Step 7.5).
- Generated `docs/index.html`, `executive-scan.html`, `quick-reference.html`.
- SQLite / content-graph backend (Recommendation 8).
