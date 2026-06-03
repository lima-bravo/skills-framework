---
name: "stress-test-reasoning"
description: "Stress-tests a plan, belief, or decision by applying structured adversarial challenge. Covers pre-mortem, steelmanning, red teaming, calibration, falsification, two-way doors, and Cynefin domain classification. Use before high-stakes commitments, when a recommendation feels too certain, or when a team has converged without genuine challenge."
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
  sources: "General-Thinking/pre-mortem.md,General-Thinking/steelmanning.md,Business/red-teaming.md,General-Thinking/calibration.md,Psychology/falsification.md,General-Thinking/two-way-doors.md,General-Thinking/cynefin-framework.md"
---

# Stress Test Reasoning

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Choose a branch

Pick the branch that best matches the situation, then apply its models:

- **Challenge the plan** — Pre-mortem, Red Teaming, Steelmanning
- **Audit the confidence level** — Calibration, Falsification, Two-Way Doors
- **Classify the problem type first** — Cynefin Framework

## Protocol

### 1. Pre-mortem

**Hold in mind:**
The standard planning process activates the wrong psychology: everyone is committed to the plan, invested in its success, and under social pressure to be a team player. This systematically suppresses dissent and risk identification. The pre-mortem resolves this by making failure the baseline assumption. You are no longer identifying "reasons this might fail" (which feels like disloyalty); you are explaining "why this already failed" (which is simply analysis). The frame shift unlocks the critical thinking the planning process suppressed.

**Do:**
- **Do it on paper, individually, before discussing as a group.** Group discussion of failure causes is dominated by anchoring on the first thing said. Independent written answers before any sharing produce richer, more diverse failure hypotheses.
- **Set the time horizon to be uncomfortable but plausible.** "It is 12 months from now and this project has failed completely" is more productive than a vague or very distant future.
- **Distinguish failure causes by type.** External (market, competition, regulatory), execution (team, process, resource), strategic (wrong direction, wrong customer), and catastrophic (black swan) failures have different mitigations. Categorize after surfacing.
- **Convert every identified failure mode into a specific mitigation or monitoring metric.** The pre-mortem is useless if it generates a list that no one acts on. Each failure cause should produce either a plan change or an early warning indicator to track.
- **Repeat at major phase gates.** A pre-mortem done once at project start ages quickly. Repeat at each major milestone, resetting the imagination to the new known risks.

**Avoid:**
- **Stopping at identification.** The most common failure: generating a rich failure list, feeling that "we've done the pre-mortem," and not converting it to mitigations.
- **Leader reveals their view first.** If the most senior person in the room shares their pre-mortem hypothesis first, anchoring suppresses everyone else's. The senior person should go last.
- **Using it as a ritual rather than a tool.** A pre-mortem that produces the same three obvious risks every time is a process-compliance exercise, not genuine risk identification.

### 2. Steelmanning

**Hold in mind:**
Most of the time when people "consider objections," they consider the objections they already know how to answer. The weak versions. The ones that fit the frame they've already accepted. This is not engagement — it is confirmation dressed as rigour.

Steelmanning is the discipline of finding the version of the opposing view that actually threatens your position. It asks: not "what do critics say?" but "what is the best case against what I believe, stated so precisely that I cannot dismiss it?" If you cannot construct that case yourself, you do not yet understand the disagreement. If you can construct it and it does not change your view, you have something worth believing.

The practitioner test: can you articulate the opposing argument in a way that makes someone on that side say, "yes, that's exactly what I mean"? If not, you are arguing with a shadow.

**Do:**
- **Write the steelman before you speak, not after.** The moment you've shared your position publicly, the social pressure to defend it activates. Construct the opposing steel case while you're still genuinely open to updating.
- **Use the Ideological Turing Test as a calibration.** Could someone reading your steelman — without knowing the author — mistake it for a genuine proponent of that view? If not, strengthen it.
- **Target the load-bearing assumption.** Opposing arguments often depend on one pivotal claim. Find it and steelman that specifically, rather than the peripheral points. The weak periphery is a distraction from the strong core.
- **Separate steelmanning from agreeing.** The goal is not to find the view correct — it is to understand it precisely enough to engage it honestly. You can steelman a position you ultimately reject; in fact, that's the primary use case.
- **In group settings, assign the steelman role explicitly.** Ask someone to make the strongest case against the preferred direction before the group commits. Rotate the role so it doesn't become identified with one person's scepticism.

**Avoid:**
**Charitable but shallow.** "I can see why someone might think that" is not a steelman — it is a polite acknowledgement. A genuine steelman requires the same depth and specificity as the original position. Shallow charity is still strawmanning, just with better manners.

**Steelmanning the version you've already answered.** If the steel case you construct happens to be one you already have a good rebuttal for, ask whether you've genuinely found the strongest objection or simply the one most convenient to defeat. The tell: you feel satisfied after constructing it.

**Stopping at construction.** Steelmanning is a means, not an end. Its value is in what you do with the steel case: test your position against it, adjust your confidence, find the crux of the disagreement. Teams that construct a steelman and then set it aside have performed a ritual, not a practice.

**Weaponised steelmanning.** In adversarial contexts, steelmanning can be deployed to appear rigorous while actually strengthening a pre-chosen conclusion — by selecting an opposing view that is strong but ultimately defeatable. Steelmanning only works as a truth-seeking exercise; it fails as a performance of intellectual honesty.

### 3. Red Teaming

**Hold in mind:**
Every plan has a best-case author and a worst-case reality. The author's job is to make the plan compelling; reality's job is to expose where it fails. Red teaming imports reality's pressure into the planning process — before commitment, not after.

The mechanism is social as much as analytical. Most organisations have the information needed to identify their own weaknesses, but social dynamics suppress it: people don't want to be seen as obstructionists, senior leaders signal their preferred conclusion, and the planning process itself creates sunk costs that make dissent feel disloyal. A red team resolves this by *mandating* adversarial analysis — it gives people institutional permission to say what they already know.

The test of a good red team is not whether it finds problems (it will) but whether the findings are acted on. A red team whose output is filed and forgotten is not a red team — it is a ritual.

**Do:**
- **The red team must be independent of the plan's authors.** People who contributed to building a plan cannot genuinely red-team it — their sunk costs and social commitments are too high. The red team should include people with no stake in the plan's success.
- **Give the red team an explicit adversarial mandate, in writing.** "Challenge the plan constructively" produces a polite review. "Your job is to find the conditions under which this plan fails catastrophically" produces a red team. The framing determines the output.
- **Brief the red team to steelman the opposing case first.** Before attacking, the red team should construct the strongest version of the concern — not the most convenient one. Weak attacks are as useless as no attack.
- **Separate the red team exercise from the plan defence.** Do not run red team findings and blue team rebuttals simultaneously — this collapses into a debate that the plan's authors will win on seniority. Red team presents; blue team listens; response comes later in a separate session.
- **Track which red team findings change the plan and which are overridden.** This creates accountability and a learning record. If overridden findings later prove prescient, the organisation learns from the pattern.
- **Run red teams at the right moment: after the plan is formed but before commitment.** Too early, and the red team has nothing to attack. Too late (post-decision), and findings face near-insurmountable implementation momentum.

**Avoid:**
**The captured red team.** The most common failure: the red team is staffed with people who are already aligned with the plan's direction, or who report to the plan's authors. A red team that knows its findings will be evaluated by the same people who built the plan is structurally incentivised to soften its conclusions.

**The cosmetic exercise.** Red teaming scheduled as a compliance step rather than a genuine challenge — the findings are known in advance, the exercise is designed to surface manageable concerns, and the output is used to demonstrate due diligence rather than to change anything. Distinguishable by how often the red team's findings lead to plan changes (rarely) versus endorsement memos (frequently).

**Conflating red team with peer review.** A peer review asks "is this good?" — it is collegial, collaborative, and oriented toward improvement. A red team asks "how does this fail?" — it is adversarial and oriented toward stress-testing. Organisations that run peer reviews and call them red teams deprive themselves of both.

**Answering the red team too quickly.** When plan authors immediately rebut each red team finding, the exercise becomes a debate they will win — they have more context and are more invested. Good process: the red team presents, the blue team listens, then has 24–48 hours to respond in writing. Immediacy signals defensiveness, not engagement.

**No budget to act on findings.** A red team that surfaces a genuine structural flaw in a plan that is already resourced and staffed is asking the organisation to incur real costs to act on the finding. If no contingency exists to respond to red team output, the exercise is theatre.

### 4. Calibration

**Hold in mind:**
Picture a betting market where you stake proportionally to your stated confidence. If you say something is 95% likely and it fails, you lose far more than if you had said 60%. This stake-setting discipline forces honesty. A calibrated forecaster doesn't need to know more than anyone else — they need to know *how much* they know. The failure mode in most organisations is not bad evidence but bad confidence: teams treat 60% beliefs as certainties, and 40% uncertainties as facts not worth mentioning. The result is plans built on foundations no one examined.

Calibration is not accuracy on individual calls. Accuracy is about outcomes; calibration is about the relationship between confidence and outcomes across many calls. A calibrated forecaster will be wrong on their 70% calls roughly 30% of the time — and that is correct behaviour, not failure.

**Do:**
- **Track predictions in writing.** Calibration cannot exist without a record. State a prediction with a confidence level and a resolution date; log the outcome. Without this, stated confidence is unfalsifiable and will drift toward whatever feels right retrospectively.
- **Distinguish confidence from certainty.** Use the full range: 55%, 65%, 75% are all meaningful and all different. Most people collapse to three positions — "I think so," "pretty sure," "certain" — which makes calibration impossible to measure or improve.
- **Seek disconfirming evidence as a calibration check.** If you cannot name what would change your probability estimate, your stated confidence is probably too high. A strongly held view should have a stated price: "I'd lower this from 80% to 50% if I saw X."
- **Audit your track record on the same class of prediction.** Calibration is domain-specific. You may be well-calibrated on product launch timing and poorly calibrated on hiring decisions. Separate track records by domain.
- **When in doubt, regress toward uncertainty.** Research consistently shows overconfidence as the more common error — most people's 90% calls come true closer to 70% of the time. When you're uncertain whether your confidence is accurate, widen the interval.

**Avoid:**
**Outcome bias corrupting the record.** Rewriting the memory of prior confidence upward after a correct call, and downward after a wrong one. The fix is written records made before outcomes are known — there is no other reliable defence.

**Domain confusion.** Assuming that good calibration in one area extends to others. Experts are often well-calibrated within their domain and dramatically overconfident outside it. Track records should be domain-specific.

**Calibration as a performance of humility.** Stating low confidence figures to appear appropriately uncertain, rather than to reflect genuine probability. A deliberate underestimate is as miscalibrated as an overestimate — and harder to detect because it reads as modesty.

**Ignoring base rates.** The most common source of miscalibration is starting from inside-view reasoning (what I know about this specific case) rather than outside-view base rates (what happens to cases like this in general). Well-calibrated judgments almost always start with the base rate.

### 5. Falsification

**Hold in mind:**
Think of your beliefs as bridges, not trophies. A bridge's value lies in its ability to hold weight under stress — not in how polished it looks, how many people admire it, or how many engineers worked on it. The only test that matters is whether it holds up when loaded and shaken. Building more bridges that look good is not the same as validating that any of them are safe. Falsification is the discipline of loading your beliefs and shaking them — before committing to cross them with something important.

**Do:**
- **For every belief or hypothesis you hold, write down one observation that would cause you to abandon it.** If you can't write it down, you don't have a falsifiable belief — you have a conviction. Treat convictions differently from hypotheses.
- **Design experiments to be capable of returning a negative result.** A pilot where success is "we launched and people used it" is not falsifying anything. A pilot where success is defined by a threshold that could plausibly not be met is a genuine test.
- **In strategy reviews, ask: "what evidence would tell us this strategy is failing?"** If the room can't answer, the strategy is unfalsifiable and therefore unlearnable.
- **Use steel-manning before falsification.** First construct the strongest possible version of the opposing view, then test your belief against it. Testing weak versions of opposing arguments doesn't falsify anything meaningful.
- **Assign a "red team" whose explicit role is to falsify the dominant view.** Red teams only work if they are mandated to find disconfirming evidence, not to balance-test a case that everyone already believes.

**Avoid:**
**Survivor-selection of evidence.** Teams run ten tests, three return negative results, seven return positive. They present the seven. The aggregate picture looks like strong confirmation; the actual picture is mixed. Reporting only the confirming evidence is structurally equivalent to designing your experiment to not be falsifiable.

**Unfalsifiable strategy.** A strategic direction is framed in ways that make any outcome compatible with it. Growth is evidence the strategy is working; decline is evidence we haven't fully committed to the strategy yet. When a strategy can absorb any result as confirming, it is unfalsifiable — and therefore provides no decision-making value.

**The learning theatre pilot.** Pilots designed to succeed (cherry-picked markets, extra resources, management attention) produce confirming evidence for roll-out decisions without actually testing whether the strategy works in normal conditions. This is falsification-shaped activity without falsification's substance.

**Confusing confidence with validation.** Strong internal conviction, widespread team alignment, and encouraging early signals are not falsifying evidence. They are social and emotional states. Teams often mistake the strength of their belief for the strength of their evidence.

### 6. Two-Way Doors

**Hold in mind:**
Imagine two doors. The two-way door: you can open it, walk through, look around, and if you don't like what you see, walk back through to where you started. The cost of a wrong choice is small — the time and energy of the exploration. The one-way door: once you walk through, the door disappears. You are committed to wherever you find yourself. The asymmetry is large: the cost of a wrong choice in a one-way door decision is very high. The correct response to a one-way door is deliberate analysis before committing; the correct response to a two-way door is to move quickly, try it, and update based on what you find.

**Do:**
- **Classify decisions as Type 1 or Type 2 before applying any decision process.** Most decisions that teams treat as highly consequential are actually Type 2. Name the type first.
- **Default to Type 2 (reversible) unless you can articulate a specific reason for irreversibility.** The bias should be toward treating decisions as more reversible than they initially appear. This increases decision speed and reduces process overhead.
- **For Type 1 decisions, slow down and gather more evidence.** The cost of slow deliberation on a one-way door decision is low (delay); the cost of a wrong decision is high (irreversibility). Invest proportionally.
- **Create reversibility where possible before committing.** Can you turn a one-way door into a two-way door? A pilot before a full launch, a trial before a permanent hire, a reversible architecture before a permanent system migration — these convert irreversibility into reversibility and allow you to apply the faster Type 2 process.
- **Watch for false irreversibility.** Many decisions that feel permanent are actually reversible with modest cost. Labelling a reversible decision as a one-way door to justify high process is a common organizational dysfunction.

**Avoid:**
- **Type 1 process on Type 2 decisions.** Multi-layer approval processes, cross-functional review, and months of analysis applied to decisions that could be made in a day and reversed if wrong. This is how organizations become slow without becoming safer.
- **Type 2 casualness on Type 1 decisions.** Moving fast on hiring decisions that are actually very hard to reverse, technology architecture choices, or market positioning commitments as if they are easily reversible.
- **Using the framework to justify impulsivity.** Claiming everything is a two-way door to avoid the deliberation that important decisions deserve. The framework requires honest classification.

### 7. Cynefin Framework

**Hold in mind:**
The key distinction is **Complicated vs. Complex**. A complicated problem has many parts but a correct answer an expert can find (sending a rocket to the moon). A complex problem has emergent behaviour that cannot be predicted in advance — the answer cannot be known before you try because the trying itself changes the system.

**The danger zone:** the cliff between Clear and Chaotic. Over-confidence in established best practice can cause a Clear situation to tip suddenly into Chaos when conditions change.

**Do:**
- **Diagnose the domain before choosing a method.** The framework's entire value is prescriptive: best practice for Clear, analysis for Complicated, probe-sense-respond for Complex, act-sense-respond for Chaotic. Choosing a method without naming the domain is how good techniques get misapplied.
- **In Complex domains, run safe-to-fail experiments instead of analysing for the right answer.** When cause and effect are visible only in retrospect, no amount of upfront analysis reveals the answer — the trying changes the system, so you probe, sense the response, and amplify or dampen.
- **Don't apply Complicated-domain confidence to Complex problems.** Reaching for expert analysis and detailed plans where the answer cannot be known in advance is not rigour; it is a category error that produces confident, expensive failure.
- **In Chaos, act first to establish stability, then sense.** The Chaotic domain rewards decisive action to create enough order to move the situation into Complex, where probing becomes possible; hesitating to analyse a crisis is the wrong move.
- **Watch the cliff between Clear and Chaotic.** Complacency in the Clear domain — treating established best practice as permanent — is what lets conditions shift and tip a stable situation straight into chaos.

**Avoid:**
- **Treating everything as Complicated.** The default of expert-driven organisations: assuming every problem has a knowable right answer if enough analysis is applied, which fails silently on Complex problems where emergence dominates.
- **Misreading Complex as Clear.** Applying a fixed best-practice playbook to a situation with emergent behaviour produces precise execution toward an answer that no longer fits.
- **Analysis paralysis in Chaos.** Trying to gather data and plan during a crisis that demands immediate stabilising action — the domain calls for acting first, not understanding first.
- **Using the framework to label rather than to decide.** Naming a problem "complex" and stopping there adds nothing; the point of the diagnosis is to change the method, not to categorise.

## Deliverable format

Produce a markdown document with these sections:

### Plan or belief under review (one sentence)

### Domain classification (Cynefin: clear / complicated / complex / chaotic)

### Pre-mortem: top 3 failure modes with estimated probability

### Steelman: strongest case against the plan

### Calibration audit: stated confidence vs. track record evidence

### Reversibility assessment (two-way door or one-way door)

### What would have to be true for this to be wrong (falsification test)

### Recommended changes before committing

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [pre-mortem](references/pre-mortem.md)
- [steelmanning](references/steelmanning.md)
- [red-teaming](references/red-teaming.md)
- [calibration](references/calibration.md)
- [falsification](references/falsification.md)
- [two-way-doors](references/two-way-doors.md)
- [cynefin-framework](references/cynefin-framework.md)

