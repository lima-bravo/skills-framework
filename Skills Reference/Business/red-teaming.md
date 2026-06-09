# Red Teaming
*Mandate a team to attack your plan before your adversary does*

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Red teaming is a structured adversarial practice in which a designated group — the red team — is given an explicit mandate to find weaknesses, challenge assumptions, and construct the strongest case against a plan, strategy, or system. The term originates from Cold War military wargaming, where the "red team" represented the opposing force. In organisational practice, red teaming is applied to strategic decisions, product plans, security assessments, policy proposals, and any high-stakes commitment where blind spots and overconfidence are likely.

The red team's mandate is not to balance-test a proposal or play devil's advocate politely — it is to actively try to break the plan. The blue team (the proponents of the plan) defends it. The quality of the exercise depends on the independence and seriousness of the red team's adversarial role.

---

## Mental Model

Every plan has a best-case author and a worst-case reality. The author's job is to make the plan compelling; reality's job is to expose where it fails. Red teaming imports reality's pressure into the planning process — before commitment, not after.

The mechanism is social as much as analytical. Most organisations have the information needed to identify their own weaknesses, but social dynamics suppress it: people don't want to be seen as obstructionists, senior leaders signal their preferred conclusion, and the planning process itself creates sunk costs that make dissent feel disloyal. A red team resolves this by *mandating* adversarial analysis — it gives people institutional permission to say what they already know.

The test of a good red team is not whether it finds problems (it will) but whether the findings are acted on. A red team whose output is filed and forgotten is not a red team — it is a ritual.

---

## Practitioner Heuristics

- **The red team must be independent of the plan's authors.** People who contributed to building a plan cannot genuinely red-team it — their sunk costs and social commitments are too high. The red team should include people with no stake in the plan's success.
- **Give the red team an explicit adversarial mandate, in writing.** "Challenge the plan constructively" produces a polite review. "Your job is to find the conditions under which this plan fails catastrophically" produces a red team. The framing determines the output.
- **Brief the red team to steelman the opposing case first.** Before attacking, the red team should construct the strongest version of the concern — not the most convenient one. Weak attacks are as useless as no attack.
- **Separate the red team exercise from the plan defence.** Do not run red team findings and blue team rebuttals simultaneously — this collapses into a debate that the plan's authors will win on seniority. Red team presents; blue team listens; response comes later in a separate session.
- **Track which red team findings change the plan and which are overridden.** This creates accountability and a learning record. If overridden findings later prove prescient, the organisation learns from the pattern.
- **Run red teams at the right moment: after the plan is formed but before commitment.** Too early, and the red team has nothing to attack. Too late (post-decision), and findings face near-insurmountable implementation momentum.

---

## Common Failure Modes

**The captured red team.** The most common failure: the red team is staffed with people who are already aligned with the plan's direction, or who report to the plan's authors. A red team that knows its findings will be evaluated by the same people who built the plan is structurally incentivised to soften its conclusions.

**The cosmetic exercise.** Red teaming scheduled as a compliance step rather than a genuine challenge — the findings are known in advance, the exercise is designed to surface manageable concerns, and the output is used to demonstrate due diligence rather than to change anything. Distinguishable by how often the red team's findings lead to plan changes (rarely) versus endorsement memos (frequently).

**Conflating red team with peer review.** A peer review asks "is this good?" — it is collegial, collaborative, and oriented toward improvement. A red team asks "how does this fail?" — it is adversarial and oriented toward stress-testing. Organisations that run peer reviews and call them red teams deprive themselves of both.

**Answering the red team too quickly.** When plan authors immediately rebut each red team finding, the exercise becomes a debate they will win — they have more context and are more invested. Good process: the red team presents, the blue team listens, then has 24–48 hours to respond in writing. Immediacy signals defensiveness, not engagement.

**No budget to act on findings.** A red team that surfaces a genuine structural flaw in a plan that is already resourced and staffed is asking the organisation to incur real costs to act on the finding. If no contingency exists to respond to red team output, the exercise is theatre.

---

## Worked Example

A consulting firm is preparing to submit a major proposal to a government client. The engagement team has been working on the proposal for three weeks and is confident in the approach. Two days before submission, the managing partner convenes a red team: two senior consultants who have not been involved in the proposal, briefed to find the three most likely reasons the proposal would fail to win or fail to deliver.

The red team's findings: (1) the commercial model assumes a phased payment structure that the government's procurement rules disallow; (2) the proposed timeline does not account for the client's annual budget freeze in Q3; (3) the team's proposed methodology assumes data access that the client does not currently have and has not committed to providing.

None of these were visible to the proposal team — they were too close to the work. Finding (1) requires a commercial restructure; findings (2) and (3) require timeline and scope adjustments. The proposal is revised and wins. The red team exercise took four hours.

---

## Connections

→ [223·Steelmanning](../General-Thinking/steelmanning.md) — the red team's first obligation; attacking a weak version of the plan is as useless as not attacking at all.
→ [204·Falsification](../Psychology/falsification.md) — red teaming is the organisational mechanism for structured falsification; the red team's mandate is to find the conditions under which the plan is wrong.
→ [10·Pre-mortem](../General-Thinking/pre-mortem.md) — the pre-mortem is a lighter-weight adversarial tool that can precede or complement a full red team exercise; the pre-mortem engages the whole group, the red team uses a separate designated group.
→ [55·Confirmation Bias](../Psychology/confirmation-bias.md) — red teaming is a structural countermeasure to confirmation bias in planning; it provides an institutionally-sanctioned source of disconfirming pressure.
→ [73·Assumption Mapping](assumption-mapping.md) — red teams often attack at the level of assumptions; assumption mapping done beforehand gives the red team a structured inventory of what to challenge.
→ [104·Psychological Safety](../Psychology/psychological-safety.md) — red teams only surface genuine findings when members feel safe to present conclusions that contradict senior stakeholders; psychological safety is the prerequisite for useful adversarial output.
→ [153·Kill Criteria](../Delivery-and-Flow/kill-criteria.md) — red team findings often generate the conditions that should be pre-specified as kill criteria; converting red team output into kill criteria makes the findings operationally binding.
→ [225·A/B Testing](ab-testing.md) — where red teaming attacks plans before commitment, A/B testing attacks hypotheses with live evidence during execution; the two are complementary tools for different phases of uncertainty reduction.
→ [248·Profit Pool Analysis](profit-pool-analysis.md) — once a profit pool map identifies an attractive position, red-team it: if the pool is this profitable, why hasn't it already been contested away?

---

## References

- *Red Team: How to Succeed by Thinking Like the Enemy* — Micah Zenko (2015) — comprehensive treatment of how organisations use adversarial red teams; covers military, intelligence, and corporate applications; documents the recurring failure modes (captured teams, cosmetic exercises) in detail.
- *"Performing a Project Premortem"* — Gary Klein, *Harvard Business Review* (September 2007) — introduces the pre-mortem as a lightweight adversarial exercise: asking a group to assume the project has failed and reason backward to causes; the most accessible entry point to adversarial planning techniques.
- *A Tradecraft Primer: Structured Analytic Techniques for Improving Intelligence Analysis* — CIA Directorate of Intelligence (2009) — foundational intelligence community document on red teaming and structured analytic techniques; describes devil's advocacy, team A/B analysis, and other adversarial methods for stress-testing assessments.
- *"Before You Make That Big Decision"* — Daniel Kahneman, Dan Lovallo & Olivier Sibony, *Harvard Business Review* (June 2011) — a 12-question checklist for improving strategic decision quality; adversarial review is one of the key recommendations for countering planning and overconfidence bias.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
