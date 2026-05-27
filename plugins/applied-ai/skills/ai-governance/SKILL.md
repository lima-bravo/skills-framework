---
name: "ai-governance"
description: "Applies AI authority boundaries, minimal capability principle, and prompt injection defences to a proposed AI deployment. Use when scoping an AI agent, reviewing autonomy levels, or designing safety guardrails."
metadata:
  plugin: "applied-ai"
  version: "1.0.0"
  sources: "Applied-AI/ai-authority-boundaries.md,Applied-AI/minimal-capability-principle.md,Applied-AI/prompt-injection.md"
---

# Ai Governance

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. AI Authority Boundaries

**Hold in mind:**
Think of authority as a grant, not a default. In a professional context — legal, medical, financial — authority to commit is conferred by the principal (the firm, the profession, the client) and cannot be exceeded by the agent without explicit authorization. The agent does the work; the principal carries the accountability. When AI agents take the agent role in this relationship, the question is not whether they can produce the output — they usually can — but whether they have been granted the authority to commit it.

The design challenge is that most agentic-AI products conflate capability with authority. An agent that *can* send an email, file a ticket, or approve a document will do so unless stopped. The authority boundary discipline asks: what must stop it, and is that stop reliable at the consequence level of the action?

**Do:**
- **Make the boundary explicit before you deploy, not after the first incident.** Authority boundary design is an upstream activity: decisions about what gates are needed at what register must be made before the system goes into production. Post-incident gate-fitting is expensive and often incomplete.
- **Gate hardness is a function of consequence class, not of trust in the model.** Do not confuse "we trust this model" with "we do not need hard gates." The question is not whether the model will behave — it is whether the boundary is reliable if the model does not. Normative gates are unreliable at high consequence; structural and code gates are not.
- **Treat the audit log as a governance artifact, not an engineering log.** Every handoff accepted, every handoff rejected, every gate triggered should be appended to an append-only log in a trivially queryable format. The audit log is what makes the boundary legible to the humans who are accountable for the system's behavior.
- **A system that flags its own capability gaps is better than one that guesses past them.** An agent that says "I cannot issue a green clearance because the required configuration is not present" and stops is a better-governed system than one that issues a likely-correct answer with no flag. Design explicitly for graceful capability-gap behavior.
- **The cold-start configuration is a governance artifact.** The practice profile or institutional configuration that an agent reads before acting is where the organization tells the machine what kind of institution it is operating inside. This document is as important as the agent's system prompt — it is where professional standards, risk tolerances, and escalation rules live.

**Avoid:**
- **Collapsing all gates to Register 1.** Treating prompt-level instructions as sufficient for all actions regardless of autonomy level. This is the most common failure and the one most likely to produce real-world incidents as systems become more autonomous.
- **Designing capability grants globally rather than per-agent.** Giving every agent in a multi-agent system access to all tools because it is convenient. The minimal capability principle requires asking, for each agent, what tools are strictly necessary for its specific task at its specific stage.
- **No audit trail.** Deploying an agentic system with no structured record of what it did, what it decided, and why. When something goes wrong — and something always eventually does — the absence of an audit log makes the investigation nearly impossible and the accountability gap visible.
- **Treating the escalation rule as optional.** Accepting that an automated, consequence-bearing action has only a normative gate because adding a structural gate is inconvenient. The escalation rule is not a suggestion; it is the load-bearing principle of the entire architecture.

### 2. Minimal Capability Principle

**Hold in mind:**
Think of tool grants as the physical keys an agent carries. A human employee given access to the server room and the executive suite and the financial system is a larger risk surface than one given access only to the room where their job is done. The additional access is not necessary for the job; it only exists if someone was careless about the grant.

For AI agents, the stakes are higher for two reasons. First, a model's behavior is harder to audit in advance than a human's — you can background-check an employee, but you cannot fully characterize how a model will behave under adversarial conditions or novel inputs. Second, agents frequently process external, untrusted content (uploaded documents, web data, API responses) that could contain instructions designed to manipulate the agent's behavior. An agent that processes a hostile document and is then manipulated into calling a tool it should not have can cause real harm. An agent that literally does not have that tool cannot.

The minimal capability design question is therefore not "do we trust this agent?" but "which tools does this agent's specific task require, and which does it not?" These are different questions with different answers.

**Do:**
- **Start from what the task requires, not what might be convenient.** The natural tendency is to give agents broad tool access "in case they need it." Reverse the question: what specific tools does this specific task require? Everything else is excess surface.
- **Treat capability grants as a design document, not a configuration detail.** The tool grant manifest for a multi-agent system is a governance artifact. It should be readable by a non-technical principal and should be the subject of explicit review before deployment, not a side effect of making the system work.
- **Verify grants against the escalation rule.** For each tool grant, ask: what is the consequence class of the action this tool enables? If the action is irreversible or consequential, verify that the grant is genuinely necessary for the task. If it is not strictly necessary, remove it.
- **Audit grants after each workflow change.** Tool grants accrue silently. When a workflow is modified to add a new capability, the grants for every affected agent should be reviewed — not just the new agent. A workflow change that gives an existing agent access to a new data source may inadvertently expand its effective capability beyond what was intended.
- **A read-only agent cannot corrupt; a write-limited agent cannot exfiltrate.** These are the two failure modes minimal capability is designed against. Design each agent's grant to be safe against at least one of them, and ideally both.

**Avoid:**
- **Global tool grants for convenience.** Giving every agent in a system access to every tool because it is simpler to configure. This destroys the structural separation that minimal capability provides and means every agent is a potential write-exfiltration risk if compromised.
- **Tool grants that exceed the task.** An agent that summarizes documents does not need to send email; an agent that drafts contracts does not need to query live databases; an agent that classifies support tickets does not need to close them. When these grants exist without justification, they indicate that capability design was not performed — only capability provisioning.
- **Not revisiting grants after workflow evolution.** A grant that was appropriate for the original workflow scope may be excessive after the workflow is expanded. Minimal capability is not a one-time design decision; it requires ongoing review as systems evolve.
- **Confusing normative instructions with structural controls.** Instructing an agent "do not use the write tool for external destinations" is a normative control. Removing the write tool for external destinations is a structural control. Only the structural control is reliable under adversarial conditions.

### 3. Prompt Injection

**Hold in mind:**
A language model's reasoning is, at a fundamental level, text completion. It does not have an inherent mechanism for distinguishing "these tokens are my instructions from my operator" from "these tokens are the document I am analyzing." That distinction is enforced by design — by how the system is built around the model — not by the model itself.

Think of the risk as a contaminated supply chain. The model is a factory producing outputs. The raw materials — the documents, web pages, API responses, and database records it processes — arrive from sources outside the factory's control. If those materials can contain instructions that redirect the factory's behavior, then any untrusted supplier has a pathway to control the factory's output. The question is not whether the model will try to resist; it is whether the factory's architecture makes that pathway physically available.

**Direct injection** occurs when a user provides content designed to override the system prompt: "Ignore previous instructions and..." — the classic form, well-known and partially mitigated by training. **Indirect injection** is harder to defend against: hostile content is embedded in external data the agent retrieves and processes — a document the agent is asked to review, a web page it is asked to summarize, an API response it is asked to classify. The agent was not given the hostile content directly; it encountered it while doing its job.

**Do:**
- **Treat every piece of external content as untrusted until processed through a structural control.** Documents uploaded by users, web pages retrieved by agents, API responses from third-party systems, database records from external sources — all of these are potentially hostile. The question is not whether the source is trustworthy; it is whether your architecture assumes trustworthiness it should not.
- **Map the injection surface before deployment.** For any agentic system, draw the boundary between trusted (operator-controlled) and untrusted (external) content explicitly. Every place where untrusted content enters the model's context is a potential injection point. The system should have a structural defense at each.
- **The sophistication of the defense should match the consequence of a successful attack.** A low-autonomy, human-reviewed workflow can rely primarily on normative defenses. A headless autonomous agent that can send email, file records, or approve actions needs structural defenses. Apply the escalation rule: harder autonomy, harder gate.
- **Never build a blocklist and call it done.** Blocklist-based defenses — filtering inputs for known injection patterns — are easily bypassed by novel phrasing and give a false sense of security. Use them as a layer, not as a primary control.
- **Test with adversarial documents.** Before deploying any agent that processes external documents, test it with documents designed to inject instructions. If the system's behavior changes in response to injected content, the defense is insufficient. This is standard red-team practice for agentic systems.

**Avoid:**
- **Treating injection as a prompt problem rather than an architecture problem.** Adding more instructions to the system prompt to resist injection will not produce a reliably secure system. The architecture — how content flows through the system and what structural controls exist at each boundary — is what determines the system's actual injection resistance.
- **Conflating low-sophistication attack resistance with injection immunity.** A system that resists "ignore previous instructions and..." is not injection-proof; it has raised the floor. Adversarial content that is subtler, contextually relevant, or authority-claiming will bypass instruction-level defenses.
- **No inter-agent content validation.** Assuming that because agent A produced some output, agent B can safely treat it as trusted. A compromised or injected agent A is a threat to agent B. Inter-agent content must be validated at the structural level before reaching agent B's reasoning layer.
- **Missing the indirect injection surface.** Securing the user input while leaving the retrieved-content pathway open. Indirect injection — through documents, APIs, and web content — is harder to notice and harder to defend against than direct injection from user prompts.

## Deliverable format

Produce a markdown document with these sections:

### Proposed AI scope and autonomy level

### Authority boundaries (what the agent may and may not do)

### Minimal capability assessment (is scope narrower than necessary?)

### Prompt injection and adversarial input risks

### Human-in-loop requirements and override protocols

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [ai-authority-boundaries](references/ai-authority-boundaries.md)
- [minimal-capability-principle](references/minimal-capability-principle.md)
- [prompt-injection](references/prompt-injection.md)

