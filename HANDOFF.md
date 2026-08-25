# HANDOFF — axeumai.com

**Last session:** 2026-08-22 → 2026-08-25 · marketing-agent (MKT)
**State:** working tree clean, `main` at the wrap commit, `HEAD == origin/main`,
production verified live (`200`, consent ordering intact, GA4 tag present).

## There is no work in progress

No application code changed last session. Nothing is half-finished. Start from the
open items below, or from whatever the CEO asks.

## Read these first

1. `CLAUDE.md` — governance header, then the project section: three things that
   fail silently, the legal-pages-are-code coupling, and why this repo does not
   author HOPs.
2. `MEMORY.md` — settled decisions and dead ends already ruled out. Read the
   "Decisions that are settled" section before touching anything Lovable-adjacent.
3. `HISTORY.md` — what changed and why, if you need the narrative.

## First action for the next session

Ask the CEO what he wants worked on. Do **not** open with an audit. The last two
sessions both opened by re-deriving the same non-issue and burning his time on it;
the correct opening move is a live health check (below) and then a question.

Health check, one command, takes two seconds:

```sh
curl -s https://axeumai.com/ -o /dev/null -w "%{http_code}\n"
```

## Open items

| # | Item | State |
| --- | --- | --- |
| 1 | Confirm GA4 is receiving data | **UNVERIFIABLE from here.** The tag loads and Google recognises the property, but there is no GA connector — the Realtime report has to be checked in the GA UI after accepting the banner. |
| 2 | Vercel **preview**-scope env vars unset | **BLOCKED.** The CLI requires an interactive branch prompt. Preview deploys render but the contact form will error. Fix in the Vercel dashboard, or accept it. |
| 3 | Reject/Accept button weighting on the consent banner | **DEFERRED — CEO decision.** Accept is currently the visual primary. EU regulators increasingly expect equal prominence. One-line change if wanted. |
| 4 | Pre-existing Prettier errors in `src/components/axeum/SiteChrome.tsx` (5) | **DEFERRED.** Inherited from the Lovable export, not introduced by us. `bun run lint` fails because of them. Left alone deliberately to avoid churn; `bunx eslint --fix` clears them. |
| 5 | `marketing-agent` / actor_id `MKT` is absent from `actor.csv` | **OPEN — CEO or Operations.** Verified: `grep -c ",MKT," actor.csv` → 0, `marketing-agent` → 0, `axeumai.com` as an Application URL → 0. `CLAUDE.md` startup step 5 has never been satisfiable. **Do not fix it yourself** — it is a ~3,300-row shared CSV with quoted multi-line fields that the whole fleet parses. **Do not HOP it** either; see below. |

## Closed, do not reopen

**The Lovable workspace is not Axeum infrastructure.** The board previously carried
"delete the Lovable project and the Supabase database it provisioned" as open CEO
action. The CEO closed it on 2026-08-25: the ~28 projects still sitting in that
workspace — including `axeum-witness-ledger` (display name "Axeum Registry") and
`axeum-care-edge` — are bootstrap residue from how work was first started, before
it was transferred here. Their auto-provisioned databases are live but hold nothing
Axeum depends on.

Do not probe them. Do not report their databases as exposure. Do not put them back
on this board. Two consecutive sessions did, and the second one was told to stop.

## This repo does not author HOPs

axeumai.com is inner to Pillar 4 — Operations, whose public address is axeum-docs.
Inner repos do not author outbound handoffs. Work involving Operations-owned assets
(`actor.csv`, canon, the handoffs directory) is *inside* this pillar, so it is not
cross-pillar and needs no HOP; LOS-001 rule 3 makes lane ceremony opt-in for
internal, reversible work anyway. Raise it to the CEO directly.

Startup step 4 (`hop-inbox.js --lane=ops`) returns axeum-docs' inbox — 76 open
items belonging to Brad (COOoc), not to this repo. Reading it is fine. Reporting
its contents to the CEO is the exact failure lane discipline exists to prevent.

## Things that will bite you

- Push to `main` **is** a production deploy. There is no staging.
- Run `bunx tsc --noEmit` before committing. `bun run lint` currently fails on
  item 4 above — check that any new failures are yours before fixing.
- Do not rename the `sms-opt-in` element id or reword its consent copy. It is a
  carrier-registration artifact.
- Do not split the GA4 head script back into two entries.
- If you change what the site collects, edit `src/routes/privacy.tsx` and bump
  its `effective` date in the same commit.
- `CLAUDE.md` has ~18 pre-existing markdownlint warnings, all in the governance
  header (lines 7–61). They are inherited. Do not "fix" them — the header is
  shared boilerplate and reformatting it creates diff noise across the fleet.

## Verifying the contact form end to end

The form posts to a TanStack server function. To exercise it without a browser:
POST to `https://axeumai.com/_serverFn/<id>` where `<id>` is the 64-char hash in
`.vercel/output/functions/__server.func/**/*server-fn-resolver*.mjs`, with body
`JSON.stringify(await toJSONAsync({ data }))` (seroval), header
`x-tsr-serverFn: true`, and an `Origin: https://axeumai.com` header for CSRF. A
success returns `200` with `{ result: { ok: true } }`. **It sends a real email** —
use it sparingly.
