# Friction
*Resistance that slows progress*

**Category:** [Physics & Chemistry](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Friction is the force that resists relative motion between surfaces in contact. In physics, it converts kinetic energy to heat — useful energy lost to the environment. In practice, friction describes any resistance that converts effort into unproductive overhead: bureaucratic approval processes, miscommunication, unclear decision rights, tool friction, context-switching costs, and trust deficits. Friction doesn't always stop progress; it slows it and makes it more expensive.

---

## Mental Model

High-performing systems minimize friction on the activities that matter most. The practitioner maps where friction exists in any process, classifies it as either necessary (friction that prevents genuine errors or misalignment) or unnecessary (friction from inertia, poor design, or unclear process), and systematically eliminates the unnecessary kind.

---

## Practitioner Heuristics

- **Map the process end-to-end and note every step that produces no value directly.** These steps are friction candidates. Not all are removable (some reduce downstream error), but all should be justified.
- **Pay attention to "activation friction" — the friction at the beginning of a task.** The hardest part of starting anything is starting it. Systems that reduce activation friction dramatically increase throughput (pre-filled forms, single-click deployment, standing agenda items).
- **Friction is sometimes deliberately useful.** Speed bumps on a road, confirmation dialogs for irreversible actions, and credit check requirements for large loans are all designed friction. The question is whether the friction is calibrated to the risk level.
- **Measure friction by its cost, not its visibility.** The most expensive friction is often invisible: unclear ownership means every decision requires five conversations; poor tooling means 20% of engineering time is spent on environment setup. Make the invisible friction visible by measuring its cost.
- **Organizational trust reduces friction.** In high-trust environments, fewer approvals, less documentation, and faster decisions are possible. Trust is a form of social capital that reduces transaction costs.

---

## Common Failure Modes

- **Friction accumulation over time.** Each individual process step or approval gate is added with good reason. Over time, the accumulation creates untenable overhead. Periodic "friction audits" prevent this.
- **Removing necessary friction.** Eliminating the safeguard along with the bureaucracy — removing the code review because it slows deployment velocity, then experiencing an outage.
- **Tolerating friction because it's familiar.** High-friction processes become normalized; practitioners stop seeing them as friction because "that's how things work here." Bring in outside eyes to audit familiar processes.

---

## Worked Example

An engineering team's deployment process requires: code review (necessary), integration tests (necessary), manual QA signoff (often necessary), security scan (necessary), infrastructure team availability window (scheduling friction), a deployment tracking spreadsheet update (documentation friction), and a Slack notification to three channels (communication friction). Total elapsed time from code merge to production: 4 days. After a friction audit, scheduling dependencies are eliminated by giving the team own-account deployment rights; the spreadsheet is replaced by an automated changelog; the Slack notifications are automated. Elapsed time: 4 hours. The necessary friction (reviews, tests, scans) was preserved; the unnecessary friction (scheduling, manual documentation) was eliminated.

---

## Connections

→ [**Activation Energy**](activation-energy.md) — activation energy is the specific friction at the start of a process; reducing it is often the highest-leverage friction intervention.
→ [**Leverage**](leverage.md) — low-friction systems produce higher leverage; friction reduces the multiple.
→ [**Inertia**](inertia.md) — friction in the context of directional change is the energy cost of overcoming inertia.

## References

- *Switch: How to Change Things When Change Is Hard* — Chip Heath & Dan Heath (2010) — shaping the path: removing friction from desired behaviors.
- *Nudge: Improving Decisions About Health, Wealth, and Happiness* — Richard H. Thaler & Cass R. Sunstein (2008) — friction as an architectural choice in choice design.
- *Hooked: How to Build Habit-Forming Products* — Nir Eyal (2014) — the Hook model's action phase: minimising friction between motivation and behaviour to drive habitual engagement.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
