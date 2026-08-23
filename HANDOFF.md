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
| 1 | Confirm GA4 is receiving data | **UNVERIFIABLE from here.** The tag loads and Google recognises the property, but there is no GA connector — the Realtime report has to be checked in the GA UI after accepting the banner. |
| 2 | Vercel **preview**-scope env vars unset | **BLOCKED.** The CLI requires an interactive branch prompt. Preview deploys render but the contact form will error. Fix in the Vercel dashboard, or accept it. |
| 3 | Reject/Accept button weighting on the consent banner | **DEFERRED — CEO decision.** Accept is currently the visual primary. EU regulators increasingly expect equal prominence. One-line change if wanted. |
| 4 | Pre-existing Prettier errors in `src/components/axeum/SiteChrome.tsx` (5) | **DEFERRED.** Inherited from the Lovable export, not introduced by us. `bun run lint` fails because of them. Left alone deliberately to avoid churn; `bunx eslint --fix` clears them. |
| 5 | `marketing-agent` / actor_id `MKT` is absent from `actor.csv` | **OPEN — ops lane.** `CLAUDE.md` step 5 says to verify the persona in the registry of record; `grep -c ",MKT," actor.csv` returns 0, as does `marketing-agent` and `axeumai.com` as an Application URL. Startup step 5 has never been satisfiable. actor.csv is Operations-owned — HOP to `ops`, do not edit it directly. |

### Closed, do not reopen

**The Lovable workspace is not Axeum infrastructure.** A prior board carried "delete
the Lovable project and its Supabase database" as CEO action. The CEO closed it on
2026-08-22: the projects still sitting in that workspace are bootstrap residue from
how work was first started, before it was transferred here. Nothing Axeum runs
depends on them. Do not probe them, do not report their databases as exposure, and
do not put them back on this board.

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
