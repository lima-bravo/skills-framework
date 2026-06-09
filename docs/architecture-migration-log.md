# Architecture Migration Log

## Baseline (Step 0.1)

| Metric | Value |
|--------|-------|
| Skills | 262 |
| Categories | 16 |
| Chains | 21 |
| Refs (manifest) | 386 (was 317) |
| Graph connections | 1069 |
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
| 6.1–6.3 | 2026-06-09 | pending | situation-finder generated | situations.json source |

## Next session

**Phase 7** — YAML frontmatter migration (pilot card → per-category batch → chains/extended). See `docs/architecture-migration-plan.md` steps 7.1–7.6.
