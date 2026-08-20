import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { AXEUM_ADDRESS } from "@/components/axeum/LegalPage";


const NAV = [
  { label: "The Honor System", hash: "honor-system" },
  { label: <span>What <span className="text-copper">AXEUM</span> Is</span>, hash: "what-axeum-is" },
  { label: "The Market", hash: "market" },
  { label: "How It Works", hash: "how-it-works" },
  { label: "Running Today", hash: "running-today" },
  { label: "Engage", hash: "engage" },
];

const navLinkClass =
  "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link to="/" hash="top" className="flex items-center gap-3">
          <span className="font-serif text-[1.15rem] font-semibold uppercase tracking-[0.15em] text-copper">
            AXEUM<sup className="ml-0.5 align-super text-[0.5em] tracking-normal">™</sup>
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="hidden font-sans text-[0.62rem] font-light uppercase tracking-[0.22em] text-copper-bright sm:block">
            Registry of Record<sup className="align-super text-[0.7em]">™</sup>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.hash} to="/" hash={item.hash} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://verify.axeumai.com/RCP-mt05uoxo-6340c2af44b9f5ed"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/20"
          >
            Verify a receipt
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border/80 bg-background/95 lg:hidden"
        >
          <ul className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className={`${navLinkClass} flex min-h-11 items-center`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}


export function SiteFooter() {
  return (
    <footer className="rule-top mt-8 py-16">
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold uppercase tracking-[0.15em] text-copper">
              AXEUM<sup className="ml-0.5 align-super text-[0.5em] tracking-normal">™</sup>
            </p>
            <span className="mt-3 block h-[2px] w-40 bg-copper" aria-hidden />
            <p className="mt-3 font-sans text-[0.68rem] font-light uppercase tracking-[0.22em] text-copper-bright">
              Registry of Record<sup className="align-super text-[0.7em]">™</sup>
            </p>
            <address className="mt-5 space-y-1 font-mono text-[0.7rem] uppercase not-italic tracking-[0.14em] text-muted-foreground">
              <span className="block">{AXEUM_ADDRESS.street}</span>
              <span className="block">{AXEUM_ADDRESS.city}</span>
              <a
                href={AXEUM_ADDRESS.phoneHref}
                className="block transition-colors hover:text-foreground"
              >
                {AXEUM_ADDRESS.phone}
              </a>
            </address>
          </div>
          <div className="flex flex-col gap-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            <a
              href="https://verify.axeumai.com/RCP-mt05uoxo-6340c2af44b9f5ed"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              verify.axeumai.com
            </a>
            <Link to="/" hash="engage-the-registry" className="transition-colors hover:text-foreground">
              Engage the Registry
            </Link>
            <Link to="/" hash="market" className="transition-colors hover:text-foreground">
              Trust Infrastructure
            </Link>

            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms of Use
            </Link>
            <Link to="/disclaimer" className="transition-colors hover:text-foreground">
              Disclaimer
            </Link>
          </div>
        </div>

        <div className="rule-top mt-12 flex flex-col gap-2 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Axeum Technologies, Inc.</span>
          <span>FRE 902(13) · 902(14) · eIDAS 2.0 QEL-aligned</span>
        </div>

        <p className="mt-6 max-w-4xl font-mono text-[0.62rem] normal-case leading-relaxed tracking-[0.06em] text-muted-foreground">
          AXEUM™, Registry of Record™, Receipt of Record™, and Governed Orchestration™ are
          trademarks of Axeum Technologies, Inc. Patent pending. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
