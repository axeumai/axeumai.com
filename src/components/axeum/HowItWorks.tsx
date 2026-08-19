import registry from "@/assets/registry.jpg";

const STEPS = [
  {
    n: "01",
    t: "Bound",
    d: "At the moment an action crosses into consequence, who acted, under what authority, with what instrument, under which conditions is captured as a header.",
  },
  {
    n: "02",
    t: "Sealed",
    d: "Sealed in hardware, bound to an independent timestamp, and chained to its predecessor in the Registry.",
  },
  {
    n: "03",
    t: "Self-proving",
    d: "Any attempt to alter history breaks the chain in public view. Tampering isn't impossible; it's self-proving — the stronger claim, because it's the one you can check.",
  },
  {
    n: "04",
    t: "Public verification",
    d: "Any party can confirm any receipt — six cryptographic checks, no account, no permission from AXEUM, no trust in the system that produced it.",
  },
];

const MOTIONS = [
  {
    kicker: "Start today",
    title: "Registry as Witness (RAW)",
    body: "Keep your stack and your logs exactly as they are, and seal the records you already make. Hashing happens inside your boundary — your data never travels — and every sealed record is tamper-evident from that moment forward. Onboarding takes days, not quarters.",
    rows: [
      ["Pricing", "Per sealed record — outcome-blind, volume-banded"],
      ["Surface", "Yours — your stack, your logs, unchanged"],
      ["Liability", "Yours — AXEUM warrants the witness function"],
      ["Integration", "Edge hashing kit; your data never travels"],
    ],
  },
  {
    kicker: "Embed",
    title: "License the Registry",
    body: "Embed full attribution into workflows you operate yourself: who acted, under what authority, with what instrument, under which conditions.",
    rows: [
      ["Pricing", "Per registered action, plus license"],
      ["Surface", "Platform-owned — your UX, your customers"],
      ["Liability", "You operate and you answer; AXEUM warrants the witness function"],
      ["Integration", "Receipt API · SDK"],
    ],
  },
  {
    kicker: "Hire the operator",
    title: "Governed Orchestration™",
    body: "AXEUM operates the workflow — on our infrastructure, or inside yours — and the record comes built in.",
    rows: [
      ["Pricing", "Engagement, plus per-record"],
      ["Surface", "AXEUM-operated — hosted or on your infrastructure"],
      ["Liability", "AXEUM operates under a signed service warranty"],
      ["Integration", "Operated workflow — the record comes built in"],
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="rule-top py-24">
      <div className="shell">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Sealed in hardware. Chained in public. Checkable by anyone.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article key={s.n} className="bg-surface p-8">
              <span className="font-mono text-[0.7rem] text-copper">{s.n}</span>
              <h3 className="mt-4 text-lg font-medium tracking-tight text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xl font-medium leading-snug tracking-tight text-copper sm:text-2xl">
          We call this the Witness Inversion.
        </p>

        <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
          And the record is built for the courtroom, not the dashboard: architected to{" "}
          <span className="font-mono text-sm text-foreground">FRE 902(13)</span> and{" "}
          <span className="font-mono text-sm text-foreground">902(14)</span> in the United States,
          aligned to the requirements of an eIDAS 2.0 Qualified Electronic Ledger in Europe.
        </p>
      </div>
    </section>
  );
}

export function Engage() {
  return (
    <section id="engage" className="rule-top py-24">
      <div className="shell">
        <p className="eyebrow">Ways to Engage</p>
        <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Three motions. One record.
        </h2>

        <div className="mt-14 space-y-px bg-border">
          {MOTIONS.map((m) => (
            <article key={m.title} className="bg-surface p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                <div>
                  <p className="eyebrow text-primary">{m.kicker}</p>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{m.body}</p>
                </div>
                <dl className="divide-y divide-border border-y border-border">
                  {m.rows.map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
                      <dt className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground sm:w-28 sm:shrink-0">
                        {k}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
          One principle prices all of it: the actor pays almost nothing to be witnessed; the relying
          party pays for the right to rely.
        </p>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 lg:grid-cols-[auto_1fr]">
          <p className="eyebrow lg:w-56">The compound effect</p>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            Every platform that embeds the Registry makes the record more authoritative for the
            enterprises that resolve against it. Every operated engagement produces workflow patterns
            that make the next platform integration cheaper. Each motion compounds the other — and
            every registered action makes the Registry more worth relying on.{" "}
            <span className="text-foreground">
              The Nth receipt is worth more inside the registry than outside it.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function RunningToday() {
  return (
    <section id="running-today" className="relative overflow-hidden border-y border-border">
      <img
        src={registry}
        alt="A dark data center corridor lined with racks"
        width={1600}
        height={912}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.155 0.012 250 / 95%) 0%, oklch(0.155 0.012 250 / 70%) 100%)",
        }}
      />
      <div className="shell relative py-24">
        <p className="eyebrow">Running Today</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-5xl font-medium tracking-tight text-foreground sm:text-7xl">
              150,000<span className="copper-text">+</span>
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              production receipts sealed at our founding validation site — each one independently
              verifiable by anyone, right now, no account required.
            </p>
          </div>
          <div className="border-l border-border pl-8">
            <p className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">161</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              provisional patent filings protect the method.
            </p>
            <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
              Figures as of August 2026
            </p>

            <a
              href="https://verify.axeumai.com/RCP-mt05uoxo-6340c2af44b9f5ed"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/20"
            >
              Verify a production receipt
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
