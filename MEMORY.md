# MEMORY — axeumai.com

Durable facts for future sessions. Constraints and decisions, not a changelog —
the changelog is `HISTORY.md`.

## Decisions that are settled

- **No database.** Contact submissions are emailed and never stored (CEO,
  2026-08-21: *"we do not need to store anything. they send an email and i get
  the email"*). Do not reintroduce storage as a safety net without asking.
- **Axeum self-hosts.** Lovable produced the original page and nothing since. Do
  not treat Lovable as part of the pipeline, and do not restore Supabase.
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

## Access notes

- Exchange Online PowerShell authenticates non-interactively here:
  `az account get-access-token --resource https://outlook.office365.com` feeds
  `Connect-ExchangeOnline -AccessToken`. The signed-in account is Global
  Administrator. Test this before declaring Azure/Exchange work blocked.
- The Supabase MCP connector reaches a *different* account and never had access
  to the Lovable-provisioned project.
