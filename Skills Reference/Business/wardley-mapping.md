# Wardley Mapping
*A map that shows not just where things are, but which direction they're moving.*

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Wardley Mapping is a strategic situational-awareness technique developed by Simon Wardley (2005, published 2016). A map has two axes: the vertical **value chain** (anchored at the top by user need, with the components that fulfil it arranged below by dependency) and the horizontal **evolution axis** (components positioned by their maturity stage: Genesis → Custom-built → Product → Commodity/Utility). The key insight is movement: all components evolve rightward over time as practices standardise, supply increases, and competition drives commoditisation. A Wardley Map makes visible not just the current structure of a business or system, but the direction of travel — which is what strategy must respond to.

The technique emerged from Wardley's frustration with strategy tools that described position without movement. A business model canvas tells you what you have; a Wardley Map tells you what is about to change and where the opportunities and threats are forming.

## Mental Model

Imagine a photograph of a river versus a map of the same river showing current direction and speed. The photograph captures the scene; the map shows what will happen next. Traditional strategy tools — value chains, business model canvases, competitive analyses — are photographs. A Wardley Map is closer to the river map: components that sit to the left (Genesis, Custom) are rare, uncertain, and potentially sources of differentiation; components to the right (Product, Commodity) are predictable, replaceable, and should be bought or rented rather than built. The strategic question becomes: what are we building that is already a commodity? What is about to commoditise that we can exploit first? Where is our differentiation actually located, and is it defensible?

The movement principle matters as much as the position: no component stays at Genesis forever. Compute moved from custom-built (mainframes) to product (servers) to commodity (cloud). Each transition creates a wave of disruption: those who treat a commoditising component as a source of differentiation get stranded; those who anticipate the transition and build on the commodity gain leverage.

## Practitioner Heuristics

- **Always anchor to user need.** The map starts with the specific user and what they need — not with what you build. This prevents the common failure of mapping technology for its own sake. If you cannot state the user need at the top, you cannot build a valid map.
- **Position honestly, not aspirationally.** The most common mistake is placing components where you wish they were. Genesis means genuinely novel — fewer than a handful of organisations do this. If you can buy it from a vendor, it is Product or Commodity.
- **Look for what you are building that is already a commodity.** This is the highest-yield question in most enterprise strategy conversations. Custom-building something available as a cloud service is waste; it consumes engineering capacity that could go to genuine differentiation.
- **Identify the components about to move.** Components shift from Custom to Product when vendors emerge; from Product to Commodity when supply becomes abundant and undifferentiated. Being early in that transition — either exploiting the new commodity or building the platform that rides it — is a strategic position.
- **Use the map to make build/buy/partner decisions explicit.** For each component: if it is Commodity, use it; if Product, buy the best; if Custom, evaluate carefully; if Genesis, build only if it is core to your differentiation. Having this conversation with a map on the table changes it from opinion to evidence.
- **Expect disagreement about position.** The act of positioning components surfaces real strategic disagreements. Two people who place "our data platform" at different points on the evolution axis are expressing a substantive disagreement about whether it is a source of differentiation. The map makes that conversation explicit.

## Common Failure Modes

**Mapping without anchoring to user need.** A map that starts with technology or internal capabilities produces a technically interesting picture that does not connect to strategic decisions. The user need anchor is not a formality — it is what makes the map a strategy tool rather than an architecture diagram.

**Ignoring the evolution axis.** Many teams produce value-chain diagrams and call them Wardley Maps. Without honest positioning on the evolution axis, you have described structure but not movement — the least useful part of the technique.

**Treating the map as a finished product.** A map is a thinking tool and a conversation instrument, not a deliverable. If the map does not change a decision or surface a disagreement worth resolving, it was waste.

**Strategic narcissism.** Treating every component as unique and custom-built, because it is "our" system, obscures the reality that most of what a typical enterprise builds is Product or Commodity in disguise. The reluctance to admit this is usually political, not analytical.

**Mapping alone.** The value of a Wardley Map is amplified by the disagreements it surfaces. A map built by one person in a quiet room misses the organisational sense-making that is the technique's most durable output.

## Worked Example

A financial services firm is deciding whether to build a proprietary data platform or adopt a cloud-native alternative. The internal argument: "our data is unique, our processing needs are complex, this is core IP." A Wardley Map of the firm's customer analytics capability surfaces the structure:

- User need (top): customers receive personalised offers in real time
- Components: customer-facing app → ML recommendation engine → feature pipeline → data storage → compute infrastructure

Plotting these on the evolution axis: the app is Custom (differentiating); the ML engine is mid-Product (multiple vendors, open-source alternatives mature); the feature pipeline is Custom-to-Product (several managed services emerging); storage and compute are Commodity (cloud, obviously). The map makes visible that 70% of the team's engineering effort sits at Product and Commodity — bought work, not built work. The "core IP" argument applies only to the ML engine and specific features of the recommendation logic, not to the infrastructure.

Decision: adopt cloud-native data platform and managed ML tooling; redirect 60% of platform engineering to the recommendation layer where differentiation actually exists. Eighteen months later, model quality improves substantially because the team is working on the right problem.

## Connections

→ [**Adjacent Possible**](../Systems/adjacent-possible.md) — Wardley Maps reveal which moves are adjacent: components at the Genesis/Custom boundary are where the adjacent possible is open; Commodity components are closed.
→ [**Disruptive Innovation**](disruptive-innovation.md) — commoditisation is the mechanism Christensen describes from the demand side; Wardley describes it from the supply and evolution side. The two models are complementary diagnostics of the same phenomenon.
→ [**Three Horizons**](three-horizons.md) — Horizon 1 maps to Commodity/Product (manage and extend); Horizon 2 to Custom (transition and build); Horizon 3 to Genesis (explore). The frameworks compose naturally.
→ [**Kernel of Good Strategy**](kernel-of-strategy.md) — a Wardley Map is a tool for developing the "diagnosis" component of Rumelt's kernel; it reveals the structural challenge the guiding policy must address.
→ [**Exploration vs. Exploitation**](../Systems/exploration-vs-exploitation.md) — Genesis/Custom components warrant exploration; Product/Commodity components warrant exploitation. The map tells you which mode applies where.
→ [**Build-Measure-Learn**](../Startups/build-measure-learn.md) — applies at the Genesis/Custom end of the map, where hypothesis testing is the right mode; inappropriate at Commodity, where adoption beats experimentation.
→ [**Scenario Planning**](scenario-planning.md) — Wardley Maps can be projected into the future (where will each component sit in three years?), producing the alternative futures that scenario planning works with.
→ [**Value Creation and Capture**](../Economics/value-creation-capture.md) — evolution along the Wardley axis commoditises components and shifts capture toward those who build on top; mapping reveals where value capture is flowing and why.

## References

- Wardley, S. (2016) *Wardley Maps* — available at medium.com/wardleymaps and learnwardleymapping.com
- Wardley, S. (2020) *Finding a Path* — Chapter series, Bits or Pieces blog
- Moesta, B. & Spiek, C. (2014) — complementary framing on user-need anchoring
- *The Art of War* — Sun Tzu; cited by Wardley as the source of his situational-awareness emphasis

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
