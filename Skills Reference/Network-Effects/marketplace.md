---
id: 84
name: Marketplace
category: Network Effects
cardType: standard
tagline: Platforms that match supply and demand
connections:
  - id: 82
    rationale: marketplace value grows through cross-side network effects.
  - id: 22
    rationale: marketplace liquidity is the specific form of critical mass for marketplace models.
  - id: 101
    rationale: marketplace trust infrastructure is the mechanism that makes transactions between strangers possible.
references:
  - title: "Platform Revolution: How Networked Markets Are Transforming the Economy"
    authorYear: G.G. Parker, M.W. Van Alstyne & S.P. Choudary (2016)
    supports: the definitive framework for marketplace design, including cold-start and liquidity mechanics.
  - title: "The Cold Start Problem: How to Start and Scale Network Effects"
    authorYear: Andrew Chen (2021)
    supports: the sequencing of marketplace supply and demand to escape the chicken-and-egg trap.
---

# Marketplace

**Category:** [Network Effects](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A marketplace is a platform that facilitates transactions between buyers and sellers who would not easily find each other otherwise. The marketplace creates value by reducing search costs (buyers find relevant sellers) and transaction costs (trust, payments, dispute resolution). Successful marketplaces capture a portion of this value through take rates (percentage of transaction value). The structural challenge is the chicken-and-egg problem: the marketplace is more valuable with more supply and more demand, but supply won't come without demand and demand won't come without supply.

---

## Mental Model

A marketplace has two distinct user populations with distinct needs and distinct supply-side and demand-side network effects. The platform's job is to serve both simultaneously. The unit economics have a specific structure: gross merchandise value (GMV) × take rate = revenue, with both the supply and demand acquisition costs as inputs to the customer acquisition cost. The practitioner models the liquidity (the probability that a buyer finds a suitable seller) as the core health metric.

---

## Practitioner Heuristics

- **Solve the chicken-and-egg by constraining the problem.** Launch in one geography, one vertical, or one use case where you can achieve high density of both supply and demand rather than thin coverage everywhere.
- **Choose which side to subsidize in the launch phase.** One side of the marketplace is typically harder to acquire or more important to the value proposition. Subsidize that side to create the density that attracts the other side organically.
- **Measure liquidity as your primary health metric.** Liquidity (what percentage of searches or requests are fulfilled?) is more predictive of marketplace health than GMV or user counts. A large marketplace with low liquidity will fail regardless of size.
- **Trust infrastructure is not optional.** Marketplaces facilitate transactions between strangers. Review systems, identity verification, payments infrastructure, and dispute resolution are the trust layer that makes this possible. Under-investing in trust destroys liquidity.
- **Build for the long tail, not just the top supply.** A marketplace dominated by a few large suppliers (supply concentration) is fragile and doesn't capture the long-tail value that distinguishes marketplaces from aggregators.

---

## Common Failure Modes

- **Disintermediation.** Buyers and sellers who meet on the platform take future transactions off-platform to avoid fees. Design the marketplace so the platform provides ongoing value in the transaction (insurance, dispute resolution, trust signals) that makes staying on-platform worth the take rate.
- **Multi-homing fragility.** Buyers and sellers who participate in multiple competing marketplaces simultaneously have low switching costs. Defensibility requires creating value that is exclusive to or more concentrated on your platform.

---

## Worked Example

Airbnb's early chicken-and-egg solution: the founders craigslist-scraped attractive listings, contacted hosts directly, and offered to professionally photograph their properties for free. This created a supply-side subsidy (free photography) that improved listing quality (demand-side value) and created a supply density in specific geographies (San Francisco and New York first) that made the demand-side experience credible. Neither supply nor demand would have come first without the artificial stimulus.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
