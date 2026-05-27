---
name: "ai-agent-governance-design"
description: "Designs the governance structure for an AI agent deployment: authority levels, escalation paths, monitoring, and override protocols. Use when deploying autonomous AI in a business context."
metadata:
  framework-source: "Pre-built-Chains/ai-agent-governance-design.md"
  plugin: "applied-ai"
  version: "1.0.0"
  invocation: "manual"
---

> **Invocation:** Run only when the user explicitly requests this chain (e.g. `/ai-agent-governance-design`) or a matching high-stakes decision. Do not auto-invoke for general questions.

# AI Agent Governance Design

Run this chain in order. Require concrete written answers per step before advancing. Do not skip steps because they are uncomfortable.

## Before you start

- Confirm the decision or improvement scope in one sentence.
- List what evidence is already available vs. what must be gathered.
- State the stakeholder and time horizon.

## Workflow

### Step 1 — Classify the Autonomy Level

Before any governance design, establish clearly what kind of system this is. Three archetypes matter:

**Type A — Conversational, human-in-loop.** A human reads every output before any action is taken. The agent drafts, recommends, and flags; a person decides and commits.

**Type B — Partially automated, gated.** The agent takes some actions autonomously (classification, retrieval, draft generation) but human review gates are present at consequential decision points.

**Type C — Headless autonomous.** The system runs unattended — on a schedule, in response to events, or as part of a pipeline — with no human reviewing outputs before actions are committed.

Many systems are composite: Type A for some workflows, Type C for others. Classify each workflow or capability separately. The classification determines which registers of restraint are required — apply [AI Authority Boundaries](../Applied-AI/ai-authority-boundaries.md).

### Step 2 — Map Actions by Consequence Class

List every action the system can take. For each action, answer two questions: (1) Is this action reversible or irreversible? (2) What is the consequence of an error?

Organize actions into three tiers:

**Tier 1 — Read and draft.** The agent reads data and produces text. No external commitment is made. Errors are visible and correctable before any action is taken.

**Tier 2 — Internal write and route.** The agent creates records, files tickets, updates databases, or sends internal communications. Actions are semi-reversible with some effort.

**Tier 3 — External commit and release.** The agent sends external communications, approves transactions, releases documents to third parties, or takes actions with legal or financial effect. Actions are difficult or impossible to reverse.

Use [Two-Way Doors](../General-Thinking/two-way-doors.md) to calibrate each action. Tier 3 actions require the hardest gates regardless of the overall system autonomy level.

### Step 3 — Select Registers for Each Action Class

Apply the escalation rule: **the more autonomous the action, the harder the gate must be.** For each action tier and autonomy type, determine the minimum required register:

- Tier 1 actions in Type A systems: Register 1 (prompt-and-workflow) is sufficient.
- Tier 2 actions in Type B systems: Register 2 (capability enforcement) required; Register 1 as a supplement.
- Tier 3 actions in any system: Register 3 (code enforcement) required; Registers 1 and 2 as supplements.
- Type C systems at any tier: Register 2 minimum; Register 3 for any action with external effect.

Document this mapping. It is the governance design specification.

### Step 4 — Design Capability Grants (Register 2)

For each agent in the system, specify exactly which tools it needs for its specific task at its specific stage — and nothing else. Apply the [Minimal Capability Principle](../Applied-AI/minimal-capability-principle.md).

Work through three questions per agent:
- What does this agent need to read? Grant only those specific read tools.
- What does this agent need to write? Grant only the specific write destination(s) required.
- What external systems does this agent need to reach? Grant only named MCP connectors or API tools, not general web access if specific endpoints suffice.

Produce a capability grant manifest: a table listing each agent, its allowed tools, and the justification for each grant. Any tool not on the manifest is not granted. This document is a governance artifact — it should be readable by a non-technical principal and reviewed before deployment.

Verify that the agent that reads untrusted external content does not share write tools with the agent that produces the deliverable. If a single agent must do both, treat it as a Type C headless system regardless of the overall design.

### Step 5 — Design Code-Level Validators (Register 3)

For every agent-to-agent handoff, and for every place where external content enters the system, design the structural validator that fires before the downstream model is invoked.

For agent-to-agent handoffs, define:
- **Target allowlist:** the set of agent names that may receive a handoff. Unlisted targets are rejected.
- **Intent enumeration:** the closed set of action types the system may request. Unknown intents are rejected.
- **Per-intent parameter schemas:** regex-constrained typed schemas for each parameter. Slug-shaped patterns for identifiers (no spaces, no natural language).
- **Prompt construction:** the downstream agent's steering prompt is rendered from a typed template with validated parameter interpolation. Agent-supplied free text never becomes a steering prompt; it is labeled as data in a tagged block.

For external content entry points, define:
- **Labeled data blocks:** external content is wrapped in a tagged container with an explicit instruction that the block contains data, not instructions.
- **Mechanical verification:** any fact that can be checked programmatically (quote verbatim in source, URL passes SSRF check, date within valid range) is checked by code, not by model inference.

Produce a validator specification for each handoff point and each external content entry point.

### Step 6 — Install Economic and Temporal Restraints (Registers 4 and 5)

For any Type B or Type C component:

**Economic restraint:** Define a per-session or per-run budget cap in API tokens or cost units. The cap is enforced by a check before each tool call — the session halts rather than overspends. The cap should be set based on the expected cost of a normal run with a reasonable buffer; it is not a tight limit but a runaway-prevention floor.

**Temporal restraint:** Implement an external halt mechanism — a liveness switch or control flag that can be set from outside the agent's reasoning loop to halt execution on the next tool call. Define an auto-halt threshold for idle sessions (typically five minutes without a tool call completing). Document the halt procedure: who can trigger it, how, and what state the system leaves behind.

### Step 7 — Design Contextual Permission Modulation (Register 6)

Review the workflow stages. For each stage, ask: which tools that were appropriate in an earlier stage should be removed at this stage?

Common patterns:
- Remove web fetch and external search tools once the agent reaches analysis or drafting (no new external retrieval should be needed).
- Remove write tools during review and approval stages (the agent should flag and recommend, not act).
- Remove messaging and external communication tools until the output has passed a quality gate.

Design the permission modulation as a workflow-phase trigger, not a model instruction. The tools are removed from the agent's grant at transition; they are not just instructed to not use them.

### Step 8 — Define the Audit Trail

Every governance architecture requires an audit trail. Define:
- **What is logged:** every handoff (accepted and rejected), every tool call, every gate trigger, every error and exception. Log both sides: what was attempted and what was decided.
- **Format:** append-only JSONL (one record per line, trivially greppable, not subject to silent modification). Not a database table that can be updated; an append-only log.
- **Retention and access:** who reads the log, on what cadence, and what conditions trigger an audit review. The log is a governance artifact — it should be reviewed by someone with accountability for the system's behavior, not just the engineering team.
- **Anomaly signals:** what patterns in the log would indicate an injection attempt, a runaway agent, an authorization overreach, or a capability failure? Define these before deployment so the review is purposeful.

### Step 9 — Design the Escalation Path

Define explicitly what the system does when it reaches the edge of its authorized scope:

- When the agent lacks required configuration, it should refuse to proceed and name the missing element — not guess past the gap.
- When the agent reaches a Tier 3 action without an explicit authorization from a named human principal, it should halt, log the event, and queue for human review.
- When a code validator rejects a handoff, it should log the rejection reason and parameters and surface the rejection to the human oversight channel.
- When the economic or temporal cap is triggered, the session should log final state and halt gracefully — not silently drop in-progress work.

Design these escalation behaviors explicitly; they do not emerge from general model instructions. The escalation path is the system's answer to the question: "What does graceful failure look like?"

## Final deliverable

Synthesize all steps into:

1. **Executive summary** (answer / recommendation first)
2. **Key findings** (one per major step)
3. **Risks and failure modes** still open
4. **Next actions** with owners and dates

Full source card: [references/source.md](references/source.md)
