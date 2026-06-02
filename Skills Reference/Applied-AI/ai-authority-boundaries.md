# AI Authority Boundaries
*Programmatically encoding where AI may not become a decision-maker*

**Category:** [Applied AI](../index.html#applied-ai) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

AI authority boundaries are the programmatic mechanisms that define and enforce the line between what an AI agent may do autonomously and what must remain with a human who carries accountability for the result. The discipline is distinct from general AI safety: it is not about preventing harmful outputs in a conversation, but about designing systems that remain under meaningful human control as they become more capable and more autonomous — running scheduled jobs, chaining agents, and taking real-world actions without a person in the loop.

The core problem: as AI workflows stop being AI-assisted (a human reads every output) and become AI-native (agents act, commit, and hand off with no human watching), the gap between what the system can do and what a human has authorized widens. Authority boundary architecture is the practice of closing that gap by making the boundary machine-readable, enforceable, and auditable — not advisory.

---

## Mental Model

Think of authority as a grant, not a default. In a professional context — legal, medical, financial — authority to commit is conferred by the principal (the firm, the profession, the client) and cannot be exceeded by the agent without explicit authorization. The agent does the work; the principal carries the accountability. When AI agents take the agent role in this relationship, the question is not whether they can produce the output — they usually can — but whether they have been granted the authority to commit it.

The design challenge is that most agentic-AI products conflate capability with authority. An agent that *can* send an email, file a ticket, or approve a document will do so unless stopped. The authority boundary discipline asks: what must stop it, and is that stop reliable at the consequence level of the action?

---

## The Six Registers of Restraint

Authority boundaries operate at six levels, organized as two tiers. The first tier addresses *how* the boundary is enforced; the second addresses *what else* needs a brake.

### Tier 1 — How the Boundary Is Enforced

**Register 1: Prompt-and-workflow enforcement.** The agent is instructed, in its system prompt or practice configuration, to refuse, flag, or gate specific actions. The instruction travels with the model: every invocation of the skill reads the constraint before acting. This is appropriate when a human is reading every output — the normative gate works because a person can catch and correct errors. Examples: an agent that flags its own capability gaps rather than guessing past them; output structured as a decision tree rather than a decision; mandatory [review] tags on judgment calls that must not be silently resolved.

**Register 2: Capability enforcement.** The agent is not granted the tools it would need to take a prohibited action. This is structural, not normative: a model cannot bypass a capability it was never given. If the writing agent has no read tools, it cannot exfiltrate source documents regardless of what it is instructed or manipulated to do. If the drafting agent has no send tool, it cannot dispatch email. Capability enforcement is the most reliable register because it operates below the model's reasoning layer — no jailbreak, prompt injection, or emergent behavior can work around a missing tool.

**Register 3: Code enforcement.** At the boundary between agents — where one agent's output becomes another's input — the orchestrator validates before any downstream model is invoked. Validation includes: target allowlists (only named agents may receive handoffs), closed intent enumerations (only known action types are accepted), per-intent typed schemas with regex patterns (field values must be structurally slug-shaped, not free text), and prompt rendering from typed templates rather than agent-supplied strings. Free text from external sources never becomes a steering prompt; it is labeled as data, wrapped in a tagged block, and the receiving agent is instructed that the block contains data, not instructions.

### Tier 2 — What Else Needs Restraining

**Register 4: Economic restraint.** An AI agent running in loops can consume significant resources without human awareness. A hard per-session budget cap — checked before each tool call, with the session halting rather than overspending — prevents runaway cost from silent failure modes or adversarial inputs that inflate the work.

**Register 5: Temporal restraint.** An agent that runs unattended needs a stop that can be applied from outside the agent's own reasoning. A liveness switch — checked before every tool execution — lets a human halt the session externally. Auto-halt on idle (typically five minutes without progress) prevents a paused or stuck session from holding resources indefinitely.

**Register 6: Contextual restraint.** Tool permissions are not global; they are scoped to the workflow phase. An agent may have search and read tools during intake and analysis but be stripped of them at delivery or approval gates. Dynamic permission modulation prevents an agent from reaching back to capabilities it needed earlier but should not exercise once it has reached a decision-critical stage.

---

## The Escalation Rule

The organizing principle across all six registers: **the more autonomous the action, the harder the gate must be.**

A conversational workflow where a human reads every output can be gated normatively (Register 1). A headless cron job that runs at 3am without any human in the loop cannot — it needs capability boundaries (Register 2). An agent-to-agent handoff where upstream content could smuggle hostile instructions across the seam needs code enforcement (Register 3) in addition to capability boundaries.

The inverse of this rule — which describes the failure mode of most early agentic-AI demos — is that the hardest-to-supervise actions are shown with the softest gates. Auto-sending email, auto-filing tickets, and auto-approving documents are often demonstrated with nothing more than a prompt-level instruction. The escalation rule says these are exactly the actions that require the hardest gates.

---

## Practitioner Heuristics

- **Make the boundary explicit before you deploy, not after the first incident.** Authority boundary design is an upstream activity: decisions about what gates are needed at what register must be made before the system goes into production. Post-incident gate-fitting is expensive and often incomplete.
- **Gate hardness is a function of consequence class, not of trust in the model.** Do not confuse "we trust this model" with "we do not need hard gates." The question is not whether the model will behave — it is whether the boundary is reliable if the model does not. Normative gates are unreliable at high consequence; structural and code gates are not.
- **Treat the audit log as a governance artifact, not an engineering log.** Every handoff accepted, every handoff rejected, every gate triggered should be appended to an append-only log in a trivially queryable format. The audit log is what makes the boundary legible to the humans who are accountable for the system's behavior.
- **A system that flags its own capability gaps is better than one that guesses past them.** An agent that says "I cannot issue a green clearance because the required configuration is not present" and stops is a better-governed system than one that issues a likely-correct answer with no flag. Design explicitly for graceful capability-gap behavior.
- **The cold-start configuration is a governance artifact.** The practice profile or institutional configuration that an agent reads before acting is where the organization tells the machine what kind of institution it is operating inside. This document is as important as the agent's system prompt — it is where professional standards, risk tolerances, and escalation rules live.

---

## Common Failure Modes

- **Collapsing all gates to Register 1.** Treating prompt-level instructions as sufficient for all actions regardless of autonomy level. This is the most common failure and the one most likely to produce real-world incidents as systems become more autonomous.
- **Designing capability grants globally rather than per-agent.** Giving every agent in a multi-agent system access to all tools because it is convenient. The minimal capability principle requires asking, for each agent, what tools are strictly necessary for its specific task at its specific stage.
- **No audit trail.** Deploying an agentic system with no structured record of what it did, what it decided, and why. When something goes wrong — and something always eventually does — the absence of an audit log makes the investigation nearly impossible and the accountability gap visible.
- **Treating the escalation rule as optional.** Accepting that an automated, consequence-bearing action has only a normative gate because adding a structural gate is inconvenient. The escalation rule is not a suggestion; it is the load-bearing principle of the entire architecture.

---

## Worked Example

A team ships an AI agent that drafts and sends customer refund approvals overnight. In the demo it works: the agent reads the ticket, decides, and emails the customer — gated only by a system-prompt instruction to "escalate refunds over $500 to a human." Three weeks into production, a malformed batch of tickets and a prompt-injection string buried in a customer message combine to push through a run of unauthorised high-value refunds before anyone is watching. The escalation rule names the error precisely: an unattended, consequence-bearing, hard-to-reverse action was protected by the softest possible gate (Register 1, a prompt instruction). The redesign moves the brake down the stack — the drafting agent is given no send tool at all (Register 2), refunds above a threshold are routed through a typed, allowlisted handoff the orchestrator validates before any email can be issued (Register 3), and a per-session budget and liveness switch (Registers 4–5) cap the blast radius of any future runaway. The capability the team trusted the model not to misuse is simply removed; the boundary no longer depends on the model behaving.

---

## Connections

→ [**Minimal Capability Principle**](minimal-capability-principle.md) — the design discipline that implements Register 2; capability enforcement in practice.
→ [**Prompt Injection**](prompt-injection.md) — the attack vector that makes Register 3 necessary; why free text from external sources must never become steering prompts.
→ [**Principal–Agent Problem**](../Economics/principal-agent-problem.md) — the classical framing of misaligned incentives between principal and agent; AI authority boundaries are its operational implementation in agentic systems.
→ [**RACI Framework**](../Business/raci.md) — defines who is Responsible, Accountable, Consulted, Informed in human workflows; authority boundary design answers the same question for human-AI workflows.
→ [**Two-Way Doors**](../General-Thinking/two-way-doors.md) — the reversibility lens for decision-making; irreversible actions require the hardest gates.
→ [**Pre-mortem**](../General-Thinking/pre-mortem.md) — the governance design tool: run a pre-mortem on the agentic system before deployment to surface which gates are insufficient.
→ [**Risk Management**](../Leadership/risk-management.md) — the organizational context for authority boundary decisions; boundary design is a form of operational risk management.
→ [**DORA Metrics**](../Delivery-and-Flow/dora-metrics.md) — structural analogy: DORA measures delivery system health; authority boundary registers measure governance system health.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
