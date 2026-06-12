---
id: 160
name: Reference Class Forecasting
category: Delivery & Flow
cardType: standard
tagline: Forecast by base rate, not by inside-view storytelling
connections:
  - id: 115
    rationale: the cognitive bias RCF counters.
  - id: 141
    rationale: the team-level analogue using a team's own history as reference class.
  - id: 10
    rationale: "complementary technique: imagine failure, then forecast it."
  - id: 24
    rationale: the buffer RCF justifies in scope, cost, and time.
  - id: 7
    rationale: RCF is base-rate, outside-view probabilistic thinking applied to projects.
  - id: 211
    rationale: reference class forecasting is the operational technique for anchoring on base rates; calibration is why the technique produces better estimates than inside-view reasoning.
  - id: 206
    rationale: "the cognitive bias RCF directly corrects: ignoring the distributional track record of similar cases in favour of the vivid specifics of the one in front of you."
  - id: 218
    rationale: every credible business case must anchor its projections to a reference class before any inside-view adjustments; RCF is the method that makes that anchor systematic.
  - id: 251
    rationale: "the outside-view anchor for building a realization plan: reference class evidence consistently shows realized benefits run below the business case, which is why expecting — and planning for — the gap is the first practitioner heuristic."
  - id: 233
    rationale: where Fermi estimation builds up from factors, reference class forecasting anchors on base rates from comparable cases — use both as cross-checks on each other.
references:
  - title: Thinking, Fast and Slow
    authorYear: Daniel Kahneman (2011)
    supports: the planning fallacy and the outside view; the psychological basis for using reference classes over inside-view estimates.
  - title: How Big Things Get Done
    authorYear: Bent Flyvbjerg & Dan Gardner (2023)
    supports: the empirical evidence for reference class forecasting in major projects; the statistical case for historical base rates over optimistic projections.
---

# Reference Class Forecasting

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Reference Class Forecasting (RCF) is a forecasting method developed by Bent Flyvbjerg for major projects, drawing on Kahneman and Tversky's inside/outside view framework: estimate a project's outcome by identifying a class of comparable past projects ("the reference class") and adjusting their base-rate distribution for the specifics of the current project. The method consistently outperforms inside-view forecasts — those built from the bottom up by the people closest to the project — because inside-view forecasts systematically underweight base rates and overweight optimism. Flyvbjerg's research across thousands of major infrastructure projects shows reference-class forecasts cut overruns dramatically.

---

## Mental Model

Asked to estimate how long a renovation will take, a homeowner reasons: "two months for the kitchen, two for the bathroom, plus a buffer — call it six." The contractor knows that renovations like this take 12–18 months on average. Both have information; the homeowner is reasoning bottom-up from their plan, the contractor from the reference class of completed similar jobs. The contractor's number wins because they're using outside-view data; the homeowner's plan suppresses everything the reference class would tell them. Reference Class Forecasting is the formalization of "ask the contractor first."

---

## Practitioner Heuristics

- **Identify the reference class before you reason about your project.** The class is "transformation programs at $1B+ enterprises" or "data migrations at multi-state insurers," not "this thing we're doing."
- **Use base rates as the anchor.** Take the median outcome of the reference class and modify only for specifics that demonstrably differentiate.
- **Be honest about size.** Most cost and schedule overruns correlate with original size; small classes (n < 8) provide unreliable base rates.
- **Document the comparable projects.** A list of named comparable projects forces accountability; "I think it's like..." is too vague.
- **Use it for governance, not motivation.** Reference-class forecasts will be uncomfortable for project champions. Their value is in funding decisions, not team morale.

---

## Common Failure Modes

- **Inside-view forecasting badged as RCF.** Bottom-up plans dressed up with "we think it's similar to..." statements miss the discipline.
- **Reference class too narrow.** Including only successful past projects produces optimistic base rates; include the failures.
- **Reference class too broad.** "Large IT projects" is too general; "ERP rollouts at mid-market financial-services firms" is usable.
- **Adjusting away the base rate.** "Our project is unique because..." is the most common way RCF gets corrupted in practice.

---

## Worked Example

A regional bank plans a core banking modernization. The internal estimate is 24 months and $80M. A reference-class exercise identifies 12 comparable programs at similarly-sized banks completed in the last decade: median duration 41 months, median cost 1.7× budget, two of 12 abandoned before completion. The adjusted forecast: 36–48 months, $110–140M, 15% probability of abandonment. The board rejects the original case, restructures the program into three sequenced phases with explicit kill criteria, and revises the plan to 30 months and $95M with an option to stop after phase 1. The program lands at phase 1 in 14 months — phases 2 and 3 are re-evaluated based on phase 1 outcomes; the total ends at 32 months and $98M. The reference-class exercise saved roughly a year of denial.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
