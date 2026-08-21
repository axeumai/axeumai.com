# axeumai.com

The Axeum Technologies marketing site — <https://axeumai.com>.

TanStack Start (SSR) · Vite 8 · React 19 · Tailwind 4 · shadcn/ui.
Hosted on Vercel, self-managed. There is no database.

## Development

Requires [bun](https://bun.sh). This project does not use npm.

```sh
bun install
bun run dev          # local dev server
bunx tsc --noEmit    # typecheck — run before every commit
bun run build        # production build -> .vercel/output
bun run lint         # eslint + prettier
```

## Deploying

Push to `main`. Vercel builds from source and deploys to production
automatically; there is no manual deploy step.

The build **must** target Vercel. `vite.config.ts` pins
`nitro: { preset: "vercel" }`; without it the build silently produces a
Cloudflare Worker that Vercel cannot run. A correct build leaves
`.vercel/output/config.json` and no `.output/server/wrangler.json`.

## Routes

| Path | Source |
| --- | --- |
| `/` | `src/routes/index.tsx` |
| `/privacy` | `src/routes/privacy.tsx` |
| `/terms` | `src/routes/terms.tsx` |
| `/disclaimer` | `src/routes/disclaimer.tsx` |
| `/hipaa-notice.html` | `public/` — static, linked by absolute URL from the legal routes |
| `/acceptable-use.html` | `public/` — static, same |

`/privacy.html`, `/terms.html` and `/index.html` permanently redirect to their
replacements via `vercel.json`.

## Contact form

Submissions are emailed via Microsoft Graph and **never stored** — the email is
the record. Requires these server-side environment variables:

```sh
AZURE_TENANT_ID
AZURE_CLIENT_ID
AZURE_CLIENT_SECRET
CONTACT_FROM_ADDRESS
CONTACT_TO_ADDRESS
```

## Analytics

Google Analytics 4 behind Consent Mode v2. Every storage category is denied
until the visitor accepts; advertising signals are denied permanently. Visitors
change or withdraw consent via **Cookie settings** in the footer.

## Before changing anything

Read `CLAUDE.md` first. It documents three things that fail silently — the nitro
preset, the A2P 10DLC opt-in anchor, and Consent Mode script ordering — plus the
coupling between the legal pages and the code.
