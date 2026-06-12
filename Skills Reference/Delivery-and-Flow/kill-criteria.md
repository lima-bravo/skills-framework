---
id: 153
name: Kill Criteria
category: Delivery & Flow
cardType: standard
tagline: The conditions under which you stop
connections:
  - id: 65
    rationale: kill criteria are a third option (quit) often missing from the binary.
  - id: 53
    rationale: the bias kill criteria are designed to counter.
  - id: 10
    rationale: pre-mortem evidence is one source of kill criteria.
  - id: 251
    rationale: "the same \"decide the threshold before you're invested in the answer\" discipline, extended past launch into the post-approval period: when does a shortfall trigger an honest reckoning rather than a quiet redefinition of success?"
  - id: 137
    rationale: initiatives with collapsed cost of delay are kill candidates.
  - id: 152
    rationale: failed KRs should trigger kill discussions, not redoubled effort.
  - id: 213
    rationale: kill criteria are agreed at Step 5 before any experiment runs; without them, ideas become immortal
  - id: 214
    rationale: kill criteria appear at every stage gate; the chain only works if gate decisions are honoured
  - id: 256
    rationale: an error-budget exhaustion trigger is a pre-committed kill criterion for feature releases, removing the decision from real-time political pressure.
  - id: 204
    rationale: "kill criteria are the organisational instrument of falsification: pre-specifying the conditions under which a hypothesis is rejected before investment creates commitment."
  - id: 205
    rationale: "the structural antidote to consistency bias: pre-specified exit conditions bypass the in-the-moment pressure to remain consistent with prior investment."
  - id: 218
    rationale: every credible business case must state its kill condition at approval time; a case without one is implicitly claiming the investment is unconditional, which is never true.
  - id: 224
    rationale: red team findings often generate the conditions that should be pre-specified as kill criteria; converting adversarial output into operationally binding exit conditions is how the exercise produces durable accountability.
  - id: 189
    rationale: kill criteria applied at each rung of the Experiment Ladder prevent motivated reasoning from carrying a failing assumption forward to a more expensive test.
  - id: 241
    rationale: "kill criteria are the antidote to Parkinson expansion in projects: pre-defined conditions under which work stops, preventing indefinite scope growth."
  - id: 144
    rationale: outcome thinking is what makes kill criteria honest — the kill trigger should be "the outcome metric did not move," not "we ran out of time."
references:
  - title: "Quit: The Power of Knowing When to Walk Away"
    authorYear: Annie Duke (2022)
    supports: the psychology of quitting and the value of pre-committing to exit criteria before sunk-cost attachment sets in.
  - title: Thinking in Bets
    authorYear: Annie Duke (2018)
    supports: the decision-making framework for setting kill criteria in advance, before emotional commitment to an outcome.
  - title: The Hard Thing About Hard Things
    authorYear: Ben Horowitz (2014)
    supports: the practitioner account of difficult product and company decisions including when to kill initiatives.
---

# Kill Criteria

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Kill criteria are pre-committed conditions under which an initiative, bet, or investment will be stopped — defined and written down before the work begins. Annie Duke's *Quit* (2022) names them the missing decision-making discipline that distinguishes professional poker (where stopping is a core skill) from most organizational decision-making (where stopping is taboo). Kill criteria turn "should we continue?" from an open political negotiation into a check against pre-existing commitments — and so let teams quit cleanly when the evidence supports it.

---

## Mental Model

Imagine setting out on a hike. You can commit to one of two stances: "we'll reach the summit no matter what" — which sounds determined but loses people to weather, exhaustion, and injury — or "we turn back if we haven't crossed the saddle by 2 PM" — which sounds defeatist but produces more summit attempts over a lifetime, with better safety. Most organizational initiatives operate on the first stance. Kill criteria install the second. The trick is that they have to be pre-committed; deciding mid-hike whether to turn back is dominated by sunk cost and identity.

---

## Practitioner Heuristics

- **Write kill criteria into the funding decision.** Same document, same approver. Once funded without them, they almost never get added later.
- **Make them specific and observable.** "If X metric is below Y at month 3" beats "if it's not going well."
- **Define both leading and lagging.** Lagging criteria (revenue, retention) trigger the kill; leading criteria (engagement, signup rate) trigger the warning.
- **Pre-commit the decision-maker.** Naming who decides under what evidence shortens the political path to a kill.
- **Don't confuse kill with pause.** Some initiatives pause for external reasons; kill criteria are about intrinsic non-viability.

---

## Common Failure Modes

- **Sunk-cost re-litigation.** Without pre-commitment, the kill conversation becomes a debate about everything already invested.
- **Kill criteria as theater.** Written in funding decks, never reviewed against the data, never enforced.
- **Identity-based persistence.** "We are the team that ships X" makes the kill feel like losing the team's purpose; address this upstream.
- **Killing only obvious losers.** The hard kill is the initiative that's running fine but failing the original outcome thesis.

---

## Worked Example

A bank's innovation portfolio funds 12 internal startups, each with a 12-month runway. Without kill criteria, all 12 are still alive at month 14, four are struggling, three are quietly dead-but-funded, and the program is over budget. The next cohort installs explicit kill criteria: each startup commits, in writing, to 3-month leading-indicator thresholds and 6-month outcome thresholds. At month 6, the portfolio committee kills 4 of 10 startups in a single 90-minute meeting — none of which would have been killed under the previous regime. Capital and people are reallocated; the surviving 6 receive more focus; two go on to material business impact. The most-discussed outcome in the next year's report is not the wins; it is that the kills happened cleanly and without political damage.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
