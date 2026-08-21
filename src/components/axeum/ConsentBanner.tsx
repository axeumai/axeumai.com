import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import {
  CONSENT_EVENT,
  applyConsent,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Consent Mode v2 banner. Renders nothing on the server and nothing until we
 * know the stored choice, so there is no hydration mismatch and no flash of a
 * banner for visitors who already decided.
 *
 * Withdrawing consent must be as easy as giving it, so the footer exposes
 * "Cookie settings", which dispatches CONSENT_EVENT to reopen this.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    // Re-assert a prior "granted" on every load: the head default denies
    // analytics_storage, so without this a returning visitor stays denied.
    if (stored) applyConsent(stored);
    else setOpen(true);
    setReady(true);

    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_EVENT, reopen);
  }, []);

  function choose(choice: ConsentChoice) {
    saveConsent(choice);
    setOpen(false);
  }

  if (!ready || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 backdrop-blur-xl"
    >
      <div className="shell flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-3xl">
          <p id="consent-title" className="eyebrow">
            Analytics consent
          </p>
          <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground">
            We use Google Analytics to measure how this site is used. Nothing is stored on your
            device until you choose. We run no advertising, no remarketing, and no cross-site
            profiling, and we never sell or share this data. See our{" "}
            <Link
              to="/privacy"
              className="text-copper underline decoration-primary/50 decoration-1 underline-offset-4 transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="inline-flex min-h-11 items-center border border-border px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="inline-flex min-h-11 items-center px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-seal)" }}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
