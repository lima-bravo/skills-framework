# Regression to the Mean
*Extreme outcomes tend to moderate over time*

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Regression to the mean is the statistical phenomenon where extreme values in a sample are followed by values closer to the average. If a student scores in the 99th percentile one week, their next score will, on average, be lower — not because their ability changed, but because the 99th percentile result included an unusually good run of luck. Similarly, a company with an exceptionally good quarter, a city with an unusually high crime year, or an athlete with a career-best performance will tend toward more average results in subsequent periods.

---

## Mental Model

Every outcome has two components: a stable component (underlying quality or ability) and a random component (luck, noise). Extreme outcomes are extreme precisely because the random component was extreme in that instance. Since the random component has no memory, subsequent measures regress toward the stable component — the mean of the underlying distribution. Failing to account for this leads to misinterpreting natural regression as causal change.

---

## Practitioner Heuristics

- **Before attributing a change to your action, check whether regression to the mean explains it.** Hired a new sales manager after a terrible quarter; the next quarter improved. Did the manager cause the improvement, or was the terrible quarter partly an extreme low that would have moderated anyway?
- **Reward sustained performance, not single-period extremes.** Individual-period top performers often regress; multi-period top performers are more likely to be genuine outliers. Hire and promote based on sustained track record.
- **In investment, be sceptical of recent extreme performers.** A fund that has produced exceptional returns for two years is more likely to revert toward the mean than continue to outperform — unless there is evidence of a structural advantage that produced the returns.
- **Avoid the intervention trap.** When a bad outcome triggers an intervention, the outcome was likely to improve anyway (regression). The intervention appears to have worked, creating a false belief in its effectiveness. Require proper control conditions before attributing improvement to an intervention.
- **Mean reversion is statistical, not deterministic.** Regression to the mean says the distribution of future outcomes is centerd on the mean — not that any specific future outcome will equal the mean. The variance around the mean is just as important as the central tendency.

---

## Common Failure Modes

- **Punishing success and rewarding failure through regression misattribution.** If the top performers are praized and regress, while the bottom performers are criticized and improve, the apparent lesson (praise makes you worse, criticism makes you better) is backwards. Both effects are regression to the mean.
- **Confusing mean reversion with equilibrium return.** In markets, the mean to which things revert is not always the historical average — it may be a changing fundamental value.

---

## Worked Example

A school introduces a motivational intervention for students who scored exceptionally poorly on a test. The next test, those students score significantly better on average. The school concludes the intervention worked. A statistical analysis reveals that students who scored in the bottom 5% of a test would, on average, score higher on a retest regardless of any intervention — regression to the mean. This doesn't mean the intervention was worthless; it means the design doesn't prove it worked. A control group of equally low-scoring students who did not receive the intervention would have shown similar improvement.

---

## Connections

→ [**Probabilistic Thinking**](../General-Thinking/probabilistic-thinking.md) — regression to the mean is a statistical property that should inform probability estimates about future performance.
→ [**Anchoring**](../Psychology/anchoring.md) — recent extreme performance anchors expectations in a way that regression to the mean will frustrate.
→ [**Availability Bias**](../Psychology/availability-bias.md) — vivid recent extreme outcomes are over-available and lead to over-attribution of the extreme performance to stable underlying causes.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
