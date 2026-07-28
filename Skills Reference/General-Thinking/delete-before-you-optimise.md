---
id: 263
name: Delete Before You Optimise
category: General Thinking
cardType: standard
tagline: Never optimise what shouldn't exist
connections:
  - id: 284
    rationale: the necessary counterweight — this card's aggressive default toward removal needs Chesterton's Fence as a companion, so that "no one uses this" or "no one knows why we do this" gets investigated before deletion rather than treated as sufficient grounds on its own.
  - id: 0
    rationale: first principles identifies what must be true at bedrock; Delete Before You Optimise asks which requirements need to exist at all before any rebuilding begins.
  - id: 1
    rationale: inversion asks what you want to avoid; Delete Before You Optimise asks which requirements and steps to eliminate — together they form a complete challenge of any system's design.
  - id: 3
    rationale: Occam's Razor prunes explanations to the minimum necessary; Delete Before You Optimise applies the same parsimony to requirements before execution begins.
  - id: 33
    rationale: optimisation is step three, not step one — the Optimization card assumes the options presented are worth pursuing; this card challenges that assumption first.
  - id: 35
    rationale: efficiency measures how well you execute; this discipline asks whether to execute at all — the two are complements, applied in sequence.
  - id: 139
    rationale: Value Stream Mapping surfaces which steps add no value (muda); it is the diagnostic instrument for identifying what to delete before any improvement work begins.
  - id: 241
    rationale: Parkinson's Law explains why unnecessary work persists — it expands to fill available time; Delete Before You Optimise is the active countermeasure.
references:
  - title: Elon Musk
    authorYear: Walter Isaacson, 2023
    supports: documents the five-step algorithm applied across SpaceX and Tesla — make requirements less dumb, delete, simplify, accelerate, automate — in that sequence only.
  - title: The Effective Executive
    authorYear: Peter F. Drucker, 1967
    supports: the foundational formulation that efficiency applied to unnecessary work produces no value.
  - title: Toyota Production System
    authorYear: Taiichi Ohno, 1978
    supports: muda (non-value-adding activity) as the primary waste category to eliminate before improving value-adding steps.
---

# Delete Before You Optimise

**Category:** [General Thinking](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Delete Before You Optimise is the discipline of questioning whether each requirement, part, or process step should exist at all before asking how to perform it better. The correct sequence for improving any system is: (1) challenge every requirement — treat each as guilty until proven innocent; (2) attempt to delete the part, step, or constraint; (3) simplify what survives deletion; (4) only then optimise. Inverting this sequence embeds waste permanently: an optimised unnecessary step becomes entrenched; an automated bad process scales the mistake and binds it into the architecture.

The principle has independent roots across disciplines. Drucker stated it plainly in 1967. Toyota's *muda* discipline centres on eliminating non-value-adding work before improving value-adding work. Elon Musk codified it as the explicit first step of a five-part engineering algorithm — applied to rocket engine component counts, automotive assembly lines, and factory layouts — and noted that the most dangerous requirements are those from smart or senior people, precisely because no one questions them.

---

## Mental Model

The instinct when handed a system to improve is to ask "how do we do this better?" The correct first question is "does this need to exist?" Every requirement that survives deletion scrutiny earns its place. Every requirement accepted without challenge is potential permanent complexity.

The signal that this discipline is missing: your team is debating how to improve something that, on inspection, exists to compensate for a flaw upstream that could simply be fixed. The approval step that catches errors introduced by the previous step. The report generated because someone once needed it. The validation check that guards against an input that the source system no longer produces.

The test for sufficient deletion: if you are not adding back at least 10% of what you proposed to delete, you are not deleting enough. The bias toward preservation is overwhelming — fight it actively.

---

## Practitioner Heuristics

- **Before touching execution, challenge every requirement.** Ask: what breaks if this step doesn't exist? If the answer is "nothing, but it's always been done this way," it is a candidate for removal.
- **Prioritise requirements from smart or senior people.** They are rarely questioned, which is why they accumulate. The most established constraints deserve the most scrutiny.
- **Maintain the sequence: delete → simplify → optimise → automate.** Automating before deleting encodes waste. Optimising before simplifying polishes the wrong thing.
- **Ask whether the upstream cause can be fixed instead.** Many necessary steps exist to compensate for problems elsewhere. Eliminate the source, and the compensating step disappears with it.
- **Count parts, steps, and approvals as liabilities.** Each adds coordination cost, failure points, and cognitive load. The burden of proof is on existence, not removal.

---

## Common Failure Modes

- **Optimising the unnecessary.** Improving the speed, quality, or cost of a step that should be eliminated. It now performs better, making it harder to remove and harder to justify questioning next time.
- **Premature automation.** Building tooling or software around a process before asking whether the process is necessary. Automation scales the mistake and embeds it in the technical architecture.
- **Treating inherited requirements as fixed.** Accepting that a constraint has always been there as sufficient justification for its continued existence. The age of a requirement is not evidence of its validity.

---

## Worked Example

A logistics company wants to reduce new supplier onboarding from 22 days. The conventional response: map the process, identify bottlenecks, apply lean tools to the slowest steps. The delete-before-you-optimise response: for each approval step, ask why it exists. Step 4 (legal review of contract terms) turns out to exist because procurement had once been permitted to negotiate non-standard clauses, creating legal exposure. Restricting procurement to pre-approved terms makes the review redundant — the 3-day step disappears. Step 7 (finance sign-off on payment terms) exists for the same reason; same fix. The process goes from 22 steps to 14 before a single step is optimised. Cycle time drops from 22 days to 9 without any efficiency improvement — purely through deletion.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
