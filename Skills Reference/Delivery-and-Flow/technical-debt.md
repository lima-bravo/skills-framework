---
id: 255
name: Technical Debt
category: Delivery & Flow
cardType: standard
tagline: Every shortcut you take today is a tax on every delivery tomorrow.
connections:
  - id: 133
    rationale: technical debt is one of the primary causes of low flow efficiency; it converts active work time into rework and incident response.
  - id: 142
    rationale: Change Failure Rate and MTTR are the leading indicators of technical debt's interest payment in production systems.
  - id: 131
    rationale: debt reduces effective throughput, which shows up as rising cycle time for a given WIP level.
  - id: 18
    rationale: accumulated debt often becomes the primary constraint on delivery throughput; treating it as anything else (a morale problem, a planning problem) misses the leverage point.
  - id: 260
    rationale: adding engineers to a high-debt system is a classic symptomatic fix that delays addressing the fundamental problem and often adds more debt in the process.
  - id: 256
    rationale: debt increases incident rate, which forces a reliability-vs-velocity trade-off that the team did not choose to make.
references:
  - title: "The WyCash Portfolio Management System"
    authorYear: Ward Cunningham (1992)
    supports: the original introduction of the technical debt metaphor — Cunningham's analogy between design shortcuts and financial debt, and the compounding interest paid in future delivery slowdowns.
  - title: Working Effectively with Legacy Code
    authorYear: Michael C. Feathers (2004)
    supports: Practical techniques for changing high-debt code safely — the operational face of debt repayment.
  - title: "Accelerate: The Science of Lean Software and DevOps"
    authorYear: Nicole Forsgren, Jez Humble & Gene Kim (2018)
    supports: DORA metrics (change failure rate, MTTR) as leading indicators of technical debt's interest payment.
---

# Technical Debt

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Technical debt is Ward Cunningham's metaphor (1992) for the accumulated cost of design and implementation decisions that were expedient at the time but that now slow down future work. Like financial debt, it compounds: a small shortcut incurs a small interest payment (extra time to work around the decision); left unaddressed, the interest grows until it dominates delivery. Unlike financial debt, technical debt is largely invisible in planning — no one writes it on a balance sheet, and the interest is paid diffusely across hundreds of future tasks rather than as a single line item. This invisibility is its primary organizational danger. The concept is distinct from the financial Debt card (which concerns leverage and balance-sheet structure); technical debt is a **flow constraint** — it degrades throughput, increases incident load, and raises the cost of every change.

---

## Mental Model

Imagine a kitchen where the previous cook never cleaned as they went. The dishes are done, but every surface is covered in residue. The next cook can still cook — but it takes twice as long to find a clean pan, three times as long to access the stove, and every twenty minutes something catches fire because of the grease buildup. That is technical debt at scale. The original shortcuts did not prevent delivery; they re-allocated cost from the moment of creation to every moment of future use. A codebase with high technical debt does not refuse to deliver features — it delivers them at increasing cost, with increasing incident rates, until the interest payments exceed the capacity for new work. At that point, the debt is no longer an investment decision; it is an existential constraint on the engineering system.

---

## Practitioner Heuristics

- **Name the debt before it accumulates.** The most dangerous technical debt is debt no one has named — where decisions were made implicitly and the cost is being paid without anyone recognising why delivery is slowing. When a shortcut is taken, make it explicit: "we're taking on debt here, the cost is X, we plan to repay it by Y."
- **Distinguish types: deliberate vs. inadvertent, prudent vs. reckless.** Deliberate-prudent debt ("we know this design is suboptimal, but we need to ship") is a business decision with a known cost. Inadvertent-reckless debt ("we didn't know that was a shortcut") is an engineering failure. They require different responses. Conflating them leads to either over-penalizing engineers or under-managing the business decision.
- **Measure the interest payment, not the principal.** The principal (the full refactor cost) is often too large to motivate action. The interest — "how many hours per sprint does this module cost us in workarounds and incidents?" — is small enough to be actionable and compelling to non-technical stakeholders.
- **Treat debt repayment as non-negotiable capacity.** Organizations that treat debt repayment as optional ("we'll do it when we have slack") never have slack. Reserve a fixed percentage of capacity — 15–20% is a common heuristic — for debt repayment as a budget item, not a discretionary spend.
- **Watch for debt hiding in incident load.** A rising incident rate without a corresponding increase in new functionality is often a symptom of accruing technical debt, not a random quality fluctuation. DORA's Change Failure Rate and MTTR metrics make this visible.
- **Debt begets debt.** High-debt codebases attract further debt because workarounds are faster than the now-costly clean approach. Without intervention, debt accumulates superlinearly.

---

## Common Failure Modes

- **Treating debt as a balance-sheet asset.** Some organizations speak of technical debt as "investment" that will eventually be repaid — which is true in theory but allows indefinite deferral in practice. Debt is a liability with compounding interest; frame it that way.
- **Invisible accumulation.** Shortcuts taken without being named or tracked produce a system whose slowness is blamed on poor engineers rather than on the structural cost being paid. The symptom (slow delivery) is treated with more resources, which adds more shortcuts, which adds more debt.
- **Big-bang refactors as the only repayment strategy.** Waiting until debt is large enough to justify a full rewrite (a) means paying high interest for years and (b) usually fails because the rewrite also accumulates debt. Incremental repayment — the "boy scout rule" (leave the campsite cleaner than you found it) — is more sustainable.
- **Confusing legacy code with technical debt.** Old code is not inherently debt. Code that is never changed incurs no interest; the interest is paid only when that code must be understood or modified. Stable legacy systems are often not worth refactoring at all.
- **Paying down debt on the wrong modules.** Refactoring code that is rarely touched repays very little interest. Focus debt repayment on high-change, high-incident modules — the ones whose interest payments are largest.

---

## Worked Example

An engineering org has been delivering features at a declining rate for 18 months despite stable team size. Leadership attributes the slowdown to poor planning. A technical debt audit reveals: the core transaction service is 6 years old, has no test coverage, and requires a full regression cycle for any change (average: 3 days). Two teams spend 30–40% of their sprint capacity working around a data model decision made in year one. Incident MTTR is 4× the industry benchmark because the deployment pipeline requires manual steps. Total interest payment: ~35% of engineering capacity per sprint, or ~14 team-months of capacity per year — invisible in any planning document. The debt repayment plan: (1) 20% capacity reserved for debt work; (2) transaction service prioritized first (highest change frequency + highest incident rate); (3) data model remediation next (two-team drag). Twelve months later, deployment frequency has doubled, incident MTTR has returned to benchmark, and feature velocity is back to year-one rates — with no additional headcount.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
