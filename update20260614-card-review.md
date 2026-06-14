# Card-by-Card Review & Suggestions — 2026-06-14

A one-by-one editorial pass over all 263 cards. For each card: a specific,
grounded suggestion for improvement. The corpus is high quality, so most
suggestions are refinements (sharper taglines, concrete figures in worked
examples, missing cross-links or failure modes, terminology consistency) rather
than fixes for errors. Where a card is strong as-is, the suggestion is marked
*optional polish*.

> Source: public GitHub HEAD `0d77213`. Structural integrity (refs, ids, fields,
> sections) was already verified clean in the 2026-06-13 pass; this file is purely
> editorial. Cards are grouped by category, in manifest-id order.

---

# General Thinking (29)

**Cross-cutting (this category):** two cards (#106, #107) use full-sentence taglines while the house style elsewhere is a short phrase — tighten for consistency. Several near-twin pairs (Post-mortem/AAR, Probabilistic Thinking/Calibration, Pre-mortem/Inversion) handle their boundary in the *connections* but not in the *Definition* — mirror the distinction in the body so each card is self-distinguishing.

- **#0 First Principles** — Attributes the phrase to Aristotle in the Definition, but the references (Descartes, Munger, Feynman) don't include an Aristotle source; either add one or soften to "traces to Aristotle." The 28-connection list is the second-largest in the deck — consider pruning to the load-bearing links.
- **#106 Analogical Reasoning** — Tighten the sentence-long tagline to a phrase. The worked example shows only *successful* structural analogies; add one misleading surface-analogy failure to mirror the "surface analogies mislead" failure mode.
- **#12 Asymmetry / Convexity** — The conference worked example is more abstract than sibling cards; a quantified barbell/option example (with figures) would match the deck's concreteness standard.
- **#240 Black Swan** — Heuristics emphasise *positive* Black Swans, but the worked example (2008) is purely negative; add a one-line positive-tail example for balance. Strong otherwise.
- **#211 Calibration** — Brier score appears in the references but is never explained in the body; one sentence on *how* calibration is measured would close the loop.
- **#171 Causal Analysis** — The tagline ("Choose the right mode of why") is cryptic; make it slightly more descriptive. The three-mode model is excellent.
- **#5 Circle of Competence** — Mental Model defines three concentric rings, but the heuristics don't reference them; tie at least one heuristic back to the ring model.
- **#122 Cynefin Framework** — Terminology drift: body uses "Clear" but a connection rationale (#173) says "Obvious"; standardise. Also consider a one-line mention of the fifth domain, **Disorder** (not knowing which domain you're in), which the card omits.
- **#13 De Bono's Six Thinking Hats** — Add de Bono's recommended hat *sequence* (Blue to open, then White → … → Blue to close) as a heuristic; sequencing is part of the method's value.
- **#263 Delete Before You Optimise** — Strong. Optional: attribute the "add back ~10%" test inline to Musk's algorithm, since it's a specific borrowed claim.
- **#107 Divergent and Convergent Thinking** — Tighten the sentence-long tagline. Pixar Braintrust example is excellent.
- **#226 Grice's Maxims** — Strong as-is; *optional polish* only.
- **#4 Hanlon's Razor** — Both references are general (Kahneman, Dobelli); add a provenance source for the razor itself (the Murphy's Law / Robert J. Hanlon origin) for traceability.
- **#1 Inversion** — Strong; *optional polish*. Consider adding the reciprocal connection back from #2 (noted in the 06-13 file).
- **#14 Ladder of Inference** — Strong; the rung-by-rung worked example is a model for the deck. *Optional polish*.
- **#6 Map-Territory** — Date inconsistency: Definition says "1931 formulation"; the cited source is *Science and Sanity* (1933). Reconcile in one line (coined 1931, elaborated 1933).
- **#3 Occam's Razor** — Body quotes Ockham but references are all secondary (Popper, Pólya, Sagan); fine, but a one-line note on why the primary source isn't cited would pre-empt the question.
- **#234 Overton Window** — Strong; *optional polish*.
- **#188 Paradigm Shift** — Excellent and unusually deep for a standard card; *optional polish* only.
- **#11 Post-mortem** — Definition says "also called an after-action review," but AAR is a separate card (#196). Sharpen the boundary in the Definition (post-mortem = deep investigation after significant failure; AAR = lightweight per-project habit) — the connection rationale already states this; mirror it in the body.
- **#10 Pre-mortem** — The most-connected card in the deck (30+ connections). Consider pruning to the load-bearing links to reduce graph noise; the editorial content itself is excellent.
- **#7 Probabilistic Thinking** — Overlaps with Calibration (#211) on the "70% calls" framing; sharpen the boundary in the Definition (probabilistic thinking = the method; calibration = the standard it's judged against).
- **#15 Regret Minimization Framework** — Strong; *optional polish*.
- **#2 Second-Order Effects** — Strong; induced-demand worked example is a classic. *Optional polish*; add reciprocal link to #19 if intended.
- **#9 Socratic Thinking** — Strong; clean boundary with First Principles already drawn. *Optional polish*.
- **#223 Steelmanning** — Excellent (Ideological Turing Test, Rapoport's Rules). *Optional polish*.
- **#128 Theory of Change** — Excellent; the youth-employment worked example is exemplary. *Optional polish*.
- **#8 Thought Experiment** — Strong; the two-pizza n(n-1)/2 example is good. *Optional polish*.
- **#16 Two-Way Doors** — Strong; the "create reversibility before committing" heuristic is the standout. *Optional polish*.

---

# Deck-level systematic issues (apply a single scripted fix)

- **Nonstandard "-ize" spellings (~17 files).** A find/replace appears to have over-converted `-ise → -ize` and caught words whose **s is part of the root**, which stay `-s-` in *both* US and UK English: `arize/arizing` (12 files), `surprizing` (2), `disguizing` (1), `advertizing` (2), `exercized/exercizing` (1), `supervizing` (1). Correct to *arise/arising, surprising, disguising, advertising, exercised, supervising*. **Caution:** do **not** touch legitimate `-ize` words (summarize, organize, popularize, prioritize) — scope the replace to the specific stems above.
- **Tagline length is inconsistent.** A subset of cards use full-sentence taglines (e.g. #106, #107, #108, #102, #109) while the majority use a short phrase. Decide one convention; if short phrases are the standard, shorten the outliers.

---

# Systems (21)

- **#109 Adjacent Possible** — Tighten the sentence-long tagline. Kauffman/Johnson framing and the smartphone worked example are excellent.
- **#26 Algorithms** — Strong; the law-firm NLP example with the false-negative spot-check is a good touch. *Optional polish*.
- **#18 Bottlenecks** — Strong; Goldratt's five steps are crisply rendered. *Optional polish*.
- **#25 Churn** — **Fix spelling:** "disguizing" → "disguising" in the worked example. Content (leaking-bucket model, GRR/NRR distinction) is strong.
- **#28 Conway's Law** — Standardise "Reverse Conway Manoeuvre" to match the dedicated card **#155 Inverse Conway Maneuver**, and add a reciprocal cross-link (carried from 06-13).
- **#22 Critical Mass** — Strong; the Reddit seeding example lands well. *Optional polish*.
- **#23 Diminishing Returns** — **Fix spelling:** "advertizing" → "advertising" (appears twice). Marginal-vs-average framing is excellent.
- **#208 Drift to Failure** — Excellent; Rasmussen/Dekker grounding and the Challenger/Deepwater references are well-used. *Optional polish*.
- **#243 Dunbar's Number** — Excellent; the nested-tier model is well applied. Add reciprocal link to #118 if intended (06-13).
- **#19 Emergence** — Strong; the open-plan office counter-example is sharp. *Optional polish*.
- **#20 Equilibrium** — Strong; the two-valley/ridge model is clear. *Optional polish*.
- **#108 Exploration vs. Exploitation** — Tighten the sentence-long tagline. Kodak worked example is exemplary.
- **#17 Feedback Loops** — **Fix spelling:** "surprizing" → "surprising". Reinforcing/balancing treatment is strong.
- **#260 Fixes That Fail** — The card teaches *two* archetypes (Fixes That Fail **and** Shifting the Burden) but the title names only one; reflect both in the title or tagline so the second isn't lost to search.
- **#27 Irreducibility** — **Fix spelling:** "arizing" → "arising" (and check "arize" forms). Essential-vs-accidental complexity framing is strong.
- **#24 Margin of Safety** — Strong; the runway worked example with the adverse-scenario recomputation is a model. *Optional polish*.
- **#235 Path Dependence** — Excellent; QWERTY + bank-mainframe examples and the preference-vs-path distinction are standout. *Optional polish*.
- **#29 Red Queen Dilemma** — Strong; the feature-velocity example is apt. *Optional polish*.
- **#102 S-Curves** — Tighten the sentence-long tagline. Positional-awareness framing and the successor-curve point are excellent.
- **#21 Scale** — Strong; square-cube law and the n² coordination point are well used. *Optional polish*.
- **#261 Systems Thinking** — Formatting: this card uses numbered heuristics and bold-headed failure modes while the deck norm is bulleted; align for consistency. Content and umbrella positioning (stocks/flows, Meadows leverage points) are excellent.

---

# Economics (22)

**Cross-cutting (this category):** the **Kodak digital-camera (1975)** worked example is used in *both* #37 Creative Destruction and #108 Exploration vs. Exploitation (Systems) — diversify one (e.g., Creative Destruction → Blockbuster/Netflix or Encyclopædia Britannica, which it already gestures at). #262 reuses the numbered-heuristic + bold-headed-failure-mode formatting seen in #261; align to the deck's bulleted norm.

- **#38 Bubbles** — Strong; the displacement→boom→euphoria→crash structure and dot-com example are well rendered. *Optional polish*.
- **#37 Creative Destruction** — **Diversify the worked example** (currently duplicates #108's Kodak case). The Schumpeter/Christensen framing is otherwise excellent.
- **#36 Debt** — Strong; the financial/technical/organisational debt generalisation is well handled. *Optional polish*.
- **#35 Efficiency** — Strong (Drucker's effectiveness-vs-efficiency, Toyota). Add reciprocal links from #18 and #30 if intended (06-13). 
- **#232 Free Rider Problem** — Excellent; the clean distinction from Tragedy of the Commons (undercontribution vs overuse) is a model of card boundary-setting. *Optional polish*.
- **#120 Goodhart's Law** — Excellent; the triangulation corrective and hospital example are exemplary. *Optional polish*.
- **#40 Gresham's Law** — Strong; the generalisation beyond money (information, talent, Slack channels) is well done. *Optional polish*.
- **#262 Incentive Design** — Align formatting (numbered → bulleted heuristics; bold-headed → bulleted failure modes) to the deck norm. Content is excellent; boundary with Goodhart/Principal-Agent/Cobra is well drawn.
- **#39 Interdependence** — Strong; the web-of-strings model and reorg example are clear. *Optional polish*.
- **#239 Long Tail** — Excellent; the supply-tail/demand-tail distinction and the "tail is the moat" example are standout. Add reciprocal link to #84 if intended (06-13).
- **#34 Monopoly vs. Competition** — Strong; Thiel framing + Stripe example land well. *Optional polish*.
- **#229 Nash Equilibrium** — Strong; the supermarket payoff-matrix example is concrete. Boundary with Prisoner's Dilemma (PD as an instance) is handled well. *Optional polish*.
- **#33 Optimization** — Strong; the landscape/local-maxima model and email open-rate example are good. *Optional polish*.
- **#121 Principal–Agent Problem** — Excellent; adverse-selection-vs-moral-hazard diagnosis and the sales-commission example are exemplary. *Optional polish*.
- **#230 Prisoner's Dilemma** — Strong; Tit-for-Tat and the AI-infrastructure example are apt. *Optional polish*.
- **#31 Scarcity** — Strong; the "scarcest vs most-requested resource" heuristic is the standout. *Optional polish*.
- **#236 Schelling Points** — Excellent; the manufactured-salience and revenue-share negotiation example are sharp. *Optional polish*.
- **#32 Specialization** — Strong; carries comparative advantage (Ricardo) since there's no separate card — consider noting that explicitly so the concept is discoverable. AWS example is good.
- **#30 Trade-offs** — Strong; the "name the trade-off / false trade-off" heuristics and PPF model are well used. *Optional polish*.
- **#231 Tragedy of the Commons** — Excellent; Ostrom's governance conditions add real depth beyond Hardin. *Optional polish*.
- **#216 Unit Economics** — Excellent; the segment-analysis worked example (blended ratio hiding a 5.3:1 / 2.1:1 split) is a model. Minor: align the few bold-headed failure modes to bullets.
- **#217 Value Creation and Capture** — Excellent; Brandenburger & Stuart added-value framing and the digital-health capture-misalignment example are standout. Add reciprocal link to #34 if intended (06-13).

---

# Physics & Chemistry (10)

**Cross-cutting:** #43 Inertia and #20 Equilibrium (Systems) use a near-identical worked example (a change initiative that reverts because the underlying system/forces were never changed) — diversify one. The "deployment pipeline friction" setting recurs across #44, #18, and #171; fine, but worth varying for freshness.

- **#45 Activation Energy** — Strong; the "reduce/increase activation energy" framing and documentation example are clear. *Optional polish*.
- **#48 Alloying** — Strong; complementary-strengths and cognitive-diversity framing is well done. *Optional polish*.
- **#47 Catalysts** — Strong; the catalyst-vs-consumed-resource distinction and developer-platform example land well. *Optional polish*.
- **#44 Friction** — Strong; the necessary-vs-unnecessary friction audit is excellent. *Optional polish*.
- **#43 Inertia** — **Diversify the worked example** (currently structurally duplicates #20 Equilibrium). Newton's-law framing and the lever-point heuristic are otherwise strong.
- **#41 Leverage** — Strong; "prefer leverage over throughput" and the support-handbook example are good. *Optional polish*.
- **#49 Reciprocity** — Strong; Cialdini grounding and the awareness of manipulative reciprocity are well balanced. *Optional polish*.
- **#50 Relativity** — Strong; "compared to what?" and the seed-round reference-frame example are sharp. *Optional polish*.
- **#46 Thermodynamics** — Strong; the maintenance-energy / entropy-creep framing and knowledge-base decay example are excellent. *Optional polish*.
- **#42 Velocity** — Strong; speed-vs-direction and the flat-DAU example are well used. *Optional polish*.

---

# Mathematics (11)

**Cross-cutting:** the three quantitative cards (#227, #228, #233) commendably show explicit worked calculations — consider making that a deck standard for any card whose concept is fundamentally numeric.

- **#228 Bayesian Updating** — Excellent; the prior→likelihood-ratio→posterior worked calculation (hiring, 40%→62%) is a model. *Optional polish*.
- **#75 Compounding** — Strong; the Amazon flywheel is apt but contributes to deck-wide Amazon over-reliance (see deck-level note below) — consider an alternative compounding case. Content is excellent.
- **#227 Expected Value** — Excellent; the feature-build EV calculation with the hidden-negative and correlation caveats is exemplary. *Optional polish*.
- **#233 Fermi Estimation** — Excellent; the revenue-sizing decomposition with a triangulating cross-check is a model worked example. *Optional polish*.
- **#76 Local Maxima** — Strong; the "go down to go up" framing and law-firm enterprise-pivot example are clear. *Optional polish*.
- **#81 Multiply by Zero** — Strong; the multiplicative-vs-additive framing and distribution-zero example are good. *Optional polish*.
- **#238 Power Law** — Excellent; the generative-conditions point (preferential attachment, multiplicative processes) and "don't optimise the middle" are standout. *Optional polish*.
- **#78 Randomness** — Strong; the noise-floor heuristic and WAU-fluctuation example are well used. *Optional polish*.
- **#77 Regression to the Mean** — Excellent; the intervention-trap and praise/criticism-misattribution insights are exemplary. *Optional polish*.
- **#79 Sampling** — Strong; self-selection, WEIRD, and the day-30-cohort framing example are sharp. *Optional polish*.
- **#80 Surface Area** — Strong; the opportunity/vulnerability duality and the author-surface-area example are good. *Optional polish*.

---

# Deck-level note: example-source diversity

Amazon/Bezos is the single most-used example source across the deck — AWS (Specialization, Conway's Law), the flywheel (Compounding), two-pizza teams (Thought Experiment, Dunbar, Conway), regret minimization (#15), two-way doors (#16), working-backwards, and blameless post-mortems all trace to Amazon. Each use is individually apt, but the aggregate makes the deck feel Amazon-centric. Consider deliberately diversifying example sources (other firms, sectors, and eras) on a few of these cards for range.

---

# Network Effects (4)

A tight, well-cross-linked cluster (Network Effects / Defensibility / Marketplace / Viral Growth). All strong.

- **#85 Defensibility** — Strong; the moat-typology and "why will this still exist in three years?" test are excellent. Worked example is Amazon again (see deck-level diversity note) — consider a non-Amazon multi-moat case.
- **#84 Marketplace** — Strong; liquidity-as-primary-metric and the Airbnb chicken-and-egg example are exemplary. *Optional polish*.
- **#82 Network Effects** — Strong; direct-vs-indirect distinction, the scale-economies boundary, and the LinkedIn example are well done. Carries Metcalfe's Law (no separate card) — consider noting that for discoverability. 
- **#83 Viral Growth** — Strong; the k-coefficient and cycle-time mechanics plus the Hotmail example are clear. *Optional polish*.

---

# Learning (6)

- **#114 Deep Work / Cognitive Capacity** — Excellent; the 3.5-hour planning baseline and the sprint-capacity arithmetic (960 → 180 hours) are a standout, genuinely actionable worked example. *Optional polish*.
- **#88 Five-Hour Rule** — Strong; teach-to-learn and fundamentals-over-trends are well chosen. The Naval example is apt. *Optional polish*.
- **#89 Learning Transfer** — Strong; near/far transfer and the abstract-before-transferring discipline are clear; clean boundary with Analogical Reasoning. *Optional polish*.
- **#86 Model Chaining** — Strong; Munger's latticework and the churn-diagnosis model chain are good. *Optional polish*.
- **#105 Pre-built Chains** — Strong; the incompleteness-and-sequencing framing and the Series-A worked example are excellent for a meta-card. *Optional polish*.
- **#87 T-Shaped** — Strong; the depth-first sequencing and the Pi-shaped extension are well handled. *Optional polish*.

---

# Art (4)

A coherent communication-craft cluster (Audience / Contrast / Framing / Rhythm). All strong. Minor: the category label "Art" undersells the content (it's communication and design craft) — consider whether the name fits the cards.

- **#90 Audience** — Strong; the "name the specific person" discipline and the analytics-onboarding example are sharp. *Optional polish*.
- **#92 Contrast** — Strong; brain-as-difference-detector and the 40-uniform-slides example are well used. *Optional polish*.
- **#91 Framing** — Strong; the CFO cost-overrun reframe is an exemplary worked example. *Optional polish*.
- **#93 Rhythm** — Strong; the keynote energy-curve example makes an abstract concept concrete. *Optional polish*.

---

# Psychology (26)

**Cross-cutting:** five motivation-theory cards (#58 Maslow, #61 ERG, #59 McClelland, #60 Max-Neef, #192 SDT) coexist — each is well-built and they mostly distinguish themselves, but a brief "which framework when" orienting line on each (or a single connective note) would help a reader choose. "Series A raise" joins Kodak/Amazon/deployment-pipeline as a recurring worked-example setting (#54, #206, #105) — vary for freshness.

- **#54 Anchoring** — Strong; "anchor first" and the counter-anchor Series-A example are sharp. *Optional polish*.
- **#56 Availability Bias** — Strong; the security-budget example and the base-rate override are well used. *Optional polish*.
- **#206 Base Rate Neglect** — Excellent; the ERP reference-class example is exemplary. Shares the Flyvbjerg overrun figures with #115 Planning Fallacy — fine (canonical source), but keep the two cards' boundary crisp since they're close cousins.
- **#205 Commitment & Consistency Bias** — Excellent; the data-platform escalation example and the pre-specified-review-conditions fix are standout. *Optional polish*.
- **#55 Confirmation Bias** — Strong; the leading-question research-method example is a sharp, self-referential illustration. *Optional polish*.
- **#57 Dunning-Kruger** — Strong; the four-stage competence model and B2C→B2B example are clear; clean boundary with Circle of Competence. *Optional polish*.
- **#61 ERG Theory** — Strong; frustration-regression as a diagnostic is the standout. *Optional polish*.
- **#204 Falsification** — Excellent; the "learning theatre pilot" and the controlled-comparison redesign are exemplary. *Optional polish*.
- **#200 Fundamental Attribution Error** — Excellent; the sales-team situational audit is a model worked example. *Optional polish*.
- **#201 Hindsight Bias** — Excellent; the three-component breakdown and the legacy-API example (hindsight constructing the wrong lesson) are standout. *Optional polish*.
- **#167 Immunity to Change** — Strong; the four-column grid and the delegation worked example are well rendered. *Optional polish*.
- **#51 Incentives** — Strong; Wells Fargo and the bug-bounty perverse-incentive example are sharp. *Optional polish*.
- **#52 Loss Aversion** — Strong; the "would we build it today?" reframe is the standout heuristic. *Optional polish*.
- **#58 Maslow's Hierarchy** — Strong; appropriately flags its own oversimplification. Add a "vs ERG/SDT — use when" pointer. 
- **#60 Max-Neef's Fundamental Human Needs** — Strong; the needs-vs-satisfiers distinction is the key contribution; worked example is good. Add cross-pointer to the other motivation cards.
- **#59 McClelland's Acquired Needs** — Strong; the founder-role-fit example is apt. Add cross-pointer to the motivation cluster.
- **#203 Narrative Instinct** — Excellent; "root cause as a plot device" and the electronics-company example are standout. *Optional polish*.
- **#212 Observer Bias** — Excellent; the blinded-evaluation redesign is concrete and actionable. *Optional polish*.
- **#115 Planning Fallacy** — Excellent; inside/outside view and the team's-own-reference-class example are exemplary. *Optional polish*.
- **#104 Psychological Safety** — Strong; the safety≠comfort distinction and Project Aristotle example are well used. *Optional polish*.
- **#192 Self-Determination Theory** — Excellent; the internalisation continuum and crowding-out effect add real depth; the per-feature-bonus example is exemplary. *Optional polish*.
- **#202 Social Proof** — Strong; pluralistic ignorance and the early-adopter-conversion example are sharp. *Optional polish*.
- **#207 SRK Framework** — Excellent; the slip/rule-mistake/knowledge-mistake taxonomy and the deployment-slip example are standout. *Optional polish*.
- **#53 Sunk Cost** — Strong; the "would you build it today?" fresh-start frame and the learning-isn't-sunk caveat are well done. *Optional polish*.
- **#199 Survivorship Bias** — Excellent; the Wald framing and the acquisitions-study example (success factors present in failures too) are exemplary. *Optional polish*.
- **#101 Trust** — Strong; the three types (competence/integrity/benevolence) are well defined. Minor consistency wobble: the Mental Model frames it as "two primary types … a third dimension," while a failure mode says "the three types" — make the count consistent (call it three throughout, or "two primary + benevolence").

---

# Business (23)

**Cross-cutting (important):**
- **Kodak is the worked example in THREE cards** — #37 Creative Destruction, #108 Exploration vs. Exploitation, and #173 Dominant Logic. Keep it in #173 (the richest treatment, paired with Nokia); give #37 and #108 fresh examples.
- **Near-duplicate worked examples:** #114 Deep Work and #116 Maker's-vs-Manager's Schedule both run the "engineer with scattered meetings → consolidate → ~3× deep work" example; #166 Kernel of Good Strategy and #254 Playing to Win both run the "software firm with an incoherent five-priority 'strategy' → refactor" example. Diversify one of each pair.
- **"advertizing"** appears in #71 (and #38 dot-com) — part of the deck-level z-spelling fix.

- **#225 A/B Testing** — Excellent; peeking problem, HiPPO override, and the power-calculation example are exemplary. Clean boundary with #72. *Optional polish*.
- **#172 Ambidextrous Organization** — Strong; the three structural models are useful. Worked example is Amazon again (diversity note). 
- **#73 Assumption Mapping** — Strong; importance×certainty ranking and the market-entry example are clear. *Optional polish*.
- **#218 Business Case Construction** — Excellent; the hockey-stick, single-scenario, and assumption-laundering failure modes plus the route-optimisation example are standout. *Optional polish*.
- **#68 Business Model Canvas** — Strong; the interdependency-check example (enterprise vs self-serve) is sharp. *Optional polish*.
- **#249 Customer Segmentation** — Excellent; "a difference that changes what you do" and the coordinate-by-how-teams-work re-cut example are standout. *Optional polish*.
- **#112 Disruptive Innovation** — Excellent; the low-end/new-market distinction and Netflix/Blockbuster example are exemplary. Note: this card owns the Netflix/Blockbuster example, so #37's replacement example should differ from it.
- **#173 Dominant Logic** — Excellent; the Kodak+Nokia treatment is the best of the three Kodak cards — keep it here. *Optional polish*.
- **#72 Experiment Design** — Strong; close cousin of #225 (general method vs operationalisation) — boundary is drawn, but the worked examples are structurally similar; consider differentiating them further. 
- **#247 Growth Barriers** — Excellent; the driver-tree / binding-constraint discipline and the onboarding-capacity example are standout. *Optional polish*.
- **#70 Innovation Funnel** — Strong; zombie-ideas and no-skip-stage rule are good. *Optional polish*.
- **#179 Innovation Health Indicators** — Excellent; the DORA analogy and four-layer model are a strong, distinctive contribution. *Optional polish*.
- **#166 Kernel of Good Strategy** — Excellent (Rumelt); the diagnosis-first discipline is well taught. Diversify the worked example vs #254. 
- **#250 KPI Architecture** — Excellent; decision-backward design and the 60→9 metric example are standout; cross-links to Goodhart/OKRs/DORA are well placed. *Optional polish*.
- **#116 Maker's Schedule vs. Manager's Schedule** — Strong (Graham, Gloria Mark's 23-minute figure). Diversify the worked example vs #114.
- **#174 Open Innovation** — Strong; Chesbrough framing and the P&G Connect+Develop example are well used. *Optional polish*.
- **#176 Organizational Slack** — Strong; the slack-as-shock-absorber framing and 3M 15%-time example are good. *Optional polish*.
- **#241 Parkinson's Law** — Strong; "set deadlines shorter, observe what gets cut" and the timebox example are clear. *Optional polish*.
- **#254 Playing to Win** — Excellent (Lafley/Martin cascade); the cascade-constraint logic is well taught. Diversify the worked example vs #166.
- **#71 Portfolio Map** — Strong (Three Horizons, Google 70-20-10). Fix "advertizing" → "advertising". 
- **#220 Power Mapping** — Excellent; the formal-vs-informal distinction, the "negative space" heuristic, and the prerequisite note to the Leadership cards are standout. *Optional polish*.
- **#219 Pricing Logic** — Excellent; value-based vs cost-plus and the segment-pricing example are exemplary; cross-notes are well placed. *Optional polish*.
- **#248 Profit Pool Analysis** — Excellent (Gadiesh/Gilbert); revenue-pool-vs-profit-pool and the distributor example are standout. *Optional polish*.
- **#127 RACI Framework** — Strong; "two Accountables means none" is the key rule, well stated. *Optional polish*.

---

# Business — addendum (7 cards the first read truncated)

My first Business read was cut off at "RACI" and the Business/ directory actually holds 31 files spanning two manifest categories. These 7 true-Business-category cards were missed; reviewing them here. (Structural note for the maintainer: manifest **category ≠ directory** — e.g. 8 files in Business/ belong to "Innovation & Entrepreneurship." Worth a comment in the repo so future reviewers navigate by category, not folder.)

- **#69 Value Prop Canvas** — Strong; the customer-side-first discipline and the pains-over-gains insight are well used. Pairs cleanly with #68. *Optional polish*.
- **#74 Stakeholder Mapping (Salience Model)** — Strong (Mitchell/Agle/Wood); the power/legitimacy/urgency model and the shifting-salience worked example are well handled. Clean boundary with #220 Power Mapping. *Optional polish*.
- **#123 Scenario Planning** — Strong (Shell/Wack); the predetermined-elements vs critical-uncertainties distinction and the "best/base/worst isn't scenario planning" failure mode are sharp. *Optional polish*.
- **#224 Red Teaming** — Excellent; the captured-red-team and cosmetic-exercise failure modes plus the proposal example are standout. *Optional polish*.
- **#251 Value Realization** — Excellent; the value-ledger discipline and the warehouse-automation example (58%-of-target made legible) are exemplary; clean before/after-approval boundary with #218 and #250. *Optional polish*.
- **#210 Wardley Mapping** — Excellent (Simon Wardley); the evolution-axis and the "70% is commodity in disguise" worked example are standout. Note: the "build proprietary data platform vs cloud" setting recurs (#210, #205, #235) — vary one.

---

# Innovation & Entrepreneurship (23)

This category spans three directories (14 in Startups/, 8 in Business/, 1 in Innovation-Entrepreneurship/). The 8 that live in Business/ (#70, #112, #172, #173, #174, #176, #179, #113) were reviewed above; the Lean-Startup/discovery cluster below is tightly cross-linked and uniformly excellent.

**Cross-cutting (important):**
- **#71 Portfolio Map (Business) and #113 Three Horizons (Innovation) are near-duplicate cards** — both teach the McKinsey Three Horizons framework (H1/H2/H3, manage-simultaneously). They sit in different categories with different examples (Google 70-20-10 vs Amazon/AWS), but the conceptual content substantially overlaps. **Merge, or differentiate sharply** (e.g. #71 → portfolio/optionality lens; #113 → innovation-horizon management logic) and cross-link explicitly.
- **The Airbnb professional-photography worked example appears in both #84 Marketplace and #66 Customer Development** — diversify one.

- **#237 Cobra Effect** — Excellent; the intervention-funds-the-problem mechanism, the taxonomy, and the innovation-programme example are standout. Clean boundary with Second-Order Effects. *Optional polish*.
- **#63 Build-Measure-Learn** — Strong; the Dropbox-video example is canonical and apt. *Optional polish*.
- **#182 Continuous Discovery** — Excellent (Torres); the perishable-asset framing and the Spotify squad-rotation example are well used; clean boundary with #66. *Optional polish*.
- **#111 Crossing the Chasm** — Excellent (Moore); the beachhead/whole-product discipline and the Salesforce example are exemplary. *Optional polish*.
- **#66 Customer Development** — Strong (Blank); four-step model is clear. **Diversify the Airbnb-photography example** vs #84.
- **#110 Design Thinking** — Strong; the problem-space emphasis and the IDEO hospital-ceiling example are standout. *Optional polish*.
- **#175 Effectuation** — Strong (Sarasvathy); the five principles and the Starbucks/Schultz lemonade example are well used. *Optional polish*.
- **#189 Experiment Ladder** — Excellent (Bland/Osterwalder); the cheapest-adequate-experiment principle and the four-rung worked example are a model; cross-links to #73 and #72 are well placed. *Optional polish*.
- **#67 Innovation Accounting** — Strong; the vanity-metric (DAU up, day-30 retention 3%) example is sharp. *Optional polish*.
- **#103 Jobs to Be Done** — Excellent (Christensen/Moesta); the four-forces analysis and the milkshake example are exemplary. *Optional polish*.
- **#64 MVP** — Strong; the "MVP is defined by the riskiest assumption" discipline and the Zappos example are well used; clean boundary with #181. *Optional polish*.
- **#180 Opportunity Solution Trees** — Excellent (Torres); the outcome/opportunity/solution separation and the fintech-savings example are standout. *Optional polish*.
- **#65 Pivot or Persevere** — Strong; pivot-as-Bayesian-update and the Instagram/Burbn example are apt. *Optional polish*.
- **#181 Pretotyping** — Excellent (Savoia); the pretotype-vs-prototype distinction, DYOD discipline, and Google Glass fake-door example are standout. *Optional polish*.
- **#62 Product-Market Fit** — Strong (Andreessen); retention-before-growth and the Slack pull-dynamic example are well used. *Optional polish*.

---

# Delivery & Flow (33)

The deck's densest and most tightly cross-linked cluster — accurate citations throughout and consistently strong, concrete worked examples. Cross-cutting notes:
- **"Two restaurants" mental-model device** opens both #133 Flow Efficiency and #157 Feature Factory — vary one.
- The **"N initiatives competing for capacity that fits M → apply WIP/Little's Law/WSJF"** worked-example template recurs (#131, #132, #137, #159); individually fine, collectively repetitive — vary a couple.
- #160 Reference Class Forecasting and #206 Base Rate Neglect (Psychology) share the large-IT/ERP reference-class worked example; they're the technique and the bias respectively and are cross-linked, but consider differentiating the examples.
- **#155 Inverse Conway Maneuver vs #28 Reverse Conway Manoeuvre** — standardise the term and spelling and cross-link (carried).

- **#145 A3 Problem Solving** — Strong; the "narrow the problem" two-A3 example is sharp. *Optional polish*.
- **#148 Attention Budget** — Strong; individual-WIP framing and the 22-commitments→4 example are well used. Part of the focus/attention cluster (#114/#116/#149/#150) — ensure mutual cross-links. *Optional polish*.
- **#136 Batch Size Reduction** — Strong; Reinertsen's U-curve and the compliance-cohort example are clear. *Optional polish*.
- **#150 Cognitive Load (Team)** — Strong (Sweller; Skelton & Pais); intrinsic/extraneous/germane and the payment-team split example are well used. *Optional polish*.
- **#149 Context-Switching Cost** — Strong; Weinberg's figures and the 47-switches diary example land well. *Optional polish*.
- **#137 Cost of Delay** — Strong (Reinertsen); CoD-isn't-value distinction is the key insight. *Optional polish*.
- **#156 Dependency Management** — Strong; visibility→reduction→management ordering and the 30-team example are good. *Optional polish*.
- **#142 DORA Metrics** — Excellent (Accelerate); all-four discipline and the banded worked example are exemplary. *Optional polish*.
- **#209 Empirical Process Control** — Excellent (Shewhart/Deming/Schwaber/Sutherland); the cargo-cult warning and the two-team worked example are standout. *Optional polish*.
- **#157 Feature Factory vs Product Orientation** — Excellent (Cutler/Cagan/Perri); the outcome-connection audit is sharp. Vary the "two restaurants" device vs #133.
- **#133 Flow Efficiency vs Resource Efficiency** — Excellent (Modig/Åhlström); the utilization-paradox example is exemplary. Vary the "two restaurants" device vs #157.
- **#143 Flow Metrics** — Strong (Kersten); the DORA-complement framing and Flow Distribution example are well used. *Optional polish*.
- **#147 Gemba** — Strong (Imai/Ohno); the "digital gemba" point and the transformation example are standout. *Optional polish*.
- **#155 Inverse Conway Maneuver** — Strong (LeRoy & Simons; Team Topologies); the order-capture/fulfillment split example is clear. Standardise term/spelling with #28.
- **#138 Kanban Method** — Strong (Anderson); five practices and the platform-team example are well used. *Optional polish*.
- **#153 Kill Criteria** — Strong (Duke); pre-commitment discipline and the 12-startup portfolio example are exemplary. *Optional polish*.
- **#134 Lead Time vs Cycle Time** — Strong; report-both/report-percentiles and the regulatory-team example are sharp. *Optional polish*.
- **#158 Lean Portfolio Management** — Strong; fund-teams-not-projects and the 28-initiative example are well used. *Optional polish*.
- **#131 Little's Law** — Excellent; "cycle time follows WIP" and the 30-initiative example are a model. *Optional polish*.
- **#152 OKRs** — Strong (Grove/Doerr); outcome-vs-activity KRs and the re-baseline example are well used; clean KPI boundary. *Optional polish*.
- **#151 Strategic Prioritization ("One Thing")** — Strong (Jobs/Keller/Lencioni); the five-priority-illusion and the offsite example are sharp. *Optional polish*.
- **#144 Outcome vs Output** — Strong (Seiden/Cagan); state-outcome-before-output and the 14-features example are well used; overlaps #157 by design. *Optional polish*.
- **#146 PDCA** — Strong (Shewhart/Deming); write-the-prediction-down and the smoke-test cycle example are exemplary. *Optional polish*.
- **#141 Probabilistic Forecasting** — Excellent; Monte-Carlo-on-throughput and the regulatory-deadline example are standout. *Optional polish*.
- **#135 Queueing & Wait Time** — Excellent; the Kingman/utilization-non-linearity and the review-board example are exemplary. *Optional polish*.
- **#160 Reference Class Forecasting** — Strong (Flyvbjerg); differentiate the worked example from #206. 
- **#256 Reliability vs. Feature Velocity** — Excellent (SRE error budget); the same-team-owns-the-tradeoff insight and payment-team example are standout. *Optional polish*.
- **#140 Statistical Variability** — Excellent; plot-the-histogram and the SLA-tail example are exemplary. *Optional polish*.
- **#154 Team Topologies** — Strong (Skelton & Pais); four-types/three-modes and the fintech reorg example are well used. *Optional polish*.
- **#255 Technical Debt** — Excellent (Cunningham); explicit boundary with financial Debt (#36) and the 35%-interest audit example are standout. *Optional polish*.
- **#139 Value Stream Mapping** — Strong (Rother/Shook); walk-it-don't-model-it and the loan-origination example are exemplary. *Optional polish*.
- **#132 WIP Limits** — Strong; "current minus one" and the marketing-ops example are well used. *Optional polish*.
- **#159 WSJF** — Strong (Reinertsen); CoD/size sequencing and the 22-initiative example are clear; vary the recurring intake template. *Optional polish*.

---

# Leadership (17)

Among the strongest categories in the deck. Citations are accurate (US Army AAR/Brief-Back/Tactical Pause, Schein, Kotter/ADKAR, von Moltke/Auftragstaktik, Marquet's *Santa Fe*, Boyd, Laurence Peter, Brooks/Dunbar) and the **explicit cross-card boundary notes are a model for the whole repository** — the intent-and-verification cluster (#194 Leader's Intent / #118 Mission Command / #195 Brief-Back) and the influence cluster (#221 Influence Without Authority / #222 Coalition Building / #220 Power Mapping) each state their overlaps and distinctions in-card. Worth holding these up as the template other clusters should match. Almost everything here is *optional polish*.

- **#196 After-Action Review** — Excellent; the four-question drill and the explicit "How the AAR differs from a Post-mortem" boundary with #11 are exemplary. *Optional polish*.
- **#191 Async-First Default** — Excellent; the burden-of-proof inversion and the triage filter are sharp; the "replace the accountability the meeting carried" failure mode is a nice catch. *Optional polish*.
- **#129 Board Governance** — Excellent; the epistemic-capture framing and the Enron worked example are standout; deliberately cross-links to #126's third-line independence. *Optional polish*.
- **#195 Brief-Back Protocols** — Excellent; the comprehension-gap vs interpretation-gap distinction and the retention example are a model. *Optional polish*.
- **#125 Change Management** — Strong; Kotter + ADKAR and the incentives-left-intact worked example are well used. *Optional polish*.
- **#222 Coalition Building** — Excellent; the in-card overlap/boundary note with #221 and prerequisite pointer to #220 are exemplary; the minimum-winning-coalition example is sharp. *Optional polish*.
- **#221 Influence Without Authority** — Excellent; the credibility/reciprocity model and the data-engineering example are standout; clean boundary with #222. *Optional polish*.
- **#194 Leader's Intent** — Excellent; purpose/key-tasks/end-state and the explicit "different from Mission Command" boundary are a model; the compass-vs-route-map device is apt. *Optional polish*.
- **#118 Mission Command** — Excellent (von Moltke; Marquet); the empowerment-without-competence failure mode is sharp. *Optional polish*.
- **#119 OODA Loop** — Strong (Boyd); the Orient-is-decisive emphasis and the challenger-retailer example are well used; sits naturally alongside #146 PDCA and #209. *Optional polish*.
- **#124 Organizational Culture** — Strong (Schein); artefacts/espoused/assumptions and the "celebrate failure" example are exemplary. *Optional polish*.
- **#242 Peter Principle** — Strong (Peter 1969); the promotion-as-retention failure and the Principal-track remedy are well used. *Optional polish*.
- **#193 Purpose Clarity** — Strong; the dual individual-competence/leadership-responsibility framing, the Elevator Test, and the SDT-relatedness link are well handled. *Optional polish*.
- **#126 Risk Management** — Strong; risk-appetite/Three-Lines and the correlated-exposure example are sharp; deliberate epistemic-capture link to #129. *Optional polish*.
- **#257 Span of Control** — Excellent; n(n−1)/2, Brooks/Dunbar/two-pizza consolidated, and the hire-15→24-months-behind example are standout. Overlaps #243 Dunbar and #154 Team Topologies but is cleanly cross-linked. *Optional polish*.
- **#197 Tactical Pause** — Excellent; the permission-to-stop framing and the "takes minutes, saves weeks" asymmetry are well used; distinct from #153 Kill Criteria and #65 Pivot. *Optional polish*.
- **#190 Three-Question Ritual** — Excellent; decision/owner/informed discipline, the RACI-Accountable link, and especially the **Origin Note debunking the fabricated "secret CEO" attribution** — a model of sourcing honesty other cards should emulate. *Optional polish*.

---

# Consulting Craft (10)

A coherent, high-quality cluster — accurate citations (Schein, Block, McCandless/Lipmanowicz, Rasiel, Minto) and a clear process spine (Contracting → Situation Assessment → Engagement Lifecycle) topped by an integrating meta-skill. Notes:
- **#253 Structured Problem Solving is the keystone** — it explicitly integrates answer-first (#163), hypothesis-led (#161), MECE (#162), 80/20, and decision-orientation into a single posture, and its "performing the parts without integrating them" failure mode is the sharpest articulation of the cluster's value. Worth flagging to the maintainer as the natural entry point / anchor for a consulting operating mode.
- **#161 Hypothesis-Driven and #162 MECE both use a margin-decline-decomposition worked example** (40-product portfolio / operating-margin-down-3-points). They teach different techniques so it's defensible, but two consecutive margin-bridge examples in adjacent cards is worth varying one.
- The influence/stakeholder cluster — **#252 Stakeholder Pre-Wiring / #222 Coalition Building / #221 Influence Without Authority / #220 Power Mapping / #74 Stakeholder Mapping** — spans three categories and is well cross-linked; a reader would benefit from a one-line "which-when" pointer among them (mapping = who; influence = how, 1:1; coalition = the group; pre-wiring = the specific pre-meeting sequence).

- **#258 Coaching Stance** — Excellent (Schein/Block); expert-vs-coaching stance and the operating-model example are standout; uses the #190 Three-Question Ritual well. *Optional polish*.
- **#165 Contracting & Scope** — Excellent (Block); contract-on-outcomes and the health-system re-contracting example are exemplary. *Optional polish*.
- **#164 Engagement Lifecycle** — Strong; Diagnose/Design/Deliver/Detach and the insurer example with named-successor transfer are well used. *Optional polish*.
- **#259 Facilitation** — Excellent (Liberating Structures); the "design-thinking theater" failure mode and the TRIZ leadership-offsite example are standout. *Optional polish*.
- **#161 Hypothesis-Driven Consulting** — Strong (Rasiel/Minto); write-the-answer-first and the margin example are well used. Vary the margin example vs #162.
- **#162 MECE** — Strong (Minto); arithmetic-decomposition discipline and the margin-bridge example are exemplary. Vary vs #161.
- **#163 Pyramid Principle** — Strong (Minto); answer-first and the 24-slide→6-slide example are well used. *Optional polish*.
- **#246 Situation Assessment** — Excellent; six-lens fact base, fact/interpretation separation, and the "GTM problem is actually a retention problem" example are standout; clean link to #161. *Optional polish*.
- **#252 Stakeholder Pre-Wiring** — Excellent; win-the-room-first, the cold-open and surprise-as-strategy failure modes, and the capacity-reallocation example are exemplary. *Optional polish*.
- **#253 Structured Problem Solving** — Excellent; the integrating-posture framing and the store-closure example are a model. *Optional polish*.

---

# Applied AI (3)

A current, internally coherent agentic-safety cluster — the standout being its insistence on **structural over normative** controls. The three cards reinforce one another cleanly (authority boundaries set the policy, minimal capability is the enforcement mechanism, prompt injection is the threat that makes structural enforcement necessary). Citations are accurate and the examples are concrete and well-judged. All *optional polish*.

- **#183 AI Authority Boundaries** — Excellent; the grant-not-default framing, the Six Registers / escalation rule, and the refund-agent example are standout; cross-links to #184/#185 are well placed. *Optional polish*.
- **#184 Minimal Capability Principle** — Excellent; least-privilege-for-agents, the capability-below-the-reasoning-layer insight, and the three-agent compliance example are exemplary. *Optional polish*.
- **#185 Prompt Injection** — Excellent; the data-becomes-instruction framing, SQL-injection analogy, structural-vs-normative defenses, and the procurement-agent indirect-injection example are standout. *Optional polish*.

---

# Pre-built Chains (21)

Reviewed at the structural level (these compose existing cards into ordered protocols rather than teaching a concept). Step logic is coherent throughout, every referenced skill resolves to a real card, and the newer chains (#186/#187 AI governance, #244 Degradation Scan, #213 Idea→Hypothesis, #245 Funnel Intake, #170 Work to Be Done, #198 Mission Execution) are high-polish with "When to Use" and synthesis sections. Two real consistency issues:

**1. Nine chains have placeholder taglines that merely repeat the card name** — #94 Pricing Decision, #95 Market Entry, #96 Hiring Decision, #97 Product Launch, #98 Investment Decision, #99 Should I Quit, #100 Life Decision, #168 Improve Delivery Flow, #169 Org Design for Flow Diagnostic. Compare the evocative taglines on their siblings (#213 "An idea is a guess. A hypothesis is a bet you can settle"; #214 "Each stage earns the right to the next"; #245 "An unenriched idea is a bet placed before the odds are known"). **Write proper descriptive taglines for these nine** to match the deck's standard — this is the single most actionable item in the category.

**2. Structural inconsistency in how steps are rendered:**
- **#130 Transformation Chain** is the lightest chain (34 lines vs ~67 for #168): its 8 steps are a compressed numbered list under one `## Steps` header, without the per-step `## Step N` headers, per-step rationale prose, or Decision Output section its siblings (#168/#169/#170) carry. The step *composition* is strong (Cynefin + Org Culture + Stakeholder Mapping → Kotter → Scenario Planning + Mission Command + Theory of Change → …); consider bringing it to sibling depth and aligning the heading convention.
- **#117 Capacity Planning** uses a single "The Eight Steps" section rather than per-step `## Step N` headers — minor; align for consistency.
- **#214 Crawl / Walk / Run** uses named stage headers (Crawl/Walk/Run) instead of numbered steps — this is appropriate to the content and reads as a deliberate, correct exception, not a defect.

**3. Formulaic shape in the classic decision chains (#94–#100):** several open with First Principles and close with Margin of Safety. For a coherent decision-protocol family this is defensible (even desirable), but a quick pass to confirm each middle sequence is genuinely tailored — rather than a generic spine — would be worthwhile.

Individually, the chains are well-constructed and the cross-references are valid; the notes above are consistency/polish items, not logic errors.

- **#186 AI Agent Governance Design** — Excellent; 9 steps mapping to the Six Registers; clean pre-deployment verification. *Optional polish*.
- **#187 AI Use Case Autonomy Assessment** — Excellent; reversibility + attack-surface + accountability sequencing. *Optional polish*.
- **#117 Capacity Planning** — Strong; align step headers with siblings.
- **#214 Crawl / Walk / Run** — Strong; named-stage structure is appropriate. *Optional polish*.
- **#178 Design and Launch an Innovation Program** — Strong; composes the Innovation cluster coherently. *Optional polish*.
- **#213 From Idea to Hypothesis** — Excellent; includes a Hypothesis Card output + failure modes. *Optional polish*.
- **#245 Funnel Intake** — Strong; First Principles → JTBD → Strategic Fit Gate → brief. *Optional polish*.
- **#96 Hiring Decision** — Strong chain; needs a real tagline.
- **#168 Improve Delivery Flow** — Strong (VSM → Bottlenecks → WIP → Little's Law → … → PDCA); needs a real tagline.
- **#177 Innovation Capability Diagnostic** — Strong; honest-inventory framing with synthesis section. *Optional polish*.
- **#98 Investment Decision** — Strong chain; needs a real tagline.
- **#100 Life Decision** — Strong chain; needs a real tagline.
- **#95 Market Entry** — Strong chain; needs a real tagline.
- **#198 Mission Execution Protocol** — Excellent; composes the Leadership intent cluster (Leader's Intent → Confirmation/Back Brief → Execute → Tactical Pause → AAR). *Optional polish*.
- **#169 Org Design for Flow Diagnostic** — Strong (VSM → Conway → Cognitive Load → … → DORA); needs a real tagline.
- **#244 Organisational Degradation Scan** — Excellent; composes Drift to Failure/Dunbar/Parkinson/Peter/Goodhart+Cobra/Conway/Principal-Agent into a diagnosis. *Optional polish*.
- **#94 Pricing Decision** — Strong chain; needs a real tagline.
- **#97 Product Launch** — Strong chain; needs a real tagline.
- **#99 Should I Quit** — Strong chain; needs a real tagline.
- **#130 Transformation Chain** — Good composition; bring to sibling depth and align step-header convention.
- **#170 Work to Be Done** — Excellent; 10-step outcome→prioritized-work flow with Decision Output. *Optional polish*.

---

# Cross-deck summary — the highest-value items

All 263 cards reviewed. The corpus is editorially excellent: citations are accurate, worked examples are concrete, and the cross-linking design (especially in Leadership and Consulting) is genuinely a model. The large majority of per-card notes above are *optional polish*. If only a handful of things get actioned, these are the ones that matter, roughly in priority order:

1. **Deck-wide non-standard "-ize" spellings (~17 files).** Fix `arize/arizing`→arise/arising, `surprizing`→surprising, `disguizing`→disguising, `advertizing`→advertising, `exercized`→exercised, `supervizing`→supervising. Do **not** touch correct -ize words (summarize, organize, prioritize, popularize). A single find-and-replace pass closes this.

2. **Nine Pre-built Chains have placeholder taglines that just repeat the card name** (#94, #95, #96, #97, #98, #99, #100, #168, #169). Write real descriptive taglines to match the rest of the deck.

3. **Two near-duplicate concept-card pairs:**
   - **#71 Portfolio Map ≈ #113 Three Horizons** — both teach McKinsey's H1/H2/H3. Merge or differentiate sharply and cross-link.
   - **#166 Kernel of Good Strategy ≈ #254 Playing to Win** (flagged in the 06-13 pass) — confirm the boundary is stated in both bodies.

4. **Reused worked examples — diversify one side of each:**
   - Kodak digital-camera-1975 in **three** cards (#37 Creative Destruction, #108 Exploration vs Exploitation, #173 Dominant Logic) — keep in #173, diversify #37 and #108.
   - Airbnb professional-photography in **#84 Marketplace** and **#66 Customer Development**.
   - "Two restaurants" mental-model device in **#133 Flow Efficiency** and **#157 Feature Factory**.
   - Near-twins also noted: #43 Inertia ≈ #20 Equilibrium; #114 Deep Work ≈ #116 Maker's Schedule; #160 Reference Class Forecasting ≈ #206 Base Rate Neglect; #161 Hypothesis-Driven ≈ #162 MECE (margin-bridge example).
   - Over-used settings to vary for freshness: Amazon, Kodak, "build proprietary data platform vs cloud" (#210/#205/#235), logistics-company, and the "N initiatives competing for capacity that fits M" template (#131/#132/#137/#159).

5. **Terminology / consistency:**
   - **Conway:** #28 says "Reverse Conway Manoeuvre"; #155 says "Inverse Conway Maneuver." Standardise the term and spelling and cross-link.
   - **Cynefin #122:** "Clear" vs "Obvious" drift; also consider naming the 5th domain (Disorder).
   - **Formatting:** #261 Systems Thinking and #262 Incentive Design use numbered heuristics + bold-headed failure modes against the deck's bulleted norm — align.
   - **Tagline length:** a few sentence-style outliers (#106, #107, #108, #102, #109) vs the short-phrase house style.

6. **Light structural items in Pre-built Chains:** bring **#130 Transformation Chain** to sibling depth and align its step-header convention; align **#117 Capacity Planning** step headers; **#214 Crawl/Walk/Run**'s named-stage structure is a correct intentional exception.

7. **Sourcing precision (small, scattered):** #0 First Principles (Aristotle attribution without an Aristotle reference); #6 Map-Territory (1931 vs 1933); #211 Calibration (Brier score named but not explained); #4 Hanlon's Razor (no origin source). #190 Three-Question Ritual's "Origin Note" debunking a fabricated attribution is the model to emulate here.

8. **Structural note for the maintainer (navigation, not a defect):** manifest **category ≠ directory**. "Innovation & Entrepreneurship" is split across Startups/ (14), Business/ (8), and Innovation-Entrepreneurship/ (1); the Business/ directory holds 31 files spanning two categories. Future reviewers should iterate by manifest category, not by folder, to avoid missing cards.

Nothing in this review is a correctness blocker. The deck is in strong shape; these are the refinements that would take it from excellent to airtight.
