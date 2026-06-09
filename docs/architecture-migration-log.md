# Architecture Migration Log

## Baseline (Step 0.1)

| Metric | Value |
|--------|-------|
| Skills | 262 |
| Categories | 16 |
| Chains | 21 |
| Refs (manifest) | 317 |
| Graph connections | 1069 (was 1054 pre id-parser) |
| Plugin skills | 59 |

## Progress

| Step | Date | Commit | Verify | Notes |
|------|------|--------|--------|-------|
| 0.1 | 2026-06-09 | cfddeb8 | build + check:counts | plan + baseline snapshot |
| 0.2 | 2026-06-09 | 3d076d7 | validate:cards stub exits 0 | npm script hooks |
| 1.1 | 2026-06-09 | 34a8eb3 | cardType on all 262 skills | 221 standard, 21 chain, 20 extended |
| 1.2 | 2026-06-09 | c933a42 | AUTHORING.md | CLAUDE.md pointer |
| 2.1 | 2026-06-09 | 213ae68 | warn-only validator | |
| 2.2 | 2026-06-09 | 5b20436 | graph 1065→1069 edges | id-first parser |
| 2.3 | 2026-06-09 | 894e59d | 1715 connections migrated | 247 files |
| 2.4 | 2026-06-09 | 3e80373 | strict in npm run build | |
| 3.1 | 2026-06-09 | 5e03708 | test:parse-skill passes | remark deps |
| 3.2 | 2026-06-09 | e197210 | snapshot:test passes | |
| 3.3–3.4 | 2026-06-09 | 201a1fd | build + snapshot | graph + validator on parse-skill |
| 4.1 | 2026-06-09 | pending | derive:refs runs | ~344 discrepancies — parser + legacy orphans |

## Next session

1. **4.1 commit** — derive-refs report-only (improved ref parser)
2. **4.2** — reconcile: improve ref line parsing; align card ## References with manifest (or `--write` derived refs after audit)
3. **4.3–4.4** — build-time derive; delete `reference-sections.json`
4. **5.x** — generate `_ai-index.md`
5. **6.x** — `situations.json` + situation-finder template
6. **7.x** — YAML frontmatter migration
