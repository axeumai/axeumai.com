import { useState } from "react";
import { Link } from "@tanstack/react-router";

/**
 * A2P 10DLC consent capture.
 *
 * The section id and the consent copy below are carrier-registration artifacts: the
 * campaign registration points at https://axeumai.com/#sms-opt-in as proof of a
 * public, unchecked-by-default opt-in. Do not rename the id, pre-check a box, or
 * reword the consent/HELP/STOP disclosures without re-filing the campaign.
 *
 * No backend is wired — parity with the static site this replaced. Submissions are
 * acknowledged in-page and not stored.
 */
export function SmsOptIn() {
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = terms && email.trim().length > 0 && !submitted;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  return (
    <section id="sms-opt-in" className="rule-top py-24">
      <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Stay informed</p>
          <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Axeum Technologies Inc
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Sign up to receive account updates and security alerts. Choose how you&rsquo;d like to
            hear from us.
          </p>
          <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            Reply STOP to unsubscribe &middot; HELP for help
          </p>
        </div>

        <form className="plate p-8 sm:p-10" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6">
            <div>
              <label
                htmlFor="optin-email"
                className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Email address <span aria-hidden>*</span>
              </label>
              <input
                id="optin-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                maxLength={255}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
              />
            </div>

            <div>
              <label
                htmlFor="optin-phone"
                className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Mobile phone number (optional)
              </label>
              <input
                id="optin-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={32}
                placeholder="(555) 123-4567"
                className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
              />
            </div>

            <div className="flex gap-3">
              <input
                id="optin-sms-consent"
                name="smsConsent"
                type="checkbox"
                className="mt-1 size-4 shrink-0 accent-[var(--copper,#C49A6C)]"
              />
              <label
                htmlFor="optin-sms-consent"
                className="text-[0.82rem] leading-relaxed text-muted-foreground"
              >
                By checking, you consent to receive{" "}
                <strong className="font-medium text-foreground">
                  account updates and security alerts from Axeum Technologies Inc
                </strong>
                . Message frequency may vary. Message and data rates may apply.{" "}
                <strong className="font-medium text-foreground">
                  Reply HELP for help or STOP to opt-out.
                </strong>
              </label>
            </div>

            <div className="flex gap-3">
              <input
                id="optin-terms-consent"
                name="termsConsent"
                type="checkbox"
                required
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                className="mt-1 size-4 shrink-0 accent-[var(--copper,#C49A6C)]"
              />
              <label
                htmlFor="optin-terms-consent"
                className="text-[0.82rem] leading-relaxed text-muted-foreground"
              >
                By checking, I accept the{" "}
                <Link
                  to="/terms"
                  className="text-copper underline decoration-primary/50 decoration-1 underline-offset-4 transition-colors hover:text-foreground"
                >
                  Terms of Use
                </Link>{" "}
                &amp;{" "}
                <Link
                  to="/privacy"
                  className="text-copper underline decoration-primary/50 decoration-1 underline-offset-4 transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="group mt-8 inline-flex items-center gap-3 px-6 py-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
            style={{ backgroundImage: "var(--gradient-seal)" }}
          >
            {submitted ? "Subscribed" : "Subscribe"}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </button>

          {submitted ? (
            <p
              role="status"
              className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-copper"
            >
              Thank you — you&rsquo;re subscribed. You can reply STOP at any time to opt out.
            </p>
          ) : null}

          <p className="mt-6 text-[0.75rem] leading-relaxed text-muted-foreground">
            Axeum Technologies Inc will only use your number to send the account updates and
            security alerts you request. We never sell or share your information. Reply STOP to
            unsubscribe, HELP for help.
          </p>
        </form>
      </div>
    </section>
  );
}
