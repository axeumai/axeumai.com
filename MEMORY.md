# MEMORY — axeumai.com

Durable facts for future sessions. Constraints and decisions, not a changelog —
the changelog is `HISTORY.md`.

## Decisions that are settled

- **No database.** Contact submissions are emailed and never stored (CEO,
  2026-08-21: *"we do not need to store anything. they send an email and i get
  the email"*). Do not reintroduce storage as a safety net without asking.
- **Axeum self-hosts.** Lovable produced the original page and nothing since. Do
  not treat Lovable as part of the pipeline, and do not restore Supabase.
- **The Lovable workspace is not Axeum infrastructure — stop checking it.** CEO,
  2026-08-25: *"stop wasting time checking lovable. nothing for axeum is being
  used there. if it exists in lovable then its just how i started it before i
  transfered it."* The ~28 projects still in that workspace, including
  `axeum-witness-ledger` (display name "Axeum Registry") and `axeum-care-edge`,
  are bootstrap residue. Their auto-provisioned Supabase databases are live but
  hold nothing Axeum depends on. Do not probe them, do not report them as
  exposure, do not put them on the handoff board. Two consecutive sessions did.
- **Advertising signals stay denied.** Even for visitors who accept analytics.
  Granting them is a privacy-policy change, not a code change.

## Constraints discovered the hard way

- **`vite.config.ts` nitro preset must stay pinned to `vercel`.** The default is
  `cloudflare-module` and the build *succeeds* while producing something Vercel
  cannot run.
- **React reorders head scripts.** `<script src>` is hoisted ahead of inline
  blocks, which silently broke Consent Mode ordering. Any consent-gated tag must
  inject its own loader.
- **`PolicyScopeGroupId` will not accept a bare mailbox.** Exchange
  ApplicationAccessPolicy needs a mail-enabled security group — hence
  `axeum-mailer-scope@axeumai.com`.
- **The legal pages are code.** `/privacy` names the GA4 measurement ID and
  describes the consent gate. Changing data handling without editing
  `privacy.tsx` and bumping its effective date publishes a false legal statement.

## Dead ends ruled out

- **Vercel CLI cannot set preview-scope env vars non-interactively.** Both
  `--value ... --yes --force` and piped stdin hit a mandatory branch prompt.
  Production and development are set; preview is not.
- **`vite preview` does not work with the Vercel preset** — it expects
  `dist/server/server.js`. Use `bun run dev` for local SSR checks.
- **Piping values to `vercel env add` appends a trailing newline.** Always use
  `--value`, and read the value back to confirm.
- **Hand-rolled JSON will not reach a TanStack server function.** The wire format
  is seroval: `JSON.stringify(await toJSONAsync({ data }))`, with an
  `x-tsr-serverFn: true` header and an `Origin` header to satisfy CSRF.

## Identity and routing

- **`actor_id MKT` is not in `actor.csv`.** Verified 2026-08-22: `grep -c ",MKT,"`
  returns 0, as do `marketing-agent` and `axeumai.com` as an Application URL.
  `CLAUDE.md` startup step 5 has never been satisfiable. Do not fix it by editing
  the shared ~3,300-row CSV — a malformed append breaks every agent that parses it.
- **This repo does not author HOPs.** axeumai.com is Pillar 4 — Operations, whose
  public address is axeum-docs. Under the HOP routing table an inner repo does not
  author outbound handoffs, and work inside its own pillar is not cross-pillar at
  all. LOS-001 rule 3 makes lane ceremony opt-in for internal, reversible work.
  Raise Operations-owned issues directly rather than manufacturing a lane code.

## Access notes

- Exchange Online PowerShell authenticates non-interactively here:
  `az account get-access-token --resource https://outlook.office365.com` feeds
  `Connect-ExchangeOnline -AccessToken`. The signed-in account is Global
  Administrator. Test this before declaring Azure/Exchange work blocked.
- The Supabase MCP connector reaches a *different* account and never had access
  to the Lovable-provisioned project.
