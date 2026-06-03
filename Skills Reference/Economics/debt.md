# Debt
*Borrowing against future capacity*

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Debt is the practice of using future resources to meet present needs — creating an obligation to the future in exchange for present capability. In finance, debt is capital borrowed and repaid with interest. In technology, "technical debt" is the accumulated cost of expedient code decisions. In organizations, "process debt" is the backlog of operational improvements deferred. In personal life, any commitment of future time or attention that limits future optionality is a form of debt.

The universal principle: debt enables present action at the cost of future flexibility and total wealth (the interest). It is neither inherently good nor bad — it depends on what you do with the borrowed capacity and what rate you pay for it.

---

## Mental Model

Think of debt as trading future optionality for present action. When the present action produces returns greater than the interest cost, debt was the right call. When returns don't materialize or the interest compounds faster than returns, debt becomes a trap. The practitioner's question for any form of debt: *"What is the interest rate? What is the expected return on what I'm using the debt for? And what is my capacity to service the obligation if returns disappoint?"*

---

## Practitioner Heuristics

- **Name all forms of debt explicitly.** Financial debt is visible on a balance sheet. Technical debt, organizational debt, and commitment overload are invisible unless explicitly tracked. Make them visible.
- **Distinguish good debt from bad debt.** Good debt: low interest, used for investments with predictable returns above the interest rate, serviceable under adverse scenarios. Bad debt: high interest, used for consumption, not serviceable if assumptions disappoint.
- **Schedule debt repayment or it compounds.** Technical debt that is never actively addressed grows as the codebase and team scale. Set explicit budgets (e.g., 20% of engineering capacity to debt reduction) and protect them.
- **Understand the interest rate before taking on the debt.** The interest rate on technical debt rises as the codebase becomes more dependent on the expedient solution. Fix early (low interest) or late when it's blocking critical work (high forced interest).
- **Never take on debt you cannot service in the stress scenario.** Model the worst credible outcome. If debt obligations are not serviceable in that scenario, the debt is too large.

---

## Common Failure Modes

- **Invisible debt accumulation.** Small deferrals, expedient shortcuts, and growing backlogs that individually seem trivial but compound into an existential problem.
- **Debt-funded consumption rather than investment.** Using debt (financial or otherwise) for running costs, not capital investment. This produces the obligation without the asset.
- **Interest blindness.** Focusing on the nominal amount of debt without accurately modeling the interest cost (compounding, future friction, option loss).

---

## Worked Example

A startup ships their MVP with no automated testing, a monolithic architecture, and hardcoded configuration values. They took on significant technical debt to reach market quickly. This was probably correct — the alternative was shipping much later with less evidence of product-market fit. Eighteen months later, the codebase has grown substantially, the team has doubled, and every feature takes three times longer to ship than it did at month 6. Deployment failures are frequent. The interest on the technical debt is now being paid daily in engineering velocity. The team schedules a six-week "debt sprint" — roughly the interest rate made explicit as a required investment.

---

## Connections

→ [**Compounding**](../Mathematics/compounding.md) — debt compounds when not serviced; understanding compounding makes debt dynamics legible.
→ [**Margin of Safety**](../Systems/margin-of-safety.md) — debt reduces margin of safety by creating fixed future obligations; the two must be considered together.
→ [**Trade-offs**](trade-offs.md) — taking on debt is a trade-off between present capability and future flexibility.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
