// Server-only. Sends contact-form submissions to the Axeum inbox via Microsoft
// Graph (app-only / client-credentials). There is no database: the email IS the
// record, including the A2P 10DLC consent line.
//
// Requires, on the server only:
//   AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET
//   CONTACT_FROM_ADDRESS (a real mailbox in the tenant), CONTACT_TO_ADDRESS
import type { ContactSubmission } from "./contact-schema";

const GRAPH = "https://graph.microsoft.com/v1.0";

let cachedToken: { value: string; expiresAt: number } | null = null;

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing server environment variable: ${name}`);
  return v;
}

async function getAppToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now) return cachedToken.value;

  const tenantId = required("AZURE_TENANT_ID");
  const body = new URLSearchParams({
    client_id: required("AZURE_CLIENT_ID"),
    client_secret: required("AZURE_CLIENT_SECRET"),
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const res = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    throw new Error(`Graph token request failed (${res.status}): ${await res.text()}`);
  }

  const json = (await res.json()) as { access_token: string; expires_in: number };
  // Refresh a minute early so an in-flight request never uses an expiring token.
  cachedToken = { value: json.access_token, expiresAt: now + (json.expires_in - 60) * 1000 };
  return cachedToken.value;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:6px 16px 6px 0;vertical-align:top;font:12px/1.5 monospace;color:#6b7280;white-space:nowrap;text-transform:uppercase;letter-spacing:.08em">${esc(label)}</td>
    <td style="padding:6px 0;vertical-align:top;font:14px/1.6 -apple-system,Segoe UI,sans-serif;color:#111827">${esc(value) || "&mdash;"}</td>
  </tr>`;
}

export async function sendContactEmail(d: ContactSubmission): Promise<void> {
  const from = required("CONTACT_FROM_ADDRESS");
  const to = required("CONTACT_TO_ADDRESS");
  const token = await getAppToken();

  const consentLine = d.smsConsent
    ? `YES — consented to account updates and security alerts via SMS${d.phone ? ` at ${d.phone}` : " (no number supplied)"}`
    : "No — did not opt in to SMS";

  const html = `<div style="font:14px/1.6 -apple-system,Segoe UI,sans-serif;color:#111827">
    <p style="margin:0 0 4px;font:12px/1.5 monospace;letter-spacing:.16em;text-transform:uppercase;color:#C49A6C">Engage the Registry</p>
    <h2 style="margin:0 0 20px;font:600 20px/1.3 Georgia,serif">New inquiry from ${esc(d.name)}</h2>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
      ${row("Name", d.name)}
      ${row("Organization", d.organization)}
      ${row("Work email", d.email)}
      ${row("Intent", d.intent)}
      ${row("Phone", d.phone)}
      ${row("SMS consent", consentLine)}
    </table>
    <p style="margin:24px 0 6px;font:12px/1.5 monospace;letter-spacing:.08em;text-transform:uppercase;color:#6b7280">Domain &amp; workflow</p>
    <div style="white-space:pre-wrap;border-left:3px solid #C49A6C;padding:8px 0 8px 14px">${esc(d.workflow) || "&mdash;"}</div>
    <p style="margin:28px 0 0;font:12px/1.6 monospace;color:#9ca3af">Sent by the axeumai.com contact form. Reply directly to reach the sender.</p>
  </div>`;

  const res = await fetch(`${GRAPH}/users/${encodeURIComponent(from)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject: `Registry inquiry — ${d.name}, ${d.organization}`,
        body: { contentType: "HTML", content: html },
        toRecipients: [{ emailAddress: { address: to } }],
        // Reply goes straight to the person who filled the form.
        replyTo: [{ emailAddress: { address: d.email } }],
      },
      saveToSentItems: true,
    }),
  });

  if (!res.ok) {
    throw new Error(`Graph sendMail failed (${res.status}): ${await res.text()}`);
  }
}
