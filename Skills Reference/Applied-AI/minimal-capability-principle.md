---
id: 184
name: Minimal Capability Principle
category: Applied AI
cardType: extended
tagline: Grant only what the task requires, at the stage it requires it
connections:
  - id: 183
    rationale: the master framework; minimal capability implements Register 2 (capability enforcement) within the six-register architecture.
  - id: 185
    rationale: the attack vector minimal capability defends against structurally; separating the agent that reads untrusted content from the agent that acts is the primary defense.
  - id: 28
    rationale: system architecture mirrors organizational structure; tool grant architecture mirrors authorized accountability structure.
  - id: 156
    rationale: multi-agent tool grant design creates structural dependencies; these should be made explicit and reviewed.
  - id: 127
    rationale: who has authority to act is the human-layer question; minimal capability is the machine-layer answer to the same question.
  - id: 24
    rationale: the general principle of designing with buffer against worst-case scenarios; minimal capability applies this to AI agent architecture.
references:
  - title: The Protection of Information in Computer Systems
    authorYear: Jerome H. Saltzer & Michael D. Schroeder, 1975
    supports: the original statement of the principle of least privilege in computer security; published in Proceedings of the IEEE, Vol. 63 No. 9.
  - title: "Human Compatible: Artificial Intelligence and the Problem of Control"
    authorYear: Stuart Russell, 2019
    supports: capability restriction as the primary mechanism of AI control.
---

# Minimal Capability Principle

**Category:** [Applied AI](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

The Minimal Capability Principle is the design discipline of granting AI agents only the tools they strictly need for their specific task at their specific workflow stage — and nothing more. It is the application of the principle of least privilege to agentic AI systems, with a crucial asymmetry from its software security cousin: where traditional least-privilege controls prevent unauthorized human users from accessing resources, minimal capability controls prevent an AI agent from taking actions that exceed its authorized scope, including actions it might take in error, through misinterpretation, or because it was manipulated by hostile input.

The principle's power is structural rather than normative. An instruction not to do something can be overridden — by a more persuasive prompt, a jailbreak, a prompt injection in external data, or simply model error. A tool grant cannot. A model that was never given a write tool cannot write, regardless of what it is instructed, tricked, or compelled to do. **Capability is the most reliable form of boundary enforcement** because it operates below the reasoning layer.

---

## Mental Model

Think of tool grants as the physical keys an agent carries. A human employee given access to the server room and the executive suite and the financial system is a larger risk surface than one given access only to the room where their job is done. The additional access is not necessary for the job; it only exists if someone was careless about the grant.

For AI agents, the stakes are higher for two reasons. First, a model's behavior is harder to audit in advance than a human's — you can background-check an employee, but you cannot fully characterize how a model will behave under adversarial conditions or novel inputs. Second, agents frequently process external, untrusted content (uploaded documents, web data, API responses) that could contain instructions designed to manipulate the agent's behavior. An agent that processes a hostile document and is then manipulated into calling a tool it should not have can cause real harm. An agent that literally does not have that tool cannot.

The minimal capability design question is therefore not "do we trust this agent?" but "which tools does this agent's specific task require, and which does it not?" These are different questions with different answers.

---

## Applying the Principle

**Per-agent tool scoping.** In a multi-agent system, each agent receives only the tools its task requires. The agent that reads external documents gets read tools and no write tools. The agent that produces the deliverable gets a write tool and no external data access. The agent that sends notifications gets a messaging tool and nothing else. Decompose the workflow into agents whose tool grants do not overlap — the natural seam is between reading untrusted content and writing trusted output.

**Phase-scoped permissions.** Even within a single agent's workflow, tool access should be modulated by phase. An agent may legitimately need search and retrieval tools during research and analysis but should have those tools removed once the workflow enters a review, approval, or delivery phase. Dynamic permission modulation ensures that an agent cannot loop back to capabilities it used earlier but should not use once it has reached a consequential decision point.

**Structural read/write separation.** The most important specific application: the agent that reads untrusted external content should never be the agent that writes outputs, sends communications, or takes real-world actions. Separate these by capability grant. The document that a hostile counterparty drafts to manipulate the AI never reaches the agent with the pen if the reader and the writer are different agents with non-overlapping tool sets.

**Schema-constrained outputs.** Pair minimal capability with schema-constrained output formats. An agent that produces structured JSON output according to a defined schema — with only the fields it needs to populate — limits what can be injected into the downstream agent's context even if the upstream agent is compromised. The schema is a capability constraint on the data channel, not just the tool channel.

---

## Practitioner Heuristics

- **Start from what the task requires, not what might be convenient.** The natural tendency is to give agents broad tool access "in case they need it." Reverse the question: what specific tools does this specific task require? Everything else is excess surface.
- **Treat capability grants as a design document, not a configuration detail.** The tool grant manifest for a multi-agent system is a governance artifact. It should be readable by a non-technical principal and should be the subject of explicit review before deployment, not a side effect of making the system work.
- **Verify grants against the escalation rule.** For each tool grant, ask: what is the consequence class of the action this tool enables? If the action is irreversible or consequential, verify that the grant is genuinely necessary for the task. If it is not strictly necessary, remove it.
- **Audit grants after each workflow change.** Tool grants accrue silently. When a workflow is modified to add a new capability, the grants for every affected agent should be reviewed — not just the new agent. A workflow change that gives an existing agent access to a new data source may inadvertently expand its effective capability beyond what was intended.
- **A read-only agent cannot corrupt; a write-limited agent cannot exfiltrate.** These are the two failure modes minimal capability is designed against. Design each agent's grant to be safe against at least one of them, and ideally both.

---

## Common Failure Modes

- **Global tool grants for convenience.** Giving every agent in a system access to every tool because it is simpler to configure. This destroys the structural separation that minimal capability provides and means every agent is a potential write-exfiltration risk if compromised.
- **Tool grants that exceed the task.** An agent that summarizes documents does not need to send email; an agent that drafts contracts does not need to query live databases; an agent that classifies support tickets does not need to close them. When these grants exist without justification, they indicate that capability design was not performed — only capability provisioning.
- **Not revisiting grants after workflow evolution.** A grant that was appropriate for the original workflow scope may be excessive after the workflow is expanded. Minimal capability is not a one-time design decision; it requires ongoing review as systems evolve.
- **Confusing normative instructions with structural controls.** Instructing an agent "do not use the write tool for external destinations" is a normative control. Removing the write tool for external destinations is a structural control. Only the structural control is reliable under adversarial conditions.

---

## Worked Example

A compliance team deploys a multi-agent system to monitor regulatory feeds and generate internal briefings. The initial design gives all three agents — the feed reader, the analyst, and the briefing writer — access to the same tool set: web fetch, document read, document write, and internal Slack post.

After applying the minimal capability principle, the tool grants are redesigned: the feed reader gets web fetch and read-only document access, no write, no Slack. The analyst gets the feed reader's structured JSON output and document read for the internal policy library — no web fetch, no write, no Slack. The briefing writer gets write (to a designated internal folder only) and Slack post (to designated channels only) — no web fetch, no document read. 

The result: a hostile regulatory document that contains injected instructions cannot reach the agent with a Slack tool. The agent that reads external content cannot write. The agent that writes cannot reach external content. Three agents, three tool grants, three non-overlapping surfaces — and the boundary architecture is visible from the grant manifest alone, without needing to read the prompts.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
