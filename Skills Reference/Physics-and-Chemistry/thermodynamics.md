---
id: 46
name: Thermodynamics
category: Physics & Chemistry
cardType: standard
tagline: Energy transforms but never disappears — and entropy always increases
connections:
  - id: 17
    rationale: balancing feedback loops are the mechanisms that fight entropy; they require energy to operate.
  - id: 24
    rationale: the second law suggests things will degrade; margin of safety is the buffer for that degradation.
  - id: 25
    rationale: churn is entropy in a customer base; it is the natural tendency absent active retention investment.
references:
  - title: "The Laws of Thermodynamics: A Very Short Introduction"
    authorYear: Peter Atkins (2010)
    supports: the concise authoritative treatment of the four laws.
  - title: "Antifragile: Things That Gain from Disorder"
    authorYear: Nassim Nicholas Taleb (2012)
    supports: "the organizational implication of the second law: entropy as the baseline, resilience as the goal."
  - title: A Mathematical Theory of Communication
    authorYear: Claude E. Shannon (1948)
    supports: "formally defined information entropy, showing it is mathematically equivalent to thermodynamic entropy: disorder in a message corresponds to disorder in a physical system."
---

# Thermodynamics

**Category:** [Physics & Chemistry](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

The laws of thermodynamics describe the fundamental constraints on energy and entropy. The first law: energy is conserved — it can be transformed but not created or destroyed. The second law: in any closed system, entropy (disorder) increases over time — systems naturally tend toward disorganization unless energy is actively invested to maintain order. The third law: at absolute zero, entropy is zero. For practitioners, the second law is the most practically important: complexity, disorder, and degradation are the natural tendency of any system; order requires continuous active energy investment.

---

## Mental Model

Left alone, everything tends toward entropy. Code becomes legacy. Organizations become bureaucratic. Customer relationships drift. Product experience decays relative to rising expectations. The practical insight: maintenance is not the absence of work — it is continuous active effort just to stay in place. Any system that looks well-maintained from the outside has had significant energy invested in it invisibly. The practitioner accounts for this: what is the energy cost of maintaining what we've built, and is it covered in our resource planning?

---

## Practitioner Heuristics

- **Plan explicitly for maintenance energy, not just build energy.** Most plans account for the energy to create; few account for the energy to maintain. The result is entropy creep: gradual degradation of the system after initial investment ends.
- **Identify the rate of entropy in each domain.** Some systems decay slowly (a well-written policy document); others decay rapidly (a product's UX relative to rising user expectations). Allocate maintenance investment proportional to decay rate.
- **Efficiency can reduce the energy required to maintain order, but not eliminate it.** Building more efficient systems (better tooling, automation, clearer processes) lowers the maintenance energy required per unit of order. But it doesn't eliminate the need; it lowers the cost.
- **Differentiation creates entropy in organizations.** As organizations scale, natural entropy drives them toward "average" — similar processes, similar culture, similar incentives. Maintaining differentiation requires active energy investment.
- **Closed systems maximize entropy; open systems can reduce local entropy.** An organization that imports talent, ideas, and external feedback is an open system that can maintain low entropy by exporting it to the environment. Closed organizations that stop importing become self-referential and entropic.

---

## Common Failure Modes

- **Entropy blindness.** Not noticing gradual decay because it happens slowly. The product that was excellent five years ago is now average, not because anything changed suddenly but because expectations and competitors advanced while maintenance energy was under-invested.
- **Energy directed at symptoms rather than entropy sources.** Fixing visible problems (the broken feature, the underperforming team) while the underlying entropy source (technical debt, culture drift, unclear strategy) continues to generate disorder.

---

## Worked Example

A company's internal knowledge base is excellent when first built. Three years later, it is actively misleading: articles reference retired products, processes that changed are described incorrectly, and links are broken. No malicious act caused this; entropy did. Nobody invested energy in maintaining it. The organizational equivalent of the second law: without a maintenance process (ownership of every article, quarterly review cadence, deprecation policy), the system degraded to maximum disorder. Rebuilding it costs more energy than maintaining it would have.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
