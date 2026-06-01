---
name: "measure-delivery"
description: "Defines delivery and flow metrics, variability, and probabilistic forecasts. Use for dashboards, predictability, SLA design, or executive reporting."
metadata:
  plugin: "delivery-and-flow"
  version: "1.0.0"
  sources: "Delivery-and-Flow/dora-metrics.md,Delivery-and-Flow/flow-metrics.md,Delivery-and-Flow/statistical-variability.md,Delivery-and-Flow/probabilistic-forecasting.md,Delivery-and-Flow/reference-class-forecasting.md"
---

# Measure Delivery

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. DORA Metrics

**Hold in mind:**
DORA is a balanced scorecard for delivery. Throughput is captured by deployment frequency and lead time for changes; stability is captured by change failure rate and mean time to restore. The pairing is the point: a team that ships fast but breaks things often is not high-performing, and a team that is rock-solid but ships quarterly is not either. The four metrics together resist the gaming that any single one would invite. They are also the rare delivery metrics that translate directly to executive language — "we deploy 30 times a day; recovery time when something breaks is under an hour" lands without context.

**Do:**
- **Measure all four; report all four.** Subsets distort. Lead time without change failure rate rewards recklessness; change failure rate without deployment frequency rewards paralysis.
- **Distinguish elite/high/medium/low bands.** The published bands (e.g. deploys multiple times per day vs once per month) give immediate context; absolute numbers without context confuse.
- **Use the metrics as a diagnostic, not a stack rank.** Comparing teams whose products differ in regulation or risk profile is misleading; compare a team to itself over time.
- **Make lead time for changes specific.** "Time from code commit to running in production" is the canonical definition; ambiguity here invites gaming.
- **Pair with reliability data.** SLOs / error budgets give the runway to deploy frequently without degrading stability.

**Avoid:**
- **Gaming deployment frequency.** Trivial config-only deploys count as deployments. The metric drifts upward without underlying improvement.
- **Reporting only throughput.** Leadership praises lead-time improvement; stability degrades quietly because no one is reporting change failure rate.
- **Treating MTTR as the same as MTBF.** Mean time to restore is a measure of resilience under failure, not of failure rate itself.
- **Benchmarking against external bands without context.** A bank's regulated payment system is not directly comparable to a SaaS marketing site.

### 2. Flow Metrics

**Hold in mind:**
If DORA is the speedometer, flow metrics are the dashboard. Flow Distribution shows where the gas is going; Flow Load shows engine strain; Flow Velocity shows output; Flow Time shows responsiveness; Flow Efficiency shows mechanical health. Critically, Flow Distribution makes visible the proportion of capacity spent on features vs. defects, debt, and risks — a number leadership rarely tracks and is usually shocked by. The framing gives portfolio leaders a stable lens to compare value streams over time without surrendering operational autonomy to teams.

**Do:**
- **Start with Flow Distribution.** It changes the conversation faster than any other metric: "we are spending 70% on features and 5% on debt — and wonder why incidents are rising."
- **Track at the value-stream level, not the team level.** Aggregating across a value stream avoids local optimization and reveals end-to-end behaviour.
- **Pair Velocity with Time and Efficiency.** Velocity alone invites gaming with smaller items; Time and Efficiency anchor it.
- **Trend, don't snapshot.** A single reading is noise. A six-month trend on each metric is the unit of insight.
- **Make Flow Load visible to portfolio committees.** Over-loaded value streams produce predictable failures; visible Flow Load makes scarcity arguments concrete.

**Avoid:**
- **Treating Flow Distribution as a quota.** Once leadership writes "20% debt" into policy, teams classify everything to fit. The metric is for visibility, not for compliance.
- **Mixing flow units.** Counting features and defects with the same weight obscures Flow Distribution; either normalize or report separately.
- **Confusing Flow Time with cycle time.** Flow Time spans the full value stream including upstream stages; cycle time is the team's slice.
- **Reporting metrics without action.** If the dashboard does not change behaviour, it is a display, not a management instrument.

### 3. Statistical Variability

**Hold in mind:**
Roll a six-sided die. The "average" outcome is 3.5, but every actual roll is 1, 2, 3, 4, 5, or 6 — never 3.5. A team's "average cycle time of 5 days" is the same shape: useful as a summary, dangerous as a commitment. The right model is the distribution itself — its shape, its percentiles, and its tails — not its average. Once leadership accepts this, single-date commitments become "ranges with confidence," and accountability conversations get more honest.

**Do:**
- **Plot the histogram before reporting the mean.** A glance at the distribution shape changes the conversation faster than any explanation.
- **Use percentile commitments.** "We will deliver inside 18 days for 85% of items" is honest and forecastable; "average 12 days" is misleading.
- **Treat outliers as signal, not noise.** Long-tail items often share a cause (special handling, escalation, missing dependency). Diagnose, don't average.
- **Track variability over time.** A team whose 85th-percentile cycle time is shrinking is improving even if the mean is flat.
- **Distinguish common cause from special cause.** Common-cause variability is system-level (improve the system); special-cause is event-level (investigate the event). Confusing them produces either learned helplessness or chronic firefighting.

**Avoid:**
- **Reporting only the mean.** The mean discards everything a decision-maker needs.
- **Subtracting variability by adding buffers.** Adding 30% to every estimate hides the variability rather than managing it.
- **Treating common-cause variability as failure.** Punishing teams for variability built into the system erodes trust without changing outcomes.
- **Treating special-cause variability as the new normal.** Letting one-off incidents reset baselines silently inflates expectations.

### 4. Probabilistic Forecasting

**Hold in mind:**
Two ways to plan a road trip. The first: "Google Maps says 4 hours 20 minutes — let's leave at 7:40 AM to arrive by noon." The second: "Historically, this drive on a weekday morning lands between 4:00 and 5:30 — to be 85% sure of arriving by noon, leave by 7 AM." The first plan ignores variability and triggers panic when the trip stretches. The second has variability baked in and arrives reliably. Probabilistic forecasting applies the second logic to portfolio commitments, regulatory deadlines, and release dates.

**Do:**
- **Use throughput, not estimates.** A team's historical "items completed per week" is unbiased; story-point estimates carry social pressure and motivated reasoning.
- **Run the simulation in minutes, present the distribution in seconds.** Tools (FocusedObjective, ActionableAgile, simple spreadsheets) generate 10,000 simulations in seconds. The output people see is a percentile chart.
- **Quote two percentiles.** "50%/85% confidence we finish by..." is the standard; the gap signals risk.
- **Refresh weekly.** Throughput and scope both move; a stale forecast is worse than no forecast.
- **Watch for scope as the dominant variability source.** Scope creep widens the distribution faster than execution variability does. Forecasting exposes this clearly.

**Avoid:**
- **Forecasting to a single number anyway.** Stakeholders compress "85% by April 22" back into "April 22" — leadership has to hold the range, not surrender it.
- **Treating the forecast as a commitment.** A 50% confidence forecast is what we expect; it is not what we promise.
- **Forecasting without acting on the data.** The distribution shows risk. The follow-up is reducing scope, raising throughput, or shifting the date — not just reporting the number.
- **Garbage in.** Forecasting assumes the system is stable enough that history predicts the near future. During a reorg or major shift, the forecast is unreliable; say so.

### 5. Reference Class Forecasting

**Hold in mind:**
Asked to estimate how long a renovation will take, a homeowner reasons: "two months for the kitchen, two for the bathroom, plus a buffer — call it six." The contractor knows that renovations like this take 12–18 months on average. Both have information; the homeowner is reasoning bottom-up from their plan, the contractor from the reference class of completed similar jobs. The contractor's number wins because they're using outside-view data; the homeowner's plan suppresses everything the reference class would tell them. Reference Class Forecasting is the formalization of "ask the contractor first."

**Do:**
- **Identify the reference class before you reason about your project.** The class is "transformation programs at $1B+ enterprises" or "data migrations at multi-state insurers," not "this thing we're doing."
- **Use base rates as the anchor.** Take the median outcome of the reference class and modify only for specifics that demonstrably differentiate.
- **Be honest about size.** Most cost and schedule overruns correlate with original size; small classes (n < 8) provide unreliable base rates.
- **Document the comparable projects.** A list of named comparable projects forces accountability; "I think it's like..." is too vague.
- **Use it for governance, not motivation.** Reference-class forecasts will be uncomfortable for project champions. Their value is in funding decisions, not team morale.

**Avoid:**
- **Inside-view forecasting badged as RCF.** Bottom-up plans dressed up with "we think it's similar to..." statements miss the discipline.
- **Reference class too narrow.** Including only successful past projects produces optimistic base rates; include the failures.
- **Reference class too broad.** "Large IT projects" is too general; "ERP rollouts at mid-market financial-services firms" is usable.
- **Adjusting away the base rate.** "Our project is unique because..." is the most common way RCF gets corrupted in practice.

## Deliverable format

Produce a markdown document with these sections:

### Metric set (definitions, owners, cadence)

### Baseline and target percentiles (not averages only)

### Forecast range with assumptions

### Goodhart risks (how metrics could be gamed)

### Review ritual recommendation

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [dora-metrics](references/dora-metrics.md)
- [flow-metrics](references/flow-metrics.md)
- [statistical-variability](references/statistical-variability.md)
- [probabilistic-forecasting](references/probabilistic-forecasting.md)
- [reference-class-forecasting](references/reference-class-forecasting.md)

