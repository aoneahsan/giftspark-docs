# GiftSpark docs deployment

GiftSpark Docs runs on GitHub Pages at [giftspark-docs.aoneahsan.com](https://giftspark-docs.aoneahsan.com/). `static/CNAME` pins the domain. [deploy-pages.yml](.github/workflows/deploy-pages.yml) builds and publishes every push to `main`.

## Release check

1. Run `yarn install --immutable`, `yarn typecheck` and `yarn build`.
2. Serve the exact `build/` output with `yarn serve`; inspect the homepage and a docs route in controlled desktop and mobile browsers, including console errors.
3. Push the reviewed change to `main`, then verify the matching Pages workflow run succeeded.
4. Open the live homepage and changed route. Correct a failed deployment with a follow-up commit; do not switch to the old Firebase target.

Keep secrets out of this public repository. DNS and Pages were operational at this domain on 2026-10-14; recheck them when changing hosting or the custom domain.
