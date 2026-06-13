---
id: 138
name: Kanban Method
category: Delivery & Flow
cardType: standard
tagline: Visualize the work, limit WIP, manage the flow
connections:
  - id: 132
    rationale: the active ingredient of the method.
  - id: 131
    rationale: the arithmetic that explains why Kanban delivers shorter cycle times.
  - id: 143
    rationale: Kanban produces the data; flow metrics interpret it.
  - id: 18
    rationale: Kanban makes constraints visible.
  - id: 17
    rationale: pull systems are balancing feedback loops; Kanban makes the loop visible.
references:
  - title: "Kanban: Successful Evolutionary Change for Your Technology Business"
    authorYear: David J. Anderson (2010)
    supports: the definitive text on the Kanban Method for knowledge work; the source of its practices and change management approach.
  - title: Kanban from the Inside
    authorYear: Mike Burrows (2014)
    supports: a deeper exploration of Kanban's values, principles, and practices; the practitioner's complement to Anderson.
  - title: "Toyota Production System: Beyond Large-Scale Production"
    authorYear: Taiichi Ohno (1988)
    supports: the TPS origin of kanban as a pull-scheduling signal; the physical-world system that inspired the method.
---

# Kanban Method

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

The Kanban Method is an evolutionary approach to managing knowledge work as a flow system. It rests on five practices — visualize work, limit work-in-progress, manage flow, make policies explicit, improve collaboratively — and four foundational principles emphasizing incremental change. Adapted from Toyota's manufacturing kanban (Taiichi Ohno) and codified for knowledge work by David J. Anderson (*Kanban*, 2010), it differs from agile-by-iteration in that it does not require role changes, timeboxes, or estimation. The unit of management is flow, not iteration.

---

## Mental Model

A kanban board is the system's nervous system made visible. Each column is a stage; each card is an item; the board displays the truth of where work actually is. Compared to a status report — a snapshot of someone's narration — the board cannot lie. WIP limits on each column convert it from a visualization into a control system: when a column is full, upstream stops pushing and the constraint is forced into view. The board is therefore an instrument that surfaces operational reality every day, not a project management artifact.

---

## Practitioner Heuristics

- **Start with what you do now.** Map your existing process onto the board — including the ugly steps. Optimization comes after visibility.
- **Make explicit the implicit.** Who pulls? When can an item move? What counts as "done"? Write these as column policies on the board, not in a document.
- **Limit WIP per column, not just total.** Per-column limits surface stage-level bottlenecks; a total cap alone hides them.
- **Run cadences, not ceremonies.** Replenishment (admission), delivery, retrospectives, and risk reviews each have a rhythm; the board makes those cadences self-evident.
- **Treat blocked items as a signal.** Aged WIP and blocked items are the leading indicators; an item blocked for a week is a process problem, not a "to chase up."

---

## Common Failure Modes

- **Kanban as a board, not a method.** Drawing columns without WIP limits, policies, or flow management is task-tracking, not Kanban.
- **Skipping policy explicitness.** Without written column policies, every move is a negotiation; WIP creeps; trust erodes.
- **Confusing it with Scrum-without-sprints.** Kanban does not need a backlog grooming ritual, role definitions, or sprint cycles; layering them on dilutes the method.
- **Treating WIP limits as suggestions.** The whole engine relies on the limit being respected; "just this one extra item" repeated is how systems die.

---

## Worked Example

A 14-person platform engineering team manages requests from five product groups. Existing process: a Jira backlog, ad-hoc Slack escalations, weekly status review. Symptoms: requests aged 6–10 weeks, ambiguous priority, no shared view. The team installs a physical-then-digital kanban with four columns (intake → design → build → validate), WIP limits per column, and explicit pull policies. Within three sprints, oldest aged WIP drops from 70 days to 21; the weekly status meeting compresses from 45 minutes to 10 because the board carries the information. The team did not change scope or staffing.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
