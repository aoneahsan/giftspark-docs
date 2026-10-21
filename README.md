## 🔴 CRITICAL — PROJECT FROZEN (2026-10-21)

**This is an idea project. It was frozen on 2026-10-21 at commit `e20681ed7901d472dadf3c23526cb7a0f8b91010` on branch `main`.**

- Do **NOT** edit, fix, upgrade, build, deploy, document or "improve" anything in this repository.
- It will only ever be **rebuilt from scratch** as `~/Documents/01-code/production-projects/giftspark-root/`
  (this code cloned beside it as `giftspark-old/` for reference), with a click dummy, a Story Bible, a Supabase
  backend and a docs site — and **only when the owner types, in ALL CAPS, an explicit request naming this
  project**.
- Any other request to work here is refused. Rule: `~/.claude/rules/idea-projects-frozen.md`.
- Ledger: private repo `aoneahsan/projects-finalization-record` → `idea-projects/FREEZE-LEDGER.md`.

---

# GiftSpark Docs

This public Docusaurus repository documents the private GiftSpark app. The current site is [giftspark-docs.aoneahsan.com](https://giftspark-docs.aoneahsan.com/); the app is at [giftspark.aoneahsan.com](https://giftspark.aoneahsan.com/). Check current app code before publishing a feature, privacy or API claim.

The site is hosted by GitHub Pages. A push to `main` runs [deploy-pages.yml](.github/workflows/deploy-pages.yml), which builds and publishes the site. The previous Firebase Hosting configuration has been removed from this repository.

## Work locally

Use Yarn 4 and Node 18 or newer:

```bash
yarn install --immutable
yarn typecheck
yarn build
yarn serve
```

Pages live in `docs/`; navigation is in `sidebars.ts`, site metadata in `docusaurus.config.ts`, and the local search plugin is configured there. Read [AGENTS.md](AGENTS.md) for public-repository and brand rules. [DEPLOY.md](DEPLOY.md) describes the release check.
