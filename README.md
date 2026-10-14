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
