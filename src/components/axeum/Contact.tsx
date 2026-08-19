import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";

const CONTACT_EMAIL = "web@axeumai.com";
// This is also the destination inbox for submission notifications once an email API key is added.

const INTENTS = [
  "Seal the records I already keep (RAW)",
  "Embed the Registry (Licensing)",
  "Engage the operator (Governed Orchestration)",
  "Exploring",
];


const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120, "Name is too long"),
  organization: z
    .string()
    .trim()
    .min(1, "Organization is required")
    .max(160, "Organization is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Work email is required")
    .email("Enter a valid work email")
    .max(255, "Email is too long"),
  intent: z.string().trim().min(1).max(200),
  workflow: z.string().trim().max(4000, "Please keep this under 4000 characters"),
});

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending || submitted) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      email: String(fd.get("email") ?? ""),
      intent: String(fd.get("intent") ?? INTENTS[0]),
      workflow: String(fd.get("workflow") ?? ""),
    });

    if (!parsed.success) {
      toast.error("Check the form", {
        description: parsed.error.issues[0]?.message ?? "Some fields need attention.",
      });
      return;
    }

    setPending(true);
    const { error } = await supabase.from("contact_requests").insert({
      name: parsed.data.name,
      organization: parsed.data.organization,
      email: parsed.data.email,
      intent: parsed.data.intent,
      workflow: parsed.data.workflow || null,
    });
    setPending(false);

    if (error) {
      toast.error("Request could not be recorded", {
        description: `Nothing was stored. Please email us directly at ${CONTACT_EMAIL}.`,
      });
      return;
    }


    setSubmitted(true);
    form.reset();
    toast.success("Request received", {
      description: "We reply under signed NDA, within 48 hours.",
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
          <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            Replies under signed NDA · 48-hour response
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

          <button
            type="submit"
            disabled={pending || submitted}
            className="group mt-8 inline-flex items-center gap-3 px-6 py-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
            style={{ backgroundImage: "var(--gradient-seal)" }}
          >
            {submitted ? "Request registered" : pending ? "Registering…" : "Request access"}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
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
