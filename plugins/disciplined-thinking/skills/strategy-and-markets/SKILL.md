---
name: "strategy-and-markets"
description: "Analyses competitive position, market structure, and strategic options. Covers Wardley Mapping, Kernel of Good Strategy, Scenario Planning, Network Effects, Power Law, Long Tail, Nash Equilibrium, and Path Dependence. Use when assessing competitive threats, designing market strategy, evaluating platform or marketplace opportunities, or stress-testing a strategic plan."
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
  sources: "Business/wardley-mapping.md,Business/kernel-of-strategy.md,Business/scenario-planning.md,Network-Effects/network-effects.md,Mathematics/power-law.md,Economics/long-tail.md,Economics/nash-equilibrium.md,Systems/path-dependence.md"
---

# Strategy And Markets

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Choose a branch

Pick the branch that best matches the situation, then apply its models:

- **Map the competitive landscape** — Wardley Mapping, Kernel of Good Strategy, Nash Equilibrium
- **Assess market structure and dynamics** — Power Law, Network Effects, Long Tail
- **Evaluate options and constraints** — Scenario Planning, Path Dependence

## Protocol

### 1. Wardley Mapping

**Hold in mind:**
Imagine a photograph of a river versus a map of the same river showing current direction and speed. The photograph captures the scene; the map shows what will happen next. Traditional strategy tools — value chains, business model canvases, competitive analyses — are photographs. A Wardley Map is closer to the river map: components that sit to the left (Genesis, Custom) are rare, uncertain, and potentially sources of differentiation; components to the right (Product, Commodity) are predictable, replaceable, and should be bought or rented rather than built. The strategic question becomes: what are we building that is already a commodity? What is about to commoditise that we can exploit first? Where is our differentiation actually located, and is it defensible?

The movement principle matters as much as the position: no component stays at Genesis forever. Compute moved from custom-built (mainframes) to product (servers) to commodity (cloud). Each transition creates a wave of disruption: those who treat a commoditising component as a source of differentiation get stranded; those who anticipate the transition and build on the commodity gain leverage.

**Do:**
- **Always anchor to user need.** The map starts with the specific user and what they need — not with what you build. This prevents the common failure of mapping technology for its own sake. If you cannot state the user need at the top, you cannot build a valid map.
- **Position honestly, not aspirationally.** The most common mistake is placing components where you wish they were. Genesis means genuinely novel — fewer than a handful of organisations do this. If you can buy it from a vendor, it is Product or Commodity.
- **Look for what you are building that is already a commodity.** This is the highest-yield question in most enterprise strategy conversations. Custom-building something available as a cloud service is waste; it consumes engineering capacity that could go to genuine differentiation.
- **Identify the components about to move.** Components shift from Custom to Product when vendors emerge; from Product to Commodity when supply becomes abundant and undifferentiated. Being early in that transition — either exploiting the new commodity or building the platform that rides it — is a strategic position.
- **Use the map to make build/buy/partner decisions explicit.** For each component: if it is Commodity, use it; if Product, buy the best; if Custom, evaluate carefully; if Genesis, build only if it is core to your differentiation. Having this conversation with a map on the table changes it from opinion to evidence.
- **Expect disagreement about position.** The act of positioning components surfaces real strategic disagreements. Two people who place "our data platform" at different points on the evolution axis are expressing a substantive disagreement about whether it is a source of differentiation. The map makes that conversation explicit.

**Avoid:**
**Mapping without anchoring to user need.** A map that starts with technology or internal capabilities produces a technically interesting picture that does not connect to strategic decisions. The user need anchor is not a formality — it is what makes the map a strategy tool rather than an architecture diagram.

**Ignoring the evolution axis.** Many teams produce value-chain diagrams and call them Wardley Maps. Without honest positioning on the evolution axis, you have described structure but not movement — the least useful part of the technique.

**Treating the map as a finished product.** A map is a thinking tool and a conversation instrument, not a deliverable. If the map does not change a decision or surface a disagreement worth resolving, it was waste.

**Strategic narcissism.** Treating every component as unique and custom-built, because it is "our" system, obscures the reality that most of what a typical enterprise builds is Product or Commodity in disguise. The reluctance to admit this is usually political, not analytical.

**Mapping alone.** The value of a Wardley Map is amplified by the disagreements it surfaces. A map built by one person in a quiet room misses the organisational sense-making that is the technique's most durable output.

### 2. Kernel of Good Strategy

**Hold in mind:**
A strategy is a doctor's prescription. The diagnosis names the disease; the guiding policy is the treatment approach (antibiotics, surgery, watchful waiting); the coherent action is the specific regimen (this dose of this drug, this many days, with this monitoring). A document that names goals ("be the leading provider") and lists initiatives ("expand internationally; improve customer service; cut costs") is not a strategy; it's a list of aspirations and projects. Without the diagnosis, you don't know why; without the guiding policy, you can't tell which actions belong; without coherent action, the policy is rhetoric. All three together — that is strategy.

**Do:**
- **Insist on the diagnosis first.** "Bad strategy" almost always skips diagnosis and jumps to goals. Force the question: what is the central challenge?
- **Test policy by what it excludes.** A guiding policy that doesn't rule things out isn't choosing; it's accommodating.
- **Coherence over completeness.** A focused, mutually reinforcing set of three actions beats a comprehensive list of fifteen.
- **Watch for "fluff."** Bad strategy hides in vague language ("synergies," "world-class," "leverage"). Translate to concrete claims; if you can't, it isn't strategy.
- **Look for the "kernel test."** Ask: what's the diagnosis? what's the guiding policy? what are the coherent actions? If any answer is fuzzy, the strategy is incomplete.

**Avoid:**
- **Goals as strategy.** "Achieve $500M revenue by 2027" is a goal; the strategy is *how* and *why this approach*.
- **Lists as strategy.** Five priorities and twenty initiatives without a unifying diagnosis is portfolio management, not strategy.
- **Aspiration as strategy.** Vision statements describe a destination; they do not name the central challenge or how to address it.
- **Diagnosis-only strategy.** Some firms have honest diagnoses but never commit to a guiding policy; this is more honest than goal-lists but still not a strategy.

### 3. Scenario Planning

**Hold in mind:**
Two components: **predetermined elements** (things that will happen regardless of which scenario materialises) and **critical uncertainties** (two or three pivotal forces whose outcome is genuinely unknown). Two critical uncertainties define a 2×2 matrix of four distinct futures.

Each scenario is a coherent narrative — plausible, internally consistent, differentiated, and challenging. Strategy is evaluated by asking: how does this initiative perform in each scenario?

**Do:**
- **Separate predetermined elements from critical uncertainties first.** Sort what will happen regardless from the two or three forces whose outcome is genuinely unknown; only the latter define the scenarios.
- **Build exactly the scenarios that stress your strategy, not the comfortable ones.** Choose the critical uncertainties whose divergent outcomes would most change your decisions; four futures that all reward your current plan is a comfort exercise, not scenario planning.
- **Test initiatives across all scenarios, not against the most likely one.** The output is a strategy that performs acceptably across the set — robustness — rather than one optimised for a single forecast that probably won't arrive.
- **Name the early indicators for each scenario.** A scenario is useful only if you can tell, in real time, which future you are moving into; assign observable signposts so the organisation recognises the shift early.
- **Keep each scenario a coherent narrative.** Plausible, internally consistent, and genuinely different — a scenario that is just "the forecast, but worse" teaches nothing.

**Avoid:**
- **Collapsing scenarios back into a single forecast.** Teams build four futures and then quietly bet on the one they consider most likely, discarding the whole point: preparing for the range.
- **Three scenarios labelled best / base / worst case.** This is sensitivity analysis on one variable dressed as scenario planning; real scenarios turn on different combinations of independent uncertainties, not one dial set high, medium, and low.
- **Scenarios with no decision consequences.** If the strategy is identical across all four futures, either the chosen uncertainties don't matter or the exercise wasn't connected to real choices.
- **Treating the narratives as predictions.** Scenarios are tools for testing robustness and recognising change, not forecasts; defending one as "what will happen" reintroduces the single-future thinking the method exists to escape.

### 4. Network Effects

**Hold in mind:**
Network effects create a self-reinforcing feedback loop: more users → more value → more users. They also create a barrier to entry: a competitor cannot offer the same value without the same number of users, and acquiring those users requires convincing them to use a platform that currently has fewer users — a structural disadvantage. The practitioner's insight: building a network effect is difficult and slow at first (before critical mass) and compound and defensible after.

**Do:**
- **Identify which type of network effect you have.** Direct (same-side) network effects: each user adds value for all other users (social networks, messaging). Indirect (cross-side) network effects: more users on one side add value for the other side (marketplace buyers and sellers). Two-sided effects are particularly powerful but require solving the chicken-and-egg problem.
- **Network effects are not free growth.** A network effect means value scales with users; it does not mean you acquire users for free. The network effect operates on retention and referral; it doesn't eliminate the need for initial user acquisition.
- **Defensibility degrades with network size.** Very large networks face diminishing incremental defensibility: adding the millionth user adds little to the network's appeal. The most defensible moments are in the transition from critical mass to dominant position.
- **Localize the network before globalizing.** Strong local or vertical network effects (uber-dense in one city, dominant in one professional community) create a foundation from which to expand, rather than spreading thinly across a large network.
- **Measure network effects through cohort referral rates.** If each new user cohort refers more users than the previous cohort (because the network is more valuable), the network effect is operating. If referral rates are flat, the value isn't growing with scale.

**Avoid:**
- **Confusing network effects with scale economies.** Scale economies reduce cost per unit as volume grows (Google's data centers). Network effects increase value per user as users grow (Google's search results improving with more queries). Both are powerful; they are different mechanisms.
- **Assuming network effects are permanent.** Network effects are durable but not permanent. Incumbents with strong network effects (MySpace, early Facebook) can be displaced by challengers who offer a substantially better experience — the switching cost of leaving the network is overcome by sufficiently strong product superiority.

### 5. Power Law

**Hold in mind:**
Most human intuition is calibrated for normally distributed phenomena — heights, test scores, measurement errors. In normal distributions, outliers are rare and the average is representative. Power law distributions are structurally different: the average is unrepresentative, outliers are not rare, and the most extreme events dominate the total. A single blockbuster film earns more than the bottom thousand combined. A handful of investors produce most venture returns. A tiny fraction of bugs cause most system failures.

The critical practitioner implication: **in power law domains, average thinking is actively misleading.** Planning around the median customer, the median employee, or the median outcome leaves the most important signal — the extreme values — entirely out of the analysis. The question to ask is not "what is typical?" but "what are the few inputs that produce the bulk of the output?"

Power laws arise reliably in the presence of preferential attachment (the rich get richer), multiplicative processes (each gain builds on the last), and network effects (value grows with connections). Recognising these generative conditions tells you whether you are in a power law domain before the distribution is visible.

**Do:**
- **Identify which domain you're in before choosing your analytical tools.** Normal distribution thinking applies to height and measurement error; power law thinking applies to wealth, city size, web traffic, sales performance, and system failures. Misidentifying the domain leads to systematically wrong predictions.
- **Apply the 80/20 diagnostic.** In any dataset where you suspect a power law, check whether roughly 20% of inputs drive 80% of outputs. If the ratio is more extreme (90/10, 95/5), the power law is steeper. This tells you where to concentrate effort.
- **Find the input that compounds.** Power laws are usually driven by one variable that compounds — a network effect, a distribution advantage, an early-mover position. Identify it and invest disproportionately in it rather than spreading resources evenly.
- **Protect the tail.** In power law outcome distributions, the worst-case scenario is not an outlier you can safely ignore — it is a structurally probable event that dominates expected loss. Design risk management around the tail, not the average.
- **Don't optimise the middle.** In power law markets, the middle is often the worst position: too big to be niche, too small to have the scale advantages of the leader. Strategy in power law domains often requires choosing: dominate a category, or retreat to a defensible niche.

**Avoid:**
- **Averaging across a power law distribution.** Reporting the mean when the distribution is heavily skewed produces numbers that describe almost nobody's actual experience. In a power law distribution, the median and the mean diverge sharply — use both, not just one.
- **Treating all inputs as roughly equivalent.** Spreading resources evenly across customers, products, features, or employees when the underlying distribution is a power law means dramatically under-investing in the few that matter most.
- **Predicting from recent history in a fat-tailed domain.** Normal distribution thinking says extreme events are so rare you can safely exclude them. In power law domains, extreme events are not rare — they are structurally expected and often dominant. Historical averages are not a reliable guide.
- **Mistaking a temporary position in the tail for permanent safety.** Power law distributions are dynamic: positions that seem stable can be disrupted by a new entrant that captures preferential attachment. The tail is not a safe haven; it is a contested position.

### 6. Long Tail

**Hold in mind:**
The Long Tail is the power law distribution reconsidered from the perspective of the tail rather than the head. In a Pareto distribution, the head (the 20% that drives 80% of output) gets all the attention. The Long Tail asks: what happens when the tail — the 80% of "unpopular" items — can finally reach their scattered but genuinely interested audience at near-zero marginal cost?

The answer is that the tail becomes economically real. Netflix can profitably offer 50,000 titles because each one costs almost nothing to store and stream. Amazon can list millions of books because warehousing and fulfilment have been restructured around long-tail economics. Spotify can make available every recorded piece of music because the marginal cost of adding one more track is negligible. In each case, the aggregate of niche demand — each niche tiny, collectively enormous — rivals or exceeds demand for the hits.

The strategic implication cuts both ways. For incumbents built around hits and scarcity, the Long Tail is existential: their advantage — curated shelf space, broadcast reach — becomes worthless when distribution is unlimited. For platforms and aggregators, the Long Tail is the business model: aggregate the tail, monetise the aggregate.

**Do:**
- **Map your distribution cost structure.** The Long Tail only applies where distribution and discovery costs approach zero. Physical goods, professional services, and capital-intensive production rarely exhibit true Long Tail economics. Digital goods, platforms, and marketplaces do. Misapplying the model to the wrong cost structure produces failed strategy.
- **Distinguish the tail of supply from the tail of demand.** The Long Tail requires both: a long tail of available offerings *and* a long tail of demand that can find them. Platforms succeed when they solve the discovery problem — connecting tail supply with tail demand — not just by aggregating supply.
- **Build for the tail, not just the head.** In platform and marketplace strategy, the head provides volume; the tail provides defensibility. A platform with deep tail coverage is harder to displace than one focused on hits, because replicating the tail requires time and network effects, not just capital.
- **Watch for tail economics inverting head strategy.** Pricing, recommendation, and curation logic that works for the head often fails for the tail. Flat-rate subscription models (Spotify, Netflix) unlock tail consumption that per-unit pricing suppresses. Don't import head-market assumptions into tail-market design.
- **Measure tail contribution separately.** In mixed head-and-tail portfolios, head metrics dominate and tail contribution is invisible. Measure tail revenue, tail engagement, and tail retention independently; they often tell a different story about platform health and customer diversity.

**Avoid:**
- **Assuming the tail is accessible without solving discovery.** A long tail of supply is worthless if users can't find what they want. Recommendation engines, search, curation, and social signals are not features — they are the core product in a Long Tail market. Neglecting them leaves the tail economically invisible.
- **Applying Long Tail logic to markets with high marginal costs.** The model breaks when each additional unit has meaningful cost. A Long Tail strategy for a professional services firm, a physical retailer without near-zero inventory cost, or a capital-intensive manufacturer typically destroys margin rather than unlocking it.
- **Conflating Long Tail with democratisation.** The Long Tail increases the availability of niche content and products, but does not necessarily distribute economic value more evenly. Platform economics often concentrate revenue at the head while the tail earns almost nothing — the hits still dominate monetisation even when tail consumption is high.
- **Ignoring that Long Tail markets still produce power law winners.** The Long Tail does not eliminate the power law head; it shifts the scale at which the head dominates. YouTube has a long tail of content and a tiny head of creators who capture most watch time and revenue. The tail enables the platform; the head drives economics.

### 7. Nash Equilibrium

**Hold in mind:**
Equilibrium doesn't mean everyone is happy or that the outcome is optimal — it means no one has an individual incentive to defect. This is the key insight. Markets, arms races, standards battles, and office politics all tend toward Nash Equilibria that may be collectively terrible but individually stable. The classic example is the Prisoner's Dilemma, where mutual defection is the Nash Equilibrium even though mutual cooperation would make both players better off. The framework reveals why coordination fails: when individual incentives point away from the collectively good outcome, rational actors end up in a bad equilibrium and stay there.

For practitioners, Nash Equilibrium is most useful as a diagnostic: "What is the stable end-state of this strategic situation, and is it where we want to end up?" If the equilibrium is bad, the question becomes how to change the game — the payoff structure, the information available, or the players' ability to make binding commitments — rather than trying to persuade rational actors to act against their incentives.

**Do:**
- **Map the payoff structure before predicting behaviour.** The equilibrium follows from the payoffs. Before predicting what competitors, partners, or employees will do, write out (even roughly) what each player gains and loses under each combination of choices.
- **Distinguish equilibria from optimal outcomes.** A Nash Equilibrium is stable, not necessarily good. The relevant question is: is the equilibrium we're heading toward the one we want? If not, change the game.
- **Look for multiple equilibria.** Many situations have more than one equilibrium. When they do, the key question shifts to which one players will coordinate on — this is where Schelling Points become relevant.
- **Change the game when the equilibrium is bad.** If rational actors keep ending up somewhere you don't want, the answer is rarely more persuasion — it's redesigning incentives, enabling binding commitments, or changing the information structure.
- **Identify dominant strategies first.** If one player has a strategy that is best regardless of what others do (a dominant strategy), they will play it. Dominant strategies simplify equilibrium analysis enormously.

**Avoid:**
- **Assuming the equilibrium is optimal.** Confusing "stable" with "good." Nash Equilibria are often collectively suboptimal; stability is a property of individual incentives, not joint welfare.
- **Ignoring dynamic games.** Nash Equilibrium is a static concept. In repeated games, cooperation can emerge and the equilibrium changes. Applying static game theory to ongoing relationships misses the role of reputation and reciprocity.
- **Treating payoffs as fixed when they're designable.** Many practitioners accept the game as given. In organisations and markets, you often have the power to change the payoff structure — which changes the equilibrium.
- **Assuming common knowledge of rationality.** Nash Equilibrium assumes all players are rational and know others are rational. In practice, players have bounded rationality, incomplete information, and emotional responses that diverge from the model.

### 8. Path Dependence

**Hold in mind:**
The canonical example is the QWERTY keyboard layout, designed in 1873 to solve a mechanical problem (key jamming) that no longer exists. Alternative layouts have been repeatedly shown to be more efficient, yet QWERTY persists because switching costs — retraining millions of typists, replacing hardware — exceed the efficiency gains. The sub-optimal outcome is locked in, not by any active choice to keep it, but by the accumulated weight of past decisions.

Path dependence is not the same as inertia. Inertia is resistance to change that has no structural basis. Path dependence is structural lock-in: the system is genuinely constrained by its own history. This distinction matters because the interventions are different. Inertia is overcome by will and leadership. Path dependence requires either a discontinuous break (paying the switching cost fully) or a platform change (new context that resets the path).

The practitioner's question is always: "Is this constraint a preference or a path?" Preferences can be changed by persuasion; paths require architecture.

**Do:**
- **Identify the lock-in mechanism before diagnosing constraints.** Is the constraint a network effect, a skill accumulation, a sunk cost, an installed base, or a legal/contractual commitment? Each has a different switching cost profile and a different remediation strategy.
- **Calculate the total switching cost, not just the direct cost.** Path changes have direct costs (new tools, retraining) and indirect costs (productivity loss during transition, integration debt, lost institutional knowledge). Underestimating indirect costs is the main reason path changes are attempted and abandoned.
- **Look for platform changes that reset the path.** Cloud computing reset the path for infrastructure; mobile reset the path for software distribution. When a platform shift is underway, evaluate whether it creates an opportunity to exit a bad path at reduced cost.
- **Build reversibility into early decisions.** The cost of path dependence is highest when early decisions foreclosed options without the decision-makers realising it. Prefer two-way doors over one-way doors in architecture, process design, and technology choice.
- **Distinguish path dependence from learned capability.** Not all historical accumulation is lock-in. Skills, relationships, reputation, and organisational culture are also path-dependent — and these are assets, not just constraints. Path dependence is negative when the accumulated thing is a liability; positive when it is a capability.

**Avoid:**
- **Treating path-dependent constraints as preferences.** Attempting to change a structurally locked-in outcome through persuasion or leadership emphasis, without addressing the underlying switching cost. The effort fails and the conclusion drawn is that the organisation "doesn't want to change."
- **Underestimating switching costs and abandoning mid-transition.** Beginning a path change, incurring the upfront costs, and then reverting before the new path generates returns — leaving the organisation worse off than either the original path or the new one.
- **Assuming platform shifts are automatically liberating.** New platforms reduce some switching costs but introduce new paths. Cloud-native architectures create their own dependencies; mobile-first strategies create their own lock-ins.
- **Ignoring the accumulation of small path decisions.** Individual decisions that seem minor often have path-setting consequences. A technology choice, a team structure, a pricing model — each forecloses options that seem distant but become critical later.

## Deliverable format

Produce a markdown document with these sections:

### Strategic question under review (one sentence)

### Landscape map: where components sit on the evolution axis (genesis → commodity)

### Market structure: power law or long tail? Winner-take-most or niche-viable?

### Network effects assessment: do you have them, how strong, what sustains them?

### Nash Equilibrium analysis: what is the stable end-state and is it where you want to be?

### Path dependence: what are you locked into, what is the competitor locked into?

### Scenarios: 2-3 plausible futures and the strategy that survives each

### Strategic recommendation: kernel (diagnosis, guiding policy, coherent actions)

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [wardley-mapping](references/wardley-mapping.md)
- [kernel-of-strategy](references/kernel-of-strategy.md)
- [scenario-planning](references/scenario-planning.md)
- [network-effects](references/network-effects.md)
- [power-law](references/power-law.md)
- [long-tail](references/long-tail.md)
- [nash-equilibrium](references/nash-equilibrium.md)
- [path-dependence](references/path-dependence.md)

