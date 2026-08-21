# HISTORY — axeumai.com

## 2026-08-19 → 2026-08-21 — Site replacement, contact-by-email, analytics

Actor: marketing-agent (MKT). 11 commits, `69008c8..8b4eb6e`. All work below was
verified against the live site or live APIs before being logged.

### Site replacement (`542200e`)

Replaced the hand-authored static HTML site with the TanStack Start app the CEO
supplied as `axeum web 081926.zip`. Three defects in that build were found and
fixed before it shipped:

- **The A2P 10DLC SMS opt-in was absent entirely** — zero matches across `src/`.
  `#sms-opt-in` is the URL Axeum's carrier campaign registration cites. Rebuilt
  as a component with the consent, HELP/STOP and rate disclosures carried over
  verbatim.
- **The new legal routes dead-linked themselves.** `privacy.tsx` and `terms.tsx`
  link to `hipaa-notice.html` and `acceptable-use.html` by absolute URL; the
  build did not include them. Preserved as real files under `public/`.
- **The build targeted Cloudflare.** Nitro's default preset emitted a Worker
  bundle Vercel cannot run. Pinned `preset: "vercel"` in `vite.config.ts`.

Also: `vercel.json` redirects for the retired `.html` URLs; `hero-bg.mp4`
(7.7 MB, unreferenced) removed.

### Content edits (`6eab22a`, `110a35b`)

Receipt count `150,000+` → `1,234,443+`. Removed the "161 provisional patent
filings" stat, and the footer witness pull-quote plus the Receipt of Record
cover seal.

### Contact form (`4b2bae4`, `2fb0294`)

Merged the separate "Engage the Registry" form and "Stay informed" SMS opt-in
into one form with one submit, preserving both the `#engage-the-registry` and
`#sms-opt-in` anchors — the first is linked from the footer, the second by the
carrier registration.

Then removed database storage entirely on CEO instruction. Submissions are now
emailed via Microsoft Graph app-only send; the email is the record, carrying the
A2P consent line. Created Entra app "axeumai.com Contact Mailer" with Mail.Send,
admin-consented, and restricted it by Exchange ApplicationAccessPolicy to
`notify@axeumai.com` alone.

### Supabase removal (`8a08561`, `c5a53db`)

Supabase was never an Axeum choice — Lovable Cloud auto-provisioned project
`zsvgueahtzoxzckolxmi` during the original build, and the generated contact form
wrote public submissions into it with an `anon INSERT` policy open to anyone
holding the publishable key that shipped in the browser bundle. Removed the
integration, migrations, dependency, `attachSupabaseAuth` middleware, and six
Vercel environment variables. Localised the two images that existed only on
Lovable's CDN so the repo owns every asset.

### Analytics (`c9bb089`, `8b4eb6e`)

Installed GA4 (`G-PY5CXN1NHJ`), which made the live privacy policy false — it
stated the site set no analytics cookies. Corrected the policy in the same
commit and bumped its effective date to 2026-08-21, as its own change clause
requires.

Added Consent Mode v2: all categories denied before any tag loads, a banner,
persistence, and a footer withdrawal control. **A defect was found and fixed
during verification**: React hoists `<script src>` ahead of inline scripts
regardless of array order, so the loader was emitted at byte 772 and the consent
defaults at 1941 — after it. The loader is now injected by the same inline
script that sets the defaults, making ordering a property of the code.

### Housekeeping (`d9388cf`, `8f053c4`)

Untracked three stray 2.16 MB `AXEUM Website (standalone).html` exports swept in
by a `git add -A`. Committed a pre-existing CLAUDE.md governance edit separately.
