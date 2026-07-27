---
id: 233
name: Fermi Estimation
category: Mathematics
cardType: standard
tagline: Decompose the unknowable into factors you can estimate
connections:
  - id: 270
    rationale: Fermi estimation sizes the opportunity roughly enough to decide whether staging it is even worth a premium; Real Options Reasoning is what to do once that rough sizing says "maybe, but not yet."
  - id: 0
    rationale: "Fermi estimation is applied first-principles thinking: building up an answer from basic components rather than extrapolating from analogues."
  - id: 227
    rationale: Fermi estimation provides the order-of-magnitude inputs (probabilities and magnitudes) that expected value calculations require when precise data is unavailable.
  - id: 7
    rationale: both involve reasoning under uncertainty; Fermi estimation provides the structure for quantifying what you don't know.
  - id: 160
    rationale: where Fermi estimation builds up from factors, reference class forecasting anchors on base rates from comparable cases; use both as cross-checks.
  - id: 211
    rationale: tracking whether your Fermi estimates land within the expected range is a calibration exercise; it tells you which of your decomposition habits are systematically biased.
  - id: 3
    rationale: prefer the simplest decomposition that captures the dominant factors; adding more factors increases arithmetic complexity without necessarily improving accuracy.
references:
  - title: "How to Solve It: A New Aspect of Mathematical Method"
    authorYear: George Pólya (1945)
    supports: the foundational guide to decomposing problems into tractable sub-problems.
  - title: The Feynman Lectures on Physics
    authorYear: R.P. Feynman, R.B. Leighton & M. Sands (1963)
    supports: order-of-magnitude reasoning and estimation as core physics practice — the same tradition Fermi exemplified and Feynman carried forward as a colleague at Los Alamos.
---

# Fermi Estimation

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Fermi Estimation is a technique for arriving at a reasonable order-of-magnitude answer to a question where precise data is unavailable. Named after physicist Enrico Fermi, who was famous for making accurate estimates from minimal information, it works by decomposing a complex unknown quantity into a product of simpler sub-quantities that can each be estimated independently. The individual estimates carry uncertainty, but their product often lands within a factor of two or three of the true answer — close enough for most practical purposes.

---

## Mental Model

The insight is that uncertainty doesn't mean ignorance. For almost any quantity you might want to estimate, you know more than you think — and the structure of the problem constrains the answer more than it appears. Breaking the question into factors achieves two things: it replaces one opaque uncertainty with several smaller, more tractable ones; and it surfaces which factor dominates the answer, directing attention to the most important unknown.

Fermi estimation is the practitioner's alternative to both false precision (demanding data that doesn't exist) and paralysis (refusing to act without it). A back-of-envelope estimate that is right to within a factor of two is usually enough to decide whether something is worth pursuing, whether a proposal is plausible, or whether a concern is material. The discipline is to commit to an estimate and note where your uncertainty is highest — not to seek false comfort in vague answers.

---

## Practitioner Heuristics

- **Break the question into a multiplication chain.** "How many X are there?" becomes "How many Y are there × what fraction are X × how often does this happen?" Each factor is independently estimable.
- **Estimate from multiple angles and triangulate.** Approach the same question via two different decomposition paths. If both give answers in the same order of magnitude, your confidence increases. If they diverge by a factor of 10+, a key assumption is likely wrong.
- **Identify the dominant factor.** One factor in the chain usually drives most of the uncertainty. Once identified, it tells you where to spend effort: either improve that estimate, or accept it and note the uncertainty range.
- **Use round numbers deliberately.** Working in powers of ten (1, 3, 10, 30, 100…) keeps the arithmetic tractable and avoids false precision. An answer of "roughly 10,000" is more honest than "9,847" when you're estimating from scratch.
- **State your assumptions explicitly.** A Fermi estimate is only as useful as the assumptions that underlie it. Listing them turns the estimate from an assertion into a transparent argument that others can challenge or update.

---

## Common Failure Modes

- **False precision from the decomposition.** Multiplying four estimates together produces a number that looks specific — "approximately 47,000" — but inherits the compounded uncertainty of all four inputs. Quote as an order of magnitude, not a point estimate.
- **Anchoring on the first decomposition.** The first way you break down the problem shapes all the estimates that follow. Generate at least one alternative decomposition as a check.
- **Underestimating systemic factors.** Decompositions tend to handle the average case well but miss tail factors — regulatory risk, market discontinuities, catastrophic failure modes. These require separate treatment.
- **Using Fermi estimates as a substitute for real data.** Fermi estimation is for sizing and prioritising, not for final decisions where accurate data is available and collectable. Know when to upgrade from an estimate to a measurement.
- **Confusing order-of-magnitude with order-of-magnitude error.** An estimate that's right to within 2× is still 2× off. For decisions where a factor of 2 matters, acknowledge the remaining uncertainty explicitly.

---

## Worked Example

A product team wants to estimate the annual revenue opportunity of a new B2B feature before committing to a six-month build. They don't have market research yet.

Decomposition:
- Companies in target segment in the UK: ~15,000 (based on SIC code estimates and ONS data)
- Fraction that fit the ICP (right size, right pain): ~20% → 3,000
- Fraction reachable by current sales motion in 3 years: ~30% → 900
- Conversion rate to paying customers: ~15% → 135 customers
- Average contract value: £8,000/year
- **Estimated annual revenue at maturity: ~£1.1m**

Cross-check: the team knows a competitor charges £6k–£12k and has ~200 UK customers. That implies a market of £1.2m–£2.4m at current penetration. The two estimates agree to within a factor of two. Conclusion: this is a real but modest opportunity — worth a focused team, not a six-month all-hands build.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
