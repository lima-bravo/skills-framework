---
id: 10
name: Pre-mortem
category: General Thinking
cardType: standard
tagline: Imagine failure before it happens
connections:
  - id: 1
    rationale: the pre-mortem is inversion operationalized as a group process.
  - id: 73
    rationale: failure causes in a pre-mortem often correspond to critical assumptions that weren't tested.
  - id: 24
    rationale: pre-mortems identify the specific risks that margin of safety should buffer against.
  - id: 224
    rationale: the pre-mortem is a lightweight adversarial tool for a whole group; red teaming uses a designated independent team for more rigorous challenge.
  - id: 223
    rationale: "steelmanning applied prospectively: what is the strongest case that this plan will fail?"
  - id: 237
    rationale: "the Pre-launch Cobra Risk Assessment is best run as a pre-mortem: assume the intervention became a cobra and work backward to identify the mechanism."
  - id: 11
    rationale: "the bookends: the pre-mortem imagines future failure before commitment; the post-mortem analyses actual failure after it occurs. A mature team practices both."
  - id: 13
    rationale: the Black Hat is the group-thinking equivalent of the pre-mortem; the Six Hats framework provides the structure for running one without triggering ego-defense dynamics.
  - id: 122
    rationale: pre-mortems are most predictive in Complicated domains; in Complex domains, cause-and-effect visibility only emerges in retrospect, which limits how much a pre-mortem can anticipate.
  - id: 128
    rationale: the pre-mortem stress-tests which assumptions in a Theory of Change's causal chain are most likely to fail; together they form a risk-first planning discipline.
  - id: 171
    rationale: "the pre-mortem applies causal analysis forward in time: what causal structure would produce failure from here, and which link in that chain is the most likely point of failure?"
  - id: 240
    rationale: "the pre-mortem is the closest operational tool to Black Swan thinking: imagining failure in advance surfaces failure modes not in the current plan, including tail events."
  - id: 115
    rationale: "the pre-mortem is the most effective tactical intervention against the planning fallacy: imagining the plan has failed forces engagement with the outside view."
  - id: 201
    rationale: the pre-mortem proactively creates a written record of uncertainty before the outcome is known, providing the honest baseline that counteracts hindsight bias in later retrospection.
  - id: 203
    rationale: the pre-mortem deliberately invokes a failure narrative to surface what the success narrative suppresses; it uses narrative instinct against itself.
  - id: 204
    rationale: "the pre-mortem applies falsification thinking prospectively: imagining the plan has failed is asking \"what evidence would show this doesn't work?\""
  - id: 123
    rationale: pre-mortem probes a single decision for failure modes; scenario planning probes the environment for the range of futures a strategy must survive.
  - id: 146
    rationale: the pre-mortem disciplines PDCA's Plan step — imagining failure modes before acting is the same analytical move as writing down a testable prediction before running the experiment.
  - id: 153
    rationale: pre-mortem findings are a primary source of kill criteria — the failure modes imagined in a pre-mortem become the observable conditions that trigger stopping if they materialise.
  - id: 160
    rationale: reference class forecasting and the pre-mortem are complementary outside-view techniques — RCF asks what happened to similar projects; the pre-mortem asks what could go wrong in this one; together they bound the failure space.
  - id: 161
    rationale: imagining the hypothesis is wrong — and asking what evidence would confirm that — is the pre-mortem applied to hypothesis-driven work; both tools treat the absence of a strong disconfirmation case as a warning sign.
  - id: 170
    rationale: Step 6 of the Work to Be Done chain includes a pre-mortem — imagining the outcome failed 12 months later and auditing which work items were waste and which were missing.
  - id: 118
    rationale: Mission Command's back-brief and intent-setting practice pairs with pre-mortem to surface flawed assumptions and trigger conditions before commitment
  - id: 119
    rationale: the pre-mortem stress-tests the current orientation by running the loop backwards — asking what failure would look like from this picture
  - id: 126
    rationale: pre-mortem is the agile risk identification tool for specific initiatives — surfaces latent risks before commitment without requiring a full ERM apparatus
references:
  - title: "Sources of Power: How People Make Decisions"
    authorYear: Gary Klein (1998)
    supports: Klein's original description of the pre-mortem as a prospective hindsight technique.
  - title: Thinking, Fast and Slow
    authorYear: Daniel Kahneman (2011)
    supports: the cognitive science of optimism bias and why pre-mortems counteract it.
---

# Pre-mortem

**Category:** [General Thinking](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A pre-mortem is a structured prospective exercise in which a team, before committing to a plan, imagines that it is some specified future time (3 months, 12 months) and the plan has failed — completely and catastrophically. Working backward from that imagined failure, each participant independently writes down what they believe caused it. The results are then pooled, discussed, and converted into risk mitigations or plan adjustments. The pre-mortem was developed and named by psychologist Gary Klein as a counterweight to planning optimism bias.

---

## Mental Model

The standard planning process activates the wrong psychology: everyone is committed to the plan, invested in its success, and under social pressure to be a team player. This systematically suppresses dissent and risk identification. The pre-mortem resolves this by making failure the baseline assumption. You are no longer identifying "reasons this might fail" (which feels like disloyalty); you are explaining "why this already failed" (which is simply analysis). The frame shift unlocks the critical thinking the planning process suppressed.

---

## Practitioner Heuristics

- **Do it on paper, individually, before discussing as a group.** Group discussion of failure causes is dominated by anchoring on the first thing said. Independent written answers before any sharing produce richer, more diverse failure hypotheses.
- **Set the time horizon to be uncomfortable but plausible.** "It is 12 months from now and this project has failed completely" is more productive than a vague or very distant future.
- **Distinguish failure causes by type.** External (market, competition, regulatory), execution (team, process, resource), strategic (wrong direction, wrong customer), and catastrophic (black swan) failures have different mitigations. Categorize after surfacing.
- **Convert every identified failure mode into a specific mitigation or monitoring metric.** The pre-mortem is useless if it generates a list that no one acts on. Each failure cause should produce either a plan change or an early warning indicator to track.
- **Repeat at major phase gates.** A pre-mortem done once at project start ages quickly. Repeat at each major milestone, resetting the imagination to the new known risks.

---

## Common Failure Modes

- **Stopping at identification.** The most common failure: generating a rich failure list, feeling that "we've done the pre-mortem," and not converting it to mitigations.
- **Leader reveals their view first.** If the most senior person in the room shares their pre-mortem hypothesis first, anchoring suppresses everyone else's. The senior person should go last.
- **Using it as a ritual rather than a tool.** A pre-mortem that produces the same three obvious risks every time is a process-compliance exercise, not genuine risk identification.

---

## Worked Example

A company is about to launch a new pricing model. Pre-mortem: "It is Q4 and the pricing change has failed — we've lost 20% of our customer base and the board is discussing reverting." Individual written failure reasons: (a) existing customers felt blindsided and churned before renewing; (b) the sales team couldn't explain the new model clearly to prospects; (c) a competitor responded with an aggressive price cut; (d) the price increase hit a segment that was more price-sensitive than modelled; (e) implementation bugs in billing created customer service crises. Mitigations: a customer communication plan, a sales training sprint, a competitor monitoring cadence, segment-level price sensitivity analysis before go-live, and a billing QA checklist. Several of these mitigations were not in the original launch plan.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
