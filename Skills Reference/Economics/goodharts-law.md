---
id: 120
name: Goodhart's Law
category: Economics
cardType: standard
tagline: When a measure becomes a target, it ceases to be a good measure
connections:
  - id: 216
    rationale: CAC and LTV are the metrics most vulnerable to Goodhart's Law; organisations that target them directly distort the customer acquisition mix or inflate LTV projections
  - id: 51
    rationale: Goodhart's Law is the failure mode of incentive systems
  - id: 237
    rationale: "the Cobra Effect is Goodhart's Law with structural lock-in: the measurement programme itself sustains the problem it was designed to solve"
  - id: 121
    rationale: agents optimise what they're measured on, not necessarily what principals want
  - id: 17
    rationale: measurement creates feedback loops that can go reinforcing in the wrong direction
  - id: 33
    rationale: local optimisation of a proxy metric is how this failure mode manifests
  - id: 231
    rationale: when shared metrics are used to manage shared resources, Goodhart's Law can weaponise the measurement system itself
  - id: 250
    rationale: "the design discipline that builds Goodhart-drift detection into the measurement system itself: small metric sets, named owners, and review cadences fast enough to catch a proxy curdling into a target"
  - id: 260
    rationale: "symptomatic fixes that target a metric while leaving the underlying dynamic intact are Goodhart's Law in action: the measure improves while the thing it was measuring continues to degrade"
  - id: 262
    rationale: every incentive scheme must be designed with Goodhart drift in mind; metric rotation and small indicator sets are the countermeasures
  - id: 6
    rationale: "Goodhart's Law is the metric-fixation failure mode of the map-territory gap: the metric (map) diverges from the underlying reality (territory) the moment it becomes a target"
  - id: 208
    rationale: "Goodhart's Law is a primary drift mechanism: as teams optimise measured metrics, the underlying system can drift toward risk boundaries while surface indicators look healthy"
  - id: 219
    rationale: when revenue or margin targets become the primary pricing driver, pricing degrades into a number-hitting exercise; value capture becomes a side effect of hitting the target rather than the purpose of the decision.
  - id: 225
    rationale: "optimising for easy-to-measure A/B metrics (click rates, micro-conversions) is a Goodhart failure: the metric becomes the target and drifts from what actually matters (retention, LTV, brand)."
  - id: 140
    rationale: single-date commitments become Goodhart targets — the team optimises for hitting the date rather than managing the actual distribution; statistical variability surfaces the distortion.
  - id: 144
    rationale: output metrics (feature count, deployment frequency) become Goodhart targets the moment they are separated from the outcome they were proxying for.
  - id: 152
    rationale: OKR Key Results are designed to resist Goodhart drift — pairing them with an Objective keeps the metric anchored to intent; decoupling from compensation removes the strongest gaming incentive.
  - id: 256
    rationale: teams measured on uptime SLO alone optimize for it at the expense of latency, correctness, and incident frequency — Goodhart's Law in reliability metrics.
  - id: 244
    rationale: Organisational Degradation Scan applies Goodhart's Law in Step 5 — checking whether metrics have decoupled from the outcomes they were designed to track
  - id: 124
    rationale: culture determines what people actually optimise for when explicit metrics are ambiguous — Goodhart's Law operates more powerfully in low-trust, blame-oriented cultures
references:
  - title: The Tyranny of Metrics
    authorYear: Jerry Z. Muller (2018)
    supports: comprehensive critique of metric-based management across education, medicine, policing, and business; documents the recurring pattern of proxy corruption.
  - title: Measuring and Managing Performance in Organizations
    authorYear: Robert D. Austin (1996)
    supports: the analytical framework showing why measurement systems distort behaviour when they become targets; the theoretical foundation for Goodhart's practical problem.
---

# Goodhart's Law

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Goodhart's Law: **"When a measure becomes a target, it ceases to be a good measure."** First articulated by Charles Goodhart in 1975 with reference to monetary policy, generalised by Marilyn Strathern in 1997. The mechanism: any metric that carries real consequences creates an incentive to optimise the metric itself — to hit the number through whatever means available, including ones that degrade the underlying reality the metric was meant to track.

Goodhart's Law is not about dishonesty. Even entirely well-intentioned agents will unconsciously shift behaviour toward whatever is being measured once it becomes the target. The distortion is structural, not moral.

---

## Mental Model

A *proxy* is chosen because it correlates with something we care about but cannot directly measure. That correlation existed under natural conditions. Once the proxy becomes the target, people optimise it directly, and the correlation breaks.

Hospital waiting-time targets cause patients to be held in ambulances outside the building. Software velocity metrics cause developers to split large tickets. NPS surveys get distributed only after good interactions. In each case, the metric improves while the underlying reality stays flat or degrades.

**The corrective is triangulation:** use multiple metrics that are hard to simultaneously game, include qualitative signals alongside quantitative ones, and rotate metrics before they calcify into targets.

---

## Practitioner Heuristics

- **Triangulate: use multiple metrics that are hard to game simultaneously.** A single target invites distortion; a basket that would have to be gamed together raises the cost of gaming above the cost of just doing the work.
- **Pair every quantitative metric with a qualitative check.** Numbers tell you the proxy moved; a qualitative signal tells you whether the underlying reality moved with it. The gap between them is where Goodhart lives.
- **Rotate metrics before they calcify into targets.** A measure used for observation stays honest; the longer it carries consequences, the more behaviour bends toward it. Refresh proxies before the correlation breaks.
- **Hold some metrics as health indicators, not targets.** Explicitly designate which measures inform and which incentivise; the act of declaring a number a target is what begins its corruption.
- **Watch the correlation that justified the proxy, not just the proxy.** The proxy was chosen because it tracked something you care about; monitor whether that link still holds once people start optimising the proxy directly.

---

## Common Failure Modes

- **Assuming the distortion requires bad actors.** Goodhart operates through well-intentioned people unconsciously shifting effort toward what is measured; waiting for evidence of cheating means missing the structural problem entirely.
- **Adding more weight to a gamed metric.** When a target stops tracking reality, the instinct is to enforce it harder, which only intensifies the optimisation pressure that broke it.
- **Mistaking proxy improvement for outcome improvement.** Celebrating that the number went up without checking whether the thing the number stood for went up — the central trap.
- **Single-metric dashboards.** Reducing a complex outcome to one headline figure maximises Goodhart exposure precisely where the stakes are highest.

---

## Worked Example

A hospital system under pressure to cut emergency-department waiting times sets a four-hour treatment target with real consequences attached. Measured waiting time falls dramatically — and the correlation it was meant to track breaks. Patients are held in ambulances outside the building (the clock starts at admission), admitted to wards prematurely to stop the clock, and sometimes discharged and readmitted to reset it. The proxy improved while the underlying reality — timely, appropriate care — stayed flat or degraded, and the staff producing the distortion were not cheating; they were rationally responding to a measure that had become a target. Triangulation would have caught it: pairing the waiting-time figure with readmission rates, ambulance-handover times, and patient outcomes would have shown the four-hour number rising while the system it claimed to represent did not.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
