---
id: 169
name: Org Design for Flow Diagnostic
category: Pre-built Chains
cardType: chain
tagline: Org Design for Flow Diagnostic
connections:
  - id: 244
    rationale: Organisational Degradation Scan feeds into this chain when Conway's Law is identified as the primary degradation mechanism
---

# Org Design for Flow Diagnostic

**Category:** [Pre-built Chains](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Step 1 — Value Stream Mapping: What are the actual streams of value?

Before any team conversation, list the value streams the org serves — by customer journey, by product, by regulated process. Each stream has a customer at the end of it. The list often surprises leaders who navigate by org chart rather than by customer flow. Distinguish customer-facing streams from internal ones.

---

## Step 2 — Conway's Law: What does the current org produce architecturally?

Map current teams to the current architecture / process. Note where one team owns multiple streams (overload), where one stream is split across many teams (handoff hell), and where teams exist that don't map to any stream at all (legacy structures). Conway's Law guarantees the current architecture mirrors the current org; the question is whether either is what you want.

---

## Step 3 — Cognitive Load (Team): How much surface area does each team carry?

For each existing team, list domains, services, technologies, stakeholder groups, and operational responsibilities. Teams whose list runs past one page are almost certainly overloaded — symptoms include long onboarding, brittle knowledge concentration, chronic firefighting, slow flow. The diagnosis is structural, not personal.

---

## Step 4 — Dependency Management: Where are the cross-team blockers?

Build the dependency map across teams. Identify high-fan-in teams that 5+ other teams depend on; these are scaled-delivery bottlenecks. Quantify recurring dependencies per quarter and the average age of in-flight dependencies; both metrics name the cost of the current shape.

---

## Step 5 — Team Topologies: What is the target shape?

Design the target org using the four types — stream-aligned (own one stream end-to-end), platform (reduce extraneous load for streams), enabling (capability uplift, temporary), complicated-subsystem (deep specialist work) — and the three interaction modes (collaboration, X-as-a-Service, facilitating). Each team gets one type and named interactions. The target should reduce cognitive load per stream-aligned team and structurally remove the dependencies surfaced in Step 4.

---

## Step 6 — Inverse Conway Maneuver: Reshape teams to produce the desired architecture.

If the target architecture demands loose coupling, the team boundary has to enforce it. Move responsibilities along stream lines; split or merge teams to match. Hold the new boundaries for 12–18 months — the architecture follows the formwork slowly. Reorganizing every six months prevents the new shape from setting.

---

## Step 7 — Organizational Culture: What culture changes does the new shape demand?

Structure alone does not produce flow. Stream-aligned teams need authority to make end-to-end decisions; platform teams need product mindset, not service-desk; enabling teams must withdraw on a clock. Surface the cultural changes required and pair them with the structural ones; doing only one half fails predictably.

---

## Step 8 — DORA Metrics: How will we know the new shape is working?

Instrument the new topology with DORA (for software streams) and Flow Metrics at the value-stream level. Set a six-month and 18-month target. The structural redesign should show as: shorter lead time for changes, fewer cross-team dependencies, lower change failure rate, smaller cognitive-load surface area per team. The metrics are the runway light at the end of the reorg.

**Key failure modes to avoid:** renaming teams without changing scope or interactions; designing platforms top-down as mandates; treating cognitive load as personal fragility; reorganizing every two quarters before the architecture has time to follow.

---

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
