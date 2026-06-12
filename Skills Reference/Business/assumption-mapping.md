---
id: 73
name: Assumption Mapping
category: Business
cardType: standard
tagline: Surface and prioritize the beliefs a plan depends on
connections:
  - id: 68
    rationale: the canvas is the source document from which assumptions are extracted.
  - id: 64
    rationale: the MVP is the cheapest device for testing the most critical assumptions.
  - id: 189
    rationale: assumption mapping defines what to test; the Experiment Ladder selects which type of experiment is appropriate for each assumption class.
  - id: 72
    rationale: once the experiment type is selected, experiment design defines how to run it validly — hypothesis, success criteria, sample size.
  - id: 212
    rationale: the assumptions an evaluator holds about a candidate or option are the source of expectation that drives observer bias; surfacing assumptions before evaluation is the upstream intervention.
  - id: 213
    rationale: assumption mapping is Step 3 in this chain; the full sequence shows how to go from idea to a testable hypothesis with kill criteria
  - id: 246
    rationale: the broader diagnostic discipline that surfaces what's known, believed, and unknown about a *situation*; assumption mapping applies the same fact/belief separation to the load-bearing claims behind a specific strategy
  - id: 10
    rationale: pre-mortem failure causes typically correspond to critical assumptions that weren't tested; running both surfaces risk from two directions.
  - id: 218
    rationale: the business case's "assumption stack" is the primary output of assumption mapping applied to a financial argument; high-criticality, low-certainty assumptions are the ones to stress-test before submission.
  - id: 224
    rationale: red teams often attack at the level of assumptions; assumption mapping done beforehand gives the red team a structured inventory of which beliefs are most critical and least supported.
  - id: 66
    rationale: customer development produces the evidence that validates or invalidates the critical assumptions surfaced by the map.
  - id: 70
    rationale: each stage of the innovation funnel tests specific assumptions before advancing; assumption mapping identifies which ones are critical enough to gate on.
  - id: 180
    rationale: assumption mapping is the method for identifying which experiments to run at the leaf level of the OST; the two tools are designed to work together.
  - id: 110
    rationale: design thinking's prototyping stage is most productive when combined with assumption mapping — the prototype should test the highest-priority assumption explicitly.
references:
  - title: "Testing Business Ideas: A Field Guide for Rapid Experimentation"
    authorYear: David J. Bland & Alexander Osterwalder (2019)
    supports: the practitioner toolkit for identifying and testing assumptions systematically.
  - title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
    authorYear: Eric Ries (2011)
    supports: the source discipline of assumption-first product development.
---

# Assumption Mapping

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Assumption mapping is the practice of explicitly listing all the beliefs on which a plan, strategy, or product depends — and then ranking them by importance (how much does success depend on this being true?) and evidence (how confident are we that this is true?). The result is a map of where the most dangerous assumptions lie: the high-importance, low-evidence beliefs. These are the assumptions that should be tested first.

---

## Mental Model

Every plan is built on a stack of assumptions. Some are well-evidenced (near certainties); some are speculative guesses. Most plans fail not at the level of execution but at the level of a specific assumption being wrong. Assumption mapping makes the assumption stack visible, making it possible to prioritize de-risking effort on the assumptions that would most damage the plan if wrong.

---

## Practitioner Heuristics

- **Extract assumptions from every element of the business model canvas or strategic plan.** Each box in the canvas is an assumption. Each strategic bet is an assumption stack.
- **Map on two axes: certainty (known ↔ unknown) and importance (critical ↔ nice-to-know).** High-importance, low-certainty assumptions in the top-left quadrant are your priority tests.
- **Generate assumptions from multiple perspectives.** Your team will have blind spots. Bring in customer voice, market data, and adversarial challenge to surface assumptions the team has normalized.
- **Assign an owner and a test to every critical assumption.** "We don't know this" is not a resting state; it is a test-design prompt. Who will test this, how, and by when?
- **Update the map as evidence arrives.** Assumption mapping is an ongoing exercise, not a one-time workshop. Each learning cycle should update the certainty scores of assumptions tested.

---

## Common Failure Modes

- **Identifying assumptions but not prioritizing them.** A map with 50 assumptions of equal priority produces no action. The discipline is ranking ruthlessly.
- **Treating low-certainty as equivalent to "we need to learn more internally."** Most critical assumptions can only be tested through market interaction — customer interviews, MVPs, pilots. Internal analysis cannot test customer behavior assumptions.

---

## Worked Example

A team is planning a new market entry. They list their assumptions and find 35. After mapping on importance vs. certainty, five assumptions emerge as critical and low-certainty: (1) the target customer experiences the problem intensely enough to pay for a solution; (2) the customer's current workaround can be disrupted by a software product; (3) the procurement cycle is short enough for the unit economics to work; (4) regulatory approval is achievable within 12 months; and (5) a comparable case study will be sufficient to win enterprise trust. These five assumptions define the next three months of customer development and legal exploration before any product is built.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
