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
