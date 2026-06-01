---
name: "classify-consulting-task"
description: |
  Classifies the user's task and routes to the best chain or toolkit skill. Use at the start of ambiguous consulting, delivery, or executive requests.
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
| Pricing or monetization | /pricing-decision |
| Market entry | /market-entry |
| Hiring | /hiring-decision |
| Product or feature launch | /product-launch |
| Investment or capital allocation | /investment-decision |
| Quit or stay decision | /should-i-quit |
| Major life decision | /life-decision |
| Prioritization under scarce capacity | /prioritize-under-scarcity |
| Metrics, forecasting, predictability | /measure-delivery |
| WIP limits or commitments | /set-wip-and-commitments |
| Executive problem structure / issue tree | /structure-executive-problem |
| Executive memo or deck narrative | /executive-communication |
| Engagement scope or SOW | /consulting-engagement |
| Define what work is needed to build or deliver (outcome, scope, work tree) | /work-to-be-done |
| General ambiguous decision | /apply-core-mental-models |

## Output

Reply with:

1. **Task type** (one line)
2. **Recommended skill** (exact slash name)
3. **Why** (two sentences)
4. **First question** to ask the user before running that skill
