# Statistical Variability
*Why percent-complete and single dates are lies the system tells you*

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Statistical variability is the spread of outcomes a process produces under apparently identical conditions. In delivery, completion times for nominally similar items follow long-tailed distributions: the median is much smaller than the mean, and the 95th percentile is much larger than either. The implication: any planning method that uses a single number — percent-complete, point estimate, target date — is suppressing variability that the system will surface anyway. The work of W. Edwards Deming and Walter Shewhart on statistical process control established this in manufacturing; Daniel Vacanti, Troy Magennis, and Reinertsen adapted it to knowledge work.

---

## Mental Model

Roll a six-sided die. The "average" outcome is 3.5, but every actual roll is 1, 2, 3, 4, 5, or 6 — never 3.5. A team's "average cycle time of 5 days" is the same shape: useful as a summary, dangerous as a commitment. The right model is the distribution itself — its shape, its percentiles, and its tails — not its average. Once leadership accepts this, single-date commitments become "ranges with confidence," and accountability conversations get more honest.

---

## Practitioner Heuristics

- **Plot the histogram before reporting the mean.** A glance at the distribution shape changes the conversation faster than any explanation.
- **Use percentile commitments.** "We will deliver inside 18 days for 85% of items" is honest and forecastable; "average 12 days" is misleading.
- **Treat outliers as signal, not noise.** Long-tail items often share a cause (special handling, escalation, missing dependency). Diagnose, don't average.
- **Track variability over time.** A team whose 85th-percentile cycle time is shrinking is improving even if the mean is flat.
- **Distinguish common cause from special cause.** Common-cause variability is system-level (improve the system); special-cause is event-level (investigate the event). Confusing them produces either learned helplessness or chronic firefighting.

---

## Common Failure Modes

- **Reporting only the mean.** The mean discards everything a decision-maker needs.
- **Subtracting variability by adding buffers.** Adding 30% to every estimate hides the variability rather than managing it.
- **Treating common-cause variability as failure.** Punishing teams for variability built into the system erodes trust without changing outcomes.
- **Treating special-cause variability as the new normal.** Letting one-off incidents reset baselines silently inflates expectations.

---

## Worked Example

An operations team is held to a 10-day SLA, computed as the mean of last quarter's cycle times. Performance reports show "97% on average," yet customer complaints are constant. The histogram reveals: median 6 days, 85th percentile 19 days, 95th percentile 34 days. The mean was hiding a long tail. Switching the SLA to "85% within 14 days" — honest about the distribution — both reduces customer surprise and points the team's improvement work at the tail items, where the value is. Within a quarter, the 95th-percentile drops to 22 days; the mean barely moves but the complaints fall sharply.

---

## Connections

→ [**Probabilistic Forecasting**](probabilistic-forecasting.md) — variability is the input to Monte Carlo and other forecast methods.
→ [**Empirical Process Control**](empirical-process-control.md) — variability is why determinism is unavailable in complex work, and why EPC's inspect-and-adapt cycle is necessary.
→ [**Queueing & Wait Time**](queueing.md) — variability is what makes utilization × variability blow up wait time.
→ [**Lead Time vs Cycle Time**](lead-time-cycle-time.md) — variability is why percentile reporting beats mean reporting.
→ [**Goodhart's Law**](../Economics/goodharts-law.md) — single-number commitments become targets and degrade the underlying behavior.
→ [**Regression to the Mean**](../Mathematics/regression-to-the-mean.md) — short-run extremes will revert; don't overreact.

---

## References

- *Out of the Crisis* — W. Edwards Deming (1986).
- *Actionable Agile Metrics for Predictability* — Daniel S. Vacanti (2015).
- *When Will It Be Done?* — Daniel S. Vacanti (2020).

---