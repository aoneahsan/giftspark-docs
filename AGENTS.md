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
