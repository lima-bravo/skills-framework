# Skills Framework — AI Index
<!-- Machine-readable orientation file. Designed for minimal token cost. -->
<!-- Last updated: 2026-07-22 | 268 skills | 16 categories | 1144 graph connections -->

## What this framework is

A library of mental model cards, each as a standalone markdown file. Cards follow a fixed 6-section structure (Definition · Mental Model · Practitioner Heuristics · Common Failure Modes · Worked Example · Connections). Skills connect to each other via the Connections section and a pre-computed graph. 22 cards are pre-built chains (multi-model reasoning sequences for specific decisions.

**Primary use:** Surface the right model(s) for a situation, then apply structured reasoning through heuristics and failure modes.

---

## File navigation

| File | Purpose |
|---|---|
| `skills-manifest.json` | Canonical registry: all skills with id, name, category, file path, hex color |
| `docs/deck.html` | Interactive card deck (browser). Deep-link: `deck.html?open=ID` or `?q=text` |
| `docs/graph.html` | Connection graph — shows how models relate. Best discovery entry point. |
| `docs/situation-finder.html` | Situation-to-skill matcher |
| `training-guide.md` | How to use the framework: tiers, chaining, worked scenarios |
| `skill-primer.md` | Short guide for first-time readers of a single card |
| `{Category}/filename.md` | Individual skill cards — see inventory below |

---

## How to use

1. **For a specific situation:** Check `docs/situation-finder.html` first.
2. **For a topic or keyword:** Search `docs/deck.html?q=your+term` or grep the markdown files.
3. **For a deep read:** Read a card's **Mental Model** paragraph first, then **Practitioner Heuristics**. Skip Definition if the concept is familiar.
4. **For chaining models:** Use a Pre-built Chain card or consult `training-guide.md` for manual chaining patterns.
5. **For connections:** Each card's `## Connections` section names related models. The graph at `docs/graph.html` shows the full network.

---

## Skill inventory by category

Format: `id·Name` — file at `Category/filename.md`

### General Thinking (29 skills) — #3B82F6
`0·First Principles` `1·Inversion` `2·Second-Order Effects` `3·Occam's Razor` `4·Hanlon's Razor` `5·Circle of Competence` `6·Map-Territory` `7·Probabilistic Thinking` `8·Thought Experiment` `9·Socratic Thinking` `10·Pre-mortem` `11·Post-mortem` `12·Asymmetry / Convexity` `13·De Bono's Six Thinking Hats` `14·Ladder of Inference` `15·Regret Minimization Framework` `16·Two-Way Doors` `106·Analogical Reasoning` `107·Divergent and Convergent Thinking` `122·Cynefin Framework` `128·Theory of Change` `171·Causal Analysis` `188·Paradigm Shift` `211·Calibration` `223·Steelmanning` `226·Grice's Maxims` `234·Overton Window` `240·Black Swan` `263·Delete Before You Optimise`

### Systems (24 skills) — #0D9488
`17·Feedback Loops` `18·Bottlenecks` `19·Emergence` `20·Equilibrium` `21·Scale` `22·Critical Mass` `23·Diminishing Returns` `24·Margin of Safety` `25·Churn` `26·Algorithms` `27·Irreducibility` `28·Conway's Law` `29·Red Queen Dilemma` `102·S-Curves` `108·Exploration vs. Exploitation` `109·Adjacent Possible` `208·Drift to Failure` `235·Path Dependence` `243·Dunbar's Number` `260·Fixes That Fail` `261·Systems Thinking` `264·System Archetypes` `265·CATWOE` `267·Requisite Variety`

### Economics (22 skills) — #16A34A
`30·Trade-offs` `31·Scarcity` `32·Specialization` `33·Optimization` `34·Monopoly vs. Competition` `35·Efficiency` `36·Debt` `37·Creative Destruction` `38·Bubbles` `39·Interdependence` `40·Gresham's Law` `120·Goodhart's Law` `121·Principal–Agent Problem` `216·Unit Economics` `217·Value Creation and Capture` `229·Nash Equilibrium` `230·Prisoner's Dilemma` `231·Tragedy of the Commons` `232·Free Rider Problem` `236·Schelling Points` `239·Long Tail` `262·Incentive Design`

### Physics & Chemistry (10 skills) — #EA580C
`41·Leverage` `42·Velocity` `43·Inertia` `44·Friction` `45·Activation Energy` `46·Thermodynamics` `47·Catalysts` `48·Alloying` `49·Reciprocity` `50·Relativity`

### Psychology (26 skills) — #9333EA
`51·Incentives` `52·Loss Aversion` `53·Sunk Cost` `54·Anchoring` `55·Confirmation Bias` `56·Availability Bias` `57·Dunning-Kruger` `58·Maslow's Hierarchy of Needs` `59·McClelland's Acquired Needs Theory` `60·Max-Neef's Fundamental Human Needs` `61·ERG Theory` `101·Trust` `104·Psychological Safety` `115·Planning Fallacy` `167·Immunity to Change` `192·Self-Determination Theory` `199·Survivorship Bias` `200·Fundamental Attribution Error` `201·Hindsight Bias` `202·Social Proof` `203·Narrative Instinct` `204·Falsification` `205·Commitment & Consistency Bias` `206·Base Rate Neglect` `207·SRK Framework` `212·Observer Bias`

### Business (23 skills) — #475569
`68·Business Model Canvas` `69·Value Prop Canvas` `71·Portfolio Map` `72·Experiment Design` `73·Assumption Mapping` `74·Stakeholder Mapping (Salience Model)` `116·Maker's Schedule vs. Manager's Schedule` `123·Scenario Planning` `127·RACI Framework` `166·Kernel of Good Strategy` `210·Wardley Mapping` `218·Business Case Construction` `219·Pricing Logic` `220·Power Mapping` `224·Red Teaming` `225·A/B Testing` `241·Parkinson's Law` `247·Growth Barriers` `248·Profit Pool Analysis` `249·Customer Segmentation` `250·KPI Architecture` `251·Value Realization` `254·Playing to Win`

### Innovation & Entrepreneurship (23 skills) — #DC2626
`62·Product-Market Fit` `63·Build-Measure-Learn` `64·MVP` `65·Pivot or Persevere` `66·Customer Development` `67·Innovation Accounting` `70·Innovation Funnel` `103·Jobs to Be Done` `110·Design Thinking` `111·Crossing the Chasm` `112·Disruptive Innovation` `113·Three Horizons` `172·Ambidextrous Organization` `173·Dominant Logic` `174·Open Innovation` `175·Effectuation` `176·Organizational Slack` `179·Innovation Health Indicators` `180·Opportunity Solution Trees` `181·Pretotyping` `182·Continuous Discovery` `189·Experiment Ladder` `237·Cobra Effect`

### Mathematics (11 skills) — #4F46E5
`75·Compounding` `76·Local Maxima` `77·Regression to the Mean` `78·Randomness` `79·Sampling` `80·Surface Area` `81·Multiply by Zero` `227·Expected Value` `228·Bayesian Updating` `233·Fermi Estimation` `238·Power Law`

### Network Effects (4 skills) — #CA8A04
`82·Network Effects` `83·Viral Growth` `84·Marketplace` `85·Defensibility`

### Learning (6 skills) — #059669
`86·Model Chaining` `87·T-Shaped` `88·Five-Hour Rule` `89·Learning Transfer` `105·Pre-built Chains` `114·Deep Work / Cognitive Capacity`

### Art (4 skills) — #DB2777
`90·Audience` `91·Framing` `92·Contrast` `93·Rhythm`

### Delivery & Flow (33 skills) — #0891B2
`131·Little's Law` `132·WIP Limits` `133·Flow Efficiency vs Resource Efficiency` `134·Lead Time vs Cycle Time` `135·Queueing & Wait Time` `136·Batch Size Reduction` `137·Cost of Delay` `138·Kanban Method` `139·Value Stream Mapping` `140·Statistical Variability` `141·Probabilistic Forecasting` `142·DORA Metrics` `143·Flow Metrics` `144·Outcome vs Output` `145·A3 Problem Solving` `146·PDCA` `147·Gemba` `148·Attention Budget` `149·Context-Switching Cost` `150·Cognitive Load (Team)` `151·Strategic Prioritization (“One Thing”)` `152·OKRs` `153·Kill Criteria` `154·Team Topologies` `155·Inverse Conway Maneuver` `156·Dependency Management` `157·Feature Factory vs Product Orientation` `158·Lean Portfolio Management` `159·WSJF` `160·Reference Class Forecasting` `209·Empirical Process Control` `255·Technical Debt` `256·Reliability vs. Feature Velocity`

### Consulting Craft (10 skills) — #7C3AED
`161·Hypothesis-Driven Consulting` `162·MECE` `163·Pyramid Principle` `164·Engagement Lifecycle` `165·Contracting & Scope` `246·Situation Assessment` `252·Stakeholder Pre-Wiring` `253·Structured Problem Solving` `258·Coaching Stance` `259·Facilitation`

### Pre-built Chains (22 skills) — #B45309
`94·Pricing Decision` `95·Market Entry` `96·Hiring Decision` `97·Product Launch` `98·Investment Decision` `99·Should I Quit` `100·Life Decision` `117·Capacity Planning` `130·Transformation Chain` `168·Improve Delivery Flow` `169·Org Design for Flow Diagnostic` `170·Work to Be Done` `177·Innovation Capability Diagnostic` `178·Design and Launch an Innovation Program` `186·AI Agent Governance Design` `187·AI Use Case Autonomy Assessment` `198·Mission Execution Protocol` `213·From Idea to Hypothesis` `214·Crawl / Walk / Run` `244·Organisational Degradation Scan` `245·Funnel Intake` `266·DRRT Systems Analysis`

### Leadership (17 skills) — #1E40AF
`118·Mission Command` `119·OODA Loop` `124·Organizational Culture` `125·Change Management` `126·Risk Management` `129·Board Governance` `190·Three-Question Ritual` `191·Async-First Default` `193·Purpose Clarity` `194·Leader's Intent` `195·Brief-Back Protocols` `196·After-Action Review` `197·Tactical Pause` `221·Influence Without Authority` `222·Coalition Building` `242·Peter Principle` `257·Span of Control`

### Applied AI (4 skills) — #0369A1
`183·AI Authority Boundaries` `184·Minimal Capability Principle` `185·Prompt Injection` `268·AI Tool Teardown`

## High-signal clusters (for model chaining)

| Situation type | Start here |
|---|---|
| Decision under uncertainty | 7·Probabilistic Thinking → 10·Pre-mortem → 12·Asymmetry/Convexity |
| Post-mortem / learning review | 196·After-Action Review → 201·Hindsight Bias → 200·FAE → 207·SRK Framework |
| System is quietly degrading | 208·Drift to Failure → 120·Goodhart's Law → 197·Tactical Pause |
| Problem recurs despite repeated fixes | 264·System Archetypes → 171·Causal Analysis → 260·Fixes That Fail |
| Messy problem, stakeholders disagree what it even is | 265·CATWOE → 246·Situation Assessment → 122·Cynefin Framework |
| System misbehaving — analyse the structure before fixing | Chain 266·DRRT Systems Analysis (Deconstruct → Relationships → Recognise → Test) |
| Rule/process keeps failing on exceptions | 267·Requisite Variety → 118·Mission Command → 122·Cynefin Framework |
| Forecast feels optimistic | 206·Base Rate Neglect → 160·Reference Class Forecasting → 115·Planning Fallacy |
| Belief needs stress-testing | 223·Steelmanning → 204·Falsification → 224·Red Teaming |
| Plan needs adversarial challenge | 10·Pre-mortem → 224·Red Teaming → 204·Falsification |
| Hypothesis needs live evidence | 225·A/B Testing → 72·Experiment Design → 63·Build-Measure-Learn |
| Confidence levels need auditing | 211·Calibration → 7·Probabilistic Thinking → 5·Circle of Competence |
| Evaluation at risk of bias | 212·Observer Bias → 72·Experiment Design → 204·Falsification |
| Change resistance | 205·Commitment & Consistency Bias → 167·Immunity to Change → 125·Change Management |
| Delivery flow broken | 18·Bottlenecks → 132·WIP Limits → 131·Little's Law → 133·Flow Efficiency |
| Innovation programme | Chain 177 → Chain 178 → 113·Three Horizons |
| Raw idea needs enrichment before the funnel | Chain 245·Funnel Intake → Chain 213·From Idea to Hypothesis → Chain 214·Crawl / Walk / Run |
| Funnel idea needs a hypothesis | Chain 213·From Idea to Hypothesis → Chain 214·Crawl / Walk / Run |
| Business case needs stress-testing | 218·Business Case Construction → 160·Reference Class Forecasting → 211·Calibration |
| Need to move something without rank | 220·Power Mapping → 221·Influence Without Authority → 222·Coalition Building |
| Communication pitched at wrong level | 226·Grice's Maxims → 163·Pyramid Principle → 90·Audience |
| Pricing decision | 217·Value Creation and Capture → 219·Pricing Logic → Chain 94·Pricing Decision |
| Running a staged experiment | Chain 214·Crawl / Walk / Run — crawl (does it work?) → walk (well enough?) → run (real data?) |
| AI deployment governance | Chain 187 → Chain 186 → 183·AI Authority Boundaries |
| Strategic interaction / why cooperation fails | 229·Nash Equilibrium → 230·Prisoner's Dilemma → 51·Incentives |
| Coordination without communication | 236·Schelling Points → 229·Nash Equilibrium → 91·Framing |
| Change that keeps hitting a wall | 234·Overton Window → 222·Coalition Building → 125·Change Management |
| System that resists change structurally | 235·Path Dependence → 43·Inertia → 16·Two-Way Doors |
| Sizing an unknown opportunity | 233·Fermi Estimation → 227·Expected Value → 211·Calibration |
| Shared good degrading / underinvestment | 232·Free Rider Problem → 231·Tragedy of the Commons → 51·Incentives |
| New strategy question, before solutioning | 246·Situation Assessment → 253·Structured Problem Solving → 161·Hypothesis-Driven Consulting |
| Growth has stalled | 246·Situation Assessment → 247·Growth Barriers → 18·Bottlenecks |
| Recommendation needs to land in the room | 252·Stakeholder Pre-Wiring → 74·Stakeholder Mapping (Salience Model) → 163·Pyramid Principle |
| Investment approved — now make it stick | 218·Business Case Construction → 251·Value Realization → 153·Kill Criteria |
| Change programme may be sustaining the problem | 237·Cobra Effect → 120·Goodhart's Law → 10·Pre-mortem |
| Risk model may be missing tail events | 240·Black Swan → 238·Power Law → 24·Margin of Safety |
| Organisation scaling and degrading | 244·Organisational Degradation Scan → 130·Transformation Chain |
| Market concentration / winner-take-most | 238·Power Law → 82·Network Effects → 85·Defensibility |
| Platform or marketplace strategy | 239·Long Tail → 84·Marketplace → 82·Network Effects |
| Shared resource degrading | 231·Tragedy of the Commons → 120·Goodhart's Law → 51·Incentives |
| Decision under uncertainty (quantitative) | 227·Expected Value → 228·Bayesian Updating → 211·Calibration |

---

*Skills Framework · 268 skills · 16 categories · `skills-manifest.json` is authoritative*
