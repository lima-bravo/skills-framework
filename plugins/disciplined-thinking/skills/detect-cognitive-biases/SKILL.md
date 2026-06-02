---
name: "detect-cognitive-biases"
description: "Scans a decision, analysis, or plan for active cognitive biases. Covers anchoring, availability, survivorship, hindsight, planning fallacy, fundamental attribution error, base rate neglect, social proof, and Dunning-Kruger. Use before committing to a decision, after a surprising outcome, or when a recommendation feels too clean."
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
  sources: "Psychology/anchoring.md,Psychology/availability-bias.md,Psychology/survivorship-bias.md,Psychology/hindsight-bias.md,Psychology/planning-fallacy.md,Psychology/fundamental-attribution-error.md,Psychology/base-rate-neglect.md,Psychology/social-proof.md,Psychology/dunning-kruger.md,Psychology/confirmation-bias.md"
---

# Detect Cognitive Biases

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Choose a branch

Pick the branch that best matches the situation, then apply its models:

- **Before deciding** — Anchoring, Availability Bias, Base Rate Neglect, Planning Fallacy
- **After a surprise or failure** — Hindsight Bias, Fundamental Attribution Error, Survivorship Bias
- **Evaluating confidence and expertise** — Dunning-Kruger, Confirmation Bias, Social Proof

## Protocol

### 1. Anchoring

**Hold in mind:**
The anchor sets the reference frame for all subsequent adjustments. Adjustments from an anchor are typically insufficient — people move from the anchor in the right direction but not far enough. The result: the final judgment is pulled toward the anchor even when the anchor is arbitrary. The practitioner understands this at two levels: exploiting anchoring strategically (setting favorable anchors) and de-anchoring their own judgments (actively seeking to override the anchor with independent analysis).

**Do:**
- **In negotiation: anchor first, and anchor high (if selling) or low (if buying).** The first specific number stated in a negotiation has disproportionate influence on the final outcome. The most favorable starting position the other party might accept is the correct opening anchor.
- **Before hearing an estimate or price, form your own view first.** Independent analysis before exposure to an anchor preserves the independence of your judgment. The anchor cannot contaminate a judgment already made.
- **In group settings, collect independent estimates before revealing them.** If one person states an estimate first, everyone else anchors to it. Written estimates, submitted simultaneously, produce more diverse and accurate inputs.
- **Generate a counter-anchor when confronted with an unfavorable one.** In negotiation, the response to an unfavorable anchor is not to work from that anchor but to introduce a strong counter-anchor that shifts the reference point.
- **Audit your own estimates against the anchors embedded in them.** Did this estimate start from last year's budget (+10%)? From the competitor's price? From a number someone threw out in a meeting? Trace the anchor and ask whether the final number is genuinely independent of it.

**Avoid:**
- **Insufficient adjustment.** Knowing about anchoring does not fully neutralize it. Studies show that even when people are told the anchor is random and try to adjust for it, adjustments are still insufficient. Building in explicit independent analysis is more reliable than trying to mentally correct.
- **Self-anchoring.** Your own previous estimates anchor subsequent ones. In iterative processes (budget updates, project re-estimates), the prior estimate becomes an anchor even when circumstances have changed significantly.
- **Anchoring in reference to irrelevant extremes.** Displaying a very high "original price" next to a lower "sale price" makes the sale price feel like a bargain regardless of its absolute value. This is anchoring-by-framing and is the mechanism behind most retail discounting.

### 2. Availability Bias

**Hold in mind:**
The mind uses cognitive ease as a proxy for frequency. If you can think of many examples quickly, it feels like the thing happens often. The proxy is imperfect: availability is driven by recency, vividness, and media attention — not by base rates. Dramatic, visible events are over-represented in memory and therefore over-estimated in probability; quiet, common events are under-represented and underestimated.

**Do:**
- **Override availability with base rates.** When you feel a risk is high (because of a recent vivid example) or low (because you can't think of examples), check the actual base rate. The base rate is a better estimate than availability.
- **Be especially aware of availability bias after dramatic events.** After a plane crash, people overestimate the risk of flying. After a market crash, people overestimate the probability of further falls. After a product failure, teams overweight the failure mode that caused it. Recalibrate toward the base rate.
- **When doing risk assessment, use structured frameworks rather than example-recall.** Systematically enumerate risk categories rather than relying on whatever comes to mind. The framework ensures coverage of under-available risks.
- **Recognize media-amplified availability.** Events that receive extensive coverage are dramatically over-represented in available memory. The probability of terrorism, plane crashes, and shark attacks is systematically overestimated by people whose information diet is news-heavy.
- **In organizational decisions, structured data beats anecdote.** An anecdote — especially a vivid, recent one — creates high availability and feels more compelling than statistical evidence. Systematically weight evidence by quality, not vividness.

**Avoid:**
- **Strategy contaminated by the most recent crisis.** An organization that just experienced a specific failure type over-invests in preventing that exact failure while under-investing in the next one. The previous crisis creates high availability for one risk type.
- **Ignoring low-probability, high-impact risks that lack vivid examples.** Black swan events — by definition — have few or no recent examples in available memory, so they feel implausible. Availability bias is a component of why they are systematically underpriced.
- **Availability in personnel decisions.** Easily remembered employees (vocal, visible, dramatic) are evaluated more positively than quiet, consistent contributors whose work is less available to memory.

### 3. Survivorship Bias

**Hold in mind:**
Think of a cemetery of ideas. Every bold strategy that worked is commemorated with a monument — a case study, a TED Talk, a chapter in a leadership book. Every strategy that failed is buried without a marker. When you walk through the cemetery reading monuments, you naturally conclude that bold strategies work. But the absence of failure markers isn't evidence of absence — it's evidence that the dead don't write memoirs. Before drawing lessons from what succeeded, ask: where are the graves?

**Do:**
- **Before citing a success as evidence, ask: what happened to all the attempts that looked like this at the same stage?** If you can't answer, you're probably reasoning from survivors.
- **In post-mortems, explicitly ask: what would have had to be true for this to fail?** This surfaces the invisible counterfactual population.
- **When benchmarking, build a failure file alongside the success file.** Deliberately collect case studies of companies that tried the same move and failed.
- **In talent and promotion decisions, ask why high-performers who left did so.** Leavers are the non-survivors of your retention filter — their signal is as informative as stayers'.
- **Apply the "graveyard audit" at strategy reviews:** for every initiative on the shortlist, ask the team to name two organisations that ran a similar initiative and failed. If they can't, the evidence base is probably biased.

**Avoid:**
**Misattributing success factors.** Teams identify what successful cases have in common (founder-led, fast-moving, capital-efficient) and treat these as causal drivers — without checking whether failed cases shared the same traits. Correlation with survivors is not causation.

**Survivor-sourced benchmarks.** Comparing your organisation only to companies that are currently thriving ignores the selection effect: you're benchmarking against a filtered set. Median performance in a survivor pool looks very different from median performance in the full population.

**Self-congratulatory retrospectives.** After a successful project, teams explain success in terms of their own decisions. But if ten similar teams faced similar decisions and only yours happened to succeed, the explanation may be mostly noise dressed as signal.

**Invisible attrition.** In learning programmes, research studies, or product funnels, the people who dropped out often have the most important signal. Analysing only completers distorts every insight about what works.

### 4. Hindsight Bias

**Hold in mind:**
Imagine reading a novel twice: once forward from the beginning, and once having already read the ending. The second time, every clue, foreshadowing, and hint seems blazingly obvious. You feel impatient with the characters for not seeing what was coming. But they were living in the forward direction, with no access to the last page. Hindsight bias is the cognitive equivalent of judging characters by the ending you already know. The only honest assessment is to reconstruct what was actually knowable at the decision point — not what became knowable later.

**Do:**
- **In post-mortems, document what was known and not known at the time of each key decision, before discussing what went wrong.** Reconstructing the information state prevents hindsight from rewriting the record.
- **Use pre-mortems to create a baseline.** Before a project launches, ask the team to write down their confidence levels and key uncertainties. These written priors become the honest benchmark against which post-mortem judgements can be calibrated.
- **When evaluating a past decision, ask: "was this a reasonable decision given what was known then, or only a bad decision given what we know now?"** These are different questions with different implications.
- **In accountability processes, separate outcome quality from decision quality.** A good decision with a bad outcome should be treated differently from a bad decision with a bad outcome. Conflating them punishes prudent risk-taking.
- **Apply the "newspaper test at decision time."** Ask: would a knowledgeable journalist, reading only what was available at the moment of decision, judge this as negligent? Not: would a journalist reading the outcome story say "how could they not see this coming?"

**Avoid:**
**The blame cycle.** Post-mortem reveals a failure. Hindsight bias makes the failure look obvious in retrospect. The team concludes that anyone exercising basic competence would have avoided it. This triggers blame rather than learning — and misses the systemic conditions that made the outcome likely.

**Distorted risk calibration.** After a risk materialises, teams systematically overestimate how predictable it was. This inflates their confidence in identifying similar risks going forward ("we should have seen that coming — we won't make that mistake again"). But the predictive environment hasn't changed; only the hindsight has.

**Learning from the wrong thing.** When hindsight makes a decision look obviously wrong, teams update on the wrong variable. They change what was most visible in the failure, not what was most causally significant. The post-mortem produces confident but misdirected learning.

**Talent misassessment.** Managers who backed a failed initiative are assessed as having poor judgement — even when the decision was reasonable under uncertainty. Managers who backed a successful gamble are assessed as visionary. Both assessments are contaminated by hindsight. Over time, this selects for risk-aversion rather than good judgement.

### 5. Planning Fallacy

**Hold in mind:**
The inside view and outside view generate systematically different estimates. Inside view: you map a plausible sequence of steps and imagine each succeeding — producing an optimistic narrative that feels realistic because you have considered the details. Outside view (reference class forecasting): you identify the category of work this project belongs to and ask what the historical distribution of outcomes looks like. The two estimates diverge because the inside view ignores base rates.

The remedy is not to think harder about the inside view. It is to consult the outside view first, anchor your estimate on the historical distribution, and then adjust for genuinely project-specific factors — the opposite of how most planning works.

**Do:**
- **Before finalizing any estimate, identify the reference class**: what category of work does this resemble, and what is the historical median and 90th-percentile duration for that category?
- **Apply a planning fallacy correction factor of 1.5–2×** to initial inside-view estimates as a starting hypothesis; revise based on reference class data when available.
- **Use three-point estimates**: optimistic (10th percentile), realistic (median), and pessimistic (90th percentile). Weight the pessimistic end more heavily than intuition suggests.
- **Run a pre-mortem before committing**: assume the project has taken twice as long as planned and ask what went wrong.
- **Track your estimation accuracy over time.** Comparing original estimates to actual outcomes creates personal reference class data that is more actionable than general research.

**Avoid:**
- **Adding a buffer to an already-optimistic inside-view estimate** without challenging the underlying baseline — you get a slightly less wrong number, but the base rate problem is unchanged.
- **Anchoring on the first estimate** and adjusting upward only modestly — the anchor is usually itself inside the planning fallacy range.
- **Confusing effort with duration.** "We will work hard" does not reliably compress timelines on complex knowledge work.
- **Applying outside-view thinking only to obviously risky projects** — the planning fallacy operates most severely on projects that feel routine and well-understood.

### 6. Fundamental Attribution Error

**Hold in mind:**
Imagine two spotlights on a stage. One illuminates the performer; the other, dimmer and rarely switched on, illuminates the stage itself — the set, the missing cue, the malfunctioning prop. Audiences mostly watch the performer. When something goes wrong, the performer is visible and the broken stage machinery is not. The fundamental attribution error is consistently forgetting to turn on the second spotlight. When you're the performer, you feel the broken stage under your feet; you can't understand why the audience is blaming you.

**Do:**
- **Before diagnosing a performance problem as a people problem, run a systems audit.** Ask: what in the environment, process, or incentive structure is making this outcome more likely? If you can't identify at least one systemic factor, you've probably underdone the situational analysis.
- **In AARs and post-mortems, explicitly separate person-factors from system-factors.** Build two columns: "What did people do?" and "What conditions made that more likely?" Avoid leaving the second column empty.
- **When someone misses an expectation, ask "what got in the way?" before "why didn't they try harder?"** The framing of the question shapes the answer you'll receive.
- **Apply the FAE correction to praise too.** If you attribute a team's success entirely to their quality, you may fail to replicate conditions that made success possible — the good manager, the clear brief, the realistic timeline.
- **Watch for FAE in hiring and firing.** Firing someone for a behaviour that your system reliably produces will change the name on the desk, not the outcome.

**Avoid:**
**The blame post-mortem.** After a failure, the team agrees the problem was a specific person's poor judgement or lack of skill. The recommendation is a people change. The systemic conditions that produced the poor outcome remain in place, and the new person encounters the same constraints.

**The heroic promotion.** A leader succeeds in a high-performing division with excellent operational support. They are promoted for their personal qualities. In the new role, the situational supports are absent, and performance declines. The FAE masked how much of the previous success was context-dependent.

**The bad-faith attribution.** In conflict or negotiation, the other party's position is explained by their motives or character ("they just want to win") rather than the legitimate constraints and incentives acting on them. This makes resolution harder because you're trying to change a person rather than adjust a situation.

**Feedback that doesn't land.** Feedback framed as character diagnosis ("you're not detail-oriented") triggers defensiveness. The recipient experiences their situation; the feedback diagnoses their essence. Situational reframes ("this process doesn't have a checkpoint that would catch these errors") are more actionable and less threatening.

### 7. Base Rate Neglect

**Hold in mind:**
Imagine estimating the height of a stranger approaching from a distance, before you can see clearly. The base rate is: average adult height is roughly 170cm. As they get closer, specific cues (long legs, upright posture) might shift your estimate to 180cm. You don't discard the base rate and guess 220cm just because the specific cues are vivid. Base rate neglect in reasoning is exactly this error: discarding the prior distribution because the individual case has become vivid. The base rate is the anchor; specific evidence shifts the anchor. It doesn't replace it.

**Do:**
- **Before assessing a specific case, ask: "what is the typical outcome for cases in this reference class?"** This is the base rate question. Only after establishing the base rate should you adjust for specific features of the individual case.
- **Use reference class forecasting for project planning.** Instead of asking "how long will this project take?" first ask "how long did similar projects of this type and scale typically take?" Use that distribution as the starting estimate, then adjust for specific factors.
- **Challenge "this time is different" claims explicitly.** When someone argues that a prior base rate doesn't apply, ask them to be specific about which features make this case genuinely different — and how much those features should shift the base rate.
- **In investment and strategic decisions, build a failure rate into the base assumption.** If the base rate for successful acquisitions of this type is 40%, your prior probability should reflect that before you've assessed any specifics of the deal in front of you.
- **Present base rates alongside case assessments.** In written analyses and decision memos, lead with the reference class outcome before introducing the specific case argument. This structures the reader's cognition to anchor first, then adjust.

**Avoid:**
**The compelling narrative override.** A pitch, proposal, or strategy is presented with vivid specifics — strong team, large market, clear differentiation. The specifics are real and positive. But no reference is made to the base rate of similar propositions succeeding. The vivid story replaces the statistical prior. This is the structural cause of most over-optimism in innovation and investment decisions.

**Unique-case reasoning.** Practitioners argue that the relevant reference class doesn't apply because "this situation is unique." Every situation is unique in some respects; the question is whether it is unique in the respects that determine outcomes. The burden of proof is on demonstrating uniqueness, not asserting it.

**Inside view dominance.** Inside view reasoning focuses on the specific plan, its logic, its resources, and its people. Outside view reasoning starts with the base rate for plans like this one. Research consistently shows that outside-view estimates are better calibrated, especially for novel, ambitious, or complex projects — exactly the situations where inside-view confidence is highest.

**Availability distortion of the base rate.** When a vivid recent success (or failure) is available in memory, people adjust their base rate estimate toward the memorable case rather than the actual distribution. One spectacular recent IPO shifts venture capital base rate intuitions upward; one recent acquisition disaster shifts M&A base rate intuitions downward. Neither adjustment reflects the actual distribution.

### 8. Social Proof

**Hold in mind:**
Think of social proof as a signal amplifier in a noisy environment. When you don't know what to do, you tune to the station that seems clearest — other people's behaviour. The amplifier doesn't care whether the signal is accurate; it just makes it louder. This means a small initial movement in one direction gets amplified, regardless of whether that direction was right. The best restaurant in a town isn't necessarily the one with the longest queue; it's often just the one that got there first. Understanding social proof means recognising when you're tuning to the amplifier rather than the actual signal — and when you're one of the people whose behaviour others are amplifying.

**Do:**
- **To shift a norm, identify and convert the visible early adopters, not the average users.** Social proof cascades from observed behaviour, and observed behaviour is disproportionately attributed to high-visibility individuals.
- **Make adoption visible.** Behaviours that are invisible (reading a report, changing a mental model) don't generate social proof. Make new behaviours legible: team stand-ups, shared dashboards, public commitments.
- **In change initiatives, manufacture legitimate social proof early.** A small, visible pilot group that is seen to succeed creates the social proof signal that triggers broader adoption — more reliably than a compelling business case sent to everyone.
- **Use social proof diagnostically.** When a norm persists despite formal pressure to change it, ask: who are people observing, and what are those people doing? The visible behaviour trumps the policy.
- **Guard against false social proof.** If everyone in a room appears to agree, check whether it's genuine convergence or pluralistic ignorance — where everyone privately doubts but assumes the others know something they don't.

**Avoid:**
**Pluralistic ignorance.** A group proceeds with a shared misunderstanding because each member assumes the others' silence signals agreement or understanding. No one speaks up because speaking up would reveal that you are the only one who doesn't understand — but actually, no one understands. Social proof turns private doubt into apparent consensus.

**Cascade lock-in.** An early majority adopts a technology, platform, or approach. Late adopters follow on the basis of social proof, not direct evaluation. The approach becomes entrenched before its limitations are fully understood. Network effects amplify the cascade; switching costs solidify the lock-in.

**Status-amplified error.** A senior leader adopts a framing, model, or conclusion that is incorrect. Because they are highly visible and high-status, others treat their behaviour as strong social proof and align. The error propagates rapidly through a hierarchy precisely because of the leader's credibility — not despite it.

**Gaming.** Social proof systems can be manipulated. Fake reviews, astroturfed forum posts, inflated download numbers, and manufactured public opinion all work by generating artificial social proof signals. Before treating observed behaviour as a reliable aggregate, ask whether it could have been manufactured.

### 9. Dunning-Kruger

**Hold in mind:**
Competence development follows a four-stage model: unconscious incompetence (you don't know what you don't know; confidence is high), conscious incompetence (you know how much you don't know; confidence drops sharply), conscious competence (you can perform well with effort; confidence recovers), unconscious competence (performance is excellent and largely automatic; confidence is appropriately calibrated). Dunning-Kruger maps onto the first stage — the confidence peak before the learning curve has been climbed.

**Do:**
- **High confidence without track record is a signal, not a qualification.** When assessing someone's capability in an unfamiliar domain, weight demonstrated performance and track record over stated confidence.
- **Use structured knowledge tests rather than self-assessments.** Self-assessment of competence is systematically biased. The people who most overestimate their ability are least able to calibrate their own self-assessment.
- **Calibrate your own confidence by seeking disconfirming experiences early.** In a new domain, deliberately seek feedback and challenging tests of your understanding before building on it. The first 20% of learning in a new domain is often the most dangerous.
- **Dunning-Kruger in reverse: don't dismiss your expertise.** Experienced practitioners who constantly caveat their knowledge may be over-applying humility. If you have a genuine track record, that track record is evidence. Don't let appropriate epistemic humility become imposter syndrome.
- **Create environments where acknowledging not-knowing is safe.** The Dunning-Kruger effect is amplified in cultures where admitting ignorance is punished. Psychological safety reduces the incentive to maintain false confidence.

**Avoid:**
- **Misattributing domain competence.** Someone excellent in domain A overestimates their competence in domain B because success in A creates general confidence. This is especially common when domains superficially resemble each other.
- **Promoting on confidence rather than competence.** High-confidence employees get promoted over more capable but less confident ones, especially in cultures where visibility matters more than demonstrated performance.
- **Confusing articulate explanation with understanding.** The ability to speak fluently about a topic is not the same as competence. Some people are Dunning-Kruger in their ability to explain concepts they don't deeply understand.

### 10. Confirmation Bias

**Hold in mind:**
The mind processes incoming information through the filter of existing beliefs. Consistent evidence passes through easily; inconsistent evidence is subjected to higher scrutiny, is more likely to be found methodologically wanting, and is less likely to be remembered. The result is a self-reinforcing belief system that becomes harder to update the longer it has been held and the more it has been built upon. The practitioner's defense is structural: build disconfirmation in to information gathering by design.

**Do:**
- **Always seek disconfirming evidence actively, not passively.** Ask "what would falsify this belief?" and then look for it. If no evidence could falsify the belief, you have a conviction, not a hypothesis.
- **Apply the steel man test.** Before dismissing a contrary view, construct the strongest possible version of it. If you can't articulate why someone smart might hold this view, you don't understand the disagreement well enough.
- **Use pre-mortems as a structural disconfirmation tool.** The pre-mortem imagines failure specifically to surface the evidence that would be generated if the plan were wrong.
- **In data analysis, look for results that contradict your hypothesis before publishing those that confirm it.** The most common form of confirmation bias in analysis is stopping when you find confirming evidence and continuing only if you find disconfirming results.
- **Designate a "red team" or devil's advocate for high-stakes decisions.** Institutionalize the search for disconfirming evidence so it doesn't depend on individual vigilance.

**Avoid:**
- **Confusing conviction with evidence.** The strength of a belief is not evidence for its truth. In fact, very strongly held beliefs are precisely the ones most susceptible to confirmation bias.
- **Interpreting successful outcomes as confirmation of process.** A good outcome does not prove the process was right. If the process was sound but lucky, confirming the process from the outcome embeds a flawed methodology.
- **Curating your information environment.** Reading only sources that agree with your existing worldview is large-scale confirmation bias. Deliberate exposure to high-quality contrary views is the structural mitigation.

## Deliverable format

Produce a markdown document with these sections:

### Decision or analysis under review (one sentence)

### Active biases identified (name each, with evidence it is operating)

### Highest-risk bias (the one most likely to distort the outcome)

### Structural mitigations (specific process changes, not just awareness)

### Revised confidence level after bias audit

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [anchoring](references/anchoring.md)
- [availability-bias](references/availability-bias.md)
- [survivorship-bias](references/survivorship-bias.md)
- [hindsight-bias](references/hindsight-bias.md)
- [planning-fallacy](references/planning-fallacy.md)
- [fundamental-attribution-error](references/fundamental-attribution-error.md)
- [base-rate-neglect](references/base-rate-neglect.md)
- [social-proof](references/social-proof.md)
- [dunning-kruger](references/dunning-kruger.md)
- [confirmation-bias](references/confirmation-bias.md)

