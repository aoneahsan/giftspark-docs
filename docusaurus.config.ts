import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// GiftSpark — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// Product: https://giftspark.aoneahsan.com  ·  Play Store: com.giftspark.app
// ---------------------------------------------------------------------------

const SITE_URL = 'https://giftspark-docs.aoneahsan.com';
const APP_URL = 'https://giftspark.aoneahsan.com';
const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.giftspark';

const config: Config = {
  title: 'GiftSpark Docs',
  tagline:
    'Recognition, rewards, and gifting for teams — set up and run GiftSpark.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting site `giftspark-docs` and
  // mirrored on GitHub Pages at the same custom domain.
  url: SITE_URL,
  baseUrl: '/',

  // GitHub metadata (drives deploy + OG tags + edit-this-page links)
  organizationName: 'aoneahsan',
  projectName: 'giftspark-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. The JSON-LD payloads (WebSite, Organization,
  // SoftwareApplication) help Google Rich Results, Perplexity, ChatGPT, and
  // Claude extract structured entity data when citing this documentation.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: `${SITE_URL}/` },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'GiftSpark Docs' },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-title',
        content: 'GiftSpark Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#6366F1' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'GiftSpark Documentation',
        url: SITE_URL,
        description:
          'Documentation for GiftSpark, an employee engagement platform for peer recognition, rewards and regalos, surveys, gamification, and team gifting across web and mobile. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
        license: 'https://opensource.org/licenses/MIT',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'GiftSpark',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Android, iOS, Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        url: APP_URL,
        sameAs: PLAY_URL,
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
        },
        description:
          'GiftSpark is an employee engagement and gifting platform: peer recognition feeds, leaderboards, badges and streaks, a rewards/regalos catalog, pulse surveys, budgets, and team gifting tools across web and mobile.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GiftSpark',
        url: APP_URL,
        sameAs: [SITE_URL, PLAY_URL, 'https://aoneahsan.com'],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      // Offline/local full-text search (no Algolia account needed) for this public docs site.
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/giftspark-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: 'date',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for GiftSpark — an employee engagement platform for peer recognition, rewards and regalos, surveys, gamification, and team gifting across web and mobile. Maintained by Ahsan Mahmood.',
      },
      {
        name: 'keywords',
        content:
          'employee engagement, peer recognition, employee rewards, kudos, recognition platform, team gifting, regalos, leaderboards, badges, streaks, pulse surveys, employee gifting, secret santa, gift registry, recognition software, capacitor app, react employee app',
      },
      { name: 'author', content: 'Ahsan Mahmood' },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'GiftSpark Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'GiftSpark',
      logo: {
        alt: 'GiftSpark logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/getting-started/quick-start',
          label: 'Quick Start',
          position: 'left',
        },
        {
          to: '/about-the-author',
          label: 'Author',
          position: 'right',
        },
        {
          href: APP_URL,
          label: 'Open GiftSpark',
          position: 'right',
        },
        {
          href: 'https://github.com/aoneahsan/giftspark-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'Features', to: '/features/recognition-and-feed' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open GiftSpark', href: APP_URL },
            { label: 'Get it on Google Play', href: PLAY_URL },
            { label: 'Privacy', to: '/legal/privacy' },
            { label: 'Changelog', to: '/changelog' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'Docs source', href: 'https://github.com/aoneahsan/giftspark-docs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GiftSpark · Ahsan Mahmood. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
