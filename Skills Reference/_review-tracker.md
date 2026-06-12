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
- Reviewed (verified + fixed): **226**
- Flagged: **0**
- Remaining (todo): **36**

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
- [x] `#128` **Theory of Change** · `General-Thinking/theory-of-change.md` · **st:** fixed · **n:** Added 5 missing --- section separators; standardized References (removed Originator line, full titles, added descriptions); added 3 manifest refs (B2 gaps, refs 249→252); backlinks in first-principles, pre-mortem, experiment-design, scenario-planning, change-management. build + check:counts pass.
- [x] `#171` **Causal Analysis** · `General-Thinking/causal-analysis.md` · **st:** fixed · **n:** added blank line before ## References, removed duplicate --- footer; backlinks in second-order-effects, feedback-loops, post-mortem, cynefin, first-principles, pre-mortem
- [x] `#188` **Paradigm Shift** · `General-Thinking/paradigm-shift.md` · **st:** fixed · **n:** added blank line before ## References, removed duplicate --- footer; backlinks in map-territory, dominant-logic, confirmation-bias, exploration-vs-exploitation, s-curves, disruptive-innovation, immunity-to-change, first-principles, cynefin-framework
- [x] `#211` **Calibration** · `General-Thinking/calibration.md` · **st:** fixed · **n:** removed --- before ## References; standardized all 4 refs (Fischhoff journal name corrected, consistent format); added Fischhoff 1977 and Brier 1950 as B2 manifest refs (252→254)
- [x] `#223` **Steelmanning** · `General-Thinking/steelmanning.md` · **st:** fixed · **n:** removed --- before ## References; standardized all 4 refs (Rapoport title corrected to include Oxford comma); added Rapoport/Dennett/Galef as B2 manifest refs, linked Kahneman to #223 (254→257); backlinks in socratic-thinking, de-bonos-six-thinking-hats, ladder-of-inference
- [x] `#226` **Grice's Maxims** · `General-Thinking/grices-maxims.md` · **st:** fixed · **n:** removed --- before ## References; standardized all 4 refs; added Grice/Levinson/Pinker as B2 manifest refs, Kahneman linked to #226 (257→260); backlinks in audience, cognitive-load-team, ladder-of-inference, confirmation-bias, framing
- [x] `#234` **Overton Window** · `General-Thinking/overton-window.md` · **st:** fixed · **n:** added blank line before ## References; added Lehman 2006 (Mackinac Center) as B2 manifest ref — primary source missing from card (260→261); backlinks in paradigm-shift, coalition-building, change-management, anchoring, narrative-instinct, influence-without-authority
- [x] `#240` **Black Swan** · `General-Thinking/black-swan.md` · **st:** fixed · **n:** added blank line before ## References; manifest refs verified (both Taleb titles already linked); backlinks in probabilistic-thinking, expected-value, scenario-planning, pre-mortem, regression-to-the-mean

## Systems (21)

- [x] `#17` **Feedback Loops** · `Systems/feedback-loops.md` · **st:** fixed · **n:** removed duplicate --- footer; all 7 connected cards already had backlinks; manifest refs verified
- [x] `#18` **Bottlenecks** · `Systems/bottlenecks.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; all 6 connected cards already had backlinks; manifest refs verified (The Goal, The Phoenix Project)
- [x] `#19` **Emergence** · `Systems/emergence.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; added Miller & Page 2007 (Gap-A); backlinks in feedback-loops, critical-mass
- [x] `#20` **Equilibrium** · `Systems/equilibrium.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; added Nasar 1998 (Gap-A); backlinks in activation-energy, creative-destruction
- [x] `#21` **Scale** · `Systems/scale.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; added Anderson 2006 (Gap-A); backlinks in diminishing-returns, critical-mass
- [x] `#22` **Critical Mass** · `Systems/critical-mass.md` · **st:** fixed · **n:** removed duplicate --- footer; manifest refs verified; backlink added in feedback-loops
- [x] `#23` **Diminishing Returns** · `Systems/diminishing-returns.md` · **st:** fixed · **n:** removed duplicate --- footer; added Samuelson 1948 (Gap-A); backlink added in optimization
- [x] `#24` **Margin of Safety** · `Systems/margin-of-safety.md` · **st:** fixed · **n:** removed duplicate --- footer; manifest refs verified (Graham 1949, Graham & Dodd 1934); backlink added in irreducibility
- [x] `#25` **Churn** · `Systems/churn.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; added Moore 1991 and Ries 2011 (Gap-A); backlinks in compounding, feedback-loops, bottlenecks
- [x] `#26` **Algorithms** · `Systems/algorithms.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; manifest refs verified; backlink added in map-territory
- [x] `#27` **Irreducibility** · `Systems/irreducibility.md` · **st:** fixed · **n:** removed duplicate --- footer; added Penrose 1989 (Gap-A); backlinks in emergence, algorithms, map-territory
- [x] `#28` **Conway's Law** · `Systems/conways-law.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; added Forsgren/Humble/Kim 2018 (Gap-A); backlinks in interdependence, bottlenecks, emergence
- [x] `#29` **Red Queen Dilemma** · `Systems/red-queen-dilemma.md` · **st:** fixed · **n:** added blank line before ## References; removed duplicate --- footer; added Grove 1996 (Gap-A); backlinks in equilibrium, creative-destruction, diminishing-returns
- [x] `#102` **S-Curves** · `Systems/s-curves.md` · **st:** fixed · **n:** fixed header pipe; converted 5 unlinked connections to proper markdown links; added blank line before ## References; added Christensen 1997 (Gap-A); backlinks in critical-mass, compounding, diminishing-returns, network-effects
- [x] `#108` **Exploration vs. Exploitation** · `Systems/exploration-vs-exploitation.md` · **st:** fixed · **n:** fixed header pipe; added Christian & Griffiths 2016 (Gap-A); backlinks in local-maxima, s-curves, feedback-loops
- [x] `#109` **Adjacent Possible** · `Systems/adjacent-possible.md` · **st:** fixed · **n:** fixed header pipe; added blank line before ## References; manifest refs verified; backlinks in s-curves, exploration-vs-exploitation, disruptive-innovation, compounding
- [x] `#208` **Drift to Failure** · `Systems/drift-to-failure.md` · **st:** fixed · **n:** added 5 `---` separators, removed duplicate footer, standardised refs format, added 5 manifest refs, backlinks in goodharts-law, commitment-consistency-bias, survivorship-bias, after-action-review, tactical-pause
- [x] `#235` **Path Dependence** · `Systems/path-dependence.md` · **st:** fixed · **n:** added blank line before References, fixed broken Inertia link (Physics-Chemistry→Physics-and-Chemistry), backlinks in inertia, drift-to-failure, sunk-cost, s-curves, network-effects
- [x] `#243` **Dunbar's Number** · `Systems/dunbars-number.md` · **st:** fixed · **n:** added blank line before References, fixed 2 broken links (Delivery-Flow→Delivery-and-Flow, organisational→organizational-culture), backlinks in conways-law, organizational-culture, trust, psychological-safety, team-topologies; connection count 1045→1046
- [x] `#260` **Fixes That Fail** · `Systems/fixes-that-fail.md` · **st:** fixed · **n:** fixed Goodhart link (General-Thinking→Economics), removed stray --- inside Connections, removed dead mental-models.md link (card does not exist); all backlinks already present
- [x] `#261` **Systems Thinking** · `Systems/systems-thinking.md` · **st:** fixed · **n:** removed stray --- before References, removed duplicate --- footer; all backlinks already present; refs verified

## Economics (22)

- [x] `#30` **Trade-offs** · `Economics/trade-offs.md` · **st:** fixed · **n:** removed self-referencing Opportunity Cost link, added blank line before References, removed duplicate footer, added Gap-A ref (Sowell 2000)
- [x] `#31` **Scarcity** · `Economics/scarcity.md` · **st:** fixed · **n:** fixed typo (raized→raised), removed self-referencing Opportunity Cost link, added blank line before References, removed duplicate footer, added Gap-A refs (Robbins 1932, Malthus 1798), backlink in bottlenecks
- [x] `#32` **Specialization** · `Economics/specialization.md` · **st:** fixed · **n:** added blank line before References, removed duplicate footer; backlinks in trade-offs, monopoly-vs-competition; refs verified
- [x] `#33` **Optimization** · `Economics/optimization.md` · **st:** fixed · **n:** removed duplicate footer; all backlinks present; refs verified
- [x] `#34` **Monopoly vs. Competition** · `Economics/monopoly-vs-competition.md` · **st:** fixed · **n:** removed duplicate footer; backlink added in network-effects; refs verified
- [x] `#35` **Efficiency** · `Economics/efficiency.md` · **st:** fixed · **n:** Added blank line before ## References; removed duplicate --- footer; added 2 Gap-A refs (Goldratt & Cox 1984, Taylor 1911); backlink in diminishing-returns.md.
- [x] `#36` **Debt** · `Economics/debt.md` · **st:** fixed · **n:** Added blank line before ## References; removed duplicate --- footer; added Gap-A ref (Minsky 1986); backlinks in compounding.md, margin-of-safety.md, trade-offs.md.
- [x] `#37` **Creative Destruction** · `Economics/creative-destruction.md` · **st:** fixed · **n:** Added blank line before ## References; removed duplicate --- footer; added Gap-A ref (Christensen 1997); backlinks in value-creation-capture.md, second-order-effects.md.
- [x] `#38` **Bubbles** · `Economics/bubbles.md` · **st:** fixed · **n:** Fixed 2× "rizing" typo; added blank line before ## References; removed duplicate --- footer; backlinks in feedback-loops.md, regression-to-the-mean.md, incentives.md.
- [x] `#39` **Interdependence** · `Economics/interdependence.md` · **st:** fixed · **n:** Added blank line before ## References; removed duplicate --- footer; added Gap-A ref (Smith 1776); backlinks in second-order-effects.md, feedback-loops.md, emergence.md.
- [x] `#40` **Gresham's Law** · `Economics/greshams-law.md` · **st:** fixed · **n:** Added blank line before ## References; removed duplicate --- footer; backlinks in efficiency.md, availability-bias.md.
- [x] `#120` **Goodhart's Law** · `Economics/goodharts-law.md` · **st:** fixed · **n:** Added all 5 missing --- section separators; removed blank lines in Connections; removed **Originator:** header; standardised refs format with descriptions; removed duplicate --- footer; backlinks in principal-agent-problem.md, optimization.md, incentives.md, feedback-loops.md.
- [x] `#121` **Principal–Agent Problem** · `Economics/principal-agent-problem.md` · **st:** fixed · **n:** Added all 5 missing --- separators; removed duplicate Goodhart's Law connection; fixed refs format; added Gap-B2 ref Jensen & Meckling (1976) to manifest (refs 266→267); backlinks in ladder-of-inference.md, tragedy-of-the-commons.md, incentives.md, psychological-safety.md.
- [x] `#216` **Unit Economics** · `Economics/unit-economics.md` · **st:** fixed · **n:** Removed stray --- before ## References; standardised refs format; backlink in lean-portfolio.md.
- [x] `#217` **Value Creation and Capture** · `Economics/value-creation-capture.md` · **st:** fixed · **n:** Removed stray --- before ## References; standardised refs format; backlinks in wardley-mapping.md, disruptive-innovation.md, business-model-canvas.md.
- [x] `#229` **Nash Equilibrium** · `Economics/nash-equilibrium.md` · **st:** fixed · **n:** blank line before refs; backlink added in red-queen-dilemma.md
- [x] `#230` **Prisoner's Dilemma** · `Economics/prisoners-dilemma.md` · **st:** fixed · **n:** blank line before refs; fixed broken Physics-Chemistry path; backlinks added in reciprocity.md, commitment-consistency-bias.md
- [x] `#231` **Tragedy of the Commons** · `Economics/tragedy-of-the-commons.md` · **st:** verified · **n:** structure clean; refs present; backlinks added in feedback-loops.md, drift-to-failure.md
- [x] `#232` **Free Rider Problem** · `Economics/free-rider-problem.md` · **st:** fixed · **n:** blank line before refs; backlinks added in incentives.md, principal-agent-problem.md, prisoners-dilemma.md, nash-equilibrium.md, trust.md, network-effects.md
- [x] `#236` **Schelling Points** · `Economics/schelling-points.md` · **st:** fixed · **n:** blank line before refs; backlinks added in path-dependence.md, overton-window.md, prisoners-dilemma.md, network-effects.md
- [x] `#239` **Long Tail** · `Economics/long-tail.md` · **st:** fixed · **n:** blank line before refs; backlinks added in creative-destruction.md, defensibility.md, unit-economics.md, s-curves.md
- [x] `#262` **Incentive Design** · `Economics/incentive-design.md` · **st:** fixed · **n:** removed stray --- before refs; removed duplicate footer; fixed Gibbons & Roberts authorYear in card + manifest

## Physics & Chemistry (10)

- [x] `#41` **Leverage** · `Physics-and-Chemistry/leverage.md` · **st:** fixed · **n:** blank line before refs; removed duplicate footer; Gap-A ref added (Feynman Lectures); backlinks added in bottlenecks.md, scale.md, algorithms.md
- [x] `#42` **Velocity** · `Physics-and-Chemistry/velocity.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer, Gap-A ref (Thinking in Systems), backlinks in inertia/bottlenecks/build-measure-learn
- [x] `#43` **Inertia** · `Physics-and-Chemistry/inertia.md` · **st:** fixed · **n:** Gap-A ref (Thinking Fast and Slow), backlinks in equilibrium/feedback-loops
- [x] `#44` **Friction** · `Physics-and-Chemistry/friction.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer, Gap-A ref (Hooked), backlinks in leverage/inertia
- [x] `#45` **Activation Energy** · `Physics-and-Chemistry/activation-energy.md` · **st:** fixed · **n:** duplicate --- footer, Gap-A ref (Feynman Lectures); all backlinks already present
- [x] `#46` **Thermodynamics** · `Physics-and-Chemistry/thermodynamics.md` · **st:** fixed · **n:** 2x "rizing"→"rising", blank line before refs, duplicate --- footer, Gap-A ref (Shannon), backlinks in feedback-loops/margin-of-safety/churn
- [x] `#47` **Catalysts** · `Physics-and-Chemistry/catalysts.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer, 2x Gap-A refs (Innovator's Dilemma, How Innovation Works), backlinks in leverage/bottlenecks
- [x] `#48` **Alloying** · `Physics-and-Chemistry/alloying.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer, Gap-A ref (The Knowledge), backlinks in emergence/specialization
- [x] `#49` **Reciprocity** · `Physics-and-Chemistry/reciprocity.md` · **st:** fixed · **n:** duplicate --- footer; fixed broken link in trust.md; backlinks in network-effects/incentives
- [x] `#50` **Relativity** · `Physics-and-Chemistry/relativity.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer, Gap-A ref (Isaacson Einstein bio), backlinks in map-territory/probabilistic-thinking

## Psychology (26)

- [x] `#51` **Incentives** · `Psychology/incentives.md` · **st:** fixed · **n:** structural fixes applied in prior pass; backlink added in feedback-loops.md; all other 11 connected cards already had backlinks
- [x] `#52` **Loss Aversion** · `Psychology/loss-aversion.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer; backlink added in inversion.md (fixed its duplicate footer too)
- [x] `#53` **Sunk Cost** · `Psychology/sunk-cost.md` · **st:** fixed · **n:** duplicate --- footer, Gap-A ref (Misbehaving); backlinks in trade-offs/inversion; connection count 1046→1047
- [x] `#54` **Anchoring** · `Psychology/anchoring.md` · **st:** fixed · **n:** "raizing"→"raising" typo, duplicate --- footer, Gap-A ref (Predictably Irrational); backlink in probabilistic-thinking
- [x] `#55` **Confirmation Bias** · `Psychology/confirmation-bias.md` · **st:** fixed · **n:** removed duplicate --- footer; fixed manifest year (*Demon-Haunted World* 1996→1995); added Gap-A ref (*The Intelligence Trap*, Robson 2019)
- [x] `#56` **Availability Bias** · `Psychology/availability-bias.md` · **st:** fixed · **n:** removed duplicate --- footer; added Gap-A ref (*The Art of Thinking Clearly*, Dobelli 2011); added backlinks in confirmation-bias, probabilistic-thinking, anchoring
- [x] `#57` **Dunning-Kruger** · `Psychology/dunning-kruger.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer, "fund-raizing" typo; 2 Gap-A refs (Schulz 2010, Robson 2019)
- [x] `#58` **Maslow's Hierarchy of Needs** · `Psychology/maslows-hierarchy-of-needs.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer; fixed broken Maslow link in psychological-safety; added backlink in incentives
- [x] `#59` **McClelland's Acquired Needs Theory** · `Psychology/mcclellands-acquired-needs-theory.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer; added backlinks in incentives, maslows-hierarchy
- [x] `#60` **Max-Neef's Fundamental Human Needs** · `Psychology/max-neefs-fundamental-human-needs.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer; added backlinks in maslows-hierarchy, incentives (new edge → 1048)
- [x] `#61` **ERG Theory** · `Psychology/erg-theory.md` · **st:** fixed · **n:** blank line before refs, duplicate --- footer; added backlinks in incentives, mcclellands (new edge → 1049)
- [x] `#101` **Trust** · `Psychology/trust.md` · **st:** fixed · **n:** 3 broken links (Incentives, PsychSafety, LossAversion); header spacing; 2 Gap-A refs (Putnam 2000, Brown 2012); backlinks in incentives, loss-aversion, psychological-safety
- [x] `#104` **Psychological Safety** · `Psychology/psychological-safety.md` · **st:** fixed · **n:** 3 broken links (Incentives, FeedbackLoops, DunningKruger); header spacing; Gap-A ref (Brown 2012); backlinks in incentives, feedback-loops, dunning-kruger
- [x] `#115` **Planning Fallacy** · `Psychology/planning-fallacy.md` · **st:** fixed · **n:** full structural rebuild (5 missing --- separators, wrong footer, refs misplaced); wrong Flyvbjerg co-authors fixed; Gap-A ref (Kahneman & Tversky 1974); 6 backlinks added
- [x] `#167` **Immunity to Change** · `Psychology/immunity-to-change.md` · **st:** fixed · **n:** spurious --- before refs removed; Theory of Change wrong path fixed; cobra-effect wrong path fixed; 2 Gap-B2 refs added to manifest (267→269); 5 backlinks added
- [x] `#192` **Self-Determination Theory** · `Psychology/self-determination-theory.md` · **st:** fixed · **n:** full structural rebuild (all --- separators missing, duplicate footer, bare refs); 3 Gap-B2 refs added (refs 269→272); 6 backlinks added; note: card has 2 non-standard extra sections (Internalisation Continuum, Crowding-Out Effect) — content-rich, retained as-is
- [x] `#199` **Survivorship Bias** · `Psychology/survivorship-bias.md` · **st:** fixed · **n:** Full structural rebuild (missing --- separators, duplicate footer, bare refs); 3 Gap-B2 refs added (Ellenberg 2014, Rosenzweig 2007, Wald 1943); 5 backlinks added (confirmation-bias, after-action-review, first-principles, probabilistic-thinking, power-law)
- [x] `#200` **Fundamental Attribution Error** · `Psychology/fundamental-attribution-error.md` · **st:** fixed · **n:** Missing --- separators, duplicate footer, bare refs expanded; 3 Gap-B2 refs added (Ross 1977, Ross & Nisbett 1991, Coyle 2018); 4 backlinks added (after-action-review, survivorship-bias, systems-thinking, incentive-design)
- [x] `#201` **Hindsight Bias** · `Psychology/hindsight-bias.md` · **st:** fixed · **n:** Missing --- separators, duplicate footer, bare refs expanded; 2 Gap-B2 refs added (Fischhoff 1975, Lewis 2016); 3 backlinks added (after-action-review, probabilistic-thinking, pre-mortem)
- [x] `#202` **Social Proof** · `Psychology/social-proof.md` · **st:** fixed · **n:** Missing --- separators, duplicate footer, bare refs expanded; all 4 refs already in manifest; 5 backlinks added (framing, anchoring, loss-aversion, narrative-instinct, incentive-design)
- [x] `#203` **Narrative Instinct** · `Psychology/narrative-instinct.md` · **st:** fixed · **n:** Missing --- separators, duplicate footer, bare refs expanded; 2 Gap-B2 refs added (Bruner 1986, Gottschall 2012); 3 backlinks added (dominant-logic, first-principles, pre-mortem)
- [x] `#204` **Falsification** · `Psychology/falsification.md` · **st:** fixed · **n:** Missing --- separators, duplicate footer, bare refs expanded; Gap-A Popper ref updated (+#204); 1 Gap-B2 ref added (Popper 1963); 6 backlinks added (confirmation-bias, experiment-design, pre-mortem, kill-criteria, probabilistic-thinking, survivorship-bias)
- [x] `#205` **Commitment & Consistency Bias** · `Psychology/commitment-consistency-bias.md` · **st:** fixed · **n:** Missing --- separators, duplicate footer, bare refs expanded; Gap-A Cialdini ref updated (+#205); 2 Gap-B2 refs added (Festinger 1957, Staw 1976); 6 backlinks added (sunk-cost, dominant-logic, kill-criteria, falsification, confirmation-bias, after-action-review)
- [x] `#206` **Base Rate Neglect** · `Psychology/base-rate-neglect.md` · **st:** fixed · **n:** Missing --- separators, duplicate footer, bare refs expanded; 2 Gap-B2 refs added (Kahneman & Tversky 1973, Flyvbjerg 2006); 6 backlinks added (probabilistic-thinking, reference-class-forecasting, planning-fallacy, survivorship-bias, falsification, narrative-instinct)
- [x] `#207` **SRK Framework** · `Psychology/srk-framework.md` · **st:** fixed · **n:** added 5 `---` separators, fixed dup footer, expanded bare refs with descriptions; Gap-A [264]; Gap-B2: Rasmussen 1983, Reason 1990, Vicente 1999; 5 backlinks added (AAR, FAE, Cynefin, Experiment Design, Leader's Intent)
- [x] `#212` **Observer Bias** · `Psychology/observer-bias.md` · **st:** fixed · **n:** removed spurious --- before ## References, expanded 4 bare refs; all 4 Gap-B2 (Rosenthal 1968, Goldin & Rouse 2000, Kahneman/Sibony/Sunstein 2021, Sackett 1996); backlinks in calibration, psychological-safety

## Business (23)

- [x] `#68` **Business Model Canvas** · `Business/business-model-canvas.md` · **st:** fixed · **n:** fixed dup footer; Gap-A: added Value Proposition Design ref to card; backlinks in value-prop-canvas, product-market-fit
- [x] `#69` **Value Prop Canvas** · `Business/value-prop-canvas.md` · **st:** fixed · **n:** fixed dup footer; refs both in manifest, no gaps; backlinks in customer-development, product-market-fit
- [x] `#71` **Portfolio Map** · `Business/portfolio-map.md` · **st:** fixed · **n:** added --- before ## References, fixed dup footer, fixed "Good Strategy / Bad Strategy" title; Gap-A: added Perspectives on Experience (BCG 1968); backlinks in diminishing-returns, creative-destruction
- [x] `#72` **Experiment Design** · `Business/experiment-design.md` · **st:** fixed · **n:** added --- before ## References, fixed dup footer; refs both in manifest, no gaps; backlinks in probabilistic-thinking, confirmation-bias (9 others already present)
- [x] `#73` **Assumption Mapping** · `Business/assumption-mapping.md` · **st:** fixed · **n:** added --- before ## References, fixed dup footer; refs both in manifest, no gaps; backlinks in experiment-design, situation-assessment (6 others already present)
- [x] `#74` **Stakeholder Mapping (Salience Model)** · `Business/stakeholder-mapping-salience-model.md` · **st:** fixed · **n:** added --- before ## References, fixed dup footer; refs both in manifest, no gaps; backlinks in incentives, second-order-effects, interdependence (2 others already present)
- [x] `#116` **Maker's Schedule vs. Manager's Schedule** · `Business/makers-schedule.md` · **st:** fixed · **n:** full rewrite: added all 5 missing --- separators, moved ## References before footer, fixed footer format; Gap-A: added Gloria Mark et al. (2008); backlinks in bottlenecks, activation-energy, friction, incentives, feedback-loops, conways-law
- [x] `#123` **Scenario Planning** · `Business/scenario-planning.md` · **st:** fixed · **n:** added 6 missing --- separators, fixed dup footer, expanded 3 bare refs, removed non-standard Originators heading; refs all in manifest, no gaps; backlinks in pre-mortem, probabilistic-thinking, inversion, second-order-effects (4 others already present)
- [x] `#127` **RACI Framework** · `Business/raci-framework.md` · **st:** fixed · **n:** added 6 missing --- separators, fixed broken Stakeholder Mapping link, expanded bare refs, removed non-standard Origin heading, fixed dup footer; corrected Stanford year (2015→2013, unverifiable); Gap-B2: added PMBOK 7th (2021) + Stanford (2013) to manifest; refs 300→302; backlinks in stakeholder-mapping, principal-agent-problem, mission-command, conways-law
- [x] `#166` **Kernel of Good Strategy** · `Business/kernel-of-strategy.md` · **st:** fixed · **n:** fixed Theory of Change link path (wrong dir), expanded 3 bare refs, corrected title slash; Gap-B2: added The Crux (Rumelt 2022) to manifest; refs 302→303; backlinks in one-thing, theory-of-change, trade-offs, first-principles (also fixed dup footer there), portfolio-map
- [x] `#210` **Wardley Mapping** · `Business/wardley-mapping.md` · **st:** fixed · **n:** added 5 --- separators, fixed dup footer; replaced bare/vague refs (dropped untitled Moesta & Spiek 2014 — unverifiable; consolidated Wardley chapters into one entry); Gap-B2: Wardley Maps 2016, Art of War; backlinks in exploration-vs-exploitation, build-measure-learn, scenario-planning
- [x] `#218` **Business Case Construction** · `Business/business-case-construction.md` · **st:** fixed · **n:** reformatted 4 non-standard refs (author-year style → standard italic-title format); no structural issues, no ref gaps; backlinks in assumption-mapping, reference-class-forecasting, calibration, kill-criteria, pyramid-principle, sunk-cost, observer-bias
- [x] `#219` **Pricing Logic** · `Business/pricing-logic.md` · **st:** fixed · **n:** reformatted 4 non-standard refs (author-year style → standard format); corrected Nagle & Müller year 2017→2018 to match manifest; no structural issues, no ref gaps; backlinks in anchoring, loss-aversion, goodharts-law (pricing-decision chain card has no Connections section)
- [x] `#220` **Power Mapping** · `Business/power-mapping.md` · **st:** fixed · **n:** reformatted 4 non-standard refs; Gap-A: added Pre-Suasion (Cialdini 2016) from manifest to card; no structural issues; backlinks in raci-framework, narrative-instinct
- [x] `#224` **Red Teaming** · `Business/red-teaming.md` · **st:** fixed · **n:** reformatted 4 non-standard refs; Gap-B2: all 4 refs missing from manifest — added Zenko (2015), Klein HBR (2007), CIA Tradecraft Primer (2009), Kahneman/Lovallo/Sibony HBR (2011); refs 303→307; backlinks in assumption-mapping, psychological-safety, kill-criteria
- [x] `#225` **A/B Testing** · `Business/ab-testing.md` · **st:** fixed · **n:** reformatted 4 non-standard refs; Gap-A x3: added skill 225 to Design of Experiments, Trustworthy Online Controlled Experiments, Lean Startup in manifest; Gap-B2: added Kohavi & Thomke HBR 2017; refs 307→308; backlinks in build-measure-learn, probabilistic-thinking, goodharts-law
- [x] `#241` **Parkinson's Law** · `Business/parkinsons-law.md` · **st:** fixed · **n:** missing `---` before refs, double blank before footer, 3 broken connection paths fixed; backlinks in planning-fallacy, organizational-slack (+ structural fixes), wip-limits, cobra-effect (+ structural fixes), kill-criteria
- [x] `#247` **Growth Barriers** · `Business/growth-barriers.md` · **st:** fixed · **n:** refs reformatted (4×), removed duplicate Theory-of-Constraints connection; Gap-A x3 (The Goal, Lean Startup, Competing Against Luck), Gap-B2 (Lean Analytics); backlinks in causal-analysis, unit-economics, outcome-vs-output, hypothesis-driven; structural fixes in causal-analysis + unit-economics (missing ---)
- [x] `#248` **Profit Pool Analysis** · `Business/profit-pool-analysis.md` · **st:** fixed · **n:** refs reformatted (4×), split compound connection; Gap-A (Competitive Advantage), Gap-B2 x3 (2× Gadiesh & Gilbert HBR, Bryce & Dyer HBR); refs 309→312; backlinks in wardley-mapping, long-tail, power-law, red-teaming, kernel-of-strategy, situation-assessment, unit-economics; structural fixes in wardley-mapping/long-tail/power-law
- [x] `#249` **Customer Segmentation** · `Business/customer-segmentation.md` · **st:** fixed · **n:** refs reformatted (4×); Gap-A x2 (Competing Against Luck, Value Prop Design), Gap-B2 x2 (Moon 2010, Wedel & Kamakura 2000); refs 312→314; backlinks in value-prop-canvas (+struct fix), availability-bias (+struct fix), customer-development (+struct fix), unit-economics, power-law
- [x] `#250` **KPI Architecture** · `Business/kpi-architecture.md` · **st:** fixed · **n:** refs reformatted (4×); Gap-A x3 (Measure What Matters, Accelerate, Tyranny of Metrics), Gap-B2 (Balanced Scorecard); refs 314→315; backlinks in okrs, dora-metrics, bottlenecks (+struct fix), hypothesis-driven, calibration (+struct fix)
- [x] `#251` **Value Realization** · `Business/value-realization.md` · **st:** fixed · **n:** refs reformatted (4×) + title corrected ("Hedgehog"→"Hockey Stick"); split compound connection; Gap-A x2 (How Big Things Get Done, Leading Change), Gap-B2 x2 (Strategy Beyond Hockey Stick, Making the Deal Real HBR); refs 315→317; backlinks in after-action-review (+struct fix), sunk-cost (+struct fix), reference-class-forecasting, planning-fallacy (+struct fix), kpi-architecture
- [x] `#254` **Playing to Win** · `Business/playing-to-win.md` · **st:** fixed · **n:** added descriptions to 2 bare refs; removed broken competitive-advantage.md link (no such card); backlinks in trade-offs (+struct fix), wardley-mapping, mece, portfolio-map

## Innovation & Entrepreneurship (23)

- [x] `#62` **Product-Market Fit** · `Startups/product-market-fit.md` · **st:** fixed · **n:** typo fixed ("raizing"→"raising"); added --- before refs, fixed double --- footer; Gap-A: added The Lean Startup (in manifest but missing from card); backlink in feedback-loops (+struct fix)
- [x] `#63` **Build-Measure-Learn** · `Startups/build-measure-learn.md` · **st:** fixed · **n:** added --- before refs; Gap-A: added Running Lean (Maurya 2012, in manifest but missing from card); all backlinks already present
- [x] `#64` **MVP** · `Startups/mvp.md` · **st:** fixed · **n:** added --- before refs; fixed double --- footer; Gap-A: added Four Steps to the Epiphany (Blank 2003); all backlinks already present
- [x] `#65` **Pivot or Persevere** · `Startups/pivot-or-persevere.md` · **st:** fixed · **n:** added --- before refs; fixed double --- footer; Gap-A: Disciplined Entrepreneurship (Aulet 2013); backlinks added to build-measure-learn, sunk-cost, product-market-fit
- [x] `#66` **Customer Development** · `Startups/customer-development.md` · **st:** verified · **n:** structure clean; refs match manifest (Four Steps cites 2005 vs manifest 2003, left as-is); backlink added to assumption-mapping
- [x] `#67` **Innovation Accounting** · `Startups/innovation-accounting.md` · **st:** fixed · **n:** structure and refs clean; backlinks added to build-measure-learn, product-market-fit, experiment-design (all three were missing)
- [x] `#70` **Innovation Funnel** · `Business/innovation-funnel.md` · **st:** fixed · **n:** structure and ref clean; backlinks added to build-measure-learn and assumption-mapping; portfolio-map and both chain cards already had backlinks
- [x] `#103` **Jobs to Be Done** · `Startups/jobs-to-be-done.md` · **st:** fixed · **n:** structure, content, and refs clean; backlinks added to customer-development, product-market-fit, build-measure-learn, loss-aversion, activation-energy, inertia, first-principles (7 missing)
- [x] `#110` **Design Thinking** · `Startups/design-thinking.md` · **st:** fixed · **n:** structure, content, and refs clean; backlinks added to jobs-to-be-done, customer-development, assumption-mapping, build-measure-learn (4 missing; divergent-convergent-thinking already had one)
- [x] `#111` **Crossing the Chasm** · `Startups/crossing-the-chasm.md` · **st:** fixed · **n:** structure, content, and refs clean; backlinks added to s-curves, product-market-fit, network-effects, critical-mass; disruptive-innovation already had one
- [x] `#112` **Disruptive Innovation** · `Business/disruptive-innovation.md` · **st:** fixed · **n:** structure, content, and refs clean; Netflix/Blockbuster example accurate; backlinks added to s-curves, jobs-to-be-done, business-model-canvas (6 of 9 already had backlinks)
- [x] `#113` **Three Horizons** · `Business/three-horizons.md` · **st:** fixed · **n:** structure, content, and ref (Alchemy of Growth 1999) clean; AWS example accurate; backlinks added to portfolio-map, disruptive-innovation, s-curves, two-way-doors; funnel-intake and 2 others already had them
- [x] `#172` **Ambidextrous Organization** · `Business/ambidextrous-organization.md` · **st:** fixed · **n:** backlinks added to 108, 113, 112, 124; structure, content, and ref verified clean.
- [x] `#173` **Dominant Logic** · `Business/dominant-logic.md` · **st:** fixed · **n:** added Prahalad & Bettis (1986) originating paper; backlinks added to 112, 55, 6, 122, 102; 16 orphan manifest refs (migration artifact) cleaned by derive:refs --write, prose counts updated to 373.
- [x] `#174` **Open Innovation** · `Business/open-innovation.md` · **st:** fixed · **n:** backlinks added to 172, 109, 82, 89, 173, 63; structure, content, and Chesbrough (2003) ref verified clean.
- [x] `#175` **Effectuation** · `Startups/effectuation.md` · **st:** fixed · **n:** backlinks added to 63, 64, 12, 108, 109, 7; structure, content (Five Principles + Starbucks example), and Sarasvathy (2008) ref verified clean.
- [x] `#176` **Organizational Slack** · `Business/organizational-slack.md` · **st:** fixed · **n:** removed false Scotch-tape/15%-time claim; backlinks added to 108, 114, 149, 113, 158.
- [x] `#179` **Innovation Health Indicators** · `Business/innovation-health-indicators.md` · **st:** fixed · **n:** backlinks added to all 10 connected cards; structure (4 whitelisted extra sections), content, and refs verified clean.
- [x] `#180` **Opportunity Solution Trees** · `Startups/opportunity-solution-trees.md` · **st:** fixed · **n:** backlinks added to 103, 73, 63, 107, 70; structure, Torres (2021) ref, and fintech example verified clean.
- [x] `#181` **Pretotyping** · `Startups/pretotyping.md` · **st:** fixed · **n:** filled empty rationale on id:63 connection; backlinks added to 64, 73, 63, 72, 175, 7; structure and Savoia (2019) ref verified clean.
- [x] `#182` **Continuous Discovery** · `Startups/continuous-discovery.md` · **st:** fixed · **n:** backlinks added to 103, 63, 110, 66, 17; structure (The Practice in Structure whitelist), Torres (2021) ref, and Spotify example verified clean.
- [x] `#189` **Experiment Ladder** · `Startups/experiment-ladder.md` · **st:** fixed · **n:** backlinks added to 72, 181, 64, 66, 63, 153, 16; structure, four-rung model, and Bland & Osterwalder (2019) ref verified clean.
- [x] `#237` **Cobra Effect** · `Innovation-Entrepreneurship/cobra-effect.md` · **st:** fixed · **n:** Added Siebert (2001) originating ref (coined the term); refs 373→374. Added 6 missing backlinks (ids 2, 51, 208, 230, 231, 189). Content accurate; taxonomy and worked example verified. build + check:counts pass.

## Mathematics (11)

- [x] `#75` **Compounding** · `Mathematics/compounding.md` · **st:** fixed · **n:** Content verified (1% → 37x correct; 50% loss/100% gain correct; Amazon flywheel 1994 correct). Added 2 missing backlinks (ids 17, 24). build + check:counts pass.
- [x] `#76` **Local Maxima** · `Mathematics/local-maxima.md` · **st:** fixed · **n:** Content and refs verified clean (Pólya 1945 + Algorithms to Live By correct). Added 1 missing backlink (id:37 Creative Destruction). build + check:counts pass.
- [x] `#77` **Regression to the Mean** · `Mathematics/regression-to-the-mean.md` · **st:** fixed · **n:** Fixed 2 typos ("centerd"→"centered", "praized"→"praised"). Added 2 missing backlinks (ids 54, 56). Refs and content verified clean. build + check:counts pass.
- [x] `#78` **Randomness** · `Mathematics/randomness.md` · **st:** fixed · **n:** Content and refs verified clean (Taleb 2001, Mlodinow 2008, Silver 2012 all correct). Added 2 missing backlinks (ids 7, 77). build + check:counts pass.
- [x] `#79` **Sampling** · `Mathematics/sampling.md` · **st:** fixed · **n:** Content and refs verified clean (Huff 1954, Silver 2012 correct; WEIRD acronym accurate). Added 2 missing backlinks (ids 7, 55). build + check:counts pass.
- [x] `#80` **Surface Area** · `Mathematics/surface-area.md` · **st:** fixed · **n:** Content and ref verified clean (Taleb Antifragile 2012 correct). Added 3 missing backlinks (ids 82, 41, 24). build + check:counts pass.
- [x] `#81` **Multiply by Zero** · `Mathematics/multiply-by-zero.md` · **st:** fixed · **n:** Content and ref verified clean (Goldratt & Cox 1984 correct). Added 3 missing backlinks (ids 18, 0, 24). build + check:counts pass.
- [x] `#227` **Expected Value** · `Mathematics/expected-value.md` · **st:** fixed · **n:** EV math in Mental Model and Worked Example verified correct. Refs verified (Duke 2018, Bernstein 1996, Kahneman 2011). Added 4 missing backlinks (ids 211, 12, 24, 206). build + check:counts pass.
- [x] `#228` **Bayesian Updating** · `Mathematics/bayesian-updating.md` · **st:** fixed · **n:** Bayesian posterior calculation verified correct (62%). Refs verified clean. Added 5 missing backlinks (ids 206, 211, 55, 204, 201). build + check:counts pass.
- [x] `#233` **Fermi Estimation** · `Mathematics/fermi-estimation.md` · **st:** fixed · **n:** Fixed false "teacher Fermi" claim in Feynman Lectures supports field (Fermi was colleague at Los Alamos, not Feynman's teacher — Wheeler was). Worked example math verified. Added 5 missing backlinks (ids 0, 7, 160, 211, 3). build + check:counts pass.
- [x] `#238` **Power Law** · `Mathematics/power-law.md` · **st:** fixed · **n:** Content and refs verified clean (Anderson 2006, West 2017 correct). Added 5 missing backlinks (ids 75, 23, 227, 24, 78). build + check:counts pass.

## Network Effects (4)

- [x] `#82` **Network Effects** · `Network-Effects/network-effects.md` · **st:** verified · **n:** All 15 backlinks present. Metcalfe's Law, LinkedIn 900M, refs all verified. No changes needed.
- [x] `#83` **Viral Growth** · `Network-Effects/viral-growth.md` · **st:** fixed · **n:** Fixed Hotmail stat: "500,000 to 12M" → "launch to 12M in 18 months" (web-verified: 0→12M). Added 1 missing backlink (id:75). build + check:counts pass.
- [x] `#84` **Marketplace** · `Network-Effects/marketplace.md` · **st:** fixed · **n:** Airbnb/Craigslist story verified accurate. Added 3 missing backlinks (ids 82, 22, 101). build + check:counts pass.
- [x] `#85` **Defensibility** · `Network-Effects/defensibility.md` · **st:** fixed · **n:** Refs verified (Greenwald/Kahn 2005, Buffett/Cunningham 1997, Porter 1985) ✓; Amazon multi-moat example accurate ✓; added backlink in compounding (#75). build + check:counts pass.

## Learning (6)

- [x] `#86` **Model Chaining** · `Learning/model-chaining.md` · **st:** fixed · **n:** Refs verified (Munger/Kaufman 2005, Parrish 2019) ✓; typo "exercized"→"exercised" fixed; added backlink in first-principles (#0). build + check:counts pass.
- [x] `#87` **T-Shaped** · `Learning/t-shaped.md` · **st:** fixed · **n:** Replaced Kelley/Creative Confidence ref (doesn't discuss T-shaped) with Tim Brown HBR 2008 "Design Thinking" (canonical IDEO T-shaped source). Epstein 2019 verified ✓. Added backlink in model-chaining (#86). Refs 374→375. build + check:counts pass.
- [x] `#88` **Five-Hour Rule** · `Learning/five-hour-rule.md` · **st:** fixed · **n:** Refs verified (Franklin Autobiography 1791, Munger/Kaufman 2005) ✓; Naval Ravikant example accurate ✓; added 3 missing backlinks (compounding #75, t-shaped #87, model-chaining #86). build + check:counts pass.
- [x] `#89` **Learning Transfer** · `Learning/learning-transfer.md` · **st:** fixed · **n:** Refs verified (Brown/Roediger/McDaniel 2014, Haskell 2001) ✓; worked example accurate ✓; added 3 missing backlinks (model-chaining #86, t-shaped #87, first-principles #0). build + check:counts pass.
- [x] `#105` **Pre-built Chains** · `Learning/pre-built-chains.md` · **st:** fixed · **n:** Refs verified (Munger/Kaufman 2005, Pólya 1945) ✓; worked example accurate ✓; added 4 missing backlinks (first-principles #0, inversion #1, confirmation-bias #55, two-way-doors #16). build + check:counts pass.
- [x] `#114` **Deep Work / Cognitive Capacity** · `Learning/deep-work.md` · **st:** fixed · **n:** Refs verified (Newport 2016, Ericsson 2006, Kahneman 2011) ✓; added 4 missing inter-section --- separators; added 6 missing backlinks (bottlenecks #18, diminishing-returns #23, scarcity #31, five-hour-rule #88, margin-of-safety #24, activation-energy #45). build + check:counts pass.

## Art (4)

- [x] `#90` **Audience** · `Art/audience.md` · **st:** fixed · **n:** Refs verified (Godin 2018, Heath & Heath 2007) ✓; content clean ✓; added 2 missing backlinks (customer-development #66, value-prop-canvas #69). build + check:counts pass.
- [x] `#91` **Framing** · `Art/framing.md` · **st:** fixed · **n:** Refs verified (Goffman 1974, Kahneman 2011) ✓; worked example accurate ✓; added 2 missing backlinks (loss-aversion #52, anchoring #54). build + check:counts pass.
- [x] `#92` **Contrast** · `Art/contrast.md` · **st:** fixed · **n:** Ref verified (Arnheim 1954) ✓; content clean ✓; added 2 missing backlinks (framing #91, audience #90). build + check:counts pass.
- [x] `#93` **Rhythm** · `Art/rhythm.md` · **st:** fixed · **n:** Refs verified (Strunk & White 1959, Thomas & Turner 1994) ✓; content clean ✓; added 2 missing backlinks (audience #90, framing #91). build + check:counts pass.

## Delivery & Flow (33)

- [x] `#131` **Little's Law** · `Delivery-and-Flow/littles-law.md` · **st:** fixed · **n:** Refs verified (Little 1961, Reinertsen 2009, Vacanti 2015) ✓; worked example arithmetic correct ✓; added 1 missing backlink (bottlenecks #18). build + check:counts pass.
- [x] `#132` **WIP Limits** · `Delivery-and-Flow/wip-limits.md` · **st:** fixed · **n:** Refs verified (Anderson 2010, Reinertsen 2009, Ohno 1988) ✓; added missing supports: fields and removed trailing periods from all 3 refs; added 1 missing backlink (bottlenecks #18). build + check:counts pass.
- [x] `#133` **Flow Efficiency vs Resource Efficiency** · `Delivery-and-Flow/flow-efficiency.md` · **st:** fixed · **n:** Refs verified (Modig & Åhlström 2012, Reinertsen 2009, Forsgren et al. 2018) ✓; added missing supports: fields and removed trailing periods from all 3 refs; added 2 missing backlinks (efficiency #35, makers-schedule #116). build + check:counts pass.
- [x] `#134` **Lead Time vs Cycle Time** · `Delivery-and-Flow/lead-time-cycle-time.md` · **st:** fixed · **n:** Refs verified (Vacanti 2015, Reinertsen 2009, Forsgren et al. 2018) ✓; added missing supports: fields and removed trailing periods; added 1 missing backlink (littles-law #131). YAML parse error on embedded quotes — fixed by rephrasing supports: field. build + check:counts pass.
- [x] `#135` **Queueing & Wait Time** · `Delivery-and-Flow/queueing.md` · **st:** fixed · **n:** Refs verified (Reinertsen 2009, Hopp & Spearman 1996) ✓; Kingman/Erlang content accurate ✓; added missing supports: fields and removed trailing periods; added 1 missing backlink (bottlenecks #18). build + check:counts pass.
- [x] `#136` **Batch Size Reduction** · `Delivery-and-Flow/batch-size-reduction.md` · **st:** fixed · **n:** added 4 missing backlinks (cost-of-delay, flow-efficiency, build-measure-learn, mvp); fixed SAFe authorYear in cost-of-delay (merged into same canonical ref, refs 375→374)
- [x] `#137` **Cost of Delay** · `Delivery-and-Flow/cost-of-delay.md` · **st:** fixed · **n:** added 2 missing backlinks (trade-offs, probabilistic-forecasting); content and refs accurate
- [x] `#138` **Kanban Method** · `Delivery-and-Flow/kanban-method.md` · **st:** fixed · **n:** added 4 missing backlinks (littles-law, flow-metrics, bottlenecks, feedback-loops); content and refs accurate
- [x] `#139` **Value Stream Mapping** · `Delivery-and-Flow/value-stream-mapping.md` · **st:** fixed · **n:** added 4 missing backlinks (flow-efficiency, bottlenecks, batch-size-reduction, conways-law); content and refs verified
- [x] `#140` **Statistical Variability** · `Delivery-and-Flow/statistical-variability.md` · **st:** fixed · **n:** added 2 missing backlinks (goodharts-law, regression-to-the-mean); content and refs verified accurate
- [x] `#141` **Probabilistic Forecasting** · `Delivery-and-Flow/probabilistic-forecasting.md` · **st:** fixed · **n:** added 2 missing backlinks (planning-fallacy, littles-law); content and refs verified (Ulam/von Neumann Monte Carlo attribution correct)
- [x] `#142` **DORA Metrics** · `Delivery-and-Flow/dora-metrics.md` · **st:** fixed · **n:** added 4 missing backlinks (flow-efficiency, outcome-vs-output, trade-offs, conways-law); content and refs verified accurate
- [x] `#143` **Flow Metrics** · `Delivery-and-Flow/flow-metrics.md` · **st:** fixed · **n:** added 4 missing backlinks (dora-metrics, outcome-vs-output, wip-limits, flow-efficiency); content and refs verified
- [x] `#144` **Outcome vs Output** · `Delivery-and-Flow/outcome-vs-output.md` · **st:** fixed · **n:** added 3 missing backlinks (kill-criteria, build-measure-learn, goodharts-law); content and refs verified accurate
- [x] `#145` **A3 Problem Solving** · `Delivery-and-Flow/a3-problem-solving.md` · **st:** fixed · **n:** added 3 missing backlinks (post-mortem, value-stream-mapping, theory-of-change); content and refs verified (7-section structure and Shook 2008 accurate)
- [x] `#146` **PDCA** · `Delivery-and-Flow/pdca.md` · **st:** fixed · **n:** added 4 missing backlinks (ooda-loop, post-mortem, build-measure-learn, pre-mortem); content and refs accurate.
- [x] `#147` **Gemba** · `Delivery-and-Flow/gemba.md` · **st:** fixed · **n:** added 4 missing backlinks (map-territory, a3-problem-solving, customer-development, conways-law); content and refs accurate.
- [x] `#148` **Attention Budget** · `Delivery-and-Flow/attention-budget.md` · **st:** fixed · **n:** added 2 missing backlinks (makers-schedule, deep-work); content and refs accurate.
- [x] `#149` **Context-Switching Cost** · `Delivery-and-Flow/context-switching.md` · **st:** fixed · **n:** added 4 missing backlinks (makers-schedule, wip-limits, cognitive-load-team, deep-work); Weinberg numbers correctly caveated; content accurate.
- [x] `#150` **Cognitive Load (Team)** · `Delivery-and-Flow/cognitive-load-team.md` · **st:** fixed · **n:** added missing Sweller (1988) ref (cited in body, absent from refs); added 3 missing backlinks (conways-law, leverage, dependency-management); refs 374→375.
- [x] `#151` **Strategic Prioritization (“One Thing”)** · `Delivery-and-Flow/one-thing.md` · **st:** fixed · **n:** added 4 missing backlinks (trade-offs, kill-criteria, exploration-vs-exploitation, outcome-vs-output); content and refs accurate.
- [x] `#152` **OKRs** · `Delivery-and-Flow/okrs.md` · **st:** fixed · **n:** added 2 missing backlinks (goodharts-law, theory-of-change); content and refs accurate.
- [x] `#153` **Kill Criteria** · `Delivery-and-Flow/kill-criteria.md` · **st:** fixed · **n:** added 3 missing backlinks (pivot-or-persevere, sunk-cost, pre-mortem); 14 of 17 targets already had backlinks; content and refs accurate.
- [x] `#154` **Team Topologies** · `Delivery-and-Flow/team-topologies.md` · **st:** fixed · **n:** fixed ambiguous range "7 to 9 weeks down to 4" → "7–9 weeks to 4"; added 2 missing backlinks (conways-law, leverage); content and refs accurate.
- [x] `#155` **Inverse Conway Maneuver** · `Delivery-and-Flow/inverse-conway.md` · **st:** fixed · **n:** fixed wrong attribution ("coined in Accelerate" → LeRoy & Simons, Cutter IT Journal 2010); removed duplicate id:28 connection; added LeRoy & Simons ref; added 2 backlinks (conways-law, organizational-culture); refs 375→376.
- [x] `#156` **Dependency Management** · `Delivery-and-Flow/dependency-management.md` · **st:** fixed · **n:** removed uncited "2018 study / 50% variability" claim (unverifiable); replaced with practitioner framing; added 3 missing backlinks (conways-law, bottlenecks, leverage).
- [x] `#157` **Feature Factory vs Product Orientation** · `Delivery-and-Flow/feature-factory.md` · **st:** fixed · **n:** added 4 missing backlinks (okrs, kill-criteria, build-measure-learn, lean-portfolio); fixed YAML error (bare quotes in rationale); content and refs accurate.
- [x] `#158` **Lean Portfolio Management** · `Delivery-and-Flow/lean-portfolio.md` · **st:** fixed · **n:** fixed SAFe ref missing year (added 2011–ongoing); added 2 missing backlinks (kill-criteria, innovation-funnel); content accurate.
- [x] `#159` **WSJF** · `Delivery-and-Flow/wsjf.md` · **st:** fixed · **n:** added 3 missing backlinks (trade-offs, bottlenecks, probabilistic-forecasting); content and refs accurate.
- [x] `#160` **Reference Class Forecasting** · `Delivery-and-Flow/reference-class-forecasting.md` · **st:** fixed · **n:** fixed wrong attribution (Tversky died 1996, before RCF was formalized — Flyvbjerg developed it, drawing on K&T framework); added 4 missing backlinks (planning-fallacy, pre-mortem, margin-of-safety, probabilistic-thinking).
- [x] `#209` **Empirical Process Control** · `Delivery-and-Flow/empirical-process-control.md` · **st:** fixed · **n:** added 5 --- separators, fixed dup footer, expanded 5 bare refs; Gap-A [248] Snowden & Boone; Gap-B2: Shewhart 1931, Deming 1986, Takeuchi/Nonaka 1986, Scrum Guide 2020; backlinks in drift-to-failure, experiment-design, outcome-vs-output
- [x] `#255` **Technical Debt** · `Delivery-and-Flow/technical-debt.md` · **st:** fixed · **n:** added Cunningham (1992) ref; backlinks added in flow-efficiency and littles-law; refs 376→377
- [x] `#256` **Reliability vs. Feature Velocity** · `Delivery-and-Flow/reliability-vs-velocity.md` · **st:** fixed · **n:** backlinks added in margin-of-safety, goodharts-law, statistical-variability; card content verified clean

## Consulting Craft (10)

- [x] `#161` **Hypothesis-Driven Consulting** · `Consulting-Craft/hypothesis-driven.md` · **st:** fixed · **n:** fixed Minto year 1987→1985, Conn & McLean year 2018→2019; backlinks added in experiment-design, pre-mortem, theory-of-change
- [x] `#162` **MECE** · `Consulting-Craft/mece.md` · **st:** fixed · **n:** fixed Minto year 1987→1985, Conn & McLean year 2018→2019, aligned abbreviated titles; backlinks added in first-principles, socratic-thinking, trade-offs
- [x] `#163` **Pyramid Principle** · `Consulting-Craft/pyramid-principle.md` · **st:** fixed · **n:** fixed Minto year 1987→1985 in body and refs, aligned title; backlinks added in framing, audience
- [x] `#164` **Engagement Lifecycle** · `Consulting-Craft/engagement-lifecycle.md` · **st:** fixed · **n:** backlinks added in mission-command, theory-of-change, change-management, hypothesis-driven, facilitation; content and refs verified clean
- [x] `#165` **Contracting & Scope** · `Consulting-Craft/contracting-scope.md` · **st:** fixed · **n:** backlinks added in outcome-vs-output, stakeholder-mapping, kill-criteria, trade-offs; content and refs verified clean
- [x] `#246` **Situation Assessment** · `Consulting-Craft/situation-assessment.md` · **st:** fixed · **n:** normalized 4 ref formats (Last, F.M. → Full Name); fixed Minto 1987→1985, Conn 2018→2019; backlinks added in calibration, pyramid-principle, survivorship-bias
- [x] `#252` **Stakeholder Pre-Wiring** · `Consulting-Craft/stakeholder-pre-wiring.md` · **st:** fixed · **n:** normalized 4 ref formats (Last, F.M./journal → Full Name); backlinks added in power-mapping, influence-without-authority, coalition-building, psychological-safety, commitment-consistency-bias
- [x] `#253` **Structured Problem Solving** · `Consulting-Craft/structured-problem-solving.md` · **st:** fixed · **n:** normalized 5 ref formats; fixed Minto 1987→1985, Conn 2018→2019; backlinks added in one-thing, outcome-vs-output, situation-assessment, confirmation-bias
- [x] `#258` **Coaching Stance** · `Consulting-Craft/coaching-stance.md` · **st:** fixed · **n:** refs and content verified clean; backlink added in psychological-safety
- [x] `#259` **Facilitation** · `Consulting-Craft/facilitation.md` · **st:** fixed · **n:** subtitle verified correct; backlinks added in psychological-safety, situation-assessment, structured-problem-solving

## Pre-built Chains (21)

- [x] `#94` **Pricing Decision** · `Pre-built-Chains/pricing-decision.md` · **st:** verified · **n:** chain card; 7 steps factually sound; no connections/refs expected
- [x] `#95` **Market Entry** · `Pre-built-Chains/market-entry.md` · **st:** verified · **n:** chain card; 8 steps factually sound; no connections/refs expected
- [x] `#96` **Hiring Decision** · `Pre-built-Chains/hiring-decision.md` · **st:** verified · **n:** chain card; 8 steps factually sound; no connections/refs expected
- [x] `#97` **Product Launch** · `Pre-built-Chains/product-launch.md` · **st:** verified · **n:** chain card; 8 steps factually sound; no connections/refs expected
- [x] `#98` **Investment Decision** · `Pre-built-Chains/investment-decision.md` · **st:** verified · **n:** chain card; 8 steps factually sound; no connections/refs expected
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

