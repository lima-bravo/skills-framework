# Skill Review Tracker
<!-- Generated from skills-manifest.json. One row per skill. -->
<!-- Generated: 2026-06-07 | 262 skills | 16 categories -->

Working tracker for the full-rigor review pass. Procedure lives in `CLAUDE.md` → **Skill Review Pass**; per-card checklist is `_review-template.md`.

## How to use

Work one skill at a time. For each: copy `_review-template.md`, complete the checks, apply fixes in place, then update that skill's row here.

Edit the row as you go:

- Tick the box `[ ]` → `[x]` when the review is finished (verified or fixed).
- Set **st:** to one of `todo` · `wip` · `fixed` · `verified` · `flagged`.
  - `verified` = reviewed, no changes needed. `fixed` = reviewed, changes applied. `flagged` = needs a decision/discussion before changing.
- Replace the **n:** note with a one-line summary of what you found/changed (or a flag reason).

Find the next unstarted skill: search this file for `st: todo`. Find open issues: search `st: flagged`.

## Progress

- Total skills: **262**
- Reviewed (verified + fixed): **20**
- Flagged: **0**
- Remaining (todo): **242**

> ✅ **Resolved (found during #1, fixed in dedicated pass):** the manifest `refs` array had
> **252** skill entries whose `id` was a file-path string (broke ref-pill click-through in
> the deck and ref→skill edges in the graph; also 13 stale names / 81 stale colors). All
> normalized to numeric id + canonical name/color from `skills.*`, and **146** duplicate
> ref→skill links (numeric/path shadow pairs) removed. Build + `check:counts` pass; refs
> still 250. Open minor note: *The Art of Thinking Clearly* still associates with #1 in the
> manifest but isn't cited on the Inversion card — revisit if curating ref lists.

> 📋 **Reference-gap sweep (2026-06-07):** scanned every card's `## References` vs the
> manifest. Applied the safe bucket — **62** skill links added to refs the card already
> cited and the manifest already indexed (additions-only, refs count unchanged, guard
> passes). Remaining, captured in **`_reference-gaps.md`** for the verified per-card pass:
> **A** (120 — manifest links a source the card omits: add to card *or* drop the link),
> **B2** (123 — card cites a source absent from the manifest: needs a new, verified ref
> entry), and **7 chain cards (#94–100)** that have manifest refs but no `## References`
> section. Also noted: a few duplicate manifest ref entries (e.g. "Deep Work" vs "Deep
> Work: Rules for…", "Good Strategy Bad Strategy" vs "Good Strategy / Bad Strategy").

> 🧹 **Duplicate manifest ref merge (2026-06-07):** merged the two duplicate-book pairs into
> one entry each — *Deep Work: Rules for Focused Success in a Distracted World* (Cal Newport,
> 2016; skills 88·114·116) and *Good Strategy Bad Strategy* (Richard P. Rumelt, 2011;
> skills 43·71·166·254). Refs **250 → 248**; updated the source count in README.md and
> CLAUDE.md; build + guard pass. No other duplicate ref entries found.

> Update these four numbers as you go, or recompute by counting `st:` values.

---

## General Thinking (28)

- [x] `#0` **First Principles** · `General-Thinking/first-principles.md` · **st:** fixed · **n:** Example (SpaceX $65M, ~2% raw materials) & Aristotle quote verified; Descartes/Munger refs correct. Added missing Feynman Lectures ref (was in manifest, not card); added reciprocal backlink in inversion.md. build + check:counts pass.
- [x] `#1` **Inversion** · `General-Thinking/inversion.md` · **st:** fixed · **n:** Jacobi & Munger attributions verified; card refs (Poor Charlie's, Great Mental Models Vol 1) correct. Added reciprocal Pre-mortem connection. ⚠️ SYSTEMIC: manifest `refs` has 252 malformed skill entries (id = file-path string, not numeric) — flagged for a dedicated batch fix, not per-card. Also Art of Thinking Clearly assoc with #1 not reflected on card (revisit in batch).
- [x] `#2` **Second-Order Effects** · `General-Thinking/second-order-effects.md` · **st:** fixed · **n:** Howard Marks "and then what?"/second-level thinking verified (The Most Important Thing, 2011); induced-demand worked example sound. Added missing Thinking in Systems (Meadows 2008) ref (in manifest, not card). Connections resolve; emergence backlink deferred to #19. build + check:counts pass.
- [x] `#3` **Occam's Razor** · `General-Thinking/occams-razor.md` · **st:** fixed · **n:** Added missing Sagan (1996) ref (manifest had it, card didn't); renamed clunky "Einstein's misquote problem" failure mode to "Over-application"; fixed blank line before ## References and duplicate ---; added backlinks in first-principles, confirmation-bias, probabilistic-thinking. build + check:counts pass.
- [x] `#4` **Hanlon's Razor** · `General-Thinking/hanlons-razor.md` · **st:** fixed · **n:** Added missing Dobelli (2011) ref (manifest had it, card didn't); added FAE as new connection (the cognitive mechanism Hanlon corrects); fixed blank line + duplicate ---; backlinks in incentives, confirmation-bias, circle-of-competence, FAE. New edge raised connections 1041→1042; updated CLAUDE.md + _ai-index.md; build + check:counts pass.
- [x] `#5` **Circle of Competence** · `General-Thinking/circle-of-competence.md` · **st:** fixed · **n:** Fixed corrupted Connections section (Probabilistic Thinking had no rationale; Calibration had merged text belonging to Probabilistic Thinking); fixed duplicate ---; all backlinks already present from prior reviews. build + check:counts pass.
- [x] `#6` **Map-Territory** · `General-Thinking/map-territory.md` · **st:** fixed · **n:** Added missing Taleb Black Swan ref (manifest had it, card didn't); added Goodhart's Law + Confirmation Bias connections (Goodhart named in failure modes; conf-bias is model lock-in mechanism); backlink added in goodharts-law + probabilistic-thinking; new edge 1042→1043; CLAUDE.md + _ai-index.md updated; build + check:counts pass.
- [x] `#7` **Probabilistic Thinking** · `General-Thinking/probabilistic-thinking.md` · **st:** fixed · **n:** Added two missing refs: Bernstein Against the Gods (1996) and Kahneman Thinking Fast and Slow (2011) — both in manifest, neither on card. Removed duplicate ---. All 8 connections and backlinks already present. build + check:counts pass.
- [x] `#8` **Thought Experiment** · `General-Thinking/thought-experiment.md` · **st:** fixed · **n:** Both manifest refs on card ✓; fixed blank line before ## References + duplicate ---; added backlinks in first-principles, inversion, second-order-effects (all reverse edges, no new connection count). build + check:counts pass.
- [x] `#9` **Socratic Thinking** · `General-Thinking/socratic-thinking.md` · **st:** fixed · **n:** Fixed typo "surprizing"→"surprising"; added missing Ball & Brewer (1996) ref (manifest had it, card didn't); fixed blank line + duplicate ---; added backlinks in first-principles, confirmation-bias (ladder-of-inference already had one). build + check:counts pass.
- [x] `#10` **Pre-mortem** · `General-Thinking/pre-mortem.md` · **st:** fixed · **n:** Both manifest refs on card ✓; Klein (1998) attribution verified; fixed blank line + duplicate ---; added backlinks in assumption-mapping and margin-of-safety (inversion, steelmanning, cobra-effect, red-teaming already had them). build + check:counts pass.
- [x] `#11` **Post-mortem** · `General-Thinking/post-mortem.md` · **st:** fixed · **n:** Added missing Horowitz Hard Thing (2014) ref (manifest had it, card didn't); added After-Action Review as connection (AAR card explicitly differentiates the two); fixed blank line + duplicate ---; backlinks added in pre-mortem, feedback-loops, five-hour-rule (all reverse edges). build + check:counts pass.
- [x] `#12` **Asymmetry / Convexity** · `General-Thinking/asymmetry-convexity.md` · **st:** fixed · **n:** Fixed typo "exercizing"→"exercising"; added Black Swan as connection (already backlinked, new edge 1043→1044); fixed blank line + duplicate ---; backlinks in margin-of-safety and probabilistic-thinking. CLAUDE.md + _ai-index.md updated. build + check:counts pass.
- [x] `#13` **De Bono's Six Thinking Hats** · `General-Thinking/de-bonos-six-thinking-hats.md` · **st:** fixed · **n:** Both refs verified (de Bono 1985 + 1970) ✓; six hat colors/roles correct ✓; fixed blank line + duplicate ---; backlinks added in confirmation-bias, pre-mortem, framing (all reverse edges). build + check:counts pass.
- [x] `#14` **Ladder of Inference** · `General-Thinking/ladder-of-inference.md` · **st:** fixed · **n:** Fixed typo "supervizing"→"supervising"; fixed blank line before ## References + duplicate ---; added backlinks in map-territory + confirmation-bias (all reverse edges). build + check:counts pass.
- [x] `#15` **Regret Minimization Framework** · `General-Thinking/regret-minimization-framework.md` · **st:** fixed · **n:** Added missing Stone Everything Store (2013) ref (manifest had it, card didn't); fixed blank line before ## References + duplicate ---; backlinks in inversion + asymmetry-convexity (new edge 1044→1045). CLAUDE.md + _ai-index.md updated. build + check:counts pass.
- [x] `#16` **Two-Way Doors** · `General-Thinking/two-way-doors.md` · **st:** fixed · **n:** Both refs verified ✓; fixed blank line before ## References + duplicate ---; backlink added in margin-of-safety (reverse edge only). build + check:counts pass.
- [x] `#106` **Analogical Reasoning** · `General-Thinking/analogical-reasoning.md` · **st:** fixed · **n:** Fixed wrong editor/year on Analogical Mind ref (Holyoak & Morrison 2005 → Gentner, Holyoak & Kokinov 2001, confirmed by web search); updated manifest title/authorYear to match; fixed blank line before ## References; backlinks added in first-principles, thought-experiment, learning-transfer. build + check:counts pass.
- [x] `#107` **Divergent and Convergent Thinking** · `General-Thinking/divergent-and-convergent-thinking.md` · **st:** fixed · **n:** Added missing Boden Creative Mind (2004) ref (manifest had it, card didn't); fixed blank line before ## References; backlinks added in de-bonos-six-thinking-hats, confirmation-bias, inversion (all reverse edges). build + check:counts pass.
- [x] `#122` **Cynefin Framework** · `General-Thinking/cynefin-framework.md` · **st:** fixed · **n:** Added 5 missing --- section separators; standardized References format (removed non-standard Originator line, full titles, added descriptions); added HBR article "A Leader's Framework for Decision Making" to manifest (B2 gap, refs 248→249); backlinks in exploration-vs-exploitation, experiment-design, first-principles, pre-mortem. build + check:counts pass.
- [ ] `#128` **Theory of Change** · `General-Thinking/theory-of-change.md` · **st:** todo · **n:** —
- [ ] `#171` **Causal Analysis** · `General-Thinking/causal-analysis.md` · **st:** todo · **n:** —
- [ ] `#188` **Paradigm Shift** · `General-Thinking/paradigm-shift.md` · **st:** todo · **n:** —
- [ ] `#211` **Calibration** · `General-Thinking/calibration.md` · **st:** todo · **n:** —
- [ ] `#223` **Steelmanning** · `General-Thinking/steelmanning.md` · **st:** todo · **n:** —
- [ ] `#226` **Grice's Maxims** · `General-Thinking/grices-maxims.md` · **st:** todo · **n:** —
- [ ] `#234` **Overton Window** · `General-Thinking/overton-window.md` · **st:** todo · **n:** —
- [ ] `#240` **Black Swan** · `General-Thinking/black-swan.md` · **st:** todo · **n:** —

## Systems (21)

- [ ] `#17` **Feedback Loops** · `Systems/feedback-loops.md` · **st:** todo · **n:** —
- [ ] `#18` **Bottlenecks** · `Systems/bottlenecks.md` · **st:** todo · **n:** —
- [ ] `#19` **Emergence** · `Systems/emergence.md` · **st:** todo · **n:** —
- [ ] `#20` **Equilibrium** · `Systems/equilibrium.md` · **st:** todo · **n:** —
- [ ] `#21` **Scale** · `Systems/scale.md` · **st:** todo · **n:** —
- [ ] `#22` **Critical Mass** · `Systems/critical-mass.md` · **st:** todo · **n:** —
- [ ] `#23` **Diminishing Returns** · `Systems/diminishing-returns.md` · **st:** todo · **n:** —
- [ ] `#24` **Margin of Safety** · `Systems/margin-of-safety.md` · **st:** todo · **n:** —
- [ ] `#25` **Churn** · `Systems/churn.md` · **st:** todo · **n:** —
- [ ] `#26` **Algorithms** · `Systems/algorithms.md` · **st:** todo · **n:** —
- [ ] `#27` **Irreducibility** · `Systems/irreducibility.md` · **st:** todo · **n:** —
- [ ] `#28` **Conway's Law** · `Systems/conways-law.md` · **st:** todo · **n:** —
- [ ] `#29` **Red Queen Dilemma** · `Systems/red-queen-dilemma.md` · **st:** todo · **n:** —
- [ ] `#102` **S-Curves** · `Systems/s-curves.md` · **st:** todo · **n:** —
- [ ] `#108` **Exploration vs. Exploitation** · `Systems/exploration-vs-exploitation.md` · **st:** todo · **n:** —
- [ ] `#109` **Adjacent Possible** · `Systems/adjacent-possible.md` · **st:** todo · **n:** —
- [ ] `#208` **Drift to Failure** · `Systems/drift-to-failure.md` · **st:** todo · **n:** —
- [ ] `#235` **Path Dependence** · `Systems/path-dependence.md` · **st:** todo · **n:** —
- [ ] `#243` **Dunbar's Number** · `Systems/dunbars-number.md` · **st:** todo · **n:** —
- [ ] `#260` **Fixes That Fail** · `Systems/fixes-that-fail.md` · **st:** todo · **n:** —
- [ ] `#261` **Systems Thinking** · `Systems/systems-thinking.md` · **st:** todo · **n:** —

## Economics (22)

- [ ] `#30` **Trade-offs** · `Economics/trade-offs.md` · **st:** todo · **n:** —
- [ ] `#31` **Scarcity** · `Economics/scarcity.md` · **st:** todo · **n:** —
- [ ] `#32` **Specialization** · `Economics/specialization.md` · **st:** todo · **n:** —
- [ ] `#33` **Optimization** · `Economics/optimization.md` · **st:** todo · **n:** —
- [ ] `#34` **Monopoly vs. Competition** · `Economics/monopoly-vs-competition.md` · **st:** todo · **n:** —
- [ ] `#35` **Efficiency** · `Economics/efficiency.md` · **st:** todo · **n:** —
- [ ] `#36` **Debt** · `Economics/debt.md` · **st:** todo · **n:** —
- [ ] `#37` **Creative Destruction** · `Economics/creative-destruction.md` · **st:** todo · **n:** —
- [ ] `#38` **Bubbles** · `Economics/bubbles.md` · **st:** todo · **n:** —
- [ ] `#39` **Interdependence** · `Economics/interdependence.md` · **st:** todo · **n:** —
- [ ] `#40` **Gresham's Law** · `Economics/greshams-law.md` · **st:** todo · **n:** —
- [ ] `#120` **Goodhart's Law** · `Economics/goodharts-law.md` · **st:** todo · **n:** —
- [ ] `#121` **Principal–Agent Problem** · `Economics/principal-agent-problem.md` · **st:** todo · **n:** —
- [ ] `#216` **Unit Economics** · `Economics/unit-economics.md` · **st:** todo · **n:** —
- [ ] `#217` **Value Creation and Capture** · `Economics/value-creation-capture.md` · **st:** todo · **n:** —
- [ ] `#229` **Nash Equilibrium** · `Economics/nash-equilibrium.md` · **st:** todo · **n:** —
- [ ] `#230` **Prisoner's Dilemma** · `Economics/prisoners-dilemma.md` · **st:** todo · **n:** —
- [ ] `#231` **Tragedy of the Commons** · `Economics/tragedy-of-the-commons.md` · **st:** todo · **n:** —
- [ ] `#232` **Free Rider Problem** · `Economics/free-rider-problem.md` · **st:** todo · **n:** —
- [ ] `#236` **Schelling Points** · `Economics/schelling-points.md` · **st:** todo · **n:** —
- [ ] `#239` **Long Tail** · `Economics/long-tail.md` · **st:** todo · **n:** —
- [ ] `#262` **Incentive Design** · `Economics/incentive-design.md` · **st:** todo · **n:** —

## Physics & Chemistry (10)

- [ ] `#41` **Leverage** · `Physics-and-Chemistry/leverage.md` · **st:** todo · **n:** —
- [ ] `#42` **Velocity** · `Physics-and-Chemistry/velocity.md` · **st:** todo · **n:** —
- [ ] `#43` **Inertia** · `Physics-and-Chemistry/inertia.md` · **st:** todo · **n:** —
- [ ] `#44` **Friction** · `Physics-and-Chemistry/friction.md` · **st:** todo · **n:** —
- [ ] `#45` **Activation Energy** · `Physics-and-Chemistry/activation-energy.md` · **st:** todo · **n:** —
- [ ] `#46` **Thermodynamics** · `Physics-and-Chemistry/thermodynamics.md` · **st:** todo · **n:** —
- [ ] `#47` **Catalysts** · `Physics-and-Chemistry/catalysts.md` · **st:** todo · **n:** —
- [ ] `#48` **Alloying** · `Physics-and-Chemistry/alloying.md` · **st:** todo · **n:** —
- [ ] `#49` **Reciprocity** · `Physics-and-Chemistry/reciprocity.md` · **st:** todo · **n:** —
- [ ] `#50` **Relativity** · `Physics-and-Chemistry/relativity.md` · **st:** todo · **n:** —

## Psychology (26)

- [ ] `#51` **Incentives** · `Psychology/incentives.md` · **st:** todo · **n:** —
- [ ] `#52` **Loss Aversion** · `Psychology/loss-aversion.md` · **st:** todo · **n:** —
- [ ] `#53` **Sunk Cost** · `Psychology/sunk-cost.md` · **st:** todo · **n:** —
- [ ] `#54` **Anchoring** · `Psychology/anchoring.md` · **st:** todo · **n:** —
- [ ] `#55` **Confirmation Bias** · `Psychology/confirmation-bias.md` · **st:** todo · **n:** —
- [ ] `#56` **Availability Bias** · `Psychology/availability-bias.md` · **st:** todo · **n:** —
- [ ] `#57` **Dunning-Kruger** · `Psychology/dunning-kruger.md` · **st:** todo · **n:** —
- [ ] `#58` **Maslow's Hierarchy of Needs** · `Psychology/maslows-hierarchy-of-needs.md` · **st:** todo · **n:** —
- [ ] `#59` **McClelland's Acquired Needs Theory** · `Psychology/mcclellands-acquired-needs-theory.md` · **st:** todo · **n:** —
- [ ] `#60` **Max-Neef's Fundamental Human Needs** · `Psychology/max-neefs-fundamental-human-needs.md` · **st:** todo · **n:** —
- [ ] `#61` **ERG Theory** · `Psychology/erg-theory.md` · **st:** todo · **n:** —
- [ ] `#101` **Trust** · `Psychology/trust.md` · **st:** todo · **n:** —
- [ ] `#104` **Psychological Safety** · `Psychology/psychological-safety.md` · **st:** todo · **n:** —
- [ ] `#115` **Planning Fallacy** · `Psychology/planning-fallacy.md` · **st:** todo · **n:** —
- [ ] `#167` **Immunity to Change** · `Psychology/immunity-to-change.md` · **st:** todo · **n:** —
- [ ] `#192` **Self-Determination Theory** · `Psychology/self-determination-theory.md` · **st:** todo · **n:** —
- [ ] `#199` **Survivorship Bias** · `Psychology/survivorship-bias.md` · **st:** todo · **n:** —
- [ ] `#200` **Fundamental Attribution Error** · `Psychology/fundamental-attribution-error.md` · **st:** todo · **n:** —
- [ ] `#201` **Hindsight Bias** · `Psychology/hindsight-bias.md` · **st:** todo · **n:** —
- [ ] `#202` **Social Proof** · `Psychology/social-proof.md` · **st:** todo · **n:** —
- [ ] `#203` **Narrative Instinct** · `Psychology/narrative-instinct.md` · **st:** todo · **n:** —
- [ ] `#204` **Falsification** · `Psychology/falsification.md` · **st:** todo · **n:** —
- [ ] `#205` **Commitment & Consistency Bias** · `Psychology/commitment-consistency-bias.md` · **st:** todo · **n:** —
- [ ] `#206` **Base Rate Neglect** · `Psychology/base-rate-neglect.md` · **st:** todo · **n:** —
- [ ] `#207` **SRK Framework** · `Psychology/srk-framework.md` · **st:** todo · **n:** —
- [ ] `#212` **Observer Bias** · `Psychology/observer-bias.md` · **st:** todo · **n:** —

## Business (23)

- [ ] `#68` **Business Model Canvas** · `Business/business-model-canvas.md` · **st:** todo · **n:** —
- [ ] `#69` **Value Prop Canvas** · `Business/value-prop-canvas.md` · **st:** todo · **n:** —
- [ ] `#71` **Portfolio Map** · `Business/portfolio-map.md` · **st:** todo · **n:** —
- [ ] `#72` **Experiment Design** · `Business/experiment-design.md` · **st:** todo · **n:** —
- [ ] `#73` **Assumption Mapping** · `Business/assumption-mapping.md` · **st:** todo · **n:** —
- [ ] `#74` **Stakeholder Mapping (Salience Model)** · `Business/stakeholder-mapping-salience-model.md` · **st:** todo · **n:** —
- [ ] `#116` **Maker's Schedule vs. Manager's Schedule** · `Business/makers-schedule.md` · **st:** todo · **n:** —
- [ ] `#123` **Scenario Planning** · `Business/scenario-planning.md` · **st:** todo · **n:** —
- [ ] `#127` **RACI Framework** · `Business/raci-framework.md` · **st:** todo · **n:** —
- [ ] `#166` **Kernel of Good Strategy** · `Business/kernel-of-strategy.md` · **st:** todo · **n:** —
- [ ] `#210` **Wardley Mapping** · `Business/wardley-mapping.md` · **st:** todo · **n:** —
- [ ] `#218` **Business Case Construction** · `Business/business-case-construction.md` · **st:** todo · **n:** —
- [ ] `#219` **Pricing Logic** · `Business/pricing-logic.md` · **st:** todo · **n:** —
- [ ] `#220` **Power Mapping** · `Business/power-mapping.md` · **st:** todo · **n:** —
- [ ] `#224` **Red Teaming** · `Business/red-teaming.md` · **st:** todo · **n:** —
- [ ] `#225` **A/B Testing** · `Business/ab-testing.md` · **st:** todo · **n:** —
- [ ] `#241` **Parkinson's Law** · `Business/parkinsons-law.md` · **st:** todo · **n:** —
- [ ] `#247` **Growth Barriers** · `Business/growth-barriers.md` · **st:** todo · **n:** —
- [ ] `#248` **Profit Pool Analysis** · `Business/profit-pool-analysis.md` · **st:** todo · **n:** —
- [ ] `#249` **Customer Segmentation** · `Business/customer-segmentation.md` · **st:** todo · **n:** —
- [ ] `#250` **KPI Architecture** · `Business/kpi-architecture.md` · **st:** todo · **n:** —
- [ ] `#251` **Value Realization** · `Business/value-realization.md` · **st:** todo · **n:** —
- [ ] `#254` **Playing to Win** · `Business/playing-to-win.md` · **st:** todo · **n:** —

## Innovation & Entrepreneurship (23)

- [ ] `#62` **Product-Market Fit** · `Startups/product-market-fit.md` · **st:** todo · **n:** —
- [ ] `#63` **Build-Measure-Learn** · `Startups/build-measure-learn.md` · **st:** todo · **n:** —
- [ ] `#64` **MVP** · `Startups/mvp.md` · **st:** todo · **n:** —
- [ ] `#65` **Pivot or Persevere** · `Startups/pivot-or-persevere.md` · **st:** todo · **n:** —
- [ ] `#66` **Customer Development** · `Startups/customer-development.md` · **st:** todo · **n:** —
- [ ] `#67` **Innovation Accounting** · `Startups/innovation-accounting.md` · **st:** todo · **n:** —
- [ ] `#70` **Innovation Funnel** · `Business/innovation-funnel.md` · **st:** todo · **n:** —
- [ ] `#103` **Jobs to Be Done** · `Startups/jobs-to-be-done.md` · **st:** todo · **n:** —
- [ ] `#110` **Design Thinking** · `Startups/design-thinking.md` · **st:** todo · **n:** —
- [ ] `#111` **Crossing the Chasm** · `Startups/crossing-the-chasm.md` · **st:** todo · **n:** —
- [ ] `#112` **Disruptive Innovation** · `Business/disruptive-innovation.md` · **st:** todo · **n:** —
- [ ] `#113` **Three Horizons** · `Business/three-horizons.md` · **st:** todo · **n:** —
- [ ] `#172` **Ambidextrous Organization** · `Business/ambidextrous-organization.md` · **st:** todo · **n:** —
- [ ] `#173` **Dominant Logic** · `Business/dominant-logic.md` · **st:** todo · **n:** —
- [ ] `#174` **Open Innovation** · `Business/open-innovation.md` · **st:** todo · **n:** —
- [ ] `#175` **Effectuation** · `Startups/effectuation.md` · **st:** todo · **n:** —
- [ ] `#176` **Organizational Slack** · `Business/organizational-slack.md` · **st:** todo · **n:** —
- [ ] `#179` **Innovation Health Indicators** · `Business/innovation-health-indicators.md` · **st:** todo · **n:** —
- [ ] `#180` **Opportunity Solution Trees** · `Startups/opportunity-solution-trees.md` · **st:** todo · **n:** —
- [ ] `#181` **Pretotyping** · `Startups/pretotyping.md` · **st:** todo · **n:** —
- [ ] `#182` **Continuous Discovery** · `Startups/continuous-discovery.md` · **st:** todo · **n:** —
- [ ] `#189` **Experiment Ladder** · `Startups/experiment-ladder.md` · **st:** todo · **n:** —
- [ ] `#237` **Cobra Effect** · `Innovation-Entrepreneurship/cobra-effect.md` · **st:** todo · **n:** —

## Mathematics (11)

- [ ] `#75` **Compounding** · `Mathematics/compounding.md` · **st:** todo · **n:** —
- [ ] `#76` **Local Maxima** · `Mathematics/local-maxima.md` · **st:** todo · **n:** —
- [ ] `#77` **Regression to the Mean** · `Mathematics/regression-to-the-mean.md` · **st:** todo · **n:** —
- [ ] `#78` **Randomness** · `Mathematics/randomness.md` · **st:** todo · **n:** —
- [ ] `#79` **Sampling** · `Mathematics/sampling.md` · **st:** todo · **n:** —
- [ ] `#80` **Surface Area** · `Mathematics/surface-area.md` · **st:** todo · **n:** —
- [ ] `#81` **Multiply by Zero** · `Mathematics/multiply-by-zero.md` · **st:** todo · **n:** —
- [ ] `#227` **Expected Value** · `Mathematics/expected-value.md` · **st:** todo · **n:** —
- [ ] `#228` **Bayesian Updating** · `Mathematics/bayesian-updating.md` · **st:** todo · **n:** —
- [ ] `#233` **Fermi Estimation** · `Mathematics/fermi-estimation.md` · **st:** todo · **n:** —
- [ ] `#238` **Power Law** · `Mathematics/power-law.md` · **st:** todo · **n:** —

## Network Effects (4)

- [ ] `#82` **Network Effects** · `Network-Effects/network-effects.md` · **st:** todo · **n:** —
- [ ] `#83` **Viral Growth** · `Network-Effects/viral-growth.md` · **st:** todo · **n:** —
- [ ] `#84` **Marketplace** · `Network-Effects/marketplace.md` · **st:** todo · **n:** —
- [ ] `#85` **Defensibility** · `Network-Effects/defensibility.md` · **st:** todo · **n:** —

## Learning (6)

- [ ] `#86` **Model Chaining** · `Learning/model-chaining.md` · **st:** todo · **n:** —
- [ ] `#87` **T-Shaped** · `Learning/t-shaped.md` · **st:** todo · **n:** —
- [ ] `#88` **Five-Hour Rule** · `Learning/five-hour-rule.md` · **st:** todo · **n:** —
- [ ] `#89` **Learning Transfer** · `Learning/learning-transfer.md` · **st:** todo · **n:** —
- [ ] `#105` **Pre-built Chains** · `Learning/pre-built-chains.md` · **st:** todo · **n:** —
- [ ] `#114` **Deep Work / Cognitive Capacity** · `Learning/deep-work.md` · **st:** todo · **n:** —

## Art (4)

- [ ] `#90` **Audience** · `Art/audience.md` · **st:** todo · **n:** —
- [ ] `#91` **Framing** · `Art/framing.md` · **st:** todo · **n:** —
- [ ] `#92` **Contrast** · `Art/contrast.md` · **st:** todo · **n:** —
- [ ] `#93` **Rhythm** · `Art/rhythm.md` · **st:** todo · **n:** —

## Delivery & Flow (33)

- [ ] `#131` **Little's Law** · `Delivery-and-Flow/littles-law.md` · **st:** todo · **n:** —
- [ ] `#132` **WIP Limits** · `Delivery-and-Flow/wip-limits.md` · **st:** todo · **n:** —
- [ ] `#133` **Flow Efficiency vs Resource Efficiency** · `Delivery-and-Flow/flow-efficiency.md` · **st:** todo · **n:** —
- [ ] `#134` **Lead Time vs Cycle Time** · `Delivery-and-Flow/lead-time-cycle-time.md` · **st:** todo · **n:** —
- [ ] `#135` **Queueing & Wait Time** · `Delivery-and-Flow/queueing.md` · **st:** todo · **n:** —
- [ ] `#136` **Batch Size Reduction** · `Delivery-and-Flow/batch-size-reduction.md` · **st:** todo · **n:** —
- [ ] `#137` **Cost of Delay** · `Delivery-and-Flow/cost-of-delay.md` · **st:** todo · **n:** —
- [ ] `#138` **Kanban Method** · `Delivery-and-Flow/kanban-method.md` · **st:** todo · **n:** —
- [ ] `#139` **Value Stream Mapping** · `Delivery-and-Flow/value-stream-mapping.md` · **st:** todo · **n:** —
- [ ] `#140` **Statistical Variability** · `Delivery-and-Flow/statistical-variability.md` · **st:** todo · **n:** —
- [ ] `#141` **Probabilistic Forecasting** · `Delivery-and-Flow/probabilistic-forecasting.md` · **st:** todo · **n:** —
- [ ] `#142` **DORA Metrics** · `Delivery-and-Flow/dora-metrics.md` · **st:** todo · **n:** —
- [ ] `#143` **Flow Metrics** · `Delivery-and-Flow/flow-metrics.md` · **st:** todo · **n:** —
- [ ] `#144` **Outcome vs Output** · `Delivery-and-Flow/outcome-vs-output.md` · **st:** todo · **n:** —
- [ ] `#145` **A3 Problem Solving** · `Delivery-and-Flow/a3-problem-solving.md` · **st:** todo · **n:** —
- [ ] `#146` **PDCA** · `Delivery-and-Flow/pdca.md` · **st:** todo · **n:** —
- [ ] `#147` **Gemba** · `Delivery-and-Flow/gemba.md` · **st:** todo · **n:** —
- [ ] `#148` **Attention Budget** · `Delivery-and-Flow/attention-budget.md` · **st:** todo · **n:** —
- [ ] `#149` **Context-Switching Cost** · `Delivery-and-Flow/context-switching.md` · **st:** todo · **n:** —
- [ ] `#150` **Cognitive Load (Team)** · `Delivery-and-Flow/cognitive-load-team.md` · **st:** todo · **n:** —
- [ ] `#151` **Strategic Prioritization (“One Thing”)** · `Delivery-and-Flow/one-thing.md` · **st:** todo · **n:** —
- [ ] `#152` **OKRs** · `Delivery-and-Flow/okrs.md` · **st:** todo · **n:** —
- [ ] `#153` **Kill Criteria** · `Delivery-and-Flow/kill-criteria.md` · **st:** todo · **n:** —
- [ ] `#154` **Team Topologies** · `Delivery-and-Flow/team-topologies.md` · **st:** todo · **n:** —
- [ ] `#155` **Inverse Conway Maneuver** · `Delivery-and-Flow/inverse-conway.md` · **st:** todo · **n:** —
- [ ] `#156` **Dependency Management** · `Delivery-and-Flow/dependency-management.md` · **st:** todo · **n:** —
- [ ] `#157` **Feature Factory vs Product Orientation** · `Delivery-and-Flow/feature-factory.md` · **st:** todo · **n:** —
- [ ] `#158` **Lean Portfolio Management** · `Delivery-and-Flow/lean-portfolio.md` · **st:** todo · **n:** —
- [ ] `#159` **WSJF** · `Delivery-and-Flow/wsjf.md` · **st:** todo · **n:** —
- [ ] `#160` **Reference Class Forecasting** · `Delivery-and-Flow/reference-class-forecasting.md` · **st:** todo · **n:** —
- [ ] `#209` **Empirical Process Control** · `Delivery-and-Flow/empirical-process-control.md` · **st:** todo · **n:** —
- [ ] `#255` **Technical Debt** · `Delivery-and-Flow/technical-debt.md` · **st:** todo · **n:** —
- [ ] `#256` **Reliability vs. Feature Velocity** · `Delivery-and-Flow/reliability-vs-velocity.md` · **st:** todo · **n:** —

## Consulting Craft (10)

- [ ] `#161` **Hypothesis-Driven Consulting** · `Consulting-Craft/hypothesis-driven.md` · **st:** todo · **n:** —
- [ ] `#162` **MECE** · `Consulting-Craft/mece.md` · **st:** todo · **n:** —
- [ ] `#163` **Pyramid Principle** · `Consulting-Craft/pyramid-principle.md` · **st:** todo · **n:** —
- [ ] `#164` **Engagement Lifecycle** · `Consulting-Craft/engagement-lifecycle.md` · **st:** todo · **n:** —
- [ ] `#165` **Contracting & Scope** · `Consulting-Craft/contracting-scope.md` · **st:** todo · **n:** —
- [ ] `#246` **Situation Assessment** · `Consulting-Craft/situation-assessment.md` · **st:** todo · **n:** —
- [ ] `#252` **Stakeholder Pre-Wiring** · `Consulting-Craft/stakeholder-pre-wiring.md` · **st:** todo · **n:** —
- [ ] `#253` **Structured Problem Solving** · `Consulting-Craft/structured-problem-solving.md` · **st:** todo · **n:** —
- [ ] `#258` **Coaching Stance** · `Consulting-Craft/coaching-stance.md` · **st:** todo · **n:** —
- [ ] `#259` **Facilitation** · `Consulting-Craft/facilitation.md` · **st:** todo · **n:** —

## Pre-built Chains (21)

- [ ] `#94` **Pricing Decision** · `Pre-built-Chains/pricing-decision.md` · **st:** todo · **n:** —
- [ ] `#95` **Market Entry** · `Pre-built-Chains/market-entry.md` · **st:** todo · **n:** —
- [ ] `#96` **Hiring Decision** · `Pre-built-Chains/hiring-decision.md` · **st:** todo · **n:** —
- [ ] `#97` **Product Launch** · `Pre-built-Chains/product-launch.md` · **st:** todo · **n:** —
- [ ] `#98` **Investment Decision** · `Pre-built-Chains/investment-decision.md` · **st:** todo · **n:** —
- [ ] `#99` **Should I Quit** · `Pre-built-Chains/should-i-quit.md` · **st:** todo · **n:** —
- [ ] `#100` **Life Decision** · `Pre-built-Chains/life-decision.md` · **st:** todo · **n:** —
- [ ] `#117` **Capacity Planning** · `Pre-built-Chains/capacity-planning.md` · **st:** todo · **n:** —
- [ ] `#130` **Transformation Chain** · `Pre-built-Chains/transformation.md` · **st:** todo · **n:** —
- [ ] `#168` **Improve Delivery Flow** · `Pre-built-Chains/improve-delivery-flow.md` · **st:** todo · **n:** —
- [ ] `#169` **Org Design for Flow Diagnostic** · `Pre-built-Chains/org-design-for-flow.md` · **st:** todo · **n:** —
- [ ] `#170` **Work to Be Done** · `Pre-built-Chains/work-to-be-done.md` · **st:** todo · **n:** —
- [ ] `#177` **Innovation Capability Diagnostic** · `Pre-built-Chains/innovation-capability-diagnostic.md` · **st:** todo · **n:** —
- [ ] `#178` **Design and Launch an Innovation Program** · `Pre-built-Chains/design-launch-innovation-program.md` · **st:** todo · **n:** —
- [ ] `#186` **AI Agent Governance Design** · `Pre-built-Chains/ai-agent-governance-design.md` · **st:** todo · **n:** —
- [ ] `#187` **AI Use Case Autonomy Assessment** · `Pre-built-Chains/ai-use-case-autonomy-assessment.md` · **st:** todo · **n:** —
- [ ] `#198` **Mission Execution Protocol** · `Pre-built-Chains/mission-execution-protocol.md` · **st:** todo · **n:** —
- [ ] `#213` **From Idea to Hypothesis** · `Pre-built-Chains/from-idea-to-hypothesis.md` · **st:** todo · **n:** —
- [ ] `#214` **Crawl / Walk / Run** · `Pre-built-Chains/crawl-walk-run.md` · **st:** todo · **n:** —
- [ ] `#244` **Organisational Degradation Scan** · `Pre-built-Chains/organisational-degradation-scan.md` · **st:** todo · **n:** —
- [ ] `#245` **Funnel Intake** · `Pre-built-Chains/funnel-intake.md` · **st:** todo · **n:** —

## Leadership (17)

- [ ] `#118` **Mission Command** · `Leadership/mission-command.md` · **st:** todo · **n:** —
- [ ] `#119` **OODA Loop** · `Leadership/ooda-loop.md` · **st:** todo · **n:** —
- [ ] `#124` **Organizational Culture** · `Leadership/organizational-culture.md` · **st:** todo · **n:** —
- [ ] `#125` **Change Management** · `Leadership/change-management.md` · **st:** todo · **n:** —
- [ ] `#126` **Risk Management** · `Leadership/risk-management.md` · **st:** todo · **n:** —
- [ ] `#129` **Board Governance** · `Leadership/board-governance.md` · **st:** todo · **n:** —
- [ ] `#190` **Three-Question Ritual** · `Leadership/three-question-ritual.md` · **st:** todo · **n:** —
- [ ] `#191` **Async-First Default** · `Leadership/async-first-default.md` · **st:** todo · **n:** —
- [ ] `#193` **Purpose Clarity** · `Leadership/purpose-clarity.md` · **st:** todo · **n:** —
- [ ] `#194` **Leader's Intent** · `Leadership/leaders-intent.md` · **st:** todo · **n:** —
- [ ] `#195` **Brief-Back Protocols** · `Leadership/brief-back-protocols.md` · **st:** todo · **n:** —
- [ ] `#196` **After-Action Review** · `Leadership/after-action-review.md` · **st:** todo · **n:** —
- [ ] `#197` **Tactical Pause** · `Leadership/tactical-pause.md` · **st:** todo · **n:** —
- [ ] `#221` **Influence Without Authority** · `Leadership/influence-without-authority.md` · **st:** todo · **n:** —
- [ ] `#222` **Coalition Building** · `Leadership/coalition-building.md` · **st:** todo · **n:** —
- [ ] `#242` **Peter Principle** · `Leadership/peter-principle.md` · **st:** todo · **n:** —
- [ ] `#257` **Span of Control** · `Leadership/span-of-control.md` · **st:** todo · **n:** —

## Applied AI (3)

- [ ] `#183` **AI Authority Boundaries** · `Applied-AI/ai-authority-boundaries.md` · **st:** todo · **n:** —
- [ ] `#184` **Minimal Capability Principle** · `Applied-AI/minimal-capability-principle.md` · **st:** todo · **n:** —
- [ ] `#185` **Prompt Injection** · `Applied-AI/prompt-injection.md` · **st:** todo · **n:** —

