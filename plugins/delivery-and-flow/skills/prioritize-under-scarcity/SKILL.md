---
name: "prioritize-under-scarcity"
description: "Prioritizes work under scarce capacity using cost of delay, WSJF, and kill criteria. Use for portfolio debates, roadmaps, or what to stop."
metadata:
  plugin: "delivery-and-flow"
  version: "1.0.0"
  sources: "Delivery-and-Flow/cost-of-delay.md,Delivery-and-Flow/wsjf.md,Delivery-and-Flow/kill-criteria.md,Delivery-and-Flow/one-thing.md,Delivery-and-Flow/lean-portfolio.md,Delivery-and-Flow/outcome-vs-output.md"
---

# Prioritize Under Scarcity

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Cost of Delay

**Hold in mind:**
Imagine two initiatives, A and B, each worth $1M when shipped. A has a hard regulatory deadline in 12 weeks (after which value drops to zero). B will pay back the same $1M whether shipped this quarter or next. A's cost of delay is enormous; B's is near zero. The naïve value-based ranking treats them equally. CoD makes the time-sensitivity explicit and lets you sequence A first, even if both look similar on a business-case slide.

**Do:**
- **Estimate three components.** CoD typically combines (1) user/business value, (2) time criticality (deadline, market window), and (3) risk reduction or opportunity enablement. Order-of-magnitude estimates are enough.
- **Bucket, don't precision-engineer.** Three buckets (high/medium/low) for each component, multiplied or summed, beats a false-precision financial model. The goal is comparability, not exactness.
- **Pair with size to get WSJF.** Cost of Delay divided by job size gives Weighted Shortest Job First — the practical prioritization rule. CoD alone tells you which is most valuable to ship soon; ÷ size tells you which to ship next.
- **Pressure-test "everything is high."** When every initiative claims maximum time criticality, force a forced-ranking exercise; CoD only works if it differentiates.
- **Use it in steering meetings, not in spreadsheets.** A one-page CoD comparison turns a 45-minute prioritization argument into a 5-minute decision.

**Avoid:**
- **Treating value as CoD.** A high-value item with no time sensitivity has a low cost of delay. Failing to separate the two is the most common error.
- **Over-precision.** Three-decimal-place CoD numbers signal false confidence. The arithmetic only needs to differentiate buckets.
- **Computing once and forgetting.** CoD changes with market timing, competitor moves, and dependencies; revisit at least quarterly on active portfolio items.
- **Using CoD to justify everything.** If every initiative is assigned high CoD, the metric has stopped doing work.

### 2. WSJF

**Hold in mind:**
Imagine a one-lane drawbridge with a queue. Letting through the boat with the most valuable cargo seems right — but a small fast boat that costs $50k/hour to delay should go before a large slow boat that costs $10k/hour to delay, because the small boat will clear the bridge in 5 minutes and the large one in an hour. WSJF formalizes this intuition: it's not the most valuable item that goes first; it's the item that maximizes value-per-time-on-the-bridge. The same arithmetic applied to a quarterly portfolio queue reorders the work in ways no business-case ranking would.

**Do:**
- **Use buckets, not numbers.** Three buckets each for value, time-criticality, risk/opportunity, and size produce comparable WSJF scores without false precision.
- **Re-score quarterly.** Cost of delay and size both move; a stale WSJF is a stale priority list.
- **Force-rank the bottom.** WSJF only differentiates if items at the bottom are visibly different from items at the top.
- **Beware "size = 1."** Items that look small often hide dependencies, integration work, or coordination cost that WSJF size needs to capture.
- **Pair with WIP limits.** WSJF tells you what to start next; WIP limits keep you from starting too many.

**Avoid:**
- **WSJF as a spreadsheet artifact.** Calculated once, ignored when politics meet the queue.
- **Inflated time-criticality.** Every initiative claims hard deadline pressure; WSJF only differentiates when scoring is honest.
- **Sizing in story points.** Story-point sizing varies team-to-team; size in WSJF should be relative across the items being compared, not absolute.
- **Skipping risk/opportunity.** WSJF without the third component (risk reduction or opportunity enablement) underweights enabling work.

### 3. Kill Criteria

**Hold in mind:**
Imagine setting out on a hike. You can commit to one of two stances: "we'll reach the summit no matter what" — which sounds determined but loses people to weather, exhaustion, and injury — or "we turn back if we haven't crossed the saddle by 2 PM" — which sounds defeatist but produces more summit attempts over a lifetime, with better safety. Most organizational initiatives operate on the first stance. Kill criteria install the second. The trick is that they have to be pre-committed; deciding mid-hike whether to turn back is dominated by sunk cost and identity.

**Do:**
- **Write kill criteria into the funding decision.** Same document, same approver. Once funded without them, they almost never get added later.
- **Make them specific and observable.** "If X metric is below Y at month 3" beats "if it's not going well."
- **Define both leading and lagging.** Lagging criteria (revenue, retention) trigger the kill; leading criteria (engagement, signup rate) trigger the warning.
- **Pre-commit the decision-maker.** Naming who decides under what evidence shortens the political path to a kill.
- **Don't confuse kill with pause.** Some initiatives pause for external reasons; kill criteria are about intrinsic non-viability.

**Avoid:**
- **Sunk-cost re-litigation.** Without pre-commitment, the kill conversation becomes a debate about everything already invested.
- **Kill criteria as theater.** Written in funding decks, never reviewed against the data, never enforced.
- **Identity-based persistence.** "We are the team that ships X" makes the kill feel like losing the team's purpose; address this upstream.
- **Killing only obvious losers.** The hard kill is the initiative that's running fine but failing the original outcome thesis.

### 4. Strategic Prioritization (“One Thing”)

**Hold in mind:**
A leader with five "top priorities" has actually communicated: I have not decided. Five priorities cannot be defended against a sixth; six become seven; the system runs on whoever's elbows are sharpest that week. The "one thing" frame forces a different conversation: among A, B, and C, which is the single bet that, if it lands, makes the others either follow or matter less? The answer is usually uncomfortable — it kills sacred cows and exposes weak bets. That discomfort is the value.

**Do:**
- **One thing for the quarter, max three for the year.** Below that grain, focus dilutes; above that, priorities multiply.
- **Phrase it as a forced choice.** "If we could only do one thing this quarter, what would it be?" — the forcing function strips away the polite "all of these matter."
- **Defend it visibly.** Saying "no, not this quarter" to a senior peer in public is the moment that signals the priority is real.
- **Pair with kill criteria.** Define under what conditions the "one thing" would change. Without that, it becomes dogma.
- **Decompose into outcomes.** "The one thing" is an outcome; the initiatives under it are the bets.

**Avoid:**
- **The five-priority illusion.** A leadership team that cannot reduce its priority list to one or three is hiding the real decision.
- **Priorities by acclamation.** Every team's pet project gets included to avoid conflict; the result is no priority at all.
- **Priorities that don't survive contact with execution.** Stated at the off-site, abandoned by week six when the first competing demand arrives.
- **Treating the one thing as forever.** It should be revisited each quarter; markets, evidence, and the org's state change.

### 5. Lean Portfolio Management

**Hold in mind:**
Traditional portfolio management funds projects: each gets a budget, a charter, and a quarterly steer toward "on time and on budget." LPM funds value streams: persistent teams oriented around customer flow, choosing initiatives from a prioritized queue. The shift moves the unit of investment from "the project" to "the stream of value the team produces." The governance question changes from "are we on plan?" to "is the portfolio's flow producing outcomes, and is our sequencing right?" The former drives compliance; the latter drives learning.

**Do:**
- **Fund teams, not projects.** Persistent funding lets teams compound knowledge; project funding optimizes for activity, not learning.
- **Cap portfolio WIP.** If you have 40 funded initiatives and capacity for 12, you don't have a prioritization problem; you have a WIP problem.
- **Prioritize on cost-of-delay, not gut.** CoD makes prioritization a calculation, not a politics exercise.
- **Use cadence, not gates.** Quarterly portfolio reviews and monthly check-ins beat stage gates that lock decisions when uncertainty is highest.
- **Make outcomes the unit of accountability.** Initiatives miss outcomes; this is a learning event, not a failure event. Adjust funding accordingly.

**Avoid:**
- **Lean badges on stage-gate processes.** Renaming gates "portfolio reviews" without changing the funding model.
- **Portfolio overload masquerading as ambition.** "All 40 initiatives are important" is the executive form of feature-factory pathology.
- **No kill mechanism.** Without kill criteria, the portfolio accumulates zombie initiatives, and good ones are starved.
- **Funding teams without portfolio discipline.** Persistent team funding without WIP limits or outcome accountability produces stable underperformance.

### 6. Outcome vs Output

**Hold in mind:**
A weight-loss program. Output: meals cooked, hours exercised, miles run. Outcome: weight, body composition, blood markers. Both matter, but the output is in service of the outcome. Sustaining output without outcome — six months of training with no health change — is a signal to change the approach, not to celebrate the discipline. Software teams routinely ship the equivalent of "more meals cooked" and treat the increased volume as progress. The outcome question — "did anything change for the customer?" — is the disciplining check.

**Do:**
- **State outcome before output.** "Reduce signup abandonment from 14% to 8%" is an outcome; "ship the new onboarding flow" is an output. The outcome justifies the output.
- **Set leading-indicator outcomes.** Many outcomes lag by months. Use intermediate behaviour change as the visible target — "first-week activations" rather than 12-month retention.
- **Stop work that ships outputs without moving outcomes.** This is the hardest discipline. Killing an in-flight, on-budget initiative because the outcome metric hasn't moved is the test of whether outcome thinking is real.
- **Use outcome language in OKRs.** Key Results should be outcomes; initiatives are the outputs that attempt to produce them.
- **Pair with cost of delay.** An output that doesn't shift the outcome metric has zero cost of delay; pulling it from the queue is free.

**Avoid:**
- **Outcomes that are actually outputs.** "Ship five major features" wearing outcome clothing — there is no customer or business behaviour stated.
- **Outcomes too distant to act on.** "Increase NPS by 10" with no leading indicator gives no actionable feedback during the quarter.
- **Output worship at the executive level.** When leadership celebrates "shipped 23 features," teams optimize for ship-count regardless of impact.
- **Attribution paralysis.** Refusing to claim outcome progress because attribution is multi-causal leaves teams with nothing to learn from.

## Deliverable format

Produce a markdown document with these sections:

### Scarcity constraint (what is the real bottleneck)

### Ranked initiatives with cost-of-delay rationale

### What to stop or defer (kill criteria applied)

### Single explicit focus recommendation

### Governance check (funding, WIP at portfolio level)

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [cost-of-delay](references/cost-of-delay.md)
- [wsjf](references/wsjf.md)
- [kill-criteria](references/kill-criteria.md)
- [one-thing](references/one-thing.md)
- [lean-portfolio](references/lean-portfolio.md)
- [outcome-vs-output](references/outcome-vs-output.md)

