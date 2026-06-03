---
name: "structure-executive-problem"
description: "Structures ambiguous problems with MECE issue trees and hypothesis-driven consulting. Use for steering committees, problem statements, or issue trees."
metadata:
  plugin: "consulting-craft"
  version: "1.0.0"
  sources: "Consulting-Craft/mece.md,Consulting-Craft/hypothesis-driven.md"
---

# Structure Executive Problem

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. MECE

**Hold in mind:**
Imagine sorting laundry into bins. Mutually exclusive: every sock goes into exactly one bin, never two. Collectively exhaustive: every sock ends up in some bin. A MECE breakdown of "what's driving the revenue miss?" might be: (a) volume, (b) price, (c) mix. There is no fourth, and no item belongs in two. Compare with a non-MECE breakdown: (a) sales team performance, (b) competitive pressure, (c) marketing spend, (d) macroeconomic factors — items overlap (competitive pressure shows up in sales performance), and the breakdown isn't exhaustive (product issues are missing). The first decomposition lets analysis flow; the second confuses it.

**Do:**
- **Start with arithmetic decompositions.** When possible, use identities: revenue = price × volume × mix; cost = fixed + variable; etc. They are guaranteed MECE.
- **For non-arithmetic problems, test exhaustiveness explicitly.** After listing the categories, ask: what's missing? where else could the cause live?
- **Test mutual exclusivity by overlap.** Can a single piece of evidence sit in two categories? If yes, the breakdown isn't MECE.
- **Use 3–5 branches per node.** Below 3, you're missing structure; above 5, you've over-decomposed.
- **MECE is a lens, not a rigid law.** Some real problems resist clean MECE; force-fitting can distort. When MECE is hard, say so and proceed with awareness.

**Avoid:**
- **Politically MECE.** Categories chosen because they map to org charts (sales, product, marketing) rather than the actual problem structure.
- **Over-MECE.** Decomposing to seven levels with 50 leaves produces a tree no one reads.
- **MECE of irrelevant variables.** Perfectly MECE but addressing the wrong question.
- **Failing the collectively-exhaustive test.** A "miscellaneous" bucket is a sign the decomposition isn't complete; investigate what's in it.

### 2. Hypothesis-Driven Consulting

**Hold in mind:**
A doctor with a patient runs a differential diagnosis: hypothesize the most likely conditions, test for each, and update. They do not order every test in the catalogue. A consultant with a client problem should reason similarly: hypothesize the answer ("the cost problem is in procurement, not manufacturing"), define what evidence would confirm or falsify it, and gather that evidence. The "boil the ocean" alternative — collect everything, analyze everything, see what emerges — wastes weeks and frequently produces a deck full of facts without an answer.

**Do:**
- **Write the answer first.** Day 1 of an engagement, write the one-paragraph answer you'd give if forced to. Test against it for the rest of the work.
- **Decompose to sub-hypotheses.** A top-line hypothesis fans into 3–7 sub-hypotheses; each gets a specific test.
- **Choose tests by disconfirmation power.** The most valuable analysis is the one most likely to refute the current hypothesis — not the one most likely to confirm it.
- **Update visibly.** When evidence falsifies a sub-hypothesis, update the issue tree publicly. Clients trust this more than confidence theater.
- **Be willing to land the answer.** Hypothesis-driven work that refuses to commit to an answer is just structured information gathering.

**Avoid:**
- **Confirmation bias.** Hypothesis becomes belief; the workplan only gathers supporting evidence.
- **Hypothesis as conclusion.** Stating the answer first and then refusing to update is intellectual dishonesty in a consulting wrapper.
- **Boil-the-ocean disguise.** "Hypothesis-driven" framing on an engagement that still gathers everything, just slower.
- **Skipping decomposition.** A monolithic hypothesis with no sub-hypotheses cannot be tested incrementally.

## Deliverable format

Produce a markdown document with these sections:

### Problem statement (one sentence)

### MECE issue tree (top level 3–5 branches)

### Key hypotheses to test

### Evidence plan per hypothesis

### What would falsify the leading hypothesis

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [mece](references/mece.md)
- [hypothesis-driven](references/hypothesis-driven.md)

