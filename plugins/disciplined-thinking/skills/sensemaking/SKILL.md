---
name: "sensemaking"
description: |
  Builds a clear understanding of a complex or ambiguous situation before prescribing action. Covers Ladder of Inference, Causal Analysis, Occam's Razor, Hanlon's Razor, Analogical Reasoning, and SRK Framework. Use as the entry point when the situation is unclear, when a diagnosis has been handed to you and you want to verify it, or when a team is jumping to solutions before the problem is understood.
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
  sources: "General-Thinking/ladder-of-inference.md,General-Thinking/causal-analysis.md,General-Thinking/occams-razor.md,General-Thinking/hanlons-razor.md,General-Thinking/analogical-reasoning.md,Psychology/srk-framework.md"
---

# Sensemaking

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Choose a branch

Pick the branch that best matches the situation, then apply its models:

- **Separate observation from interpretation** — Ladder of Inference, Causal Analysis
- **Apply parsimony before complexity** — Occam's Razor, Hanlon's Razor
- **Learn from analogues** — Analogical Reasoning, SRK Framework

## Protocol

### 1. Ladder of Inference

**Hold in mind:**
The ladder explains why smart people looking at the same situation reach opposite conclusions: they have climbed different ladders. Each rung is an inference — a mental step that is invisible to the person making it but determines everything above it. The practitioner's discipline is to "walk back down the ladder" — both in their own thinking and in dialog with others — to identify where the divergence began and whether the selection, interpretation, or assumption at that rung is well-founded.

**Do:**
- **When in conflict, go back to the data.** "What specifically did you observe?" forces the conversation back to the bottom rung, where the gap between perspectives is most likely to be identified. Most conflicts that feel like value disagreements are actually disagreements about data selection or interpretation.
- **Name the rung you're on.** "I'm stating a belief here, not a fact" or "this is my interpretation, not what was said" builds cognitive clarity and models epistemic humility for others.
- **Challenge your own selection filters.** What data have you been noticing, and what have you been ignoring? The selection at rung 2 is often the most consequential and the least visible.
- **Ask "what would I have to believe at each rung for this conclusion to be valid?"** Tracing the ladder upward from a specific conclusion reveals the assumptions at each rung that must be true. Challenging those assumptions challenges the conclusion.
- **Use in facilitated conversations.** When a team is stuck in a conflict, a facilitator who walks both parties back down their respective ladders to observable data often reveals that the disagreement is about an inference made early in the chain, not about values or facts.

**Avoid:**
- **Reflexive loops.** Beliefs at the top of the ladder influence what data we select at the bottom — confirmation bias is the reflexive loop of the ladder. The belief reinforces itself by selecting confirming data. This is the deepest failure mode and the hardest to interrupt.
- **Treating conclusions as data.** Presenting conclusions (rung 5) or beliefs (rung 6) as if they were observations (rung 1). When this occurs, the chain of inference is hidden and cannot be examined.
- **Ladder-walking as delay tactic.** In fast-moving operational contexts, going back to data for every disagreement is impractical. Know when the ladder analysis is worth the time investment (high-stakes, persistent conflict) vs. when to trust the inference and move on.

### 2. Causal Analysis

**Hold in mind:**
Three modes cover most organizational and operational situations:

**Linear chain (5 Whys).** One proximate cause leads to another in a sequence. Each "why" peels one layer. Works when causality is genuinely sequential — a single failure path, a repeatable error, a process deviation. Stops working when the real problem has multiple contributing causes or when the answer to "why" branches rather than narrows.

**Category-based (fishbone / Ishikawa).** The outcome is produced by contributions from several independent causal categories — typically people, process, equipment, environment, management, measurement. Map each category separately, then look for where categories interact. Works when you suspect multiple contributing factors but don't yet know which matter most. Especially useful early in an investigation before you have data to distinguish signal from noise.


**Do:**
- **Test for structure before choosing a tool.** Ask: does this problem recur in different forms despite local fixes? If yes, you're probably in a feedback loop and need systems-based analysis. If it's a discrete incident with a clear trigger, start with 5 Whys.
- **Use 5 Whys to get started, fishbone to get complete, causal loops to get honest.** The sequence works as a progression: 5 Whys names the obvious chain; the fishbone surfaces what the chain missed; the causal loop reveals why your interventions haven't held.
- **Distinguish proximate from systemic causes explicitly.** Name both. The proximate cause tells you what to fix today; the systemic cause tells you what to change so it doesn't recur. Fixing only proximate causes is the definition of whack-a-mole.
- **Watch for the "human error" terminus.** An analysis that ends at "someone made a mistake" has almost always stopped too early. Human error is a proximate cause; the systemic question is what conditions made that error likely or inevitable.
- **Amazon's format is worth borrowing.** Post-mortems that list contributing factors (plural, not singular) and explicitly separate "what happened" from "what made this possible" are structurally more honest than root-cause-singular analyses.

**Avoid:**
- **Defaulting to 5 Whys for systemic problems.** The technique always terminates — it will find an answer whether or not that answer is complete. A satisfied-feeling 5 Whys on a feedback-loop problem gives you the illusion of understanding without the reality.
- **Confusing correlation with causation.** Two variables moving together, even reliably, does not establish which causes which — or whether both are downstream of a third variable. Causal analysis requires a mechanism, not just a correlation.
- **Single root cause bias.** Complex events almost always have multiple contributing causes. Forcing a single root cause produces an explanation that is clean and actionable but wrong.
- **Stopping at the organizational boundary.** Causes that cross team or departmental lines are uncomfortable to name. Analyses that stay within one team's scope systematically miss cross-functional and structural causes.

### 3. Occam's Razor

**Hold in mind:**
Each additional assumption in an explanation is an additional point of failure. A theory with five independent assumptions is true only if all five hold; each assumption multiplies the uncertainty. Simple explanations have fewer attack surfaces. The practitioner's internal question is: *"Have I added any explanatory component that is not doing actual work? What happens to the explanation if I remove it?"*

**Do:**
- **Count assumptions, not words.** A long explanation can have few assumptions; a short one can have many hidden dependencies. Count the independent things that must be true.
- **"What is the simplest explanation consistent with all the evidence?"** Not some of the evidence — all of it. Razor cuts excess but cannot ignore data.
- **Apply especially to your own motivated reasoning.** Complex explanations most often appear when we are trying to explain away inconvenient evidence. The complexity is a tell.
- **Distinguish simplicity of explanation from simplicity of mechanism.** The correct explanation of complex phenomena (DNA replication, market pricing) may be mechanistically intricate; what Occam requires is that you not add additional explanatory layers beyond what the evidence demands.
- **Use as a tiebreaker, not a trump card.** If the simpler explanation fits the evidence 95% as well as the complex one, prefer the simpler. If the simpler one fits 60% as well, gather more evidence.

**Avoid:**
- **Einstein's misquote problem.** "Everything should be made as simple as possible, but not simpler." The failure mode is over-application: selecting an explanation that is so parsimonious it fails to account for genuine complexity in the data.
- **Confusing familiarity with simplicity.** The explanation you've heard before feels simpler because it's familiar, not because it has fewer assumptions. Check the actual assumption count.
- **Using Razor to avoid investigation.** "The simple explanation is X, so I don't need to look further." Occam guides selection among explanations currently on the table; it does not eliminate the need to find better explanations.

### 4. Hanlon's Razor

**Hold in mind:**
Imagine a spectrum from "pure accident" to "pure malice." Human behavior clusters heavily at the accident/incompetence end and sparsely at the malice end, even in organizations with genuine misaligned incentives. Hanlon's Razor says: start at the left of the spectrum and require evidence to move right. The practitioner's discipline is to separate the question "what caused this outcome?" from the question "how do I feel about the person involved?"

**Do:**
- **Before escalating, ask: what is the most charitable explanation that fits all the facts?** If it is "they didn't know," address the information gap. If it is "they forgot," build a process. Only if neither applies should you look for intent.
- **Treat "they didn't tell me" as a communication failure, not a cover-up.** Most information asymmetries in organizations are structural, not deliberate.
- **Malice requires motive, means, and opportunity.** Ask whether all three are genuinely present before concluding it.
- **Apply asymmetrically to yourself.** You will naturally apply Hanlon's Razor to your own mistakes. Apply it equally to others.
- **When malice is confirmed, act decisively.** Hanlon's Razor is a prior; strong evidence should update it. If the evidence actually points to intentional harm, don't hide behind the razor to avoid the discomfort of acting.

**Avoid:**
- **Weaponized charity.** Repeatedly applying Hanlon's Razor to the same person despite a pattern of outcomes that require increasingly implausible incompetence explanations. At some point, systematic "incompetence" that always benefits one party is indistinguishable from intent.
- **Conflating the model with the response.** Even if an outcome was caused by incompetence, not malice, you still need to address the incompetence. Hanlon's Razor affects attribution, not action.
- **Cultural blind spot.** In some organizational cultures, assigning incompetence is actually more face-threatening than assigning malice. The razor needs to be calibrated for cultural context.

### 5. Analogical Reasoning

**Hold in mind:**
An experienced practitioner operates with a mental library of mechanisms — patterns of cause and effect observed across many domains — and actively searches for structural matches when facing a novel problem. The key distinction is between surface analogies and deep structural analogies. Surface analogies share superficial features (both look similar); structural analogies share the underlying mechanism (both operate similarly). Darwin's application of Malthus's population pressure theory to biological species is a structural analogy: the mechanism (competition for limited resources producing differential survival) was the same, even though the domains looked nothing alike. Surface analogies mislead; structural analogies generate real insight. The practitioner's skill is in stripping away surface features to identify the mechanism at work, then asking: what other system operates by the same mechanism? The answer often comes from a distant domain — biology, physics, game theory, martial arts, military strategy — where the mechanism is better understood and more richly documented. Importing a well-developed theoretical framework from another field is orders of magnitude faster than building one from scratch.

**Do:**
- **Strip the problem to its mechanism before searching for analogies.** What is the core dynamic: competition for scarce resources, amplifying feedback, barrier to entry, energy release, information asymmetry? The mechanism is what you're looking to match, not the surface.
- **Search deliberately in distant domains.** The most productive analogies come from domains that look nothing like your field. Nature (biomimicry), military history, game theory, thermodynamics, and evolutionary biology are particularly rich sources. Close-domain analogies exist but are usually already known.
- **Use analogies to generate hypotheses, not conclusions.** An analogy points toward a possible mechanism; it is not proof that the mechanism operates. Generate the hypothesis, then test it explicitly.
- **Ask: what does the source domain know that my domain doesn't?** If the analogy is structural, then the rich literature of the source domain becomes a resource. What failure modes are documented there? What interventions work? What does the theory predict will happen next?
- **Build a cross-domain mechanism library.** After encountering a useful analogy, name the mechanism explicitly and file it. Over time, practitioners develop a mental library of transferable patterns that become an intuitive first resource when facing new problems.

**Avoid:**
- **Surface analogies that mislead.** The source and target share a superficial feature but a different underlying mechanism. Acting on a surface analogy imports the wrong model and produces wrong predictions. Always verify the mechanism, not just the resemblance.
- **Single-analogy lock-in.** Once a powerful analogy is found, it becomes the lens through which everything is interpreted, even when a better analogy exists. Analogies should generate hypotheses, not replace further thinking.
- **Forgetting the disanalogy.** Every analogy breaks down somewhere. The practitioner who doesn't identify where the analogy fails will eventually be surprised by a prediction it makes that doesn't hold. Map the limits explicitly.
- **Using analogies to persuade rather than to investigate.** Analogies are excellent rhetorical tools — which means they are regularly used to make bad ideas sound plausible. When an analogy is being used to advocate for a position rather than to explore it, treat it as a warning sign.
- **Not importing the full framework.** Borrowing the catchy surface of a concept from another domain without importing the deeper theoretical structure that makes it useful. The borrowed concept becomes jargon without substance.

### 6. SRK Framework

**Hold in mind:**
Think of the three levels as gears. First gear (knowledge-based) is for novel terrain: maximum traction, slow, effortful, burns fuel. Second gear (rule-based) is for recognised situations with a known map: more efficient, less attention required, works well as long as you're on the right road. Third gear (skill-based) is for familiar ground: fast, fluid, almost no conscious attention. Experienced operators spend most of their time in second and third gear. The danger is shifting into third gear on terrain that requires first — when a situation looks familiar but isn't. The error is not lack of skill; it is misclassification of the terrain.

**Do:**
- **Classify errors before diagnosing causes.** When something goes wrong, first ask: was this a slip (right action, wrong execution), a rule mistake (wrong rule applied), or a knowledge mistake (flawed reasoning from first principles)? The intervention is entirely different for each. Retraining doesn't fix slips; procedure redesign doesn't fix knowledge gaps.
- **Checklists work because they externalise rule-based behaviour.** They move cognitively expensive rule recall out of working memory and onto paper, reducing the risk of lapses and freeing attention for knowledge-based demands when needed. Design checklists for the rule-based level; don't expect them to substitute for knowledge-based reasoning in novel situations.
- **High-stakes novelty requires explicit escalation to knowledge-based mode.** Experienced operators are fast precisely because they pattern-match to rules. Under time pressure, this is an advantage. In genuinely novel situations — new system configurations, unprecedented combinations of failures — the speed of rule-based processing becomes dangerous. Build in triggers that force a pause and explicit reasoning.
- **Train for the boundary conditions between levels.** Most training rehearses skill- and rule-based performance. The hardest failures happen at the transitions: when a situation looks rule-based but isn't, or when someone is confident they're in familiar terrain but the system has changed beneath them. Scenario training should deliberately introduce situations that violate familiar patterns.
- **In post-mortems, resist attributing skill-level errors to motivation or care.** Slips and lapses are not caused by not trying hard enough; they are caused by automaticity under conditions that require attention. The intervention is design (forcing functions, checklists, environmental cues), not exhortation.

**Avoid:**
**Misclassification under pressure.** A situation presents familiar surface features but has novel underlying dynamics. The operator classifies it as rule-based and applies a familiar procedure. The procedure is wrong for this situation, but the confidence that comes with pattern recognition suppresses further inquiry. This is the mechanism behind many aviation and process control accidents: the crew was competent and experienced; they were operating in the wrong gear.

**Knowledge-based overload in emergencies.** Systems are designed for normal operations. When multiple simultaneous failures occur, operators are pushed into knowledge-based mode precisely when cognitive load is highest and time is shortest. Without adequate mental models of the system, knowledge-based reasoning fails. This argues for investing in deep system understanding during training, not just procedural fluency.

**Treating all errors as the same kind.** Organisations often respond to any error with the same intervention: retraining, increased supervision, revised procedures. But a lapse (forgot step 7) requires a different response from a rule mistake (applied wrong procedure) which requires a different response from a knowledge mistake (reasoned incorrectly about a novel situation). Undifferentiated responses leave the actual cause unaddressed.

**Skill-level complacency in high-stakes contexts.** When a task becomes skill-based, it demands less attention — which means changes in the environment are less likely to be noticed. Experienced practitioners in high-stakes roles need explicit mechanisms to periodically re-engage deliberate attention, precisely because their competence has made vigilance feel unnecessary.

## Deliverable format

Produce a markdown document with these sections:

### Presenting situation (what has been observed — facts only, no interpretation)

### Ladder of Inference audit: where are conclusions outrunning evidence?

### Causal map: proximate causes vs root causes, with evidence for each link

### Occam's Razor check: what is the simplest explanation consistent with the evidence?

### Hanlon's Razor check: is this better explained by incompetence or misaligned incentives than intent?

### Analogous situations: what comparable cases exist and what did they reveal?

### SRK classification: is this a skill-based, rule-based, or knowledge-based problem?

### Diagnosis (one sentence) and confidence level

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [ladder-of-inference](references/ladder-of-inference.md)
- [causal-analysis](references/causal-analysis.md)
- [occams-razor](references/occams-razor.md)
- [hanlons-razor](references/hanlons-razor.md)
- [analogical-reasoning](references/analogical-reasoning.md)
- [srk-framework](references/srk-framework.md)

