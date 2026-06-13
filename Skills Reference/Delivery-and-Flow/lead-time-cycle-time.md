---
id: 134
name: Lead Time vs Cycle Time
category: Delivery & Flow
cardType: standard
tagline: Shared vocabulary for what you commit to and what you control
connections:
  - id: 131
    rationale: both metrics fall out of L = λW; lead and cycle time differ by where you start the clock.
  - id: 141
    rationale: percentile lead times are the substrate of commit-able service level expectations.
  - id: 140
    rationale: variability of cycle time drives the gap between mean and 85th percentile.
  - id: 142
    rationale: '"lead time for changes" is the specific DORA variant for code delivery.'
references:
  - title: Actionable Agile Metrics for Predictability
    authorYear: Daniel S. Vacanti (2015)
    supports: the operational definitions of lead time and cycle time for knowledge work; percentile-based reporting and aged WIP as leading indicators.
  - title: The Principles of Product Development Flow
    authorYear: Donald G. Reinertsen (2009)
    supports: the formalization of lead time and cycle time distinctions in product development; wait time as the dominant component of lead time.
  - title: Accelerate
    authorYear: Nicole Forsgren, Jez Humble & Gene Kim (2018)
    supports: the lead-time-for-changes metric is one of the four DORA metrics linking delivery speed to organizational performance.
---

# Lead Time vs Cycle Time

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

**Lead time** is the elapsed time from the moment a customer's request enters the system until they receive value. **Cycle time** is the elapsed time from the moment the team starts active work on an item until it is delivered. Lead time is what the customer experiences; cycle time is what the team can directly influence. Both are simple, both are routinely confused, and both should be reported. The distinction was formalized in lean manufacturing and adopted into knowledge work via *The Principles of Product Development Flow* (Reinertsen, 2009) and Daniel Vacanti's writing on flow metrics.

---

## Mental Model

A coffee shop. The customer's lead time begins when they get in line and ends when their coffee is in hand. The barista's cycle time begins when they pick up the order ticket and ends when the cup is on the counter. If lead time is 12 minutes and cycle time is 2 minutes, the team's improvement headroom is mostly upstream of the barista — in the queue, in the ordering UX, in batching. Reporting only cycle time would let the team celebrate productivity while the customer's experience worsens.

---

## Practitioner Heuristics

- **Report both, and report the percentile, not the mean.** "85th-percentile lead time was 18 days" is a usable commitment basis; "average lead time was 9 days" is meaningless to a stakeholder waiting on the long-tail items.
- **Define the start of each clock explicitly.** Lead time clocks frequently start at request submission, but stakeholders mentally start counting from "the conversation we had last Thursday." Surface and reconcile.
- **Cycle time variability matters more than the mean.** A team with cycle time of 3 ± 1 days is far more useful than one with 2 ± 4 days.
- **Use lead time for SLAs; use cycle time for capacity planning.** They answer different questions.
- **Aged WIP is the leading indicator.** Items in flight aging beyond the 85th-percentile cycle time predict lead-time blowouts before they happen.

---

## Common Failure Modes

- **Conflating the two.** Teams call cycle time "lead time" to make their numbers look better; stakeholders call lead time "cycle time" to push accountability onto the team.
- **Reporting only mean.** Half of all items finish above average. Stakeholders care about the worst end, not the middle.
- **Starting the clock at "in development."** Items that wait three weeks in a backlog and are then "completed in two days" make the team look fast and the customer feel slow.

---

## Worked Example

A regulatory team reports 6-day cycle time on policy reviews and is pressured to "move faster." Investigation: lead time is 41 days because intake sits with a single analyst for triage. The 6-day cycle time was real and unrelated to the customer's experience. Moving the bottleneck (triage) into the team's flow board and applying a WIP limit cuts lead time to 14 days without changing the team's actual review pace.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
