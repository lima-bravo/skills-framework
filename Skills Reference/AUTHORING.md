# Skill Card Authoring Contract

Machine-readable schema: `schemas/skill-card.v1.json`.  
Canonical registry: `skills-manifest.json` (`id`, `name`, `category`, `color`, `cardType`, `file`).

## cardType

| Type | When to use | Section model |
|------|-------------|---------------|
| `standard` | Default mental-model card | Fixed seven sections (see below) |
| `chain` | Pre-built Chains category | `## Step 1` … `## Step N`; optional Connections / References |
| `extended` | Domain cards with extra conceptual sections between Mental Model and Heuristics | Standard seven sections **plus** whitelisted extras (see schema) |

## YAML frontmatter (Phase 7+)

Machine fields live in a YAML block at the top of each card. Narrative sections stay in the markdown body.

```yaml
---
id: 183
name: AI Authority Boundaries
category: Applied AI
cardType: extended
tagline: Programmatically encoding where AI may not become a decision-maker
connections:
  - id: 184
    rationale: Register 2 in practice
  - id: 185
    rationale: the attack vector that makes Register 3 necessary
references:
  - title: Human Compatible
    authorYear: Stuart Russell (2019)
    supports: foundational case for human oversight
---
```

- `connections` and `references` must match manifest id/name/category/cardType/tagline.
- Omit empty `references:` on chain cards.
- Map trailing reference notes to `supports:`.
- After migration, `## Connections` and `## References` are removed from the body.

## standard / extended — required section order

1. `## Definition`
2. `## Mental Model`
3. *(extended only: additional `##` sections here)*
4. `## Practitioner Heuristics`
5. `## Common Failure Modes`
6. `## Worked Example`
7. `## Connections`
8. `## References`

Header block before `## Definition`:

```markdown
# Skill Name
*Tagline in italics*

**Category:** [Category Name](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
```

Footer:

```markdown
*Part of the [Skills Framework](../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
```

## chain — step sections

```markdown
## Step 1 — Short title

Body…

## Step 2 — …
```

## Connections format (preferred — id-prefixed)

Use the manifest numeric `id` so the graph resolves without fuzzy name matching:

```markdown
→ [142·DORA Metrics](../Delivery-and-Flow/dora-metrics.md) — one-line rationale.
```

Legacy format (still accepted during migration):

```markdown
→ [**DORA Metrics**](../Delivery-and-Flow/dora-metrics.md) — rationale.
```

## References format

```markdown
## References

- *Book Title* — Author Name (Year) — how this source supports the card.
```

Each reference must also appear in the build-derived bibliography (Phase 4+).

## Adding a new skill

1. Create `{Category}/filename.md` following this contract.
2. Append entry to `skills-manifest.json` (next sequential `id`, correct `cardType`).
3. Add backlinks in related cards' `## Connections` sections.
4. Run `npm run build` — validator and count checker must pass.

## AI agents

Read `schemas/skill-card.v1.json` and this file before creating or editing cards.  
Do not invent new `##` section titles on `standard` cards. On `extended` cards, only use titles listed in the schema's `knownExtendedSections` unless a human flags a schema update.
