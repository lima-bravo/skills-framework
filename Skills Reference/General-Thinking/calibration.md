---
id: 211
name: Calibration
category: General Thinking
cardType: standard
tagline: Being right on any single call is luck. Being right at the rate you predicted is skill.
connections:
  - id: 274
    rationale: calibration is exactly what AI Evaluation Discipline's practice measures for an AI system — whether stated or implied confidence tracks actual correctness, not just raw accuracy.
  - id: 7
    rationale: calibration is the goal that probabilistic thinking pursues; thinking in distributions is the method, being calibrated is the standard of success
  - id: 5
    rationale: the honest map of your circle is the first step toward calibration; overconfident people draw their circles too large
  - id: 57
    rationale: Dunning-Kruger describes the mechanism that produces miscalibration at low competence; calibration is the corrective practice
  - id: 204
    rationale: the habit of seeking disconfirming evidence is the practical expression of calibration; a belief you won't test is a belief with infinite stated confidence
  - id: 206
    rationale: the most common source of overconfidence; calibration requires anchoring on base rates before adjusting for specifics
  - id: 160
    rationale: the operational technique for anchoring on base rates in project estimation; calibration is why the technique works
  - id: 196
    rationale: the learning cycle that generates the outcome data needed to improve calibration over time
  - id: 212
    rationale: uncorrected observer bias degrades calibration silently; evaluators who systematically favour expected winners build track records that look accurate but are contaminated by their expectations.
  - id: 218
    rationale: a calibrated business case presents ranges that reflect genuine uncertainty rather than false precision designed to be persuasive; calibration is what distinguishes analytical from advocacy documents.
  - id: 250
    rationale: setting a threshold that triggers real action requires an honest sense of what range of variation is normal noise versus genuine signal; calibration is the cognitive discipline behind threshold design.
  - id: 227
    rationale: EV calculations are only as good as the probability estimates feeding into them — calibration is the discipline that makes those estimates accurate rather than overconfident.
  - id: 228
    rationale: calibrated probability estimates are the foundation of good priors — Bayesian updating assumes you can assign meaningful likelihoods, which requires calibration to be valid.
  - id: 233
    rationale: tracking whether Fermi estimates land within the expected range is a calibration exercise — it reveals which decomposition habits are systematically biased.
  - id: 246
    rationale: the discipline of stating confidence levels honestly is what keeps interpretation from being smuggled into a situation assessment as fact — calibration is the standard that keeps the fact/interpretation distinction real.
  - id: 214
    rationale: Crawl / Walk / Run relies on calibration at the walk gate — the honesty check on whether 'good enough' thresholds were set before or after seeing the results
references:
  - title: "Superforecasting: The Art and Science of Prediction"
    authorYear: Philip E. Tetlock & Dan Gardner (2015)
    supports: the empirical evidence for what separates highly calibrated forecasters from the rest; the source of the superforecaster research programme.
  - title: Thinking, Fast and Slow
    authorYear: Daniel Kahneman (2011)
    supports: the cognitive science of overconfidence; the inside-view/outside-view distinction and systematic underweighting of base rates are the primary mechanisms behind miscalibration.
  - title: '"Knowing with certainty: the appropriateness of extreme confidence"'
    authorYear: "Fischhoff, Slovic & Lichtenstein, *Journal of Experimental Psychology: Human Perception and Performance* (1977)"
    supports: the foundational empirical study establishing systematic overconfidence in probability judgments.
  - title: '"Verification of forecasts expressed in terms of probability"'
    authorYear: Brier, G.W., *Monthly Weather Review* (1950)
    supports: introduced the Brier score as a measure of probabilistic forecast accuracy; the mathematical origin of calibration measurement.
---

# Calibration

**Category:** [General Thinking](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Calibration is the degree to which stated confidence levels match actual outcomes over time. A calibrated person whose 70% predictions come true 70% of the time — and whose 90% predictions come true 90% of the time — has accurate beliefs about their own uncertainty. Calibration is the meta-skill that governs all probabilistic reasoning: without it, confidence figures are feelings labelled as probabilities. The concept originates in meteorological forecasting — the Brier score (1950) measures forecast accuracy as the mean squared error between stated probabilities and binary outcomes, rewarding confidence that earns its accuracy and penalising both overconfidence and underconfidence equally. It was formalised in judgment and decision research by Kahneman, Tversky, and Fischhoff, and applied to forecasting practice by Philip Tetlock's superforecaster research.

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

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
