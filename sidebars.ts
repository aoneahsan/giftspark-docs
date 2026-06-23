import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the GiftSpark documentation site.
 *
 * Every entry maps to a real Markdown file under docs/. The baseline below
 * documents the features that actually ship in the GiftSpark app today;
 * new feature pages are added here as the product grows.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/account-setup',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/recognition-and-feed',
        'features/gamification',
        'features/regalos-and-rewards',
        'features/gifting-toolkit',
        'features/events-and-calendar',
        'features/surveys-and-insights',
        'features/budgets-and-finance',
        'features/wellness-and-growth',
        'features/shopping-and-discovery',
        'features/ai-features',
      ],
    },
    {
      type: 'category',
      label: 'Organization',
      collapsed: true,
      items: [
        'organization/setup-and-roles',
        'organization/members-and-teams',
      ],
    },
    {
      type: 'category',
      label: 'Apps & Integrations',
      collapsed: true,
      items: [
        'apps/mobile-app',
        'apps/browser-extension',
        'integrations',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'Legal',
      collapsed: true,
      items: ['legal/privacy', 'legal/terms'],
    },
    'changelog',
    'about-the-author',
  ],
};

export default sidebars;
