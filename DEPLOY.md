# Deploying GiftSpark Docs

This site uses **dual hosting**: Firebase Hosting and GitHub Pages. Both serve the
same content from the `build/` output and share the custom domain in
`static/CNAME` (`giftspark-docs.aoneahsan.com`). Point your DNS at whichever host
you make primary.

## Prerequisites

```bash
yarn install
yarn build      # produces build/
```

## Option A — Firebase Hosting

A Firebase Hosting site named `giftspark-docs` must exist in the Firebase project
of the same name (`.firebaserc` → `default: giftspark-docs`).

```bash
yarn firebase:deploy
# = yarn build && npx -y firebase-tools@latest deploy --only hosting --project giftspark-docs
```

The first deploy requires being logged in (`npx firebase-tools login`) and the
hosting site to be created in the Firebase console. These are **user-only** steps.

## Option B — GitHub Pages (automated)

`.github/workflows/deploy-pages.yml` builds and publishes on every push to `main`.

1. In the GitHub repo: **Settings → Pages → Source = GitHub Actions**.
2. Add the custom domain `giftspark-docs.aoneahsan.com` (the `static/CNAME` file
   is emitted into `build/` so Pages picks it up automatically).
3. Add the DNS record pointing the subdomain at GitHub Pages (or Firebase, if you
   make Firebase primary).

## DNS

Create a `CNAME` (or `A`/`AAAA`) record for `giftspark-docs.aoneahsan.com`
pointing at your chosen primary host. This is a **user-only** step (registrar
access required).

## Verifying

After deploy, confirm:

- `https://giftspark-docs.aoneahsan.com/robots.txt` returns the crawl policy.
- `https://giftspark-docs.aoneahsan.com/sitemap.xml` lists every page.
- `https://giftspark-docs.aoneahsan.com/llms.txt` returns the AI index.
