---
id: 127
name: RACI Framework
category: Business
cardType: standard
tagline: One Accountable per activity — makes transformation accountability visible before it becomes conflict
connections:
  - id: 74
    rationale: RACI operationalises power and interest into specific accountability; stakeholder salience tells you who matters most, RACI tells you who owns each outcome.
  - id: 121
    rationale: RACI makes expectations explicit so agents can't credibly claim they didn't know who owned the outcome.
  - id: 118
    rationale: RACI clarifies who is accountable; mission command specifies the intent within which they act.
  - id: 28
    rationale: RACI matrices mirror organisational structure; the gaps and overlaps in a RACI are often direct reflections of ambiguous org design.
  - id: 125
    rationale: RACI should be built during change design alongside the guiding coalition, not after accountability disputes have already begun.
  - id: 220
    rationale: the RACI is the formal accountability layer; power mapping reveals the informal influence structure beneath it; when the two diverge significantly, the organisation has a governance design problem.
  - id: 129
    rationale: the board/management boundary is the highest-stakes RACI distinction in the organisation; unclear accountability at this level is a primary governance failure mode
  - id: 190
    rationale: Three-Question Ritual operationalises RACI at meeting granularity — Q2 (one Accountable) and Q3 (Informed list) apply the framework in real time before the meeting ends
  - id: 191
    rationale: decision memos (the async alternative to alignment meetings) need a named Accountable to replace the implicit accountability a meeting provides
  - id: 193
    rationale: the Accountable role in RACI only works at the human level when the person holding it understands why the outcome matters; purpose clarity is the prerequisite
  - id: 183
    rationale: authority boundary design answers the same question RACI answers for human workflows — who is Responsible, Accountable, Consulted, and Informed — but for human-AI workflows
  - id: 184
    rationale: the minimal capability principle is the machine-layer answer to the same question RACI answers at the human layer — who has authority to act in this workflow
references:
  - title: "Organization Design: Engaging with Change"
    authorYear: Naomi Stanford (Routledge, 2nd ed., 2013)
    supports: practitioner treatment of accountability structures, role clarity, and how responsibility assignment integrates with broader organisational design.
---

# RACI Framework

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

The RACI Framework assigns accountability clarity: **Responsible** (does the work), **Accountable** (owns the outcome — exactly one per activity), **Consulted** (provides input, two-way), **Informed** (kept updated, one-way). Transformation programmes fail disproportionately at accountability boundaries. RACI makes these gaps visible while there is still time to close them.

Key rule: exactly one Accountable per activity. Two Accountables means no Accountable.

---

## Mental Model

Think of RACI as a way of forcing one question to be answered out loud for every activity: when this goes wrong, whose phone rings? The framework's whole value sits in the Accountable column and its one-per-activity rule. Responsible, Consulted, and Informed describe how work and information flow; Accountable describes where the buck stops. Most accountability failures are not disagreements about who does the work — they are two people each assuming the other owned the outcome, or everyone assuming someone did. RACI makes that assumption explicit on paper, before the gap becomes a failure no one will own.

---

## Practitioner Heuristics

- **Exactly one Accountable per activity — enforce it.** Two Accountables is the most common and most damaging error; it reliably produces an outcome that, when it fails, has no owner.
- **Keep the Consulted list short.** Every Consulted party is a two-way dependency that slows the work; consultation is a cost, not a courtesy, so include only those whose input genuinely changes the outcome.
- **Separate Accountable from Responsible deliberately.** The person who owns the outcome need not do the work, but they must have the authority to direct it; an Accountable without authority is a scapegoat.
- **Build the matrix during change design, not after a dispute.** RACI's value is preventive — it surfaces accountability gaps while there is still time to close them, which is why Kotter-style change work assigns it alongside the guiding coalition.

---

## Common Failure Modes

- **Two Accountables, therefore none.** Splitting accountability to avoid a hard conversation guarantees the conversation happens later, during the failure, with worse information.
- **RACI as bureaucratic theatre.** A matrix built once, filed, and never consulted is documentation, not governance; it works only if people actually use it to resolve "whose call is this?" in real time.
- **Overloading the Consulted column.** Listing everyone with an opinion as Consulted turns every decision into a negotiation and quietly recreates the slowness RACI was meant to remove.
- **Confusing Informed with Consulted.** Telling someone after the fact (Informed) when they expected a say (Consulted) creates the exact turbulence that unwinds decisions — the distinction is not cosmetic.

---

## Worked Example

A transformation programme stalls when a critical integration milestone slips, and the post-incident review finds that the data team believed the platform team owned the cutover while the platform team believed the data team did. Both were Responsible for parts of the work; neither was Accountable for the outcome. A one-line RACI entry — "Cutover: Accountable = Head of Platform; Responsible = data + platform engineers; Consulted = security; Informed = steering committee" — would have surfaced the gap weeks earlier, at the cost of a single explicit conversation. The fix is not more meetings or more documentation; it is naming the single owner of each load-bearing outcome before execution, so that "whose call is this?" never has to be answered during the failure.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
