---
id: 277
name: Value of Information
category: Mathematics
cardType: standard
tagline: Would this information actually change your decision? If not, don't pay for it.
connections:
  - id: 227
    rationale: Expected Value prices a known option; Value of Information prices whether it's worth learning more before choosing between options — a distinct, prior calculation.
  - id: 228
    rationale: Bayesian Updating tells you how to revise a belief once evidence arrives; Value of Information tells you whether it's worth paying to get that evidence in the first place.
  - id: 270
    rationale: a real option is a structural way of buying the right to decide later; Value of Information is the direct calculation of what a specific piece of evidence is worth before you stage that option.
  - id: 233
    rationale: Fermi estimation sizes an answer without hard data because the data isn't worth obtaining, or isn't available; Value of Information is the explicit test for when that trade-off holds.
  - id: 137
    rationale: the direct cost-of-waiting half of the Value of Information calculation — an information source that's perfectly accurate but arrives too late has a lower real value than its accuracy alone suggests.
references:
  - title: "Information Value Theory"
    authorYear: Ronald A. Howard, IEEE Transactions on Systems Science and Cybernetics Vol. 2 No. 1 (1966)
    supports: the founding paper of decision-analytic value-of-information theory.
  - title: "How to Measure Anything: Finding the Value of Intangibles in Business"
    authorYear: Douglas W. Hubbard (2007)
    supports: the practitioner-facing treatment connecting value of information to real business measurement decisions — measure less than you think, but measure what actually matters.
---

# Value of Information

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Value of Information (VoI) is the calculation of how much a piece of additional information is worth before you acquire it — specifically, the expected improvement in decision quality that information would produce, compared against its cost and the cost of the delay required to get it. It answers a question distinct from Expected Value ("what is this option worth?") and Bayesian Updating ("how should this evidence change my belief?"): whether investigating further is itself worth doing, before you know what the investigation will find.

---

## Mental Model

An experienced practitioner treats "should I gather more information?" as its own decision, with its own expected-value calculation — not a reflexive default response to uncertainty. The value of a prospective piece of information is zero if it cannot possibly change the decision you'd make: if every plausible outcome of the investigation still points to the same choice, the information has no decision value, even though it might satisfy curiosity or reduce anxiety.

The value is highest when the decision is close — the current best guess is only marginally ahead of the alternative — and the information source is likely to resolve that closeness one way or the other. VoI is bounded above by the cost of being wrong, and it must be weighed against two costs of acquiring it: the direct cost of the investigation, and the cost of the delay in acting while you wait for the answer. A perfectly informative signal that arrives too late to matter has a lower real value than the naive calculation suggests, once the cost of delay is priced in.

---

## Practitioner Heuristics

- **Ask "could this information change my decision?" before asking "would it be nice to know?"** If every plausible result still leads to the same action, the information has zero decision value regardless of how interesting it would be to learn.
- **Price the cost of delay, not just the cost of the investigation.** A study, pilot, or survey that takes three months to answer a question the market will have already answered by then has a lower real value than its nominal accuracy suggests.
- **The closer the decision, the higher the value of information.** A choice where the current best option leads by a wide margin rarely benefits from more data; a genuine toss-up is exactly where a well-chosen piece of evidence earns its cost many times over.
- **Distinguish information that narrows the decision from information that only adds detail.** A finding that would leave your ranking of options unchanged, however precise, is decoration; a finding that could flip the ranking is the only kind worth paying for.
- **Treat "we need more data" as a claim to be tested, not a default.** Ask explicitly: what result, if we got it, would change what we do next? If no one can answer that, the research isn't decision-relevant yet.

---

## Common Failure Modes

- **Research as a substitute for deciding.** Commissioning more analysis, a bigger pilot, or another round of interviews as a way to defer a decision that already has enough information to make, dressed up as diligence.
- **Ignoring the cost of delay entirely.** Treating an investigation as free simply because its direct cost is small, while the market, competitor, or opportunity moves on during the time spent waiting for the answer.
- **Gathering information that can't move the decision.** Running an experiment or analysis whose full range of plausible outcomes all point to the same action, so the exercise produces confidence without producing decision value.
- **Never gathering the specific information that would resolve genuine uncertainty.** The opposite failure — acting on inside-view confidence on a genuine toss-up where a cheap, fast piece of evidence was available and would have been worth many times its cost.

---

## Worked Example

A product team is deciding whether to build a major new feature, estimated at four months of engineering time. The team is split: half believe it will meaningfully improve retention, half believe it addresses a vocal-but-small segment. Rather than committing to the build or shelving the idea on a hunch, the team asks the VoI question directly: is there a piece of information, obtainable faster and cheaper than the four-month build, that would resolve which half is right?

A two-week landing-page test measuring signup intent, combined with a lightweight concierge version for ten existing customers, would cost roughly two weeks and reveal whether interest is broad or narrow. Both plausible outcomes of that test point to different decisions — build vs. don't — so the information genuinely has decision value, and its cost is small relative to the four-month commitment it could prevent or validate. The team runs the two-week test rather than either building blind or debating indefinitely: the test was worth running because its answer could actually change the plan, and its cost was cheap relative to what a wrong four-month bet would cost.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
