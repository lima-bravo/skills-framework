# Skills Framework — AI Index
<!-- Machine-readable orientation file. Designed for minimal token cost. -->
<!-- GENERATED_HEADER -->

## What this framework is

A library of mental model cards, each as a standalone markdown file. Cards follow a fixed 6-section structure (Definition · Mental Model · Practitioner Heuristics · Common Failure Modes · Worked Example · Connections). Skills connect to each other via the Connections section and a pre-computed graph. Pre-built Chains are multi-model reasoning sequences for specific decisions.

**Primary use:** Surface the right model(s) for a situation, then apply structured reasoning through heuristics and failure modes.

---

## File navigation

| File | Purpose |
|---|---|
| `skills-manifest.json` | Canonical registry: all skills with id, name, category, file path, hex color |
| `docs/deck.html` | Interactive card deck (browser). Deep-link: `deck.html?open=ID` or `?q=text` |
| `docs/graph.html` | Connection graph — shows how models relate. Best discovery entry point. |
| `docs/situation-finder.html` | Situation-to-skill matcher |
| `training-guide.md` | How to use the framework: tiers, chaining, worked scenarios |
| `skill-primer.md` | Short guide for first-time readers of a single card |
| `{Category}/filename.md` | Individual skill cards — see inventory below |

---

## How to use

1. **For a specific situation:** Check `docs/situation-finder.html` first.
2. **For a topic or keyword:** Search `docs/deck.html?q=your+term` or grep the markdown files.
3. **For a deep read:** Read a card's **Mental Model** paragraph first, then **Practitioner Heuristics**. Skip Definition if the concept is familiar.
4. **For chaining models:** Use a Pre-built Chain card or consult `training-guide.md` for manual chaining patterns.
5. **For connections:** Each card's `## Connections` section names related models. The graph at `docs/graph.html` shows the full network.

---
