---
id: 251
name: Value Realization
category: Business
cardType: standard
tagline: Approval is a forecast. Realization is the discipline of finding out whether the forecast was true — and acting on the answer.
connections:
  - id: 278
    rationale: crediting an investment for the value it produced requires the same counterfactual discipline — what would the metric have done without the investment, not just what it did after.
  - id: 218
    rationale: the upstream discipline this card completes the loop on; a business case that defines a kill condition and a reference class but has no realization plan has built half a system.
  - id: 153
    rationale: the same "decide the threshold before you're emotionally invested in the answer" discipline, applied to the post-approval period rather than the in-flight one.
  - id: 53
    rationale: "the bias that value realization exists structurally to counteract: the people most invested in an initiative's success are the worst-positioned to judge it honestly."
  - id: 144
    rationale: the distinction between "we did the thing" and "the thing produced the result" is the entire discipline of value realization, applied at the scale of a strategic investment.
  - id: 160
    rationale: "the outside-view anchor for building a realization plan: what does the historical distribution of similar investments actually deliver?"
  - id: 115
    rationale: the evidence base for expecting a gap between promised and realized value; a realization plan that assumes the case will land exactly as forecast has not engaged with the base rate.
  - id: 196
    rationale: "the structured-reflection discipline that value realization reviews should borrow from: what was expected, what happened, why the gap, what changes next time."
  - id: 250
    rationale: the value ledger is, in effect, a small bespoke KPI system built around a single initiative; the same discipline (owner, threshold, cadence) applies at both scales.
references:
  - title: Strategy Beyond the Hockey Stick
    authorYear: Chris Bradley, Martin Hirt & Sven Smit (2018)
    supports: on the gap between strategic intent and realized performance, and the discipline required to close it.
  - title: How Big Things Get Done
    authorYear: Bent Flyvbjerg & Dan Gardner (2023)
    supports: the reference-class evidence on how often large investments and transformations under-deliver against their business cases — the empirical basis for "expect the gap."
  - title: '"Making the Deal Real: How GE Capital Integrates Acquisitions"'
    authorYear: Ron Ashkenas, Lawrence J. DeMonaco & Suzanne C. Francis, HBR (1998)
    supports: an early, concrete articulation of post-approval value tracking as a discipline distinct from due diligence.
  - title: Leading Change
    authorYear: John P. Kotter (1996)
    supports: on the tendency of organizations to declare victory — and redirect attention — before the promised benefit has actually been secured.
---

# Value Realization

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Value realization is the discipline of tracking, after a strategy, acquisition, transformation, or initiative is approved and underway, whether the benefits it promised are actually being captured — through a value ledger that names each expected benefit, its baseline, its target, its owner, its proof standard, and the governance rhythm that reviews it. It is the deliberate bridge between *promised* value (the business case that won approval) and *captured* value (the benefit that shows up, measurably, in the business). Distinct from business case construction, which operates *before* approval, and distinct from goal-setting frameworks like OKRs, which define targets — value realization is the specific discipline of closing the loop *after* the money has been spent.

---

## Mental Model

Most organizations are far better at approving investments than at finding out whether they worked. The business case is built with care, scrutinized in the approval meeting, and then — the moment the funding is released — effectively disappears. Eighteen months later, no one can say with confidence whether the synergies materialized, the transformation delivered its promised efficiency gains, or the acquisition created the value its case claimed it would. The absence isn't usually deliberate; it's structural. The people who built the case have moved to the next initiative, the metrics that would prove or disprove it were never instrumented, and admitting the case fell short carries a reputational cost that quietly discourages anyone from looking too closely.

Value realization treats this gap as the primary risk to manage — not an afterthought to the "real" work of deciding and executing. It asks, at the moment of approval (not eighteen months later): *how, specifically, will we know if this worked? Who owns making sure it does? What would we accept as proof?* A value ledger makes the promise auditable — baseline, target, timing, and owner, named in writing before the work begins, so that six months in there is a record to check the present against rather than a memory to argue about. This is the same discipline [Kill Criteria](../Delivery-and-Flow/kill-criteria.md) applies to in-flight initiatives, extended to the period *after* the initiative has nominally succeeded: define, in advance, what you would need to see to believe it's working — and what you'd need to see to admit it isn't.

---

## Practitioner Heuristics

- **Build the value ledger at approval time — not after.** A baseline measured before the initiative starts is evidence; a baseline reconstructed from memory after the fact is a story shaped by whoever is telling it. The ledger is only credible if it exists *before* anyone has an incentive to shade it.
- **Assign an owner for the *value*, not just the activity.** "The transformation team is responsible for delivering the program" is an activity commitment; "the VP of Operations is accountable for the $4M run-rate cost reduction landing in the P&L by Q3" is a value commitment. Only the second one survives contact with a year-end review that asks "did it work?"
- **Separate one-time benefits from recurring ones — and prove them differently.** A one-time cost reduction shows up once and is straightforward to verify; a recurring efficiency gain has to be checked repeatedly, because the conditions that produced it (a process change, a tool adoption, a behavioral shift) can quietly erode without anyone noticing until the benefit has evaporated.
- **Define the proof standard before you need it.** "Revenue went up after the launch" is not proof the launch caused it — markets move, seasons turn, competitors stumble. Decide in advance what evidence would distinguish "this initiative caused the benefit" from "the benefit would have happened anyway," or the eventual review will simply credit the initiative with whatever good news happened to coincide with it.
- **Build in an escalation trigger, not just a review date.** A governance rhythm that only *reports* whether the benefit materialized is half a system; the other half is what happens when it doesn't — who gets told, by when, and what they're expected to do about it. Without this, "behind plan" quietly becomes "the new normal" with no one ever deciding that it should.
- **Expect — and plan for — the gap between promise and delivery.** Reference-class evidence on large investments and transformations consistently shows that realized benefits run below the business case, often substantially. A realization plan that assumes the case will land exactly as forecast has not engaged with this base rate, and will be caught flat-footed by the gap it should have anticipated — see [Planning Fallacy](../Psychology/planning-fallacy.md) and [Reference Class Forecasting](../Delivery-and-Flow/reference-class-forecasting.md).

---

## Common Failure Modes

- **The vanishing business case.** The document that won approval is never referred to again — not because anyone decided to abandon it, but because no one was assigned to keep checking it against reality, and organizational attention moved on the moment the funding was released.
- **Sunk-cost momentum.** Once an initiative is underway, the people who championed it have a structural incentive to interpret ambiguous evidence in its favor — see [Sunk Cost](../Psychology/sunk-cost.md). A realization plan without an independent reviewer is, in effect, asking the most invested party to grade their own work.
- **Activity reported as value.** "We rolled out the new system to 80% of the organization" is an activity update; "the new system has reduced processing time by 30%, verified against the pre-rollout baseline" is a value update. Reviews that settle for the first kind feel productive and prove nothing.
- **Correlation mistaken for capture.** Crediting an initiative with a result that would likely have happened anyway — because no proof standard was defined in advance to separate the two, the initiative quietly absorbs the credit for favorable trends and avoids the blame for unfavorable ones.
- **No consequence for shortfall.** A governance rhythm that faithfully reports "we are at 60% of target, eighteen months in" and then moves to the next agenda item has built a measurement system with no teeth — informative, perhaps, but not a system that changes what anyone does.

---

## Worked Example

A logistics company's board approves a £12M warehouse-automation program with a business case promising £5M in annual savings within two years, primarily from reduced labor costs and faster throughput. The case is approved; eighteen months later, at the post-investment review the CFO insisted on building into the original approval, the value ledger shows the program at 58% of its targeted savings.

Because the ledger was built at approval time — with a measured pre-program baseline for labor cost per unit shipped and throughput per shift, a named owner (the VP of Operations, not "the program team"), and a defined proof standard (savings measured against the baseline, adjusted for shipping-volume changes using a pre-agreed formula, not raw before-and-after comparison) — the shortfall is *legible* rather than disputable. The gap traces to a specific, addressable cause: throughput gains materialized as designed, but labor-cost savings lagged because the retraining program for redeployed staff ran six months behind schedule, delaying the headcount reduction the case assumed.

Because the governance rhythm included an escalation trigger ("if realized value falls below 70% of plan at the 18-month mark, the program sponsor presents a recovery plan to the board within 60 days"), the conversation isn't "whose fault is this" — it's "here is the specific, traceable cause, here is the recovery plan, and here is the revised timeline against which we'll check again in two quarters." The original investment is salvaged not because it went as planned, but because the realization system was built to surface the gap early enough, and specifically enough, to close it.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
