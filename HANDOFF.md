# HANDOFF — axeumai.com

**Last session:** 2026-08-19 → 2026-08-21 · marketing-agent (MKT)
**State:** working tree clean, `main` at `8b4eb6e` + this wrap commit, production
deploy green, live site verified.

## There is no work in progress

The last session closed with everything shipped and verified. Nothing is
half-finished. Start from the open items below, or from whatever the CEO asks.

## Read these first

1. `CLAUDE.md` — governance header, then the project section: three things that
   fail silently, and the legal-pages-are-code coupling.
2. `MEMORY.md` — settled decisions and dead ends already ruled out.
3. `HISTORY.md` — what changed and why, if you need the narrative.

## Open items

| # | Item | State |
| --- | --- | --- |
| 1 | Delete the Lovable project `axeum-witness-ledger` (`1dc2a2f4-8971-43f1-a860-c3770068bb45`) and the Supabase database it provisioned (`zsvgueahtzoxzckolxmi`) | **OPEN — CEO action.** Confirmed live: `get_database_status` returns `{"enabled":true,"stack":"supabase"}`. It still accepts anonymous writes. The repo owns every asset, so deleting costs nothing. Verify with the Lovable MCP afterwards. |
| 2 | Confirm GA4 is receiving data | **UNVERIFIABLE from here.** The tag loads and Google recognises the property, but there is no GA connector — the Realtime report has to be checked in the GA UI after accepting the banner. |
| 3 | Vercel **preview**-scope env vars unset | **BLOCKED.** The CLI requires an interactive branch prompt. Preview deploys render but the contact form will error. Fix in the Vercel dashboard, or accept it. |
| 4 | Reject/Accept button weighting on the consent banner | **DEFERRED — CEO decision.** Accept is currently the visual primary. EU regulators increasingly expect equal prominence. One-line change if wanted. |
| 5 | Pre-existing Prettier errors in `src/components/axeum/SiteChrome.tsx` (5) | **DEFERRED.** Inherited from the Lovable export, not introduced by us. `bun run lint` fails because of them. Left alone deliberately to avoid churn; `bunx eslint --fix` clears them. |

## Things that will bite you

- Push to `main` **is** a production deploy. There is no staging.
- Run `bunx tsc --noEmit` before committing. `bun run lint` currently fails on
  item 5 above — check that any new failures are yours before fixing.
- Do not rename the `sms-opt-in` element id or reword its consent copy. It is a
  carrier-registration artifact.
- Do not split the GA4 head script back into two entries.
- If you change what the site collects, edit `src/routes/privacy.tsx` and bump
  its `effective` date in the same commit.

## Verifying the contact form end to end

The form posts to a TanStack server function. To exercise it without a browser:
POST to `https://axeumai.com/_serverFn/<id>` where `<id>` is the 64-char hash in
`.vercel/output/functions/__server.func/**/*server-fn-resolver*.mjs`, with body
`JSON.stringify(await toJSONAsync({ data }))` (seroval), header
`x-tsr-serverFn: true`, and an `Origin: https://axeumai.com` header for CSRF. A
success returns `200` with `{ result: { ok: true } }`. **It sends a real email** —
use it sparingly.
