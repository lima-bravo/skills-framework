# Archived one-off migration scripts

These scripts completed the architecture migration (Phases 1–7). They are kept for audit and emergency re-runs only — **do not use on a current tree** unless you know what you are doing.

| Script | Phase | Purpose |
|--------|-------|---------|
| `add-card-type.mjs` | 1 | Added `cardType` to all manifest entries |
| `migrate-connections.mjs` | 2 | Rewrote `## Connections` lines to id-prefixed format |
| `extract-situations.mjs` | 6 | Extracted `situations.json` from legacy HTML |
| `migrate-frontmatter.mjs` | 7 | Migrated machine fields into YAML frontmatter |

Run from repo root:

```bash
node scripts/archive/migrate-frontmatter.mjs --help   # see file header for flags
```

Active build tooling lives in `scripts/` and `scripts/lib/`.
