---
id: 227
name: Expected Value
category: Mathematics
cardType: standard
tagline: Multiply each outcome by its probability; sum the results
connections:
  - id: 270
    rationale: EV prices a single-shot bet; Real Options Reasoning prices the additional value of deferring that bet until part of the uncertainty resolves — the option premium is what a plain EV calculation can't capture alone.
  - id: 7
    rationale: EV is the quantitative expression of probabilistic thinking; you need both the probability estimate and the magnitude to compute it.
  - id: 211
    rationale: EV calculations are only as good as the probability estimates; calibration is the discipline of making those estimates accurate.
  - id: 228
    rationale: as new evidence arrives, update the probabilities feeding into the EV calculation.
  - id: 12
    rationale: asymmetric payoff structures are the cases where EV dramatically outperforms intuitive comparison.
  - id: 24
    rationale: EV ignores variance; Margin of Safety is the corrective when downside is catastrophic.
  - id: 206
    rationale: the most common source of miscalibrated probabilities feeding into EV calculations.
  - id: 233
    rationale: when precise probabilities and magnitudes are unavailable, Fermi estimation provides the order-of-magnitude inputs EV needs.
  - id: 240
    rationale: standard EV calculation breaks in Black Swan domains; the tail event that dominates outcomes may have near-zero assigned probability, making EV systematically wrong in fat-tailed distributions.
  - id: 238
    rationale: in power law domains, expected value is dominated by tail events — ignoring the tail produces systematically underestimated EVs in fat-tailed distributions.
references:
  - title: "Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts"
    authorYear: Annie Duke (2018)
    supports: the practitioner's guide to EV thinking under uncertainty.
  - title: "Against the Gods: The Remarkable Story of Risk"
    authorYear: Peter L. Bernstein (1996)
    supports: the historical development of probability and expected value as decision tools.
  - title: Thinking, Fast and Slow
    authorYear: Daniel Kahneman (2011)
    supports: systematic deviations from EV reasoning and the psychology behind them.
---

# Expected Value

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Expected value (EV) is the probability-weighted average of all possible outcomes of a decision. For each possible outcome, multiply its value by its probability of occurring, then sum across all outcomes. A decision with a positive expected value is worth taking on average; a negative EV decision destroys value on average. EV is the foundational tool for comparing options under uncertainty.

---

## Mental Model

Most people evaluate decisions by their most likely outcome, not their probability-weighted outcomes. This produces systematic errors: they avoid low-probability, high-magnitude wins (lottery tickets aside, many legitimate bets) and accept high-probability, low-magnitude gains that come bundled with catastrophic downside risk. Expected value shifts the question from "what will probably happen?" to "what is this bet actually worth?" A 10% chance of gaining £1,000,000 and a 90% chance of losing £50,000 has an EV of £55,000 — substantially positive, even though the most likely single outcome is a loss. The discipline is to evaluate the whole distribution, not the modal scenario.

---

## Practitioner Heuristics

- **Calculate EV before comparing options.** List the plausible outcomes, assign rough probabilities (they don't need to be precise), assign magnitudes, multiply and sum. Even a back-of-envelope EV calculation beats intuitive comparison.
- **Size positions to EV, not to confidence.** High-confidence, low-magnitude bets deserve smaller positions than lower-confidence, high-magnitude bets with equivalent EV. Magnitude matters as much as probability.
- **Look for asymmetric EV.** The best decisions are those where downside is bounded and upside is large — you can be wrong often and still come out ahead. Options and experiments often have this property.
- **Distinguish EV from variance.** Two decisions can have the same EV with very different variance. For irreversible or ruinous downsides, apply a variance penalty even when EV looks positive (see Margin of Safety).
- **Beware small-sample reasoning.** EV only pays out reliably over many trials. A single positive-EV decision can still lose; resist updating your process based on single outcomes.

---

## Common Failure Modes

- **Ignoring low-probability catastrophes.** Summing expected values while truncating the tail that contains ruin. A strategy can have a positive EV with a small chance of catastrophic loss — and still be the wrong choice if the catastrophe is irreversible.
- **Miscalibrated probabilities.** The calculation is only as good as the probability estimates going in. Overconfident priors (see Calibration, Base Rate Neglect) produce overstated EVs. Garbage in, garbage out.
- **Treating EV as certain.** Quoting an EV as if it's the expected outcome of a single event rather than an average across many trials. EV describes the long-run; any individual trial can diverge wildly.
- **Ignoring correlation.** Multiple bets with individually positive EV can be correlated — they all lose together. Portfolio EV is not just the sum of individual EVs if the outcomes move together.

---

## Worked Example

A product team is deciding whether to invest three months of engineering work in a new feature. They estimate: 20% chance it drives significant adoption (value: £500k revenue over two years); 50% chance it drives modest adoption (value: £100k); 30% chance it flops (value: £0). The cost is £60k in engineering time.

EV = (0.20 × £500k) + (0.50 × £100k) + (0.30 × £0) − £60k  
   = £100k + £50k + £0 − £60k  
   = **£90k positive EV**

The calculation argues for building. The team should also check: is the 30% flop scenario truly £0, or could it damage customer trust (hidden negative)? And is the 20% upside scenario correlated with other bets the team is already making?

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
