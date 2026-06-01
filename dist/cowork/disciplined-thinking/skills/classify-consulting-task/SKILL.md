---
name: "classify-consulting-task"
description: |
  Classifies the user's task and routes to the best chain or toolkit skill. Use at the start of ambiguous consulting, delivery, executive, innovation, AI, or leadership requests.
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
---

# Classify consulting task

Identify the user’s primary task type, then invoke the best matching skill (slash command or explicit load). Do not run every skill.

## Routing table

| If the user needs… | Invoke |
|---|---|
| Slow delivery, flow, WIP, lead time, kanban | /improve-delivery-flow or /diagnose-flow |
| Org design, teams, dependencies, Conway | /org-design-for-flow or /design-org-for-flow |
| Capacity or portfolio load planning | /capacity-planning |
| Large organizational change | /transformation |
| Prioritization under scarce capacity | /prioritize-under-scarcity |
| Metrics, forecasting, predictability | /measure-delivery |
| WIP limits or commitments | /set-wip-and-commitments |
| Define what work is needed to build or deliver (outcome, scope, work tree) | /work-to-be-done |
| Pricing or monetization | /pricing-decision |
| Market entry | /market-entry |
| Hiring | /hiring-decision |
| Product or feature launch | /product-launch |
| Investment or capital allocation | /investment-decision |
| Quit or stay decision | /should-i-quit |
| Major life decision | /life-decision |
| General ambiguous decision | /apply-core-mental-models |
| Executive problem structure / issue tree | /structure-executive-problem |
| Executive memo or deck narrative | /executive-communication |
| Engagement scope or SOW | /consulting-engagement |
| Understanding a customer problem, JTBD, or unmet need | /understand-the-problem |
| Validating a solution, running an experiment, MVP, or pretotype | /test-and-validate |
| Innovation portfolio, Three Horizons, or programme health | /manage-innovation-portfolio |
| Diagnosing or designing an innovation capability | /innovation-capability-diagnostic or /design-launch-innovation-program |
| Turning an idea into a testable hypothesis | /from-idea-to-hypothesis |
| Staging a new initiative through evidence gates | /crawl-walk-run |
| AI agent governance, authority levels, or override protocols | /ai-agent-governance-design |
| AI use case autonomy assessment or human-in-loop design | /ai-use-case-autonomy-assessment |
| AI scope, authority boundaries, or prompt injection risks | /ai-governance |
| Mission execution, commander's intent, or delegation | /mission-command-toolkit or /mission-execution-protocol |
| After-action review, debrief, or learning from an event | /after-action-toolkit |

## Output

Reply with:

1. **Task type** (one line)
2. **Recommended skill** (exact slash name)
3. **Why** (two sentences)
4. **First question** to ask the user before running that skill
