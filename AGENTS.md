# GiftSpark Docs — AGENTS.md

> AI agent instructions for the GiftSpark documentation site.

This mirrors `CLAUDE.md` — keep both in sync.

**Last Updated:** 2026-06-23

## Project

- Public documentation site for **GiftSpark** (employee engagement + gifting platform).
- Stack: Docusaurus 3 + React 19 + TypeScript. **PUBLIC repo — no secrets.**
- Live: https://giftspark-docs.aoneahsan.com · App: https://giftspark.aoneahsan.com.
- App repo (private): `github.com/aoneahsan/employee-engagement-platform-gifts-for-workers`.

## Rules (same as CLAUDE.md)

- PUBLIC repo — NEVER commit `.env`, keys, service accounts, or tokens.
- Brand banned words (`perk(s)`, `benefit(s)`, `perkforce`) are forbidden in all
  content/code/comments. Use `reward(s)`, `regalo(s)`, `recognition`. Verify ZERO
  before commit: `grep -rIn -iE "perk|benefit" docs src static *.ts *.md`.
- Document only real, shipped features; honest framing (state what each does NOT do).
- SEO floor per page: definition-first intro, distinct title/description, FAQ where
  useful, `last_update`. robots allows AI bots; `llms.txt` + JSON-LD present.
- Never run dev/preview servers — verify with one-shot `yarn build`.
- yarn only; Node ≥18. One commit per task, pushed to remote `o`.

## Verify

```bash
yarn install && yarn build   # must exit 0
```

## Content map

`docs/`: `intro`, `getting-started/*`, `features/*` (10 feature areas),
`organization/*`, `apps/*`, `integrations`, `faq`, `legal/*`, `changelog`,
`about-the-author`. Sidebar in `sidebars.ts`; config + SEO in
`docusaurus.config.ts`. Content tracker: `docs/tracking/giftspark-docs-content-tracker.json`.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Firebase CLI + FilesHub Management — automate (IRON-SOLID · 2026-07-18)
<!-- fb-cli+fileshub-mgmt-rule -->
Anything **Firebase** (Auth config/providers, Firestore rules/indexes, Hosting, project settings, deploys) →
done AUTOMATICALLY by the agent via the Firebase CLI (`npx -y firebase-tools@latest … --project <id>`, machine
already logged in as aoneahsan@gmail.com) — never handed to the owner as a console step unless genuinely
console-only. How-to: `~/.claude/rules/firebase-cli-automation.md`.
Anything **FilesHub** project/key/origin admin (create project, mint/reveal/rotate keys, add restricted origins,
scopes) → self-served via the Management API. KB: `~/.claude/rules/fileshub-management-api.md`; PAT ONLY in
`~/.claude/.secrets/fileshub-management-api.md` (never commit/echo). Frontend keys `restricted` + exact origins;
server keys `restricted` + `allow_no_origin`.

## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
