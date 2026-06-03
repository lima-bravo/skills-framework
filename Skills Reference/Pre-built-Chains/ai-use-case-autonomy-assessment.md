# AI Use Case Autonomy Assessment
*Determining what level of AI autonomy is appropriate and what governance it requires*

**Category:** [Pre-built Chains](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## When to Use

Use this chain when evaluating a proposed AI use case — whether your own lab is building it, a client is proposing it, or you are reviewing a vendor's deployment. The goal is to move from "should we use AI for this?" to a specific answer about what autonomy level is appropriate and what governance architecture is required before deployment can responsibly proceed.

This chain runs upstream of [AI Agent Governance Design](ai-agent-governance-design.md), which addresses how to design the governance architecture once the autonomy level is confirmed. Use this chain to answer whether, and at what level; use the governance design chain to answer how.

---

## Step 1 — Define the Scope of Delegated Authority

Before evaluating anything else, state precisely what the AI is being asked to decide, act, and commit — not at a high level ("manage customer queries") but at the level of specific actions with real-world effects.

For each proposed action, specify: What data does the AI read? What output does it produce? What real-world action does that output trigger? Who or what receives that output and acts on it?

This step frequently reveals that proposals are underspecified. "Automate contract review" might mean: (a) AI flags issues for a lawyer who decides, (b) AI approves standard contracts without review, or (c) AI routes contracts to different approval workflows. These have radically different authority scopes. Get specific before proceeding.

Use [MECE](../Consulting-Craft/mece.md) to decompose the use case into non-overlapping action components. If components have different consequence classes, assess them separately.

---

## Step 2 — Identify Professional and Regulatory Accountability

Ask: who is accountable if the AI's output is wrong?

In professional contexts (legal, medical, financial, HR), specific accountability is conferred by professional status, license, or employment relationship — and that accountability cannot be delegated to software. A lawyer is accountable for the advice the firm gives; an AI tool is not. A doctor carries liability for the diagnosis; the AI system does not. This has operational implications: wherever professional accountability applies, a human must be in the loop at the decision point — not merely "available to review" but genuinely making the decision and able to explain it.

Map each action component to its accountability owner. Identify: Is there a professional or regulatory accountability requirement attached to this output? If yes, the AI role is necessarily advisory — it prepares the path, the human chooses the road. Autonomy above "draft and recommend" is not appropriate regardless of AI capability.

This step also reveals regulatory constraints: data privacy rules that limit how external content may be processed, sector-specific AI governance requirements, and jurisdiction-specific constraints on automated decision-making. Surface these before architectural decisions are made.

---

## Step 3 — Assess Reversibility

For each action, apply the [Two-Way Doors](../General-Thinking/two-way-doors.md) lens. Two-way door actions are easily reversed with low cost — the AI can be corrected and the damage undone. One-way door actions are difficult or impossible to reverse — once taken, the cost of correction is high, or correction is not possible.

One-way door actions require human approval before execution, regardless of the AI's confidence level. The convenience of automation does not override the irreversibility of the action. Common examples: sending external communications (cannot be unsent), filing legal documents (cannot be unfiled without consequence), releasing funds (not trivially reversed), updating authoritative records that others act on.

Weight the reversibility assessment by consequence: a reversible action with high visibility to external parties may be effectively irreversible in terms of reputation. A low-cost financial action that is technically reversible but triggers a cascade of dependencies may be practically irreversible.

---

## Step 4 — Identify the Attack Surface and Injection Risk

Map every point where external, untrusted content enters the system: uploaded documents, third-party API responses, web content retrieved by the agent, user-provided data. For each entry point, ask: if this content were designed to redirect the agent's behavior, what could it cause the agent to do?

Apply [Prompt Injection](../Applied-AI/prompt-injection.md): hostile content in external data can smuggle instructions that redirect agent behavior. The risk is not hypothetical for any system that processes documents from counterparties, customers, or external sources. The attack surface is proportional to: the volume and diversity of external content processed, the autonomy level of the agent processing it, and the consequence class of the actions the agent can take.

For each high-risk entry point, note: what structural defense (labeled data blocks, schema-constrained channels, mechanical verification) is required? If no structural defense exists in the current proposal, flag it as a blocking gap.

---

## Step 5 — Determine the Appropriate Autonomy Level

Synthesize the findings from Steps 1–4 to assign an autonomy level recommendation for each action component:

**Advisory only.** The AI produces drafts, flags, and recommendations. A human decides and commits all consequential actions. Appropriate when: professional accountability applies, actions are one-way doors, or injection risk is high with inadequate structural defenses.

**Gated automation.** The AI acts autonomously within a defined scope of two-way-door actions, with human review gates at defined consequential decision points. Appropriate when: no professional accountability applies, most actions are reversible, injection risk is managed, and the gate points are clearly defined and reliably enforced.

**Full automation.** The AI acts autonomously with no human review of individual outputs. Appropriate only when: no professional accountability applies, all actions are two-way doors, injection risk is structurally mitigated, the system has been operating at gated automation level with demonstrated reliability, and economic/temporal/contextual restraints (Registers 4–6) are in place.

The most common assessment error is proposing full automation for a use case that should be gated automation, or gated automation for one that should be advisory only. The assessment should anchor on the most consequential and least reversible action in the scope — not the average case.

---

## Step 6 — Identify the Governance Gaps

Compare the proposed deployment against the recommended autonomy level and the governance requirements it implies. Use [AI Authority Boundaries](../Applied-AI/ai-authority-boundaries.md) to check systematically against all six registers.

Produce a gap list: for each register, what does the recommended governance require, and what does the current proposal have? Classify each gap as:
- **Blocking:** the system should not be deployed at the proposed autonomy level without closing this gap.
- **Significant:** the system can be deployed but the gap increases risk substantially and should be closed within a defined timeframe.
- **Minor:** noted for improvement but not immediately risk-bearing.

Blocking gaps typically include: Tier 3 actions with only Register 1 gates; Type C (headless) components with no capability enforcement; agent-to-agent handoffs with no code-level validators; absence of an audit trail; no halt mechanism for headless components.

---

## Step 7 — Recommend the Governance Model

Produce a written recommendation covering:

1. **Confirmed autonomy level** for each action component, with reasoning.
2. **Required governance architecture** — which registers are required, at what points.
3. **Blocking gaps** that must be closed before deployment.
4. **Human touchpoints** — where human review is required, who performs it, and what the review is expected to catch.
5. **Evaluation harness** — how will the system's behavior be monitored after deployment? What anomaly signals trigger review? What is the cadence of governance review?
6. **Escalation path** — when the system reaches the edge of its authorized scope, what happens? Who is notified, through what channel, in what timeframe?

The recommendation should be legible to the accountability owner identified in Step 2 — the lawyer, executive, or professional whose reputation and liability attach to the system's outputs. If they cannot understand the governance model, the governance model is not yet complete.

---

## Step 8 — Define the Evaluation Harness

A governance model without an evaluation harness is a policy document, not an operational control. Before the system goes live, define:

**Baseline behavior tests:** a set of cases with known correct outputs that are run against the system before and after any change to the agent configuration, prompts, or tool grants. A change that shifts baseline behavior is a governance event, not just a technical change.

**Red-team scenarios:** cases designed to test injection resistance, capability boundary enforcement, and gate reliability. Run these at deployment and on a recurring schedule.

**Monitoring signals:** what in the audit log would indicate anomalous behavior — unusually high rejection rates, unusually large handoff payloads, tool calls in unexpected sequences, halts triggered at abnormal frequencies? Define these signals before they occur.

**Review cadence:** who reviews the audit log, on what schedule, and against what criteria? The review should be performed by someone with accountability for the system, not only by the engineering team.

Run a [Pre-mortem](../General-Thinking/pre-mortem.md) at this stage: assume the system causes a significant incident six months from now. What does that incident look like, and which step of this chain would have caught it?

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
