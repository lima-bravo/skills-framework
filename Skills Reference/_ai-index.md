# Skills Framework — AI Index
<!-- Machine-readable orientation file. Designed for minimal token cost. -->
<!-- Last updated: 2026-05-25 | 209 skills | 16 categories | 688+ graph connections -->

## What this framework is

A library of 209 mental models, each as a standalone markdown card. Cards follow a fixed 6-section structure (Definition · Mental Model · Practitioner Heuristics · Common Failure Modes · Worked Example · Connections). Skills connect to each other via the Connections section and a pre-computed graph. 17 cards are pre-built chains (multi-model reasoning sequences for specific decisions).

**Primary use:** Surface the right model(s) for a situation, then apply structured reasoning through heuristics and failure modes.

---

## File navigation

| File | Purpose |
|---|---|
| `skills-manifest.json` | Canonical registry: all skills with id, name, category, file path, hex color |
| `index.html` | Interactive card deck (browser). Deep-link: `index.html?open=ID` or `?q=text` |
| `graph.html` | Connection graph — shows how models relate. Best discovery entry point. |
| `situation-finder.html` | Situation-to-skill matcher. 47 situations → recommended skill clusters |
| `training-guide.md` | How to use the framework: tiers, chaining, worked scenarios |
| `skill-primer.md` | Short guide for first-time readers of a single card |
| `{Category}/filename.md` | Individual skill cards — see inventory below |

---

## How to use

1. **For a specific situation:** Check `situation-finder.html` first — 47 common workplace situations mapped to skill clusters.
2. **For a topic or keyword:** Search `index.html?q=your+term` or grep the markdown files.
3. **For a deep read:** Read a card's **Mental Model** paragraph first, then **Practitioner Heuristics**. Skip Definition if the concept is familiar.
4. **For chaining models:** Use a Pre-built Chain card (ids 94–100, 117, 130, 168–170, 177–178, 186–187, 198) or consult `training-guide.md` for manual chaining patterns.
5. **For connections:** Each card's `## Connections` section names related models. The graph at `graph.html` shows the full network.

---

## Skill inventory by category

Format: `id·Name` — file at `Category/filename.md`

### General Thinking (23 skills) — #3B82F6
`0·First Principles` `1·Inversion` `2·Second-Order Effects` `3·Occam's Razor` `4·Hanlon's Razor` `5·Circle of Competence` `6·Map-Territory` `7·Probabilistic Thinking` `8·Thought Experiment` `9·Socratic Thinking` `10·Pre-mortem` `11·Post-mortem` `12·Asymmetry/Convexity` `13·De Bono's Six Thinking Hats` `14·Ladder of Inference` `15·Regret Minimization Framework` `16·Two-Way Doors` `106·Analogical Reasoning` `107·Divergent and Convergent Thinking` `122·Cynefin Framework` `128·Theory of Change` `171·Causal Analysis` `188·Paradigm Shift`

### Systems (17 skills) — #0D9488
`17·Feedback Loops` `18·Bottlenecks` `19·Emergence` `20·Equilibrium` `21·Scale` `22·Critical Mass` `23·Diminishing Returns` `24·Margin of Safety` `25·Churn` `26·Algorithms` `27·Irreducibility` `28·Conway's Law` `29·Red Queen Dilemma` `102·S-Curves` `108·Exploration vs. Exploitation` `109·Adjacent Possible` `208·Drift to Failure`

### Economics (13 skills) — #16A34A
`30·Trade-offs` `31·Scarcity` `32·Specialization` `33·Optimization` `34·Monopoly vs. Competition` `35·Efficiency` `36·Debt` `37·Creative Destruction` `38·Bubbles` `39·Interdependence` `40·Gresham's Law` `120·Goodhart's Law` `121·Principal–Agent Problem`

### Physics & Chemistry (10 skills) — #EA580C
`41·Leverage` `42·Velocity` `43·Inertia` `44·Friction` `45·Activation Energy` `46·Thermodynamics` `47·Catalysts` `48·Alloying` `49·Reciprocity` `50·Relativity`

### Psychology (25 skills) — #9333EA
`51·Incentives` `52·Loss Aversion` `53·Sunk Cost` `54·Anchoring` `55·Confirmation Bias` `56·Availability Bias` `57·Dunning-Kruger` `58·Maslow's Hierarchy of Needs` `59·McClelland's Acquired Needs Theory` `60·Max-Neef's Fundamental Human Needs` `61·ERG Theory` `101·Trust` `104·Psychological Safety` `115·Planning Fallacy` `167·Immunity to Change` `192·Self-Determination Theory` `199·Survivorship Bias` `200·Fundamental Attribution Error` `201·Hindsight Bias` `202·Social Proof` `203·Narrative Instinct` `204·Falsification` `205·Commitment & Consistency Bias` `206·Base Rate Neglect` `207·SRK Framework`

### Innovation & Entrepreneurship (22 skills) — #DC2626
`62·Product-Market Fit` `63·Build-Measure-Learn` `64·MVP` `65·Pivot or Persevere` `66·Customer Development` `67·Innovation Accounting` `70·Innovation Funnel` `103·Jobs to Be Done` `110·Design Thinking` `111·Crossing the Chasm` `112·Disruptive Innovation` `113·Three Horizons` `172·Ambidextrous Organization` `173·Dominant Logic` `174·Open Innovation` `175·Effectuation` `176·Organizational Slack` `179·Innovation Health Indicators` `180·Opportunity Solution Trees` `181·Pretotyping` `182·Continuous Discovery` `189·Experiment Ladder`

### Business (10 skills) — #475569
`68·Business Model Canvas` `69·Value Prop Canvas` `71·Portfolio Map` `72·Experiment Design` `73·Assumption Mapping` `74·Stakeholder Mapping (Salience Model)` `116·Maker's Schedule vs. Manager's Schedule` `123·Scenario Planning` `127·RACI Framework` `166·Kernel of Good Strategy`

### Mathematics (7 skills) — #4F46E5
`75·Compounding` `76·Local Maxima` `77·Regression to the Mean` `78·Randomness` `79·Sampling` `80·Surface Area` `81·Multiply by Zero`

### Network Effects (4 skills) — #CA8A04
`82·Network Effects` `83·Viral Growth` `84·Marketplace` `85·Defensibility`

### Learning (6 skills) — #059669
`86·Model Chaining` `87·T-Shaped` `88·Five-Hour Rule` `89·Learning Transfer` `105·Pre-built Chains` `114·Deep Work / Cognitive Capacity`

### Art (4 skills) — #DB2777
`90·Audience` `91·Framing` `92·Contrast` `93·Rhythm`

### Delivery & Flow (30 skills) — #0891B2
`131·Little's Law` `132·WIP Limits` `133·Flow Efficiency vs Resource Efficiency` `134·Lead Time vs Cycle Time` `135·Queueing & Wait Time` `136·Batch Size Reduction` `137·Cost of Delay` `138·Kanban Method` `139·Value Stream Mapping` `140·Statistical Variability` `141·Probabilistic Forecasting` `142·DORA Metrics` `143·Flow Metrics` `144·Outcome vs Output` `145·A3 Problem Solving` `146·PDCA` `147·Gemba` `148·Attention Budget` `149·Context-Switching Cost` `150·Cognitive Load (Team)` `151·Strategic Prioritization ("One Thing")` `152·OKRs` `153·Kill Criteria` `154·Team Topologies` `155·Inverse Conway Maneuver` `156·Dependency Management` `157·Feature Factory vs Product Orientation` `158·Lean Portfolio Management` `159·WSJF` `160·Reference Class Forecasting`

### Consulting Craft (5 skills) — #7C3AED
`161·Hypothesis-Driven Consulting` `162·MECE` `163·Pyramid Principle` `164·Engagement Lifecycle` `165·Contracting & Scope`

### Pre-built Chains (17 skills) — #B45309
`94·Pricing Decision` `95·Market Entry` `96·Hiring Decision` `97·Product Launch` `98·Investment Decision` `99·Should I Quit` `100·Life Decision` `117·Capacity Planning` `130·Transformation Chain` `168·Improve Delivery Flow` `169·Org Design for Flow Diagnostic` `170·Work to Be Done` `177·Innovation Capability Diagnostic` `178·Design and Launch an Innovation Program` `186·AI Agent Governance Design` `187·AI Use Case Autonomy Assessment` `198·Mission Execution Protocol`

### Leadership (13 skills) — #1E40AF
`118·Mission Command` `119·OODA Loop` `124·Organizational Culture` `125·Change Management` `126·Risk Management` `129·Board Governance` `190·Three-Question Ritual` `191·Async-First Default` `193·Purpose Clarity` `194·Leader's Intent` `195·Brief-Back Protocols` `196·After-Action Review` `197·Tactical Pause`

### Applied AI (3 skills) — #0369A1
`183·AI Authority Boundaries` `184·Minimal Capability Principle` `185·Prompt Injection`

---

## High-signal clusters (for model chaining)

| Situation type | Start here |
|---|---|
| Decision under uncertainty | 7·Probabilistic Thinking → 10·Pre-mortem → 12·Asymmetry/Convexity |
| Post-mortem / learning review | 196·After-Action Review → 201·Hindsight Bias → 200·FAE → 207·SRK Framework |
| System is quietly degrading | 208·Drift to Failure → 120·Goodhart's Law → 197·Tactical Pause |
| Forecast feels optimistic | 206·Base Rate Neglect → 160·Reference Class Forecasting → 115·Planning Fallacy |
| Belief needs stress-testing | 204·Falsification → 55·Confirmation Bias → 7·Probabilistic Thinking |
| Change resistance | 205·Commitment & Consistency Bias → 167·Immunity to Change → 125·Change Management |
| Delivery flow broken | 18·Bottlenecks → 132·WIP Limits → 131·Little's Law → 133·Flow Efficiency |
| Innovation programme | Chain 177 → Chain 178 → 113·Three Horizons |
| AI deployment governance | Chain 187 → Chain 186 → 183·AI Authority Boundaries |

---

*Skills Framework · 209 skills · 16 categories · `skills-manifest.json` is authoritative*
