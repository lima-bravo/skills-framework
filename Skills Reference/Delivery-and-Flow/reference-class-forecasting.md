# Reference Class Forecasting
*Forecast by base rate, not by inside-view storytelling*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Reference Class Forecasting (RCF) is a forecasting method developed by Daniel Kahneman and Amos Tversky and operationalized for large projects by Bent Flyvbjerg: estimate a project's outcome by identifying a class of comparable past projects ("the reference class") and adjusting their base-rate distribution for the specifics of the current project. The method consistently outperforms inside-view forecasts — those built from the bottom up by the people closest to the project — because inside-view forecasts systematically underweight base rates and overweight optimism. Flyvbjerg's research across thousands of major infrastructure projects shows reference-class forecasts cut overruns dramatically.

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

## Connections

→ [**Planning Fallacy**](../Psychology/planning-fallacy.md) — the cognitive bias RCF counters.
→ [**Probabilistic Forecasting**](probabilistic-forecasting.md) — the team-level analogue using a team's own history as reference class.
→ [**Pre-mortem**](../General-Thinking/pre-mortem.md) — complementary technique: imagine failure, then forecast it.
→ [**Margin of Safety**](../Systems/margin-of-safety.md) — the buffer RCF justifies in scope, cost, and time.
→ [**Outside View**](#) — the cognitive frame RCF operationalizes.

---

## References

- *Thinking, Fast and Slow* — Daniel Kahneman (2011).
- *How Big Things Get Done* — Bent Flyvbjerg & Dan Gardner (2023).
- "From Nobel Prize to Project Management" — Bent Flyvbjerg (Project Management Journal, 2006).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
