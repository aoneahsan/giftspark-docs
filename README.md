# GiftSpark Docs

Public documentation site for **GiftSpark** — the employee engagement, recognition, and gifting platform.

- **App:** https://giftspark.aoneahsan.com
- **Google Play:** https://play.google.com/store/apps/details?id=com.aoneahsan.giftspark
- **Docs (this site):** https://giftspark-docs.aoneahsan.com

Built with [Docusaurus](https://docusaurus.io/). Deployed to Firebase Hosting and GitHub Pages (dual hosting; point DNS at whichever you make primary).

## Local development

```bash
yarn install
yarn start        # dev server on http://localhost:5962
```

## Build

```bash
yarn build        # static output in build/
yarn serve        # preview the production build on http://localhost:5963
```

## Deploy

- **Firebase Hosting:** `yarn firebase:deploy` (project `giftspark-docs`).
- **GitHub Pages:** pushing to `main` triggers `.github/workflows/deploy-pages.yml` (enable Settings → Pages → Source = GitHub Actions).

See [DEPLOY.md](./DEPLOY.md) for details.

## Structure

```
docs/                 Markdown content (intro, getting-started, features, …)
src/css/custom.css    GiftSpark brand theme
src/pages/index.tsx   Landing page
static/               robots.txt, llms.txt, CNAME, favicon, social card, security.txt
docusaurus.config.ts  Site config + JSON-LD (WebSite/Organization/SoftwareApplication)
sidebars.ts           Sidebar layout
```

## Author

Built and maintained by **Ahsan Mahmood** — [aoneahsan.com](https://aoneahsan.com) · [LinkedIn](https://linkedin.com/in/aoneahsan) · [GitHub](https://github.com/aoneahsan).
