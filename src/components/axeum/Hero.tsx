import heroSeal from "@/assets/hero-seal.jpg";

/**
 * LIVE RECEIPT — PRODUCTION VALUES ONLY.
 *
 * Every value below is published as verifiable proof on the hero. It MUST come
 * from an actual sealed receipt in the Registry, and MUST NEVER be invented,
 * rounded, or used as a placeholder. If a real receipt is not available, remove
 * the card rather than staging one.
 */
const LIVE_RECEIPT = {
  /** Receipt identifier exactly as sealed in the Registry. */
  id: "RCP-mt05uoxo-6340c2af44b9f5ed",
  /** Suffix rendered after the id (verification state of that receipt). */
  idSuffix: "verified",
  /** Status of the receipt as displayed on the card. */
  status: "Verified",
  /** Base of the public verification surface. */
  verifyBaseUrl: "https://verify.axeumai.com",
} as const;

/** Per-receipt verification URL — never link to the bare verify root. */
const verifyUrl = `${LIVE_RECEIPT.verifyBaseUrl}/${LIVE_RECEIPT.id}`;

const DIMENSIONS = [
  { label: "Who", value: "▓▓▓▓▓▓▓▓▓▓▓▓" },
  { label: "What", value: "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓" },
  { label: "When", value: "▓▓▓▓▓▓▓▓▓▓" },
  { label: "Where", value: "▓▓▓▓▓▓▓▓▓▓▓▓▓" },
  { label: "With What", value: "▓▓▓▓▓▓▓▓▓▓▓▓▓▓" },
];

function ReceiptCard() {
  return (
    <figure className="plate relative overflow-hidden rounded-lg" style={{ boxShadow: "var(--shadow-copper), var(--shadow-plate)" }}>
      <img
        src={heroSeal}
        alt="Macro photograph of a hardware security module sealing a record"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="eyebrow">
            Receipt of Record<sup className="align-super text-[0.7em]">™</sup>
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-signal">
            <span className="live-dot" /> Sealed
          </span>
        </div>

        <dl className="divide-y divide-border">
          {DIMENSIONS.map((d) => (
            <div key={d.label} className="flex items-baseline justify-between gap-6 px-6 py-4">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                {d.label}
              </dt>
              <dd className="redact text-sm sm:text-base" aria-label="Redacted — the Registry holds headers, never content">
                {d.value}
              </dd>
            </div>
          ))}
        </dl>

        <figcaption className="border-t border-border bg-background/50 px-6 py-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            The Registry holds headers, never content. The redaction is the message.
          </p>
          <div className="mt-4 grid gap-3 font-mono text-[0.72rem] sm:grid-cols-2">
            <div>
              <span className="block text-muted-foreground">Receipt ID</span>
              <span className="break-all text-foreground">
                {LIVE_RECEIPT.id}·{LIVE_RECEIPT.idSuffix}
              </span>
            </div>
            <div>
              <span className="block text-muted-foreground">Status</span>
              <span className="text-foreground">{LIVE_RECEIPT.status}</span>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
            <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-primary">
              All applicable checks passed
            </span>
            <a
              href={verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-foreground underline decoration-primary/50 decoration-1 underline-offset-4 transition-colors hover:text-primary"
            >
              Verify this receipt
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-etch pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="shell relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="eyebrow">Trust Infrastructure · The record layer</p>
          <h1 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-copper">
              AXEUM<sup className="align-super text-[0.4em]">™</sup>
            </span>{" "}
            is the{" "}
            <span className="seal-text">
              Registry of Record<sup className="align-super text-[0.4em]">™</sup>
            </span>{" "}
            for the autonomous
            economy.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every system in the modern stack is the sole witness to its own actions.{" "}
            <span className="text-copper">AXEUM removes the actor as witness.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-seal)" }}
            >
              Watch a real receipt verify — no account required
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#what-axeum-is"
              className="inline-flex items-center gap-2 border border-border px-6 py-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              What <span className="text-copper">AXEUM</span> is
            </a>
          </div>
        </div>

        <ReceiptCard />
      </div>
    </section>
  );
}
