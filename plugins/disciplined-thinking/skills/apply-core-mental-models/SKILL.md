---
name: "apply-core-mental-models"
description: |
  Applies core mental models (first principles, inversion, incentives, bottlenecks, bias checks) to the user's situation. Use for ambiguous decisions, strategy, or when no specialized chain fits.
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
  sources: "General-Thinking/first-principles.md,General-Thinking/inversion.md,General-Thinking/second-order-effects.md,Systems/feedback-loops.md,Psychology/incentives.md,General-Thinking/probabilistic-thinking.md,General-Thinking/map-territory.md,Psychology/sunk-cost.md,Psychology/confirmation-bias.md,Mathematics/compounding.md,Psychology/loss-aversion.md,Systems/bottlenecks.md,Mathematics/expected-value.md,Mathematics/bayesian-updating.md,General-Thinking/black-swan.md"
---

# Apply Core Mental Models

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Choose a branch

Pick the branch that best matches the situation, then apply its models:

- **Decision under uncertainty** — Probabilistic Thinking, Inversion, Margin of Safety
- **System change** — Feedback Loops, Bottlenecks, Incentives
- **People and organization** — Incentives, Loss Aversion, Confirmation Bias
- **Quantitative decision-making** — Expected Value, Bayesian Updating, Black Swan

## Protocol

### 1. First Principles

**Hold in mind:**
Think of knowledge as a tree. Most people work with the leaves and branches — the conclusions, rules of thumb, and inherited practices at the edges. First principles thinking forces you to the trunk and roots: the load-bearing facts. When a branch breaks, people who only know branches are stuck. People who know the roots can regrow.

The practitioner's internal question is: *"What would I believe about this if I had never seen anyone else's solution?"*

**Do:**
- **Ask "why" five times, then ask "is that actually true?"** Each "why" peels a layer of assumption; the final question tests whether the foundation holds.
- **Separate physics from policy.** Physical constraints (energy required, time to manufacture, information bandwidth) are first principles. Pricing norms, organizational structures, and industry practices are not — they are historical accidents masquerading as constraints.
- **List your assumptions explicitly before you reason.** You cannot strip assumptions you haven't named. Write them down. Mark each one: *known fact*, *reasonable belief*, or *untested assumption*.
- **Rebuild from scratch on paper before touching reality.** The point is to check whether the current solution is actually the best available, not immediately to act on that check.
- **Use it selectively.** First principles thinking is expensive. Reserve it for problems where the stakes are high, the current approach is visibly failing, or you suspect a hidden assumption is load-bearing.

**Avoid:**
- **Reinventing the wheel badly.** Discarding convention entirely, you rebuild something worse because convention embedded genuine accumulated wisdom you didn't notice. The fix: after reasoning from first principles, check your conclusion against what experienced practitioners know and account for the discrepancy.
- **False bedrock.** Calling something a first principle when it is actually a belief. "Customers want the cheapest option" feels foundational but is an empirical claim requiring evidence.
- **Analysis paralysis.** First principles reasoning can consume enormous time. Practitioners set a time-box: if you haven't found a materially better answer within the budget, ship the conventional solution.

### 2. Inversion

**Hold in mind:**
The human mind is better at identifying failure than designing success — we have more experience with things breaking than with things working perfectly. Inversion exploits this asymmetry. By vividly imagining the worst outcome, you activate a different and often more rigorous mode of thinking. The practitioner holds two questions simultaneously: *"What gets me there?"* and *"What definitely doesn't get me there?"* The intersection is often the most actionable space.

**Do:**
- **Pre-mortem before launch.** Before committing to a plan, imagine it is 12 months later and the project has failed catastrophically. Write the obituary. What killed it? Work backward to present-day preventable causes.
- **List the conditions for guaranteed failure, then treat them as hard constraints.** If hiring the wrong person in the first key role would guarantee failure, then the hiring process becomes non-negotiable rather than optimisable.
- **Invert your goals, not just your plans.** "What would make this customer never buy from us again?" is often more actionable than "what would make them love us?"
- **Use inversion to test robustness.** If a plan only works when everything goes right, it isn't a plan — it's a hope. A good plan survives its own inversion: the failure modes are known and mitigated.
- **Apply to your own reasoning.** "What would have to be true for my current belief to be wrong?" is the most uncomfortable and valuable form of inversion.

**Avoid:**
- **Stopping at identification.** Listing failure modes without converting them into actionable mitigations. The pre-mortem becomes a ritual rather than a tool.
- **Negative framing bias.** Inversion-heavy thinkers can become professionally pessimistic, always finding reasons not to act. Balance with explicit forward reasoning: after inverting, ask "given this list of failure modes, what is the plan?"
- **Trivial inversions.** Asking "how do I not fail?" and generating only obvious answers (don't run out of money, don't lose key staff). Push past the obvious to second- and third-order failure conditions.

### 3. Second-Order Effects

**Hold in mind:**
Every action creates reactions. Systems with feedback loops mean that initial effects circle back and change the conditions that produced them. The practitioner's model is a causal chain with explicit time stamps: X happens at T0, which causes Y at T1, which causes Z at T2. The quality of a decision depends on how far down that chain you can reason accurately — and how honestly you acknowledge where your confidence runs out.

**Do:**
- **Always add a time dimension.** "This will increase sales" is first-order. "This will increase sales in Q1, which will attract copycat entrants by Q3, which will compress margins by Q4" is second-order. Make the timeline explicit.
- **Ask "who else is affected, and how will they respond?"** Second-order effects are often driven by other agents adapting to the first-order outcome. Competitors, regulators, customers, and employees all react.
- **Map incentives downstream.** Trace who benefits and who is harmed by the first-order outcome. The harmed parties will typically generate the most important second-order effects.
- **Distinguish reversible from irreversible chains.** If the second-order effect is irreversible (reputation damage, regulatory response, ecological harm), the analysis must be done before acting, not after.
- **Stop when uncertainty dominates.** Beyond a certain depth, chains become speculative. Good practitioners note where their second-order analysis becomes a guess, and hold those conclusions more loosely.

**Avoid:**
- **Infinite regress.** Tracing effects so many levels deep that no decision is ever made. Practical second-order thinking goes to the depth where the effects are large and tractable, then stops.
- **Selective chain-following.** Tracing only the positive second-order effects of your preferred option and only the negative ones of alternatives. Use the same rigor on all chains.
- **Ignoring feedback loops.** Linear chains miss the fact that second-order effects often change the initial conditions, creating self-reinforcing or self-correcting dynamics.

### 4. Feedback Loops

**Hold in mind:**
Draw the causal arrows: what does this output affect? Does the effect circle back to the original variable, and in what direction? A reinforcing loop looks like a cycle of arrows all pointing the same direction; a balancing loop has at least one arrow pointing against the others. The practitioner's insight is that **most surprizing system behavior comes from feedback loops that weren't on the diagram** — effects that were assumed to be one-way but actually circle back.

**Do:**
- **Map loops before intervening.** Before changing a variable in a system, identify which loops that variable participates in. An intervention that breaks a balancing loop can unleash a runaway reinforcing one.
- **Identify the dominant loop at each stage.** Systems switch between loop-dominance as conditions change. Early-stage growth is often driven by a reinforcing loop (word of mouth, learning curve); later stages hit balancing loops (market saturation, diminishing returns). The transition point is the strategic inflection.
- **Look for delays.** The most dangerous feedback loops are ones with long delays — the response is slow enough that by the time the correction arrives, the system has been pushed far past the equilibrium. Supply chains, real estate cycles, and bureaucratic organizations are full of delayed feedback.
- **Use the loop structure to predict system behavior.** Reinforcing loops predict exponential dynamics (growth or collapse). Balancing loops predict stable equilibria or oscillation. Knowing which type dominates tells you what to expect.
- **Close feedback loops deliberately.** If you're managing a system (team, product, process) and you don't have fast, accurate feedback on your interventions, you are flying blind. Design feedback explicitly into any system you're responsible for.

**Avoid:**
- **Treating symptoms rather than loop structure.** A repeated pattern of problems (product quality always falling, team always over-committed) usually indicates a structural feedback dynamic. Fixing individual instances without changing the loop is Sisyphean.
- **Ignoring balancing loops when designing growth initiatives.** A growth strategy that triggers strong balancing responses (regulatory scrutiny, talent scarcity, customer backlash) will underperform projections built only on the reinforcing loop.
- **Confusing correlation with loop direction.** Two variables that move together may be in a loop — but the direction of causality matters enormously for how to intervene.

### 5. Incentives

**Hold in mind:**
Every person and organization is an optimizer of their incentive landscape. They may not be conscious optimizers — the process can be entirely implicit — but over time, behavior drifts toward whatever is rewarded and away from whatever is punished. The practitioner's first question when puzzled by persistent behavior that seems irrational or counterproductive is: *"What incentive makes this behavior rational from the actor's perspective?"*

**Do:**
- **Map incentives before designing any new behavior, system, or process.** "What will people do given this structure?" is a more reliable question than "what do we want people to do?" Design for the former.
- **Look for incentive misalignments at the boundaries.** The most costly incentive problems occur where the agent's interests diverge from the principal's: the salesperson paid on revenue, not customer success; the contractor paid by the hour, not the outcome; the fund manager paid on AUM, not returns. Name these explicitly.
- **Unintended incentives are as powerful as intended ones.** If rewarding output creates an incentive to game the output metric, that unintended incentive will dominate eventually.
- **Intrinsic incentives are fragile.** Introducing extrinsic rewards for intrinsically motivated behavior can "crowd out" the intrinsic motivation (over-justification effect). Be careful about monetizing what people currently do for love.
- **Change incentives before changing behavior.** Asking people to behave differently without changing the incentive structure is asking them to sacrifice their interests. Sometimes this works in the short term; it rarely sustains. Redesigning the incentive is the structural fix.

**Avoid:**
- **Incentivizing the measure, not the outcome.** Wells Fargo incentivized bankers on new account openings; the incentive produced fraudulent account creation. The metric was a proxy for the outcome; the incentive attacked the proxy.
- **Assuming stated intent overrides incentive structure.** "We trust our people to do the right thing" is not an incentive design — it is a hope. When stated intent and incentive structure conflict, incentive structure wins eventually.
- **Creating competing incentives.** Two systems that reward different and incompatible behaviors create paralysis, gaming, and political conflict. Align incentive structures before expecting aligned behavior.

### 6. Probabilistic Thinking

**Hold in mind:**
Imagine a physical bet: you stake money on an outcome, and your stake is proportional to your stated confidence. If you say something is 95% likely and it's wrong, you lose much more than if you said 60% and it was wrong. This framing forces honesty. The practitioner runs a continuous internal audit: *"Am I actually willing to stake according to my stated confidence levels?"* If not, the confidence is wrong.

**Do:**
- **State confidence intervals, not point estimates.** Not "revenue will be £2M" but "revenue will be between £1.5M and £2.8M, with most of my probability mass between £1.8M and £2.3M."
- **Separate the decision from the outcome.** A good decision made under genuine uncertainty can produce a bad outcome; a bad decision can get lucky. Judge the quality of reasoning, not just the result. This requires recording decisions and rationale at time of making, not retrospectively.
- **Use base rates as your anchor.** Before forming a view on this specific case, ask: what happens to similar cases in general? Start with the base rate probability and adjust up or down based on features that distinguish this case.
- **Track your predictions explicitly.** Use a simple spreadsheet or journal. Without a track record you cannot calibrate. Without calibration, stated probabilities are just feelings with numbers attached.
- **Update continuously on new evidence.** Bayesian updating — formally or intuitively — is the mechanism by which probability estimates stay accurate as information arrives.

**Avoid:**
- **False precision.** Attaching specific probabilities (37%, 68%) creates the appearance of rigor without the substance. Probability estimates should reflect genuine uncertainty — sometimes "roughly 70%" is as precise as honest.
- **Anchoring on the base rate and not adjusting.** Starting with the base rate is correct; failing to adjust for specific features of this case is lazy. Both steps matter.
- **Hindsight contamination.** After outcomes are known, we rewrite our memory of our prior probability estimates upward for correct calls and downward for wrong ones. The fix is written records.

### 7. Map-Territory

**Hold in mind:**
A map has two types of error: things it gets wrong about the territory, and things it doesn't show at all. The practitioner's discipline is to maintain awareness of both. When a decision depends on the map being accurate, ask explicitly: "What is this map leaving out? Where is it most likely to be wrong?" The more the map has been optimized for one purpose (a financial model for investor presentations, say), the more cautious you should be about using it for a different purpose (operational decision-making).

**Do:**
- **Name your maps explicitly.** When you're reasoning from a model or framework, say so. "According to our unit economics model..." is more honest and more useful than stating the model's outputs as facts.
- **Triangulate with multiple maps.** If two different models — a bottoms-up and a tops-down revenue forecast — produce very different numbers, the gap is information. Investigate it rather than picking the one you prefer.
- **Ask "what would I see in the territory if the map were wrong here?"** This converts map-awareness into an empirical check you can actually run.
- **Be suspicious of maps that are too tidy.** Reality is messy. A model that fits perfectly may have been fitted to noise or may be omitting messy confounders.
- **Update maps aggressively.** The value of a map comes from its accuracy. A map that hasn't been updated against the territory is actively misleading.

**Avoid:**
- **Metric fixation (Goodhart's Law).** When a map measure (KPI, metric, score) becomes a target, people optimize for the measure rather than the underlying reality the measure was tracking. The map diverges from the territory.
- **Model lock-in.** A model that was fit to past data may not reflect current territory. Organizations sometimes defend the model rather than updating it when reality diverges.
- **Confusing explanation for prediction.** A model that explains past outcomes well may not predict future ones, especially if the territory has changed. Post-hoc explanatory models are particularly prone to this.

### 8. Sunk Cost

**Hold in mind:**
The correct frame for any forward-looking decision is: "From this point forward, what are the expected costs and benefits of each option?" The past investment is irrelevant because it exists in the same amount regardless of what you decide now. The practitioner's internal question: *"If I were starting fresh today, without the prior investment, would I make this same choice?"* If the answer is no, the current decision is being contaminated by the sunk cost.

**Do:**
- **Explicitly separate sunk costs from future costs in any analysis.** Write them in a separate column that you then cover. Make the forward-looking analysis without reference to what's already spent, then ask: does knowing the sunk cost change this analysis? (It shouldn't, but examining your intuition is useful.)
- **Reframe continuation decisions as fresh allocation decisions.** "Should we continue this project?" is vulnerable to sunk cost framing. "If this were a new project proposal today, would we fund it?" is not.
- **Create institutional kill criteria before projects start.** Decide in advance what conditions would trigger stopping, and enforce them. This removes the sunk cost bias at the moment of decision.
- **Accept that abandoning an investment can be the highest-return decision.** Stopping a failing project frees resources for higher-return uses. The return on the freed resources is the relevant comparison, not the history of the stopped project.
- **Acknowledge the emotional reality.** Sunk cost attachment is not irrational in an emotional sense — it reflects investment, effort, and hope. Acknowledging this makes it easier to separate the feeling from the decision.

**Avoid:**
- **Escalation of commitment.** The tendency to increase investment in a failing course of action to justify the prior investment. More money is thrown after bad money not to generate returns but to "prove it wasn't a mistake."
- **Status quo framing.** Treating continuation as the default and abandonment as the deviation. The correct frame is neutral: continuation and abandonment are equally live options evaluated against future expectations.
- **Confusing sunk costs with learning.** The experience gained from the investment is not sunk — the learning is real and carried forward. It is only the financial and time investment that is sunk. Do not use "the learning was valuable" as justification for continuing a bad project.

### 9. Confirmation Bias

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

### 10. Compounding

**Hold in mind:**
The exponential curve feels flat at first and steep later. At a 10% annual growth rate, growth in year one looks modest; growth in year 20 is transformative. This creates a systematic human misperception: we underestimate long-term compounding effects because we have evolved to reason linearly. The practitioner's discipline is to think in terms of the curve, not the near-term increment.

**Do:**
- **Consistency beats intensity.** Daily 1% improvements compound to a 37x improvement over a year. Sporadic large efforts produce less because they don't build on each other.
- **Identify the compounding engine in your domain.** For individuals: skills, relationships, reputation. For companies: brand, data, network effects, talent. For investors: capital. Invest in your compounding engine relentlessly.
- **Time is the most important variable.** Given a constant return rate, time is the multiplier. Starting compounding processes early — learning, investing, building relationships — produces dramatically different outcomes over decades than starting late.
- **Protect the base.** Compounding requires the base to survive. A 50% loss requires a 100% gain to recover; a 10% loss requires an 11% gain. Margin of safety is critical to maintaining the compounding base.
- **Reinvest, don't extract.** Extracting gains breaks the compounding cycle. Reinvesting them maintains the base and accelerates the curve. In organizations, this means reinvesting earnings in capability rather than distributing them all.

**Avoid:**
- **Impatience.** Abandoning a compounding process before the curve steepens because early gains look modest. The payoff from compounding is back-loaded; it requires staying in the game.
- **Inconsistency.** Compounding requires sustained consistent application; periodic intense effort followed by gaps produces linear accumulation, not compound growth.
- **Overlooking compounding costs.** Fees, friction, and overhead compound just as gains do. High fixed costs on a compounding system can erode the base faster than gains accumulate.

### 11. Loss Aversion

**Hold in mind:**
The value function in Prospect Theory is steep in the loss domain and shallow in the gain domain, both from a reference point. The shape of this curve has profound implications: people work harder to avoid losing what they have than to acquire equivalent new value; framing decisions as losses versus gains changes behavior substantially; and organizations that put people in "loss positions" (relative to a reference point) generate very different behavior than those that put them in "gain positions."

**Do:**
- **Frame initiatives as preventing loss rather than achieving gain when possible.** "This investment protects £2M of at-risk revenue" often produces faster action than "this investment could generate £2M of new revenue," even though they are equivalent in expectation.
- **Recognize when loss aversion is distorting your own decisions.** The feeling of reluctance to abandon a strategy you've invested in is often loss aversion operating on the sunk cost. Label the feeling explicitly.
- **Use gain framing for innovation.** For decisions that require risk-taking, loss framing increases aversion and slows action. Frame the opportunity in gain terms to encourage the exploration required for innovation.
- **In negotiation, understand the reference point.** Your counterpart's loss aversion operates from wherever their reference point is set. Anchoring above their current position makes a lower offer feel like a gain relative to that anchor; anchoring below makes the same offer feel like a loss.
- **Design performance systems carefully around the loss domain.** Employees who feel they are in a position of potential loss (at risk of bonus reduction, at risk of job loss) exhibit risk-averse, defensive behavior. Employees who feel they are in a gain position exhibit more expansive, innovative behavior. The design of the reference point matters.

**Avoid:**
- **Holding losers too long, selling winners too early.** In investing, loss aversion produces the "disposition effect": reluctance to realize losses (hold the losing stock hoping to get back to even) and eagerness to realize gains (sell the winner before it can become a loss). Expected value is reduced in both directions.
- **Ignoring opportunity costs.** The pain of paying £10 is vivid; the opportunity cost of not earning £10 on an equally risky bet is invisible. Loss aversion makes commission-on-sale feel worse than forgone-interest-income, even when they are equivalent.
- **Anchoring to the wrong reference point.** Loss aversion operates from wherever the reference point is set. If your reference point is unrealistic (the price you paid for a house in a falling market), loss aversion generates decisions aimed at an unachievable baseline.

### 12. Bottlenecks

**Hold in mind:**
Think of a pipeline with sections of different diameters. The narrowest section determines total flow — it doesn't matter how wide the rest of the pipe is. The practitioner's question is: *"Where does work/flow/product pile up, or where does it go fastest and then slow down?"* The bottleneck is where the queue forms upstream and where downstream capacity sits idle.

**Do:**
- **Goldratt's five steps.** (1) Identify the constraint. (2) Exploit it — squeeze maximum output from it without changing anything. (3) Subordinate everything else to the constraint — other steps should work at the rate the bottleneck can absorb. (4) Elevate it — only now invest in increasing its capacity. (5) If the constraint shifts, go to step 1.
- **Find where the queue is longest.** In any process, the bottleneck is where incomplete work accumulates. This is often a person, an approval step, a machine, or a shared resource.
- **Protect the bottleneck.** Never let the bottleneck go idle. If a senior engineer is the bottleneck on code reviews, they should never be waiting for context, blocked on a tool, or in non-essential meetings.
- **Avoid false bottlenecks.** Sometimes the apparent bottleneck is not the true constraint but is being artificially stressed by poor upstream processes. Diagnose before treating.
- **Constraints shift.** After you fix the bottleneck, the next tightest constraint becomes the new bottleneck. This is not failure; it is the system working. Keep iterating.

**Avoid:**
- **Improving non-bottlenecks.** This is the most common failure in operational improvement: optimizing steps that are not the constraint, producing local efficiency but no global improvement. The team feels productive; system throughput doesn't change.
- **Misidentifying the bottleneck.** The visible queue is not always at the true constraint — it may be downstream of an invisible constraint that limits how much work enters the system. Trace the full flow.
- **Creating new bottlenecks downstream.** Aggressively fixing one bottleneck can shift the constraint to a part of the system you haven't prepared for.

### 13. Expected Value

**Hold in mind:**
Most people evaluate decisions by their most likely outcome, not their probability-weighted outcomes. This produces systematic errors: they avoid low-probability, high-magnitude wins (lottery tickets aside, many legitimate bets) and accept high-probability, low-magnitude gains that come bundled with catastrophic downside risk. Expected value shifts the question from "what will probably happen?" to "what is this bet actually worth?" A 10% chance of gaining £1,000,000 and a 90% chance of losing £50,000 has an EV of £55,000 — substantially positive, even though the most likely single outcome is a loss. The discipline is to evaluate the whole distribution, not the modal scenario.

**Do:**
- **Calculate EV before comparing options.** List the plausible outcomes, assign rough probabilities (they don't need to be precise), assign magnitudes, multiply and sum. Even a back-of-envelope EV calculation beats intuitive comparison.
- **Size positions to EV, not to confidence.** High-confidence, low-magnitude bets deserve smaller positions than lower-confidence, high-magnitude bets with equivalent EV. Magnitude matters as much as probability.
- **Look for asymmetric EV.** The best decisions are those where downside is bounded and upside is large — you can be wrong often and still come out ahead. Options and experiments often have this property.
- **Distinguish EV from variance.** Two decisions can have the same EV with very different variance. For irreversible or ruinous downsides, apply a variance penalty even when EV looks positive (see Margin of Safety).
- **Beware small-sample reasoning.** EV only pays out reliably over many trials. A single positive-EV decision can still lose; resist updating your process based on single outcomes.

**Avoid:**
- **Ignoring low-probability catastrophes.** Summing expected values while truncating the tail that contains ruin. A strategy can have a positive EV with a small chance of catastrophic loss — and still be the wrong choice if the catastrophe is irreversible.
- **Miscalibrated probabilities.** The calculation is only as good as the probability estimates going in. Overconfident priors (see Calibration, Base Rate Neglect) produce overstated EVs. Garbage in, garbage out.
- **Treating EV as certain.** Quoting an EV as if it's the expected outcome of a single event rather than an average across many trials. EV describes the long-run; any individual trial can diverge wildly.
- **Ignoring correlation.** Multiple bets with individually positive EV can be correlated — they all lose together. Portfolio EV is not just the sum of individual EVs if the outcomes move together.

### 14. Bayesian Updating

**Hold in mind:**
Most people treat new evidence as either confirming or disconfirming their existing belief — a binary switch. Bayesian updating replaces the switch with a dial. Evidence shifts your belief by an amount proportional to how diagnostic it is. If you believe there's a 30% chance a project will fail, and you learn that three similar projects at similar organisations failed last year, your posterior might be 60% — not certainty, not zero change. The discipline is to ask: "How much should this evidence move me, and in which direction?" rather than "Does this confirm or deny what I already think?"

The key insight is that the same piece of evidence moves beliefs differently depending on your prior. Someone starting at 5% failure probability and someone starting at 50% failure probability who see identical evidence should end up at different posteriors — and both can be right given their different starting information.

**Do:**
- **State your prior explicitly before seeing new evidence.** An unstated prior is an unexamined prior. Write down your current probability estimate before the data arrives — this prevents hindsight bias and anchoring.
- **Ask: how diagnostic is this evidence?** Evidence that is equally likely regardless of whether your hypothesis is true provides zero update. Only distinctive evidence — more likely under one hypothesis than another — moves the needle.
- **Update small on weak evidence; update large on strong evidence.** A single data point from a noisy source deserves a small update. A replicable finding from a high-quality study deserves a large one.
- **Don't update to certainty on any single piece of evidence.** Posteriors of 0% or 100% shut off future updating. Maintain residual uncertainty to stay open to disconfirming evidence.
- **Watch for asymmetric updating.** Humans update readily on confirming evidence and discount disconfirming evidence (Confirmation Bias). Apply conscious effort to update on evidence that cuts against your prior.

**Avoid:**
- **Anchoring too hard on the prior.** Updating too little in response to strong evidence — maintaining beliefs in the face of overwhelming counter-evidence because the prior feels certain. This is the rational sin of under-updating.
- **Over-updating on a single striking data point.** One vivid example (a startup that failed, a strategy that worked) drives the posterior to near-certainty before enough evidence has accumulated. Availability Bias amplifies this.
- **Ignoring base rates in the prior.** Starting with a prior that doesn't reflect base rate reality means all subsequent updates are anchored incorrectly, even if each individual update is well-executed. Get the prior right first.
- **Treating the update as one-directional.** Evidence that cuts against your current hypothesis updates you toward the alternative — many practitioners accept only the updates that align with what they want to believe.
- **Updating on the same evidence twice.** If a piece of evidence is already incorporated into your prior (e.g., you heard about the data point before it was formalised), treating it as new information double-counts it.

### 15. Black Swan

**Hold in mind:**
The danger is not the event itself — it is the model used to predict it. Most forecasting, risk management, and strategic planning assumes a normal distribution of outcomes: most events cluster around the mean, extreme events are rare, and the past is a reasonable guide to the future. In domains governed by power laws and complex interconnection — financial markets, geopolitics, technology platforms, pandemics — this assumption is structurally wrong. Extreme events are not statistical curiosities; they are the dominant drivers of long-run outcomes.

Taleb's key insight is that the damage from Black Swan events is compounded by our certainty that they won't happen. An organisation that assigns near-zero probability to tail events builds no resilience against them, sizes positions as if they are safe, and is then destroyed by the event while simultaneously being surprised by it. The Black Swan problem is not primarily a prediction problem — you cannot reliably predict specific Black Swans. It is a robustness problem: building systems that survive tail events without needing to predict them.

This distinguishes the Black Swan from related concepts. Scenario Planning attempts to imagine specific futures. The Black Swan argument is that the specific future that matters most is precisely the one you didn't imagine — by definition, because imagining it would have changed behaviour. The correct response is not better prediction but structural robustness and asymmetric positioning.

**Do:**
- **Distinguish Mediocristan from Extremistan.** Taleb's terminology: Mediocristan domains (height, calorie intake, car speed) are governed by normal distributions where extremes are bounded. Extremistan domains (wealth, sales performance, war casualties, technology adoption) are governed by power laws where a single event can dominate the total. Apply fat-tail thinking only in Extremistan.
- **Build robustness rather than predict the unpredictable.** Since Black Swans cannot be reliably predicted, the right response is structural: reduce fragility (avoid positions that break on tail events), build optionality (retain the ability to respond when the event occurs), and apply Margin of Safety sized to the tail, not the average.
- **Pursue positive Black Swans asymmetrically.** Black Swans are not always negative. Some of the most valuable opportunities are positive Black Swans — outcomes with bounded downside and extreme upside. Asymmetric positioning (small bets, capped losses, uncapped gains) is the offensive application of Black Swan thinking.
- **Audit your scenarios for what they exclude.** Scenario planning and pre-mortems surface a range of futures — but the Black Swan is definitionally outside the range you considered. After completing a scenario exercise, ask: "What event would invalidate all of these scenarios simultaneously?" That question points toward your Black Swan exposure.
- **Treat low-probability, high-consequence events differently from low-probability, low-consequence events.** Standard expected value calculation treats both the same — probability × magnitude. Black Swan thinking says to apply a separate regime for tail events with catastrophic or irreversible consequences: no amount of positive EV justifies ruin.

**Avoid:**
- **Hindsight rationalisation masking future exposure.** After a Black Swan, the event is reframed as foreseeable. This creates a false sense that future Black Swans can also be foreseen — and hides the structural fragility that allowed the event to be catastrophic. Post-event narratives are almost always misleading about predictability.
- **Confusing rare with improbable in fat-tailed domains.** In Extremistan, "this has never happened before" is not evidence that it's improbable. The absence of a prior extreme event increases — not decreases — the pressure in the system. Using historical absence as a risk argument is structurally wrong in power law domains.
- **Optimising for the median while ignoring the tail.** The organisations destroyed by Black Swans were not ignoring risk — they were managing the median risk well. The tail was outside the model. Risk management that scores well on average outcomes and catastrophically on tail outcomes is not risk management; it is tail-risk transfer disguised as prudence.
- **Over-applying Black Swan thinking to Mediocristan.** Not every domain has fat tails. Treating normal-distribution phenomena as if they were power law domains produces excessive conservatism and missed opportunities. The model requires domain diagnosis first.

## Deliverable format

Produce a markdown document with these sections:

### Situation summary

### Primary model lens used and why

### Analysis (3–5 insights)

### Checking models applied

### Recommended action and risks

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [first-principles](references/first-principles.md)
- [inversion](references/inversion.md)
- [second-order-effects](references/second-order-effects.md)
- [feedback-loops](references/feedback-loops.md)
- [incentives](references/incentives.md)
- [probabilistic-thinking](references/probabilistic-thinking.md)
- [map-territory](references/map-territory.md)
- [sunk-cost](references/sunk-cost.md)
- [confirmation-bias](references/confirmation-bias.md)
- [compounding](references/compounding.md)
- [loss-aversion](references/loss-aversion.md)
- [bottlenecks](references/bottlenecks.md)
- [expected-value](references/expected-value.md)
- [bayesian-updating](references/bayesian-updating.md)
- [black-swan](references/black-swan.md)

