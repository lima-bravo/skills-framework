---
id: 218
name: Business Case Construction
category: Business
cardType: standard
tagline: A business case that can only survive friendly scrutiny is not a business case — it is a proposal dressed in numbers.
connections:
  - id: 73
    rationale: the technique for extracting and prioritising the belief stack that underlies the financial projections; the high-criticality, low-certainty assumptions are the ones to stress-test first
  - id: 160
    rationale: the method for anchoring projections to what comparable investments have actually delivered; every business case requires a reference class before any inside-view adjustment
  - id: 211
    rationale: the discipline of honest uncertainty; a calibrated business case presents ranges that reflect genuine uncertainty rather than false precision designed to be persuasive
  - id: 153
    rationale: every credible business case must state the conditions under which the investment should be stopped; without this, approval is unconditional and accountability is absent
  - id: 216
    rationale: for growth investments, unit economics grounds the revenue projections; a case whose revenue model cannot be expressed in unit economic terms is building on unknown foundations
  - id: 163
    rationale: "the structural principle for presenting the case: decision and recommendation first, then the supporting analysis"
  - id: 53
    rationale: the most common failure in mid-investment reviews; a business case that has been approved becomes a sunk cost that biases subsequent decisions toward continuation regardless of new evidence
  - id: 212
    rationale: the case sponsor is the worst evaluator of their own case; independent review or red-team challenge before submission is the structural defence
  - id: 251
    rationale: "the discipline that completes the loop this card starts: a business case states what should happen if approved; value realization is how the organisation finds out, after the money is spent, whether it actually did"
references:
  - title: How Big Things Get Done
    authorYear: Bent Flyvbjerg & Dan Gardner (2023)
    supports: the empirical case for reference class anchoring in investment decisions; documents systematic optimism bias across major projects and the outside-view corrective.
  - title: Thinking, Fast and Slow
    authorYear: Daniel Kahneman (2011)
    supports: the planning fallacy and inside-view/outside-view distinction; explains why projections built from the inside perspective are systematically over-optimistic.
  - title: The Pyramid Principle
    authorYear: Barbara Minto (1987)
    supports: "structural discipline for analytical communication: answer first, then support; the basis for leading a business case with the decision rather than the background."
  - title: Thinking in Bets
    authorYear: Annie Duke (2018)
    supports: "the decision-quality framing: separating a decision's quality from its outcome; a business case should be evaluated by how well it handles uncertainty, not by whether the outcome was good."
---

# Business Case Construction

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Business case construction is the discipline of building a structured argument for a proposed investment — covering the problem being solved, the proposed solution, the expected costs and benefits, the key assumptions and their sensitivity, the risks, and the decision criteria — in a form that withstands independent scrutiny. A well-constructed business case does not advocate; it analyses. It presents the best honest estimate of outcomes, including the downside scenarios, and makes the case that investment is justified even accounting for uncertainty. The test of a good business case is whether it would survive review by a reasonably informed sceptic who wants it to fail.

---

## Mental Model

Most business cases are written to secure approval, not to inform decisions. This distinction matters enormously. A case written to secure approval will select optimistic assumptions, downplay risks, minimise uncertainty, and present a single rosy scenario. A case written to inform decisions will identify the key assumptions, stress-test them against reference class data, present a range of outcomes, and tell the decision-maker what they need to believe for the investment to pay off.

The difference in usefulness is total. A persuasion document gives the approver a reason to say yes; an analytical document gives the approver what they need to make a good decision. The approver who receives the former and says yes has not been served — they have been managed. The approver who receives the latter has been given the material to exercise genuine judgment.

A useful mental check: imagine the person reading this case is intelligent, sceptical, and wants to find the flaw. Does the case hold up? If not, it is not ready.

---

## Practitioner Heuristics

- **Lead with the decision, not the background.** The approver needs to know what is being asked, why, by when, and on what terms — before the analysis. Most cases bury this at the end. Pyramid Principle applies: answer first, then support.
- **Make the assumption stack explicit.** Every financial projection rests on a set of assumptions. List the top five to ten assumptions that, if wrong, would materially change the conclusion. For each, state what you assume and what evidence supports it. This is Assumption Mapping applied to a financial model.
- **Anchor forecasts to the reference class.** What do comparable investments actually return? What do similar projects actually cost and take? The business case must contain a reference class anchor before any inside-view adjustments. A case with no reference class is a case built on hope.
- **Present a range, not a point estimate.** Base case, downside case, and upside case. The downside case must be honest — it should represent what would happen if the key assumptions prove wrong at the frequency they typically do, not a mild rounding of the base case.
- **State the kill condition.** Under what circumstances should the investment be stopped mid-execution? A business case that cannot state a kill condition is implicitly claiming the investment is unconditional — which is never true and is always a red flag.
- **Separate the cost of capital from the cost of delay.** Many cases compare "invest now" to "don't invest" but fail to assess "invest later." The cost of delay — the value lost by not starting now — is often as large as the investment itself and should be made explicit.

---

## Common Failure Modes

**The hockey stick projection.** Revenue flat for two years, then exponential growth in year three. Every case with a hockey stick owes the reader an explanation of what structurally changes in year three. "We will have scaled our sales team" is not an explanation — it is a description of an investment that also needs a business case.

**Single-scenario modelling.** Presenting one base case implicitly claims the future is known. Decision-makers who receive a single scenario have not been told what the range of outcomes looks like — only what the sponsor thinks is most likely. A single scenario is always an advocacy document.

**Assumption laundering.** Listing assumptions without evidence. "We assume 15% market share" is not analysis — it is a number the model needed to produce a positive NPV. Assumptions must be supported by evidence, stated with an uncertainty range, and flagged when they are the primary driver of the result.

**Confusing cost with investment.** Costs are expenses that produce no durable return; investments are expenditures expected to produce future value. Many business cases describe investments using cost language, which biases decision-makers toward minimisation rather than optimisation. Conversely, calling a cost an investment to make it look more strategic is a common manipulation.

**No post-investment review commitment.** A business case that is approved and then never compared to actual outcomes has no feedback loop. The absence of a committed review date at the time of approval is a signal that the case is advocacy — because the sponsor knows the assumptions won't survive later scrutiny.

---

## Worked Example

A logistics firm is evaluating a £4M investment in route optimisation software. The initial business case projects £2.3M annual savings (18-month payback) from fuel reduction and driver time. The CFO returns it for three reasons: (1) no reference class — what have comparable implementations actually delivered at similar fleet sizes? (2) single scenario — what happens if adoption is 60% of target in year one? (3) no kill condition — at what point in implementation would the firm stop?

Revised case: Reference class (12 comparable implementations in European logistics, median savings 11% of fuel costs, range 6–19%, median implementation time 14 months vs. projected 9). Downside scenario (60% adoption in year one, full adoption by month 18): £1.1M savings year one, £2.1M year two — payback 26 months. Kill condition: if adoption is below 40% by month six and variance from plan cannot be attributed to specific correctable causes, pause and review.

The revised case is approved at a reduced headline savings figure (£1.9M base case annual savings) with an explicit review at month six. Actual outcome: 71% adoption at month six, £1.7M savings in year one. The reference class anchor and the downside scenario had set appropriate expectations; the investment is rated a success rather than a disappointment.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
