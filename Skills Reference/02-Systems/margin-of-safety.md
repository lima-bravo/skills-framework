# Margin of Safety
*Build in buffer for what you can't know*

**Category:** [Systems](../index.html#systems) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Margin of safety is the practice of designing systems, decisions, and plans with enough buffer that they remain sound even when estimates are wrong, conditions deteriorate, or unexpected events occur. Benjamin Graham introduced the term in investment (buy assets at a significant discount to intrinsic value, so that estimation errors don't produce losses). Engineers have long used it in structural design (a bridge rated for 10 tonnes load but built to withstand 50 tonnes). The principle is domain-agnostic: wherever you are operating under uncertainty, build in more slack than your best-case analysis requires.

---

## Mental Model

Your model of the future is wrong. Not in the trivial sense that predictions are hard, but in the structural sense that your models systematically underestimate variance, miss tail risks, and exclude the category of events you haven't imagined yet. Margin of safety is a frank acknowledgment of this limitation and a structural response to it. The practitioner's question: *"If my key assumptions are off by 30% in the adverse direction, does this still work?"* If not, the plan is too fragile.

---

## Practitioner Heuristics

- **Set margin of safety in proportion to uncertainty, not optimism.** The less you know, the more buffer you need. A well-understood engineering problem needs a 2x safety factor; an entirely new market needs much more.
- **Apply to time as well as money and resources.** Project timelines are consistently underestimated. Build explicit time buffers, and protect them from being consumed by scope creep early in a project.
- **Identify your single points of failure and build redundancy there.** The margin of safety conversation is most urgent where a single failure is catastrophic. Key person dependency, single supplier, single revenue stream.
- **Distinguish irreversible from reversible decisions.** Irreversible decisions (major capital allocation, team restructuring, technical architecture) require larger margins of safety than reversible ones. When you can course-correct, you need less upfront buffer.
- **Never mistake the absence of a visible risk for the absence of risk.** The risks you cannot see are the ones that margin of safety protects you from. If you could see all risks, you'd hedge specifically; margin of safety is your hedge against the risks on your blind side.

---

## Common Failure Modes

- **Precision theater.** Creating detailed models that produce tight point estimates, then treating those estimates as facts rather than central estimates on a wide distribution. The precision of the model becomes false confidence.
- **Margin of safety consumed by optimism.** Building in a 20% buffer, then allowing scope creep, timeline compression, and budget reductions until the buffer is gone before the project starts.
- **Symmetric treatment of asymmetric risks.** Catastrophic downside risks deserve more margin than proportional upside risks. A plan that can kill the company on the downside should not be analysed the same way as one that merely underperforms.

---

## Worked Example

A startup plans to raise 18 months of runway. Their model shows they'll reach profitability in 14 months. The margin of safety is 4 months — the buffer between model outcome and reality. An experienced CFO asks: what are the key assumptions? Revenue growth at 15% MoM, CAC remaining constant, no major churn events. She runs the adverse scenario: revenue growth drops to 8% MoM in month 6 (consistent with comparable cohorts), CAC rises 20%. Under those assumptions, profitability slips to month 22 — four months past the runway. The margin of safety isn't actually a margin. The company raises for 24 months instead.

---

## Connections

→ [**Probabilistic Thinking**](../01-General-Thinking/probabilistic-thinking.md) — margin of safety is the practical application of probabilistic thinking to plan design.
→ [**Inversion**](../01-General-Thinking/inversion.md) — inversion identifies what could go wrong; margin of safety is the structural response.
→ [**Irreducibility**](irreducibility.md) — some systems cannot be simplified without losing the properties you need; margin of safety is especially important in those cases.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
