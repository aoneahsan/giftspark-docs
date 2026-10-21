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

# GiftSpark public docs

**Last Updated:** 2026-10-20

| Context | Value |
|---|---|
| Last optimized | 2026-10-14 |
| Next routine optimization eligible | 2026-11-13 |
| Guide bytes | 1961 B |

This public Docusaurus 3 repository `aoneahsan/giftspark-docs` uses `main` and GitHub Pages at `https://giftspark-docs.aoneahsan.com/` (`static/CNAME`, live HTTPS confirmed). It now lives at `projects/giftspark-root/giftspark-docs/`. The private app source is `../giftspark/`; the parent is a separate private coordination repository. Fleet state: `../../../docs/tracking/fleet-maintenance-tracker.json`.

## Working rules

- Never copy `.env`, credentials, service-account files or other secrets from the private app into this public repository. Use Yarn 4 locally. Derive feature, privacy and API statements from current product code and the content tracker, not old release claims.
- GiftSpark's sensitive brand vocabulary is disallowed: case-insensitive patterns `p[e]rk` and `bene[f]it` and the former client brand built from the first pattern plus `force`. Keep them out of new code, content, metadata, comments and commit messages; the redeemable-item module is **Regalos**.
- `.github/workflows/deploy-pages.yml` builds and deploys every `main` push to GitHub Pages. The prior Firebase docs hosting files have been removed. Serve the exact new build in controlled desktop/mobile Chrome before a push, then verify Pages CI and live pages. No old Firebase app/backend deployment belongs to this pass.
- Content lives in `docs/`, navigation in `sidebars.ts`, site metadata in `docusaurus.config.ts`, and current coverage in `docs/tracking/giftspark-docs-content-tracker.json`. Keep internal links valid and present only shipped features. Use the approved story process if a story Bible is added.

## Verification

```bash
yarn install --immutable
yarn typecheck
yarn build
yarn serve
```

Next routine context optimization is eligible 2026-11-13 unless structure or a material rule changes.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
