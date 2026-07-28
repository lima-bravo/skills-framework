# Skill Card Authoring Contract

Machine-readable schema: `schemas/skill-card.v1.json`.  
Canonical registry: `skills-manifest.json` (`id`, `name`, `category`, `color`, `cardType`, `file`).

Every card **must** start with YAML frontmatter. Narrative prose lives in the markdown body.

## Scope: what belongs in this collection

The collection is **mental models plus practitioner methods and reusable protocols** — not a strict mental-model library. Most cards are transferable thinking patterns; a substantial minority (RACI, DORA Metrics, Kanban Method, OKRs, PDCA, and similar) are named methods or protocols. Both are welcome. What isn't welcome is a one-off domain fact or a process step with no transferability beyond its origin context.

## Admission criteria for a new card

Before drafting a new card — model or method — it should pass four tests:

1. **It is a transferable thinking pattern or reusable practice, not a domain fact.** It should apply across multiple industries or situation types, not describe one specific fact about one specific domain.
2. **It has genuine predictive or diagnostic power.** Applying it should change what you'd expect to see or what you'd do next — not just relabel something already obvious.
3. **It has a realistic, specific failure mode.** Not a generic caveat that could be pasted onto any card, but the way this specific model actually gets misapplied in practice.
4. **It is distinct from every existing card.** Write the distinction from the closest existing card(s) in two or three sentences before authoring the full card. If the distinction can't be stated that concisely, the candidate should be merged into an existing card or dropped, not added as a new one.

Card count is not itself a gap signal — a category being smaller than others (Network Effects, Art) does not mean it needs padding. Only add where these four tests are clearly met.

## cardType

| Type | When to use | Body section model |
|------|-------------|-------------------|
| `standard` | Default mental-model card | Five narrative sections (see below) |
| `chain` | Pre-built Chains category | `## Step 1` … `## Step N` |
| `extended` | Extra conceptual sections between Mental Model and Heuristics | Five narrative sections **plus** whitelisted extras (see schema) |

## YAML frontmatter (required)

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

| Field | Rules |
|-------|-------|
| `id`, `name`, `category`, `cardType`, `tagline` | Must match `skills-manifest.json` |
| `connections` | `[{ id, rationale }]` — use manifest numeric `id`; rationale may be empty only for bare link stubs |
| `references` | `[{ title, authorYear, supports? }]` — omit key entirely on chain cards with no refs |

After migration, **`## Connections` and `## References` do not appear in the body.**

## standard / extended — body section order

1. `## Definition`
2. *(extended only: context/disambiguation extras may go here, e.g. "Why This Is Different from X")*
3. `## Mental Model`
4. *(extended only: conceptual deep-dive extras may go here)*
5. `## Practitioner Heuristics`
6. `## Common Failure Modes`
7. `## Worked Example`
8. *(extended only: a trailing closing aside, e.g. "Origin Note", may go here)*

Both extra-section positions (after Definition, after Mental Model) are established practice — use whichever fits the section's content. Section titles must still come from `knownExtendedSections` in the schema.

Header block after frontmatter:

```markdown
# Skill Name

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

Chain frontmatter omits `connections` / `references` when empty.

## Reference line formats

Preferred (title-first):

```markdown
- *Book Title* — Author Name (Year) — how this source supports the card.
```

Also accepted by the parser (author-first, common on Consulting Craft cards):

```markdown
- Author, A. (Year) *Book Title*. Publisher. How it supports the card.
```

Each reference is merged into the build-derived bibliography at `npm run build`. Run `npm run reconcile:refs -- --write` after adding refs to many cards.

## Adding a new skill

1. Create `{Category}/filename.md` with frontmatter + body sections per `cardType`.
2. Append entry to `skills-manifest.json` (next sequential `id`, correct `cardType`).
3. Add backlinks in related cards' `connections:` arrays (manifest id + rationale).
4. Run `npm run build` — validator and count checker must pass.
5. If bibliography changed: `npm run reconcile:refs -- --write`, then `npm run build` again.

## AI agents

Read `schemas/skill-card.v1.json` and this file before creating or editing cards.  
Do not invent new `##` section titles on `standard` cards. On `extended` cards, only use titles listed in the schema's `knownExtendedSections` unless a human flags a schema update.
