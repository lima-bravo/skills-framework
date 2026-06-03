# Bayesian Updating
*Revise beliefs in proportion to the strength of new evidence*

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Bayesian updating is the process of revising a prior belief (prior probability) when new evidence arrives, producing a revised belief (posterior probability). The update is proportional to the likelihood ratio: how much more probable the evidence is if your hypothesis is true than if it is false. Strong, distinctive evidence produces large updates; weak or ambiguous evidence produces small ones. The posterior from one update becomes the prior for the next.

---

## Mental Model

Most people treat new evidence as either confirming or disconfirming their existing belief — a binary switch. Bayesian updating replaces the switch with a dial. Evidence shifts your belief by an amount proportional to how diagnostic it is. If you believe there's a 30% chance a project will fail, and you learn that three similar projects at similar organisations failed last year, your posterior might be 60% — not certainty, not zero change. The discipline is to ask: "How much should this evidence move me, and in which direction?" rather than "Does this confirm or deny what I already think?"

The key insight is that the same piece of evidence moves beliefs differently depending on your prior. Someone starting at 5% failure probability and someone starting at 50% failure probability who see identical evidence should end up at different posteriors — and both can be right given their different starting information.

---

## Practitioner Heuristics

- **State your prior explicitly before seeing new evidence.** An unstated prior is an unexamined prior. Write down your current probability estimate before the data arrives — this prevents hindsight bias and anchoring.
- **Ask: how diagnostic is this evidence?** Evidence that is equally likely regardless of whether your hypothesis is true provides zero update. Only distinctive evidence — more likely under one hypothesis than another — moves the needle.
- **Update small on weak evidence; update large on strong evidence.** A single data point from a noisy source deserves a small update. A replicable finding from a high-quality study deserves a large one.
- **Don't update to certainty on any single piece of evidence.** Posteriors of 0% or 100% shut off future updating. Maintain residual uncertainty to stay open to disconfirming evidence.
- **Watch for asymmetric updating.** Humans update readily on confirming evidence and discount disconfirming evidence (Confirmation Bias). Apply conscious effort to update on evidence that cuts against your prior.

---

## Common Failure Modes

- **Anchoring too hard on the prior.** Updating too little in response to strong evidence — maintaining beliefs in the face of overwhelming counter-evidence because the prior feels certain. This is the rational sin of under-updating.
- **Over-updating on a single striking data point.** One vivid example (a startup that failed, a strategy that worked) drives the posterior to near-certainty before enough evidence has accumulated. Availability Bias amplifies this.
- **Ignoring base rates in the prior.** Starting with a prior that doesn't reflect base rate reality means all subsequent updates are anchored incorrectly, even if each individual update is well-executed. Get the prior right first.
- **Treating the update as one-directional.** Evidence that cuts against your current hypothesis updates you toward the alternative — many practitioners accept only the updates that align with what they want to believe.
- **Updating on the same evidence twice.** If a piece of evidence is already incorporated into your prior (e.g., you heard about the data point before it was formalised), treating it as new information double-counts it.

---

## Worked Example

A hiring manager believes there's a 40% chance a candidate will succeed in the role (prior). The candidate then performs strongly in a structured technical interview — and historically, candidates who pass this interview at that level succeed 75% of the time, while only 30% of eventual hires who fail the interview succeed.

Likelihood ratio = 75% / 30% = 2.5 — the interview result is 2.5× more likely under "will succeed" than "will fail."

Posterior ≈ 40% × 2.5 / (40% × 2.5 + 60% × 1) = 100 / (100 + 60) ≈ **62%**

The manager's confidence in hiring has increased substantially — but it remains a probability, not a certainty. A subsequent poor reference check should now update downward from 62%, not from the original 40%.

---

## Connections

→ [**Probabilistic Thinking**](../General-Thinking/probabilistic-thinking.md) — Bayesian updating is the dynamic extension of probabilistic thinking: how beliefs evolve as evidence accumulates.
→ [**Base Rate Neglect**](../Psychology/base-rate-neglect.md) — the most common failure in constructing a prior; Bayesian updating cannot correct a prior that ignored base rates.
→ [**Calibration**](../General-Thinking/calibration.md) — calibrated probability estimates are the foundation of good priors; Bayesian updating assumes you can assign meaningful likelihoods.
→ [**Confirmation Bias**](../Psychology/confirmation-bias.md) — the psychological tendency to under-update on disconfirming evidence; the main enemy of good Bayesian practice.
→ [**Expected Value**](../Mathematics/expected-value.md) — Bayesian updating revises the probability inputs that feed expected value calculations.
→ [**Falsification**](../Psychology/falsification.md) — falsificationist thinking is the qualitative version of seeking high-diagnostic evidence; Bayesian updating quantifies the update.
→ [**Hindsight Bias**](../Psychology/hindsight-bias.md) — failure to record the prior before seeing evidence makes it impossible to know whether you updated correctly; hindsight bias retrospectively distorts the prior.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
