---
id: 279
name: Externalities
category: Economics
cardType: standard
tagline: If you don't pay for the damage, you'll do more of it than makes sense for anyone but you
connections:
  - id: 39
    rationale: Interdependence maps that parties are connected; Externalities names the specific pattern where a cost or benefit of one party's decision falls on another who has no say in it — a cost-shifting relationship, not just a connection.
  - id: 231
    rationale: Tragedy of the Commons is the special case of a negative externality on a shared, depletable resource; the general remedy — internalise the cost — is the same logic applied more narrowly.
  - id: 232
    rationale: the Free Rider Problem is the special case of a positive externality on a public good — the general pattern of under-provision when the provider can't capture the full benefit, applied to non-excludable goods specifically.
  - id: 262
    rationale: Incentive Design is the practical discipline for closing the exact gap Externalities describes — realigning what a decision-maker pays or captures with what they actually cause.
  - id: 255
    rationale: technical debt taken on by one team but serviced by another is an internal-organisational externality — the same cost-shifting pattern, inside a single company rather than between a firm and society.
references:
  - title: "The Problem of Social Cost"
    authorYear: Ronald H. Coase, Journal of Law and Economics Vol. 3 (1960)
    supports: the foundational paper reframing externalities as a reciprocal problem of property rights and transaction costs, not simply a case for taxation.
  - title: "The Economics of Welfare"
    authorYear: Arthur C. Pigou (1920)
    supports: the original formal treatment of externalities and the case for corrective taxation — the "Pigouvian tax."
---

# Externalities

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

An externality is a cost or benefit of an action that falls on a party who did not choose to be part of the transaction or decision producing it — a factory's pollution costs the neighbouring town, a well-maintained garden raises the whole street's property values, a noisy open-plan office imposes a focus cost on everyone nearby. A negative externality means the decision-maker's private cost is lower than the true social cost, so the activity gets systematically over-produced relative to what's optimal for everyone combined. A positive externality means the private benefit captured is lower than the social benefit created, so the activity gets systematically under-produced. Tragedy of the Commons and the Free Rider Problem are specific, well-known instances of this general pattern, but the underlying mechanism — and the standard remedies — are broader than either special case.

---

## Mental Model

An experienced practitioner asks, of any decision, cost, or design: who bears the cost, and who captures the benefit — and are those the same people who are actually deciding? Whenever the answer is no, expect the decision-maker's private calculus to diverge from what's actually best in aggregate, in a specific and predictable direction: costs the decision-maker doesn't bear get produced too much, benefits the decision-maker doesn't capture get produced too little. This is not a claim about bad faith — a factory owner minimising cost by not filtering emissions, or an engineering team shipping fast by taking on technical debt another team will service later, are both making locally rational decisions. The externality is a structural feature of who pays and who decides being different people, not a character flaw in either.

The standard fixes work by closing that gap rather than by appealing to better intentions: make the externality's cost internal to the decision-maker — a tax, a fee, a chargeback — so their private cost calculation matches the social one; assign a property right so the affected party can bargain directly (the Coasian solution, workable when negotiation costs are low and parties are few); or regulate the activity directly when neither pricing nor bargaining is practical. All three share the same logic — realign who decides with who bears the consequence.

---

## Practitioner Heuristics

- **For any decision, ask explicitly who bears the cost and who captures the benefit.** If either falls on someone other than the decision-maker, expect the private calculation to diverge from the social one, in the predictable direction the mismatch implies.
- **Internalise the cost before appealing to better behaviour.** A chargeback, a tax, an SLA penalty, or a fee that makes the externality's cost land on the party who can actually change their behaviour is far more reliable than asking people to behave better while leaving the incentive misaligned.
- **Look for externalities inside organisations, not just between firms and society.** A team that ships fast and leaves cross-team integration costs, on-call burden, or technical debt for someone else is producing a negative externality just as surely as a polluting factory — the fix is the same: make the cost visible to the team creating it.
- **Distinguish an externality from ordinary interdependence.** Two teams depending on each other's output isn't automatically an externality — it becomes one specifically when a cost or benefit falls on a party who has no say in the decision producing it.
- **Consider bargaining before regulation when the affected parties are few and negotiation is cheap.** The Coasian insight: if property rights are clear and transaction costs are low, the parties can often reach an efficient outcome by direct negotiation, without needing a tax or a rule imposed from outside.

---

## Common Failure Modes

- **Designing incentives that only price what the decision-maker experiences.** A bonus structure, a team OKR, or a pricing model that rewards output without pricing the cost that output imposes elsewhere in the system reliably produces more of the costly behaviour, not less.
- **Treating every interdependence as an externality, or every externality as mere interdependence.** The first inflates the concept until it's meaningless; the second misses a genuine cost-shifting pattern by relabeling it as an unavoidable fact of connected systems.
- **Appealing to goodwill instead of realigning incentives.** Asking a team, vendor, or department to "just be more considerate" of the costs they impose elsewhere, without changing what they actually pay for, rarely outlasts the person who asked.
- **Ignoring positive externalities and under-investing accordingly.** Failing to fund or reward activities whose main benefit accrues to someone other than the person who'd have to invest in them — internal tooling, shared documentation, mentorship — because the investor doesn't capture enough of the upside to justify it privately.

---

## Worked Example

A platform engineering team is evaluated on shipping velocity alone. To hit deadlines, they repeatedly take shortcuts that leave the internal developer platform brittle — inconsistent APIs, missing error handling, sparse documentation. The cost of these shortcuts doesn't fall on the platform team; it falls on every product team that has to work around the platform's rough edges, in slower integration, more support tickets, and workarounds that themselves become technical debt. From the platform team's perspective, their decisions are locally rational: they're optimising exactly the metric they're measured on. The externality is structural, not a failure of judgment.

The fix: instrument and attribute the downstream cost — support tickets and integration delays tagged back to the originating platform decision — and fold a fraction of that cost into the platform team's own OKRs, alongside their velocity metric. Once the platform team bears even a partial share of the cost their shortcuts create elsewhere, their private incentive shifts toward exactly the trade-off that was optimal for the organisation all along.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
