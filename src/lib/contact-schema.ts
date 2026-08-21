import { z } from "zod";

export const INTENTS = [
  "Seal the records I already keep (RAW)",
  "Embed the Registry (Licensing)",
  "Engage the operator (Governed Orchestration)",
  "Exploring",
] as const;

export const contactSchema = z.object({
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
  phone: z.string().trim().max(32, "Enter a valid mobile number"),
  smsConsent: z.boolean(),
});

export type ContactSubmission = z.infer<typeof contactSchema>;
