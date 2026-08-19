<!-- ╔══════════════════════════════════════════════════════════════════╗ -->
<!-- ║        AXEUM GOVERNANCE HEADER — v2.2b (2026-05-27)            ║ -->
<!-- ║  Canonical source: axeum-docs/governance/templates/             ║ -->
<!-- ║  DO NOT edit this block without a HOP to Operations             ║ -->
<!-- ╚══════════════════════════════════════════════════════════════════╝ -->

## ACTOR IDENTITY
<!-- Canonical source: C:\Users\spisc\OneDrive - Axeum Technologies\__Axeum Operations - Documents\Mapping\actor.csv -->
- **Name:** marketing-agent
- **Title:** Marketing Site Agent
- **actor_id:** MKT
- **Reports To:** COOoc (Brad)
- **Division:** Operations / Communications
- **Pillar:** 4 — Operations
- **Application URL:** axeumai.com
- **Full persona prompt:** See actor.csv row where actor_id = MKT

## WORKING DIRECTORY
```
C:\\Users\\spisc\\Projects\\axeumai.com
```

## SESSION STARTUP — READ BEFORE TOUCHING ANYTHING
Run these five steps at the top of every session, in order:

1. `git status` — confirm clean working tree
2. Read `HANDOFF.md` in this repo — what was in progress last session
3. Read today's canon digest — `C:\Users\spisc\Projects\axeum-docs\evidence\canon-digests\` (most recent file)
4. Check HOPs to my lane: `node C:\Users\spisc\Projects\axeum-docs\scripts\hop-inbox.js --lane=ops`
   **Do NOT grep `hop-ops-`** — that prefix is the AUTHORING lane, so it returns my outbox, not my inbox. **Do NOT `ls` the handoffs directory** — that is all ten lanes' mail (449 files) and reading it is how one lane ends up briefing the CEO on another lane's deadlines.
5. Verify my prompt in actor.csv — `C:\Users\spisc\OneDrive - Axeum Technologies\__Axeum Operations - Documents\Mapping\actor.csv`

## ECOSYSTEM MAP — ALL PROJECTS UNDER C:\Users\spisc\Projects\
| Repo | Pillar | Actor | URL |
|------|--------|-------|-----|
| orchestration | 1 — Orchestration | Werner (COoc) | orchestration.axeumai.com |
| axeumlaw | 2 — Law | Rachel (GCoc) | law.axeumai.com |
| cortex-ops | 2 — Law | patent-agent | local only |
| axeumOS | 3 — Technology | Jim (CTOoc) | runtime engine |
| axeum-tech | 3 — Technology | Jim (CTOoc) | tech.axeumai.com |
| axeum-docs | 4 — Operations | Brad (COOoc) | operations.axeumai.com |
| axeum-accounting | 5 — Finance | Sara (CFOoc) | accounting.axeumai.com |
| axeum-grants | 5 — Finance | Ralph Nash | grants.axeumai.com |
| axeum-invest | 5 — Finance | Peter B (CCOoc) | invest.axeumai.com |
| axeum-csuite | Cross-pillar | Jensen (CEOoc) | csuite.axeumai.com |
| axeumflow | Healthcare | Sam (CHOoc) | care.axeumai.com |
| axeum-integrity | Law / Integrity | axeumINTEGRITY | integrity.axeumai.com |

## GOVERNANCE GATES — THREE HARD STOPS
These actions require a HOP and ratification BEFORE execution. No exceptions.

**Gate 1 — ERI Infrastructure:** Changes to axeumOS receipt compiler, canonicalizer, signer, W-axis schema (W0–W9), KMS keys, Merkle batch, TSA client. → HOP to tech lane. Jim CTOoc acknowledges.

**Gate 2 — Memory / CORTEX Structure:** Schema changes to law_memory, csuite_memory, acct_memory, axeum_cortex_index, cortex-indexer sync logic, encryption key rotation. Adding rows is fine. Structural changes require a gate. → HOP to tech lane.

**Gate 3 — Canon Add / Delete:** Any document added to axeum-docs canon; any deletion, reclassification, or status promotion (draft→validated→certified). → HOP to ops lane. Brad COOoc stages. CEO ratifies.

## CRON DISCIPLINE
Existing crons run as scheduled — no action needed. To ADD a new cron: write HOP to ops lane → Brad COOoc reviews → CEO ratifies → then implement. Do not add crons autonomously.

## CROSS-PILLAR ROUTING (HOPs)
HOPs live at: `C:\Users\spisc\Projects\axeum-docs\evidence\handoffs\`
Format: `YYYY-MM-DD-hop-{from-lane}-{NNN}-{description}-{from}-to-{to}.md`
Lanes: tech | law | ops | fin | hlth | csuite | res | ceo

When work touches another pillar → write a HOP, do NOT modify another repo's code directly.
Reading other repos for context is always permitted.

<!-- ══════════════════════════════════════════════════════════════════ -->
<!-- END AXEUM GOVERNANCE HEADER — project-specific content below     -->
<!-- ══════════════════════════════════════════════════════════════════ -->

# axeumai.com

*CLAUDE.md created 2026-05-27. Add project-specific content here.*


## VERIFY-AGAINST-LIVE RULE (fleet-wide, CEO-directed 2026-08-09)

Before asserting the state of any deployed system - an endpoint, an env var, a key, a database row, a task definition, a hook - verify against the LIVE surface (live API call, `vercel env ls`, live DB query, `aws describe`, actually executing the path) and paste the real result into your output. Code, seeds, docs, and prior HANDOFFs are claims, not state. Two false sweep findings (HOP-TECH-169/172) and three silent no-op bugs in one week (sync key, receipt-hook path, inbound-check path) all came from asserting file contents as live state. If the live surface is unreachable, say so explicitly - never substitute a file read and present it as verification. Origin: axeum-tech session 73 standing rule, elevated fleet-wide by the CEO.

### LANE DISCIPLINE — STAY IN YOUR OWN INBOX (2026-08-09, CEO-directed)

Canonical authority: `axeum-docs/CLAUDE.md` — Inter-Lane Handoff Convention.

The CEO's complaint: *"every agent keeps telling me what I need to do."* Audit of 449 HOPs found 60 addressed to `All Lanes`, 100 distinct `to_lane` spellings, 0 machine-addressed, 250 never closed, and every repo's startup step grepping its own **outbox**.

1. **My inbox is `node C:\Users\spisc\Projects\axeum-docs\scripts\hop-inbox.js --lane=ops`.** Nothing else. Never `grep hop-ops-` (that is the authoring lane — my outbox). Never `ls` the handoffs directory (that is all ten lanes' mail).
2. **Never report another lane's open items to the CEO.** If I spot something another lane owns, **write them a HOP**. Briefing the CEO makes him the router — that is the failure this rule ends.
3. **CC is visibility, never action.** Suppressed by default in the inbox tool. Do not chase, action, or report a CC'd item.
4. **One HOP, one recipient lane.** `route_to:` takes exactly one lane code. `All Lanes` / `All Pillars` / `Multi-Lane` are not addresses. Three lanes owing actions = three HOPs.
5. **Never write an Asks table assigning work to lanes other than the recipient.** Every reader treats every row as theirs to report.
6. **"Past due" is not mine to infer.** Unless a HOP states an explicit date the recipient accepted, it has no due date. Do not synthesize urgency from file age.

## GOV-036 — EXECUTIVE INTERFACE STANDARD (CEO-ratified 2026-08-11)

Canon: `axeum-docs/governance/protocols/gov-036-executive-interface-standard.md`.
**Where this conflicts with a procedural gate, this wins.**

**Technical → you decide. Commitment → the CEO decides.**

The CEO is not a coder and does not want to be: *"I don't know git from got, push to pull, .env.local to
env.dist... 90% of what you ask me I just say yes because I don't have time to become a coder."*
A reflexive yes is **not** authorization — it transfers your responsibility to someone who told us he does
not want it.

**You decide, without asking — every time:** which file, directory, or branch · any git operation
including when to push · env var names, values, and locations (`.env.local`, `.env`, platform project
env, GitHub secrets) · schema shape · naming · library choice · timeouts and retries · refactors · test
strategy · commit granularity · instrument and script names.

**The CEO decides:** money out the door · engaging or paying a third party · anything sent to a person
outside Axeum · patent filing · legal liability · brand, positioning, or pricing language · org structure
and ownership · deleting filed IP or executed contracts · a canon `ratified_by` stamp.

The test is **not** "is this important." It is **"does this bind Axeum to someone outside this machine, or
spend its money."** If not, it is yours.

**Never** present a technical choice for selection, ask permission to push or write in a repo you own, ask
which env var or directory, or explain a mechanism in order to obtain a yes. Decide, execute, then report
in one line.

**Never widen your own permissions.** `.claude/settings.json` is excluded from "technical → you decide."

**His time is for attorney/investment outreach and brand consistency.** Every technical question put to him
is taken from that.
