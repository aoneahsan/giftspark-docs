# GiftSpark Docs — CLAUDE.md

Public documentation site for **GiftSpark** (employee engagement + gifting platform).
Built with Docusaurus 3 + React 19 + TypeScript. **PUBLIC repo** — no secrets ever.

**Last Updated:** 2026-06-23

## What this is

- Companion docs site for the GiftSpark app (`giftspark`, private repo
  `github.com/aoneahsan/employee-engagement-platform-gifts-for-workers`).
- Live target: https://giftspark-docs.aoneahsan.com (Firebase Hosting + GitHub Pages).
- App: https://giftspark.aoneahsan.com · Play: `com.aoneahsan.giftspark`.

## Rules

- **PUBLIC repo — NEVER commit secrets** (`.env`, keys, service accounts, tokens).
  Nothing here needs them; the site is fully static.
- **Brand banned words** (inherited from the app): never use `perk`, `perks`,
  `benefit`, `benefits`, `perkforce` anywhere — code, content, or comments. Use
  `reward(s)`, `regalo(s)`, `recognition`, `advantage(s)`. Verify before commit:
  `grep -rIn -iE "perk|benefit" docs src static *.ts *.md` → must be ZERO.
- **Content is honest** — document only features that actually ship in the app;
  say what each tool does NOT do. No fabricated stats, no hype.
- **SEO floor** — every page: definition-first intro, distinct title + meta
  description, sections, FAQ where useful, `last_update`. robots.txt allows AI
  bots; `llms.txt` indexes the site; JSON-LD (WebSite/Organization/
  SoftwareApplication) lives in `docusaurus.config.ts`.
- **Never run dev/preview servers.** Verify with one-shot `yarn build` only.
- **Package manager:** yarn only. **Node:** docs build uses Node ≥18.
- **One commit per task**, pushed to remote `o` (this repo's GitHub).

## Verify

```bash
yarn install
yarn build      # must exit 0
```

## Layout

- `docs/` — Markdown content (intro, getting-started, features, organization, apps, legal, faq, changelog).
- `sidebars.ts` — sidebar; every entry maps to a real file.
- `docusaurus.config.ts` — config + SEO head tags + JSON-LD.
- `src/css/custom.css` — GiftSpark indigo brand theme.
- `static/` — robots.txt, llms.txt, CNAME, favicon/logo/social-card, security.txt, humans.txt.
- Content tracker: `docs/tracking/giftspark-docs-content-tracker.json`.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24


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
