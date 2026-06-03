# Sampling
*How to draw valid inferences from incomplete information*

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Sampling is the process of drawing conclusions about a population from a subset of its members. The core challenges: ensuring the sample is representative (not systematically biased), ensuring the sample is large enough (not dominated by randomness), and ensuring the inference from sample to population is valid given how the sample was drawn. Most analytical decisions in business are made from samples, not from complete population data — understanding sampling quality is essential to interpreting evidence correctly.

---

## Mental Model

The sample is a window onto the population. The size of the window determines how much you can see; the position of the window determines whether what you see is representative. A large, unbiased sample produces high-confidence generalisations. A small or biased sample produces unreliable ones, regardless of how carefully it is analysed.

---

## Practitioner Heuristics

- **Always ask: how was this sample drawn?** Convenience samples (users who respond to an email survey, customers who tweet about you, people willing to participate in an interview) are systematically biased toward people with specific characteristics. Interpret their evidence accordingly.
- **Distinguish self-selection bias.** People who select into your sample are different from those who don't. Survey respondents are more engaged; interview participants are more motivated; app review writers are either very happy or very unhappy. These biases distort every generalization.
- **Scale your confidence to your sample size.** A 10-person interview series can generate rich hypotheses but cannot produce valid frequency estimates. A 1,000-person quantitative survey can produce frequency estimates but not rich qualitative insight. Use each for what it can support.
- **Use stratified sampling for heterogeneous populations.** If your customer base has distinct segments, ensure your sample contains proportionate representation from each. An unweighted sample of a heterogeneous population will over-represent the largest or loudest segment.
- **Plan the analysis before drawing the sample.** If the analysis plan is made after seeing the data, the risk of mining for confirming patterns is high. Know what you'll measure and what result would change your conclusion before sampling.

---

## Common Failure Modes

- **Survivor bias.** Analysing only the surviving members of a population (successful companies, customers who retained, students who graduated) and drawing conclusions that implicitly exclude non-survivors. The non-survivors are where the most important information about failure modes lives.
- **WEIRD samples.** Social science research conducted on Western, Educated, Industrialized, Rich, Democratic populations and generalized to all humans. The WEIRD population is roughly 12% of the world's population and dramatically non-representative on many dimensions.

---

## Worked Example

A startup surveys customers who have been active in the last 30 days about their product satisfaction. Results: 85% satisfied, 10% neutral, 5% dissatisfied. Excellent scores. The question not asked: what is the retention rate among customers who were active 90 days ago? If 60% of 90-day customers have churned, the survey is a satisfaction survey of the customers who stayed — a massively self-selected, happy sample. The 60% who churned had the most informative feedback and weren't surveyed. The correct sampling frame: all customers at day 30 of their cohort, regardless of current activity.

---

## Connections

→ [**Randomness**](randomness.md) — sampling quality determines how much of the variation you observe is signal vs. noise.
→ [**Probabilistic Thinking**](../General-Thinking/probabilistic-thinking.md) — valid probability estimates require valid sampling.
→ [**Confirmation Bias**](../Psychology/confirmation-bias.md) — convenience sampling often produces confirmation bias at the data collection stage.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
