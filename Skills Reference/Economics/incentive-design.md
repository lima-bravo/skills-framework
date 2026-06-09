---
id: 262
name: Incentive Design
category: Economics
cardType: standard
tagline: The behavior you get is the behavior you designed for — whether you meant to or not
connections:
  - id: 121
    rationale: "incentive design is the constructive discipline for the misalignment this model describes: the agent's interests diverge from the principal's wherever the incentive structure allows it"
  - id: 120
    rationale: every incentive attached to a metric eventually produces Goodhart drift; incentive design must build in rotation and drift detection
  - id: 237
    rationale: the failure mode where an incentive structure makes the problem profitable; adversarial modelling is the design countermeasure
  - id: 231
    rationale: incentive design can create or dissolve commons tragedies; the right structure makes individual rationality and collective good coincide
  - id: 229
    rationale: the goal of incentive design is to make the individually rational equilibrium the collectively desirable one
  - id: 192
    rationale: intrinsic motivation and crowding-out effects set the boundary conditions for what extrinsic incentive structures can achieve
  - id: 261
    rationale: incentive structures are feedback loops; systems thinking reveals whether they will produce their intended effect or generate unintended dynamics
  - id: 200
    rationale: FAE leads to redesigning the person rather than the incentive structure; recognising the situational lens is what makes incentive design the right intervention
  - id: 202
    rationale: formal incentives and social proof can work with or against each other; designing incentives without accounting for what peers are visibly doing often produces weaker effects than expected
references:
  - title: The Handbook of Organizational Economics
    authorYear: Robert Gibbons & John Roberts eds. (2013)
    supports: the definitive academic treatment of incentive theory in organizations, including principal-agent models and mechanism design.
  - title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything"
    authorYear: Steven D. Levitt & Stephen J. Dubner (2005)
    supports: case studies in how incentive structures produce unexpected and often perverse behaviors.
  - title: "Drive: The Surprising Truth About What Motivates Us"
    authorYear: Daniel H. Pink (2009)
    supports: the intrinsic motivation research and why extrinsic rewards crowd out performance on complex tasks.
  - title: "Thinking in Systems: A Primer"
    authorYear: Donella H. Meadows (2008)
    supports: "incentives as feedback loops: the systems lens that reveals why well-designed incentives still produce unintended dynamics."
---

# Incentive Design

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Incentive design is the discipline of structuring rewards, penalties, recognition, and accountability to produce desired behavior while avoiding perverse and unintended outcomes. The central problem: people respond to incentives as experienced, not as intended. The gap between the incentive the designer believes they created and the one people actually face — shaped by their risk preferences, time horizons, social context, and ability to game the structure — is where most incentive systems fail. Good incentive design closes that gap by working backwards from the behavior you want, identifying what would make that behavior individually rational, and verifying that no alternative behavior produces a better outcome for the individual under your scheme.

---

## Mental Model

Every organization is a network of incentive structures, most of them implicit and accidental. Salaries, performance reviews, promotions, recognition practices, budget allocation, and meeting norms all create incentives — usually without anyone having designed them for that purpose. The practitioner's starting assumption: whatever behavior is persisting in your organization, the incentive structure is producing it. Not personalities. Not management quality. Structure.

The economist's version: you get what you measure, reward, and punish. The systems thinker's version: incentives are feedback loops — they amplify the behaviors they reward and suppress the behaviors they penalize, and any such loop will eventually be gamed by the people inside it. Incentive design is the discipline of making the individually rational equilibrium the collectively desirable one.

---

## Practitioner Heuristics

1. **Work backwards from behavior, not forwards from metrics.** Don't ask "what metric should I attach to this incentive?" Ask: "what behavior do I want, and what would make that behavior individually rational for the person in this role?" Then design toward that behavior, and select the metric that best tracks it.

2. **Check for crowding out.** Extrinsic rewards (money, recognition) can crowd out intrinsic motivation (competence, autonomy, purpose). Attaching a financial incentive to an activity people were previously doing voluntarily can reduce their engagement. If the task requires creativity, judgment, or sustained effort, intrinsic motivation is usually more powerful than incentive pay.

3. **Model the gaming scenario.** Before implementing, ask: "If I were a rational, self-interested actor in this role, how would I maximize my reward while minimizing my effort?" That scenario is your most important design input. If there is an easy path to high reward through low-value activity, it will be found.

4. **Align time horizons.** Short-term incentives (quarterly bonuses, annual reviews) produce short-term behavior. If the value of the work is realized over years, a structure that only rewards quarters will systematically underinvest in long-term outcomes. The incentive horizon must match the work horizon.

---

## Common Failure Modes

**Rewarding the metric, not the outcome.** The metric is a proxy for the outcome. Once it becomes a reward target, people optimize the metric without necessarily producing the outcome — Goodhart's Law in its most costly form. The countermeasure is small metric sets with rotating leading indicators, reviewed frequently enough to catch drift before it compounds.

**Ignoring the social incentive structure.** Formal incentive systems operate inside informal social ones. If the formal system rewards individual performance but the culture punishes outperforming colleagues, people will calibrate to the social incentive first. Incentive design that ignores the social layer will be neutralized by it.

**The cobra effect.** Well-intentioned incentives that make the problem profitable create infrastructure for the problem to grow. Adversarial modelling — explicitly asking "how could someone profit from this scheme in a way that makes the problem worse?" — is required before deployment.

---

## Worked Example

A support team is measured on tickets closed per day. Close rates rise; customer satisfaction falls. Investigation reveals agents are closing tickets quickly as "resolved" after brief contact rather than ensuring the issue is actually fixed. Reopened tickets count as new tickets, which helps close rates further. The incentive is perfectly aligned with fast closing and completely misaligned with resolution quality. Redesign: measure 7-day resolution rate (was the issue actually resolved?) and first-contact resolution. Close rate is retained as a health indicator but removed from reward calculation. The unwanted behavior stops because the incentive no longer makes it individually rational.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
