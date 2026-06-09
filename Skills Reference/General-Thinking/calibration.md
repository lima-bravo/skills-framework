# Calibration
*Being right on any single call is luck. Being right at the rate you predicted is skill.*

**Category:** [General Thinking](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Calibration is the degree to which stated confidence levels match actual outcomes over time. A calibrated person whose 70% predictions come true 70% of the time — and whose 90% predictions come true 90% of the time — has accurate beliefs about their own uncertainty. Calibration is the meta-skill that governs all probabilistic reasoning: without it, confidence figures are feelings labelled as probabilities. The concept originates in meteorological forecasting (Brier scores, 1950s), was formalised in judgment and decision research by Kahneman, Tversky, and Fischhoff, and applied to forecasting practice by Philip Tetlock's superforecaster research.

---

## Mental Model

Picture a betting market where you stake proportionally to your stated confidence. If you say something is 95% likely and it fails, you lose far more than if you had said 60%. This stake-setting discipline forces honesty. A calibrated forecaster doesn't need to know more than anyone else — they need to know *how much* they know. The failure mode in most organisations is not bad evidence but bad confidence: teams treat 60% beliefs as certainties, and 40% uncertainties as facts not worth mentioning. The result is plans built on foundations no one examined.

Calibration is not accuracy on individual calls. Accuracy is about outcomes; calibration is about the relationship between confidence and outcomes across many calls. A calibrated forecaster will be wrong on their 70% calls roughly 30% of the time — and that is correct behaviour, not failure.

---

## Practitioner Heuristics

- **Track predictions in writing.** Calibration cannot exist without a record. State a prediction with a confidence level and a resolution date; log the outcome. Without this, stated confidence is unfalsifiable and will drift toward whatever feels right retrospectively.
- **Distinguish confidence from certainty.** Use the full range: 55%, 65%, 75% are all meaningful and all different. Most people collapse to three positions — "I think so," "pretty sure," "certain" — which makes calibration impossible to measure or improve.
- **Seek disconfirming evidence as a calibration check.** If you cannot name what would change your probability estimate, your stated confidence is probably too high. A strongly held view should have a stated price: "I'd lower this from 80% to 50% if I saw X."
- **Audit your track record on the same class of prediction.** Calibration is domain-specific. You may be well-calibrated on product launch timing and poorly calibrated on hiring decisions. Separate track records by domain.
- **When in doubt, regress toward uncertainty.** Research consistently shows overconfidence as the more common error — most people's 90% calls come true closer to 70% of the time. When you're uncertain whether your confidence is accurate, widen the interval.

---

## Common Failure Modes

**Outcome bias corrupting the record.** Rewriting the memory of prior confidence upward after a correct call, and downward after a wrong one. The fix is written records made before outcomes are known — there is no other reliable defence.

**Domain confusion.** Assuming that good calibration in one area extends to others. Experts are often well-calibrated within their domain and dramatically overconfident outside it. Track records should be domain-specific.

**Calibration as a performance of humility.** Stating low confidence figures to appear appropriately uncertain, rather than to reflect genuine probability. A deliberate underestimate is as miscalibrated as an overestimate — and harder to detect because it reads as modesty.

**Ignoring base rates.** The most common source of miscalibration is starting from inside-view reasoning (what I know about this specific case) rather than outside-view base rates (what happens to cases like this in general). Well-calibrated judgments almost always start with the base rate.

---

## Worked Example

A senior consultant is asked to estimate the probability that a digital transformation programme will deliver its targeted business outcomes within three years. Her gut says 75%. Before committing, she runs two calibration checks:

First, she finds the reference class: comparable transformation programmes at similar-scale organisations in the last decade. The base rate for full delivery within three years is roughly 30%. This immediately creates tension with her 75% estimate.

Second, she reviews her own track record on similar estimates. Looking back at eight comparable programmes where she made predictions, her "70–80% likely" calls came true four out of eight times — 50%, not 75%.

Updated estimate: 40% (base rate adjusted upward for specific factors she can point to, but anchored there rather than at her initial gut). This changes the conversation: the programme is now framed as a bet with meaningful downside probability, not a near-certainty, and the governance is structured accordingly.

---

## Connections

→ [7·Probabilistic Thinking](probabilistic-thinking.md) — calibration is the goal that probabilistic thinking pursues; thinking in distributions is the method, being calibrated is the standard of success
→ [5·Circle of Competence](circle-of-competence.md) — the honest map of your circle is the first step toward calibration; overconfident people draw their circles too large
→ [57·Dunning-Kruger](../Psychology/dunning-kruger.md) — Dunning-Kruger describes the mechanism that produces miscalibration at low competence; calibration is the corrective practice
→ [204·Falsification](../Psychology/falsification.md) — the habit of seeking disconfirming evidence is the practical expression of calibration; a belief you won't test is a belief with infinite stated confidence
→ [206·Base Rate Neglect](../Psychology/base-rate-neglect.md) — the most common source of overconfidence; calibration requires anchoring on base rates before adjusting for specifics
→ [160·Reference Class Forecasting](../Delivery-and-Flow/reference-class-forecasting.md) — the operational technique for anchoring on base rates in project estimation; calibration is why the technique works
→ [196·After-Action Review](../Leadership/after-action-review.md) — the learning cycle that generates the outcome data needed to improve calibration over time
→ [212·Observer Bias](../Psychology/observer-bias.md) — uncorrected observer bias degrades calibration silently; evaluators who systematically favour expected winners build track records that look accurate but are contaminated by their expectations.
→ [218·Business Case Construction](../Business/business-case-construction.md) — a calibrated business case presents ranges that reflect genuine uncertainty rather than false precision designed to be persuasive; calibration is what distinguishes analytical from advocacy documents.
→ [250·KPI Architecture](../Business/kpi-architecture.md) — setting a threshold that triggers real action requires an honest sense of what range of variation is normal noise versus genuine signal; calibration is the cognitive discipline behind threshold design.

---

## References

- *Superforecasting: The Art and Science of Prediction* — Philip E. Tetlock & Dan Gardner (2015) — the empirical evidence for what separates highly calibrated forecasters from the rest; the source of the superforecaster research programme.
- *Thinking, Fast and Slow* — Daniel Kahneman (2011) — the cognitive science of overconfidence; the inside-view/outside-view distinction and systematic underweighting of base rates are the primary mechanisms behind miscalibration.
- *"Knowing with certainty: the appropriateness of extreme confidence"* — Fischhoff, Slovic & Lichtenstein, *Journal of Experimental Psychology: Human Perception and Performance* (1977) — the foundational empirical study establishing systematic overconfidence in probability judgments.
- *"Verification of forecasts expressed in terms of probability"* — Brier, G.W., *Monthly Weather Review* (1950) — introduced the Brier score as a measure of probabilistic forecast accuracy; the mathematical origin of calibration measurement.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
