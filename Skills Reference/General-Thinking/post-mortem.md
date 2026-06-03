# Post-mortem
*Learn structurally from what happened*

**Category:** [General Thinking](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

A post-mortem (also called an after-action review, retrospective, or incident review) is a structured examination of a completed project, incident, or period of work to extract learnable lessons. The goal is not to assign blame but to identify systemic causes — the conditions, decisions, and process failures that produced the outcome — and to convert those causes into improvements. Post-mortems done well are one of the highest-leverage learning investments available to teams and organizations.

---

## Mental Model

Every outcome is an experiment whose results should update future behavior. Without post-mortems, experience produces familiarity but not learning — you have been through many situations, but you haven't analysed what produced them or what would have produced better outcomes. The post-mortem converts raw experience into structured knowledge. The practitioner's discipline: approach the post-mortem with genuine curiosity rather than defensiveness, and maintain relentless focus on systemic causes rather than individual blame.

---

## Practitioner Heuristics

- **Separate the post-mortem from performance evaluation.** If people fear that admitting failure in a post-mortem will be used against them in performance reviews, they will not be honest. Explicitly decouple the two.
- **Use the "five whys" to reach systemic causes.** The first answer to "why did this happen?" is almost always a proximate cause (the engineer made an error; the customer didn't receive the message). Five levels of "why" typically reveal the systemic failure (the deployment process had no rollback check; the customer communication process had no confirmation mechanism).
- **Write it down and make it searchable.** An unwritten post-mortem benefits only the people in the room. A written post-mortem, searchable by future team members, compounds over time.
- **Track whether actions were completed.** Post-mortems that generate action items that are never completed are theater. Assign owners, due dates, and a review in the next post-mortem.
- **Review a collection of post-mortems periodically for patterns.** Individual post-mortems surface specific causes; reviewing a set of post-mortems surfaces the systemic themes that show up repeatedly. These themes are the most valuable organizational learning.

---

## Common Failure Modes

- **Blame culture contamination.** When post-mortems are used to identify who was at fault, people reconstruct events to protect themselves. The post-mortem produces a politically adjusted account, not a true one.
- **Treating corrective actions as the endpoint.** The actions assigned at the end of a post-mortem are only valuable when completed. Without a follow-up mechanism, post-mortem outputs evaporate.
- **Availability bias in post-mortem frequency.** Teams run post-mortems after dramatic failures and rarely after quiet successes. Successful projects also contain learnable information; the "what worked" side of the analysis is systematically underinvested.

---

## Worked Example

Amazon's culture of written post-mortems after production incidents includes a specific format: timeline of events, contributing factors (not root cause — Amazon explicitly avoids singular root cause attribution), impact summary, what went well, what went poorly, and action items with owners and dates. The "what went well" section is as important as the "what went poorly" — it identifies the safety barriers that prevented a worse outcome, so they can be strengthened rather than accidentally dismantled. This format has been widely copied in engineering culture precisely because it produces learning rather than blame.

---

## Connections

→ [**Pre-mortem**](pre-mortem.md) — the bookends: the pre-mortem imagines future failure; the post-mortem analyses actual failure. A mature team practices both.
→ [**Feedback Loops**](../Systems/feedback-loops.md) — the post-mortem closes the feedback loop: action → outcome → learning → updated action.
→ [**Five-Hour Rule**](../Learning/five-hour-rule.md) — post-mortems are one of the most efficient uses of deliberate learning time because they are grounded in direct organizational experience.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
