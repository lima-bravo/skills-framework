---
id: 51
name: Incentives
category: Psychology
cardType: standard
tagline: Behavior follows reward structures
connections:
  - id: 2
    rationale: incentive systems produce second-order effects that are often the opposite of the intended first-order effect.
  - id: 40
    rationale: Gresham's Law is incentive dynamics applied to market competition between quality tiers.
  - id: 17
    rationale: incentives create feedback loops; the loop structure determines whether the incentive produces the intended long-run outcome.
  - id: 229
    rationale: equilibria are determined by the incentive structure; redesigning incentives is the primary lever for changing which equilibrium players land in.
  - id: 230
    rationale: the Prisoner's Dilemma is an incentive structure where individual rationality produces collective irrationality.
  - id: 231
    rationale: "commons tragedies are incentive design failures: individual incentives point toward overuse of a shared resource."
  - id: 4
    rationale: before attributing malice, map incentives first; misaligned incentives are the most common structural explanation for behaviour that looks deliberate.
  - id: 38
    rationale: bubble dynamics persist because incentives (fees, career risk, peer pressure) reward participation even when participants know valuations are stretched.
  - id: 120
    rationale: "Goodhart's Law is the failure mode of incentive systems: when a metric carries real consequences, people optimise the metric rather than the outcome it was tracking."
  - id: 121
    rationale: incentives are the primary mitigation tool for principal-agent misalignment; designing them well requires understanding both adverse selection and moral hazard.
  - id: 232
    rationale: "free riding is an incentive design failure: when contribution is not individually rewarded, the rational actor doesn't contribute."
  - id: 49
    rationale: reciprocity is a social incentive that operates independently of formal systems; it often drives collaboration more reliably than financial incentives in relational contexts.
  - id: 58
    rationale: Maslow provides the motivational structure that determines which incentives are active; salary only motivates until lower needs are met.
  - id: 59
    rationale: "McClelland's three-need framework determines which type of incentive will land: nAch responds to challenge and autonomy, nPow to influence, nAff to belonging."
  - id: 60
    rationale: "the satisfier-need distinction is the most important refinement to incentive design: ensure incentives meet actual needs, not just their most obvious satisfiers."
  - id: 61
    rationale: "ERG's frustration-regression principle predicts incentive failures: an employee regressing to Existence focus may signal blocked Growth, not a genuine preference for pay over challenge."
  - id: 101
    rationale: "trust and incentives are interdependent: misaligned incentives structurally destroy trust, and low trust drives demand for more incentive-based control as a substitute."
  - id: 104
    rationale: incentive structures that punish failure or reward concealment are the primary structural mechanism by which organisations destroy psychological safety.
  - id: 192
    rationale: "SDT's crowding-out effect is the most important caveat in incentive design: rewards applied to intrinsically motivating work degrade the motivation they were meant to boost."
  - id: 74
    rationale: stakeholder salience is partly determined by incentive alignment; a high-power stakeholder whose incentives are misaligned requires more intensive management than one who is aligned.
  - id: 116
    rationale: organisations reward responsiveness over deep work; protecting maker time requires counteracting the incentive gradient that makes availability feel productive.
  - id: 237
    rationale: "the Cobra Effect is always an incentive design failure: the intervention creates incentives that point toward sustaining rather than solving the problem."
references:
  - title: "Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger"
    authorYear: Charles T. Munger, ed. Peter D. Kaufman (2005)
    supports: the primary source for Munger's incentive-centred mental model.
  - title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything"
    authorYear: Steven D. Levitt & Stephen J. Dubner (2005)
    supports: accessible illustrations of how hidden incentives drive counterintuitive behavior.
---

# Incentives

**Category:** [Psychology](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Incentives are the rewards and punishments that shape behavior — formal (compensation, bonuses, promotions, penalties) and informal (recognition, social belonging, fear of embarrassment, intrinsic satisfaction). Charlie Munger's formulation: "Show me the incentive and I'll show you the outcome." The most reliable predictor of how people, organizations, and systems behave is not their stated intent but the incentive structure they are embedded in.

---

## Mental Model

Every person and organization is an optimizer of their incentive landscape. They may not be conscious optimizers — the process can be entirely implicit — but over time, behavior drifts toward whatever is rewarded and away from whatever is punished. The practitioner's first question when puzzled by persistent behavior that seems irrational or counterproductive is: *"What incentive makes this behavior rational from the actor's perspective?"*

---

## Practitioner Heuristics

- **Map incentives before designing any new behavior, system, or process.** "What will people do given this structure?" is a more reliable question than "what do we want people to do?" Design for the former.
- **Look for incentive misalignments at the boundaries.** The most costly incentive problems occur where the agent's interests diverge from the principal's: the salesperson paid on revenue, not customer success; the contractor paid by the hour, not the outcome; the fund manager paid on AUM, not returns. Name these explicitly.
- **Unintended incentives are as powerful as intended ones.** If rewarding output creates an incentive to game the output metric, that unintended incentive will dominate eventually.
- **Intrinsic incentives are fragile.** Introducing extrinsic rewards for intrinsically motivated behavior can "crowd out" the intrinsic motivation (over-justification effect). Be careful about monetizing what people currently do for love.
- **Change incentives before changing behavior.** Asking people to behave differently without changing the incentive structure is asking them to sacrifice their interests. Sometimes this works in the short term; it rarely sustains. Redesigning the incentive is the structural fix.

---

## Common Failure Modes

- **Incentivizing the measure, not the outcome.** Wells Fargo incentivized bankers on new account openings; the incentive produced fraudulent account creation. The metric was a proxy for the outcome; the incentive attacked the proxy.
- **Assuming stated intent overrides incentive structure.** "We trust our people to do the right thing" is not an incentive design — it is a hope. When stated intent and incentive structure conflict, incentive structure wins eventually.
- **Creating competing incentives.** Two systems that reward different and incompatible behaviors create paralysis, gaming, and political conflict. Align incentive structures before expecting aligned behavior.

---

## Worked Example

A software company introduces a bug bounty program: developers find and report bugs they discover in other teams' code. Initially, cross-team bug reporting increases. Then it stops and reverses. Investigation: the incentive structure rewards finding bugs in others' code but not in your own; creating more bugs to find (by writing sloppy code yourself) is now perversely incentivized. The bounty increased cross-team reporting but reduced individual code quality. Redesign: bug bounties apply to external security research; internal quality is measured through test coverage, production incident rates, and code review quality — metrics that incentivize quality over bug-finding.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
