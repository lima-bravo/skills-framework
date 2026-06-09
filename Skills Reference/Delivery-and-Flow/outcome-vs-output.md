# Outcome vs Output
*Measure what changed for the customer, not what shipped*

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

**Output** is what a team produces: features, decks, reports, migrations, deployments. **Outcome** is what changes in the world as a result: customer behaviour shifts, costs drop, decisions get made, revenue moves. Most operating models reward outputs (they're measurable, attributable, and visible) and quietly ignore outcomes (slow to materialize, multi-causal, hard to assign credit for). The mismatch produces "feature factories" — organizations that ship constantly without producing change. The framing was sharpened by Josh Seiden (*Outcomes Over Output*, 2019), Marty Cagan (*Inspired*, 2008), and the OKR canon (Andy Grove, John Doerr).

---

## Mental Model

A weight-loss program. Output: meals cooked, hours exercised, miles run. Outcome: weight, body composition, blood markers. Both matter, but the output is in service of the outcome. Sustaining output without outcome — six months of training with no health change — is a signal to change the approach, not to celebrate the discipline. Software teams routinely ship the equivalent of "more meals cooked" and treat the increased volume as progress. The outcome question — "did anything change for the customer?" — is the disciplining check.

---

## Practitioner Heuristics

- **State outcome before output.** "Reduce signup abandonment from 14% to 8%" is an outcome; "ship the new onboarding flow" is an output. The outcome justifies the output.
- **Set leading-indicator outcomes.** Many outcomes lag by months. Use intermediate behaviour change as the visible target — "first-week activations" rather than 12-month retention.
- **Stop work that ships outputs without moving outcomes.** This is the hardest discipline. Killing an in-flight, on-budget initiative because the outcome metric hasn't moved is the test of whether outcome thinking is real.
- **Use outcome language in OKRs.** Key Results should be outcomes; initiatives are the outputs that attempt to produce them.
- **Pair with cost of delay.** An output that doesn't shift the outcome metric has zero cost of delay; pulling it from the queue is free.

---

## Common Failure Modes

- **Outcomes that are actually outputs.** "Ship five major features" wearing outcome clothing — there is no customer or business behaviour stated.
- **Outcomes too distant to act on.** "Increase NPS by 10" with no leading indicator gives no actionable feedback during the quarter.
- **Output worship at the executive level.** When leadership celebrates "shipped 23 features," teams optimize for ship-count regardless of impact.
- **Attribution paralysis.** Refusing to claim outcome progress because attribution is multi-causal leaves teams with nothing to learn from.

---

## Worked Example

A B2B SaaS product team is praised internally for shipping 14 major features in a year. The outcome question — what changed for customers? — surfaces awkward data: activation rate flat, retention flat, expansion revenue flat. The next planning cycle reframes the goal: lift activation from 41% to 55%. Of the 14 candidate initiatives in the queue, only 3 plausibly affect activation. The other 11 are deferred or killed. The team ships fewer features in the next two quarters but moves activation to 51%; the team is then granted explicit license to keep choosing fewer outputs and bigger outcome moves.

---

## Connections

→ [**OKRs**](okrs.md) — the canonical structure for stating outcomes vs the outputs that pursue them.
→ [**Feature Factory**](feature-factory.md) — the diagnostic for organizations addicted to output.
→ [**Kill Criteria**](kill-criteria.md) — outcome thinking forces stopping rules.
→ [**Value Realization**](../Business/value-realization.md) — outcome-vs-output thinking applied to a strategic investment after approval: did the promised benefit actually land, not just the activity that was supposed to produce it?
→ [**KPI Architecture**](../Business/kpi-architecture.md) — the system-design discipline that keeps a measurement set weighted toward outcome and driver metrics rather than activity counts.
→ [**Build-Measure-Learn**](../Startups/build-measure-learn.md) — outcomes are the "measure" in the loop.
→ [**Goodhart's Law**](../Economics/goodharts-law.md) — output metrics become targets and degrade the underlying outcome.
→ [**Empirical Process Control**](empirical-process-control.md) — EPC's inspection criterion should be outcome, not output; a sprint review that only asks "did we ship?" rather than "did the metric move?" is EPC in form but not function.
→ [**Growth Barriers**](../Business/growth-barriers.md) — a growth team shipping features while the binding constraint goes unaddressed is the canonical outcome-vs-output failure in a growth context.

---

## References

- *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success* — Josh Seiden (2019).
- *Escaping the Build Trap* — Melissa Perri (2018).
- *Inspired: How to Create Tech Products Customers Love* — Marty Cagan (2008; 2nd ed. 2017).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
