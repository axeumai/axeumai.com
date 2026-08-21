import { createServerFn } from "@tanstack/react-start";

import { contactSchema, type ContactSubmission } from "./contact-schema";

/**
 * Contact-form submission. Validates on the server (never trust the client copy
 * of the schema) and hands off to Microsoft Graph.
 *
 * The mailer is imported dynamically so its module-level code — and anything it
 * reads from process.env — never has a chance to land in the client bundle.
 */
export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown): ContactSubmission => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("./contact-mailer.server");
    await sendContactEmail(data);
    return { ok: true as const };
  });
