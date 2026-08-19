const COSTS = [
  {
    title: "Every handoff re-asks the question.",
    body: "Who is authorized, under what authority, with what instrument — re-established from zero, system after system.",
  },
  {
    title: "Disputes resolve to inference.",
    body: "Logs are reconstructed after the fact, and none are binding — the truth becomes whoever's lawyers are louder.",
  },
  {
    title: "Liability lands on whichever party can least credibly deny it.",
    body: "Not whichever party actually owned the action.",
  },
  {
    title: "Regulators receive narrative, not record.",
    body: "Compliance becomes performance, not proof.",
  },
];

const REMOVALS = [
  {
    k: "01",
    t: "Execution became probabilistic",
    d: "Systems now commit consequential actions, and there is no code path to inspect afterward.",
  },
  {
    k: "02",
    t: "Settlement became multi-party",
    d: "Each side's log is merely the other side's assertion.",
  },
  {
    k: "03",
    t: "Statute began requiring proof",
    d: "Proof of what happened, rather than records that describe it.",
  },
];

export function HonorSystem() {
  return (
    <section id="honor-system" className="rule-top py-24">
      <div className="shell">
        <p className="eyebrow">The Honor System</p>
        <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Every log in the modern stack is written by the party whose conduct is in question.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The database that executes the write records the write. The model that generates the
              note logs the note. The pipeline that ships the binary attests to the binary. An honor
              system — and settlement, audit, insurance, and litigation are all built on top of it.
            </p>
            <p>
              It survived while a person was accountable at each step, because you could ask the
              person. Three things removed the person at once.
            </p>
          </div>

          <ol className="divide-y divide-border border-y border-border">
            {REMOVALS.map((r) => (
              <li key={r.k} className="flex gap-6 py-5">
                <span className="font-mono text-[0.72rem] text-copper">{r.k}</span>
                <div>
                  <p className="font-medium text-foreground">{r.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="eyebrow mt-20">What that costs, every day</p>
        <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {COSTS.map((c) => (
            <article key={c.title} className="bg-surface p-8">
              <h3 className="text-lg font-medium tracking-tight text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>

        <div
          className="mt-12 border-l-2 p-8 sm:p-10"
          style={{ borderColor: "var(--color-primary)", background: "oklch(0.795 0.135 74 / 6%)" }}
        >
          <p className="text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
            Liability without attribution is uninsurable.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Action that cannot be attributed cannot be priced, insured, or settled.
          </p>
        </div>
      </div>
    </section>
  );
}

const NOTS: { t: string; d?: string }[] = [
  {
    t: "It is not a blockchain.",
    d: "A centralized, hardware-rooted, publicly verifiable registry — the clearing-utility position. Money may move on rails; the record does not.",
  },
  {
    t: "It does not detect, score, or predict anything.",
  },
  {
    t: "It does not hold your data.",
    d: "Records are hashed inside your boundary; only cryptographic hashes ever reach the Registry.",
  },
  {
    t: "It does not decide consequences.",
    d: "The parties do — from facts neither side can rewrite.",
  },
  {
    t: "It does not do the work and keep the books.",
    d: "That is precisely the thing it replaces.",
  },
];

export function Definition() {
  return (
    <section id="what-axeum-is" className="rule-top py-24">
      <div className="shell grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">What <span className="text-copper">AXEUM</span> Is</p>
          <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            We register each action — and the ownership and conditions of that action — at the moment
            it occurs.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Whether or not any contract governs it. The registered record is sealed and
              authoritative as to what happened:{" "}
              <span className="font-mono text-sm text-foreground">executed</span>,{" "}
              <span className="font-mono text-sm text-foreground">not executed</span>, or{" "}
              <span className="font-mono text-sm text-foreground">partially executed</span>.
              Everything that follows — payment, liability, contract, claim — is determined from
              those facts, not by the Registry.
            </p>
            <p>
              A self-witnessed log is one side of the story, changeable by the side that wrote it. An
              independently witnessed record is a fact — sealed at the moment it occurred,
              attributable, non-repudiable.
            </p>
            <p>
              In commercial terms: we sell a seller the ability to identify success and failure
              within their workflow — and we stand as the third-party witness their buyer can rely
              on.
            </p>
            <p className="text-lg text-foreground">
              The product is the witness. Faster settlement, collapsed audit cost, resistance to
              tampering — all of it is exhaust.
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">What <span className="text-copper">AXEUM</span> Is Not</p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {NOTS.map((n) => (
              <li key={n.t} className="py-5">
                <p className="font-medium text-foreground">{n.t}</p>
                {n.d ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{n.d}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
