---
id: 141
name: Probabilistic Forecasting
category: Delivery & Flow
cardType: standard
tagline: Replace single-date plans with confidence-tagged ranges
connections:
  - id: 140
    rationale: variability is the engine that probabilistic forecasting harnesses.
  - id: 160
    rationale: companion technique using outside-view base rates for larger initiatives.
  - id: 131
    rationale: connects throughput, WIP, and cycle time, which feed the simulation.
  - id: 134
    rationale: provides the cycle-time inputs to "when" forecasts.
  - id: 115
    rationale: the cognitive bias probabilistic forecasting counteracts.
  - id: 209
    rationale: probabilistic forecasting requires an inspectable, stable system; EPC provides the governance that keeps the system transparent enough to forecast reliably.
  - id: 137
    rationale: probabilistic forecasting shows when something will ship; cost of delay converts that forecast uncertainty into dollars — together they answer "what does this delivery range actually cost us?"
  - id: 159
    rationale: pairing WSJF with probabilistic forecasting turns sequencing from gut feel to calculation — WSJF ranks what goes first; forecasting estimates when each item will clear the queue, making the full value-delivery picture visible.
references:
  - title: Actionable Agile Metrics for Predictability
    authorYear: Daniel S. Vacanti (2015)
    supports: the Monte Carlo simulation approach to forecasting delivery dates from historical cycle time data.
  - title: When Will It Be Done?
    authorYear: Daniel S. Vacanti (2020)
    supports: the practical guide to answering "when?" questions probabilistically for knowledge work teams.
  - title: Forecasting and Simulating Software Development Projects
    authorYear: Troy Magennis (2011)
    supports: simulation techniques and open-source tooling for software project forecasting.
---

# Probabilistic Forecasting

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Probabilistic forecasting estimates when work will be done — or how much will be done by a date — as a distribution rather than a single number. The simplest implementation, Monte Carlo simulation over a team's historical throughput, generates thousands of synthetic futures and reports percentile outcomes ("85% confidence we will finish 24–31 items by quarter-end"). Troy Magennis and Daniel Vacanti developed the practice for knowledge work; the technique itself dates from Stanislaw Ulam and John von Neumann's Los Alamos work in the 1940s. The result is plans that survive contact with reality because they encode the variability that reality contains.

---

## Mental Model

Two ways to plan a road trip. The first: "Google Maps says 4 hours 20 minutes — let's leave at 7:40 AM to arrive by noon." The second: "Historically, this drive on a weekday morning lands between 4:00 and 5:30 — to be 85% sure of arriving by noon, leave by 7 AM." The first plan ignores variability and triggers panic when the trip stretches. The second has variability baked in and arrives reliably. Probabilistic forecasting applies the second logic to portfolio commitments, regulatory deadlines, and release dates.

---

## Practitioner Heuristics

- **Use throughput, not estimates.** A team's historical "items completed per week" is unbiased; story-point estimates carry social pressure and motivated reasoning.
- **Run the simulation in minutes, present the distribution in seconds.** Tools (FocusedObjective, ActionableAgile, simple spreadsheets) generate 10,000 simulations in seconds. The output people see is a percentile chart.
- **Quote two percentiles.** "50%/85% confidence we finish by..." is the standard; the gap signals risk.
- **Refresh weekly.** Throughput and scope both move; a stale forecast is worse than no forecast.
- **Watch for scope as the dominant variability source.** Scope creep widens the distribution faster than execution variability does. Forecasting exposes this clearly.
- **Turn a forecast into a flow commitment, not a deadline.** A service-level expectation (SLE) is the explicit team commitment that flows from the distribution: "85% of items of this type will be delivered within N days." SLEs give customers something predictable to plan against without requiring individual estimates or fixed end-dates; they convert the forecast from an internal risk tool into an external commitment instrument. State the class of service, the confidence level, and the cycle-time target — then track whether you're hitting it.

---

## Common Failure Modes

- **Forecasting to a single number anyway.** Stakeholders compress "85% by April 22" back into "April 22" — leadership has to hold the range, not surrender it.
- **Treating the forecast as a commitment.** A 50% confidence forecast is what we expect; it is not what we promise.
- **Forecasting without acting on the data.** The distribution shows risk. The follow-up is reducing scope, raising throughput, or shifting the date — not just reporting the number.
- **Garbage in.** Forecasting assumes the system is stable enough that history predicts the near future. During a reorg or major shift, the forecast is unreliable; say so.

---

## Worked Example

A regulatory delivery program has a hard deadline 14 weeks away. The single-date plan claims comfortable on-time delivery. Monte Carlo simulation on the team's last 12 weeks of throughput, against 38 remaining items, shows 50% confidence of finishing in 13 weeks and 85% confidence at 17 weeks. The plan is therefore at coin-flip risk of missing. The conversation pivots from "are we on track?" to "what do we cut, parallelize, or de-scope to lift 85% confidence inside 14 weeks?" Three weeks of focused scope cuts and a parallel track move 85% confidence to 13 weeks. The deadline is hit; the previous quarter's deadline was missed by 9 days because no one had forecast the distribution.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
