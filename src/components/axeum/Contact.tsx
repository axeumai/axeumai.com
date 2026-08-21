import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

import { INTENTS, contactSchema } from "@/lib/contact-schema";
import { submitContact } from "@/lib/submit-contact";

const CONTACT_EMAIL = "web@axeumai.com";
// Shown as the fallback path if the send fails. Nothing is stored: the email is the record.

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [terms, setTerms] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending || submitted || !terms) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      email: String(fd.get("email") ?? ""),
      intent: String(fd.get("intent") ?? INTENTS[0]),
      workflow: String(fd.get("workflow") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      smsConsent,
    });

    if (!parsed.success) {
      toast.error("Check the form", {
        description: parsed.error.issues[0]?.message ?? "Some fields need attention.",
      });
      return;
    }

    const d = parsed.data;

    setPending(true);
    try {
      await submitContact({ data: d });
    } catch {
      setPending(false);
      toast.error("Request could not be sent", {
        description: `Nothing was delivered. Please email us directly at ${CONTACT_EMAIL}.`,
      });
      return;
    }
    setPending(false);

    setSubmitted(true);
    form.reset();
    setTerms(false);
    setSmsConsent(false);
    toast.success("Request received", {
      description: d.smsConsent
        ? "We reply under signed NDA, within 48 hours. You're also signed up for alerts — reply STOP at any time to opt out."
        : "We reply under signed NDA, within 48 hours.",
    });
  }

  return (
    <section id="engage-the-registry" className="rule-top py-24">
      <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Engage the Registry</p>
          <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Two fields of intent, one artifact at the end.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tell us the domain and the workflow. We will come back with the shortest path to a sealed
            record inside it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            You can also opt in to account updates and security alerts from Axeum Technologies Inc
            while you are here.
          </p>
          <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            Replies under signed NDA · 48-hour response
          </p>
          <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            Reply STOP to unsubscribe · HELP for help
          </p>
        </div>

        <form className="plate p-8 sm:p-10" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Organization" name="organization" required />
            <div className="sm:col-span-2">
              <Field label="Work email" name="email" type="email" required />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="intent"
                className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                How you want to engage
              </label>
              <select
                id="intent"
                name="intent"
                defaultValue={INTENTS[0]}
                className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
              >
                {INTENTS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="workflow"
                className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Domain &amp; workflow
              </label>
              <textarea
                id="workflow"
                name="workflow"
                rows={4}
                maxLength={4000}
                placeholder="Where consequential action executes today, and who has to rely on the record."
                className="mt-2 w-full resize-none border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
              />
            </div>
          </div>

          {/*
            A2P 10DLC consent block. The `sms-opt-in` anchor is a carrier-registration
            artifact — the campaign points at https://axeumai.com/#sms-opt-in as proof of a
            public, unchecked-by-default opt-in. Do not rename it, pre-check the box, make
            the phone number required, or reword the consent / HELP / STOP disclosures
            without re-filing the campaign. SMS consent must stay optional and separate
            from the Terms acceptance below it.
          */}
          <div id="sms-opt-in" className="mt-10 scroll-mt-24 border-t border-border pt-8">
            <p className="eyebrow">Stay informed</p>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-muted-foreground">
              Sign up to receive account updates and security alerts from Axeum Technologies Inc.
              Optional, and never a condition of a reply.
            </p>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Mobile phone number (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={32}
                placeholder="(555) 123-4567"
                className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
              />
            </div>

            <div className="mt-6 flex gap-3">
              <input
                id="optin-sms-consent"
                name="smsConsent"
                type="checkbox"
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
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

            <div className="mt-5 flex gap-3">
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
            disabled={pending || submitted || !terms}
            className="group mt-8 inline-flex items-center gap-3 px-6 py-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
            style={{ backgroundImage: "var(--gradient-seal)" }}
          >
            {submitted ? "Request registered" : pending ? "Registering…" : "Request access"}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

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

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
      />
    </div>
  );
}
