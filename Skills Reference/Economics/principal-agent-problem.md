---
id: 121
name: Principal–Agent Problem
category: Economics
cardType: standard
tagline: When you delegate, the person acting on your behalf has different information and different incentives
connections:
  - id: 120
    rationale: "the operational mechanism: the metrics principals use to monitor agents become gameable targets"
  - id: 220
    rationale: power gaps often correspond to principal-agent misalignments; mapping who actually decides versus who formally decides surfaces where the agency problem is structurally embedded
  - id: 222
    rationale: coalition members are agents whose private incentives may not fully align with the coalition's stated purpose; the principal-agent lens predicts where fracture is most likely
  - id: 51
    rationale: the primary tool for mitigation
  - id: 237
    rationale: "many cobra dynamics are principal-agent problems: agents responsible for a change programme optimise for programme metrics rather than the underlying outcome"
  - id: 14
    rationale: principals draw conclusions about agents from limited observable data
  - id: 104
    rationale: agents with low psychological safety optimise for appearance, worsening the gap
  - id: 229
    rationale: misaligned principal-agent incentives create equilibria where agents act against the principal's interest; changing the equilibrium requires changing the payoff structure
  - id: 230
    rationale: "principal-agent relationships often have a Prisoner's Dilemma structure: agents defect from principal interests when individual incentives dominate"
  - id: 231
    rationale: when multiple agents share access to resources owned by a principal, the commons dynamic compounds the agency problem
  - id: 262
    rationale: "the constructive discipline: incentive design is how you narrow the gap this model describes"
  - id: 232
    rationale: agents who benefit from a shared resource without contributing create a free-rider structure that compounds the principal-agent misalignment
  - id: 127
    rationale: RACI makes accountability expectations explicit so agents can't credibly claim they didn't know who owned the outcome; it is the structural intervention that closes the principal-agent information gap at the task level.
  - id: 244
    rationale: Organisational Degradation Scan applies the Principal–Agent Problem in Step 7 — identifying where individual incentives are most misaligned with organisational goals and sustaining degradation
  - id: 124
    rationale: Organizational Culture shapes how agents interpret their principal's intent; basic assumptions determine whether delegation or self-interest fills the gap
  - id: 126
    rationale: risk governance depends on agents internalising accountability for the risks they create; without aligned incentives the Three Lines collapse into box-ticking
  - id: 129
    rationale: Board Governance is the institutional architecture for managing owner/executive agency risk — the structural response to the principal–agent problem at the top of the organisation
  - id: 221
    rationale: when you influence an agent whose interests diverge from the principal's, the influence may not produce the organisational outcome you intended — understand whose interests you are actually activating
  - id: 242
    rationale: "the Peter Principle creates principal-agent misalignment: the organisation promotes believing it is rewarding performance, while inadvertently degrading the capability of the role the promoted person now occupies"
  - id: 183
    rationale: AI authority boundaries are the operational implementation of principal-agent theory in agentic systems — they define what the agent may commit without re-authorization from the principal
  - id: 268
    rationale: "generation is an unsupervised agent — a brilliant, overconfident colleague who never says \"I'm not sure\"; verification and control are the principal's mechanisms for checking an agent whose incentives and information are only partly visible"
references:
  - title: "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure"
    authorYear: Michael C. Jensen & William H. Meckling, Journal of Financial Economics Vol. 3 No. 4 (1976)
    supports: the foundational paper formalising the principal–agent relationship, agency costs, and the structural role of information asymmetry.
  - title: The Handbook of Organizational Economics
    authorYear: Robert Gibbons & John Roberts eds. (2013)
    supports: comprehensive academic treatment of organisational economics including principal–agent theory, incentive design, and firm boundaries.
  - title: "Predictably Irrational: The Hidden Forces That Shape Our Decisions"
    authorYear: Dan Ariely (2008)
    supports: illustrates how agents behave against their stated interests in ways that are predictable and structural rather than random.
---

# Principal–Agent Problem

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

The Principal-Agent Problem describes the tension that arises when one party (the **principal**) delegates decision-making authority to another party (the **agent**) who has different information and potentially different interests. Formalised by Jensen and Meckling in 1976, the problem is pervasive: shareholders vs. executives, executives vs. managers, clients vs. contractors, patients vs. doctors.

Two distinct dynamics: **adverse selection** (before the relationship begins — the agent has private information the principal lacks) and **moral hazard** (after the relationship begins — effort and decisions are hard to observe, and the agent may act in their own interest).

---

## Mental Model

Classic mitigations: **incentive alignment** (make the agent's payoff track the principal's outcomes), **screening** (better selection mechanisms), **monitoring** (metrics, audits), and **signalling** (costly observable demonstrations of type like credentials).

Each mitigation has costs: incentive alignment introduces Goodhart's Law risk; monitoring creates overhead and erodes trust. The art is choosing the right combination for the relationship.

---

## Practitioner Heuristics

- **Diagnose adverse selection vs. moral hazard — they need different tools.** Hidden information before the relationship (adverse selection) is addressed by screening and signalling; hidden action after it (moral hazard) is addressed by incentive alignment and monitoring. Applying the wrong tool wastes effort.
- **Align payoffs to outcomes, but watch the Goodhart cost.** Tying the agent's reward to the principal's result is the strongest lever and the one most likely to create a gameable target; design the metric knowing it will be optimised directly.
- **Price the cost of each mitigation.** Monitoring erodes trust and adds overhead; incentive alignment imports Goodhart risk; signalling is expensive by design. The art is the cheapest combination that closes the specific gap.
- **Make expectations explicit so "I didn't know" stops being available.** A clear, written account of what the agent is accountable for removes the most common excuse and is the precondition for any monitoring to be fair.
- **Treat low psychological safety as an amplifier.** Agents who fear consequences optimise for appearance over outcome, widening the gap you are trying to close; the structural fix often runs through culture, not contracts.

---

## Common Failure Modes

- **Over-monitoring into distrust.** Piling on audits and metrics signals that agents are not trusted, eroding the intrinsic motivation monitoring can never replace and often making the gap worse.
- **Incentive alignment that creates a new Goodhart target.** "Make the agent's payoff track the outcome" works until the agent games the chosen proxy; alignment is not a one-time fix but an ongoing design problem.
- **Ignoring adverse selection at the hiring or contracting stage.** Focusing entirely on managing behaviour after the relationship begins, while doing nothing to screen for type beforehand, leaves the cheaper intervention on the table.
- **Assuming the principal's interest is self-evident.** Agents cannot align with an outcome that was never clearly specified; ambiguity about what the principal actually wants is frequently mistaken for agent misalignment.

---

## Worked Example

A company pays its sales force a commission purely on bookings to align reps (agents) with growth (the principal's goal). The incentive aligns the wrong thing: reps optimise the metric they are paid on, closing low-quality deals with generous discounts and over-promised terms that inflate bookings while customer churn and support cost rise. This is a textbook principal-agent failure with a Goodhart mechanism inside it — the proxy (bookings) was aligned, the actual goal (profitable, durable revenue) was not. The fix is not more monitoring of the reps but better-specified alignment: pay on retained, profitable revenue measured over time, screen for reps whose track record signals the right type (adverse selection), and make the real objective explicit so that "I hit my number" can no longer mean "I acted against the company's interest."

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
