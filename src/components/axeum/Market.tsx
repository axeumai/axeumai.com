import autonomy from "@/assets/autonomy.jpg";

const ADJACENT = [
  {
    t: "Identity",
    d: "Governs who is connecting — and goes blind the moment access is granted.",
  },
  {
    t: "Observability",
    d: "Watches what is executing, but writes its telemetry to stores the operator controls.",
  },
  {
    t: "Governance",
    d: "States the rules before and after the action, and is absent at the moment of commitment.",
  },
];

const LADDER = [
  { a: "NASDAQ", b: "Equities" },
  { a: "Visa", b: "Card transactions" },
  { a: "DTCC", b: "Securities settlement" },
  { a: "AXEUM", b: "The record of execution" },
];

const UNIVERSES = [
  {
    n: "01",
    t: "Autonomous systems",
    d: "Agents committing to enterprise systems, machine-to-machine settlement, robotic fleets — execution traces witnessed by the executors themselves.",
  },
  {
    n: "02",
    t: "Healthcare settlement",
    d: "Ambient models writing documentation and billing codes into a payment system built on retrospective audit.",
  },
  {
    n: "03",
    t: "The software supply chain",
    d: "Pipelines compiling and shipping binaries that attest to their own integrity.",
  },
  {
    n: "04",
    t: "Payments and disputes",
    d: "Settlement where each party's evidence is its own logs, and every disagreement becomes an investigation.",
  },
  {
    n: "05",
    t: "Operational change",
    d: "Configurations, contracts, and timesheets edited after the fact with nobody watching.",
  },
];

export function Market() {
  return (
    <section id="market" className="rule-top py-24">
      <div className="shell">
        <p className="eyebrow">The Market We Created</p>
        <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Trust Infrastructure — the evidentiary layer that holds the authoritative record of what
          was executed, by whom, and under what conditions.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 space-y-6 text-base leading-relaxed text-muted-foreground lg:order-1">
            <p>
              No adjacent category holds this record, and none can. All three can prove controls were
              configured to exist; none can prove what a system actually produced, action by action.
            </p>
            <p>
              Trust Infrastructure sits beneath the application layer — beneath the record systems,
              the clearinghouses, the orchestration frameworks, the pipelines, the processors, the
              fleets.{" "}
              <span className="text-foreground">
                Those systems execute. The Registry registers that they executed.
              </span>
            </p>
          </div>

          <ul className="order-1 grid gap-px overflow-hidden border border-border bg-border lg:order-2">
            {ADJACENT.map((a) => (
              <li key={a.t} className="flex flex-col gap-2 bg-surface p-6 sm:flex-row sm:gap-8">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-copper sm:w-40 sm:shrink-0">
                  {a.t}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{a.d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comp ladder */}
        <div className="mt-20">
          <p className="eyebrow">The comparison set</p>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {LADDER.map((row, i) => {
              const isAXEUM = i === LADDER.length - 1;
              return (
                <div
                  key={row.a}
                  className="grid grid-cols-[1fr_auto_1fr] items-baseline gap-4 py-6 sm:gap-10"
                >
                  <span
                    className={
                      isAXEUM
                        ? "copper-text text-2xl font-medium tracking-tight sm:text-4xl"
                        : "text-2xl font-medium tracking-tight text-foreground sm:text-4xl"
                    }
                  >
                    {row.a}
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                    is to
                  </span>
                  <span
                    className={
                      isAXEUM
                        ? "text-right text-base text-foreground sm:text-xl"
                        : "text-right text-base text-muted-foreground sm:text-xl"
                    }
                  >
                    {row.b}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            None of them sell software to the parties they serve; each is the thing those parties
            resolve against.
          </p>
        </div>
      </div>

      {/* Universes */}
      <div className="relative mt-24 overflow-hidden border-y border-border">
        <img
          src={autonomy}
          alt="Night aerial view of automated infrastructure and machine-to-machine data corridors"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.155 0.012 250 / 92%) 0%, oklch(0.155 0.012 250 / 78%) 100%)",
          }}
        />
        <div className="shell relative py-24">
          <p className="eyebrow">The Markets It Consolidates and Improves</p>
          <h2 className="mt-6 max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            The autonomous economy is a condition, not a sector: consequential action executed by
            systems rather than authorized by people.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {UNIVERSES.map((u) => (
              <article key={u.n} className="bg-surface/90 p-8 backdrop-blur-sm">
                <span className="font-mono text-[0.7rem] text-copper">{u.n}</span>
                <h3 className="mt-4 text-lg font-medium tracking-tight text-foreground">{u.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </article>
            ))}
            <div className="flex items-center bg-surface/60 p-8">
              <p className="text-base leading-relaxed text-foreground">
                One registry, horizontal across all five — because the flaw is identical in each:{" "}
                <span className="text-primary">
                  the system that acts is the system that records.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
