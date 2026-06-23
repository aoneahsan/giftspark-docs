import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const APP_URL = 'https://giftspark.aoneahsan.com';
const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.giftspark';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Recognition & social feed',
    body: 'A company feed where teammates send kudos and thank-yous, react, and comment. Recognition is public, searchable, and tied to your team values.',
  },
  {
    title: 'Gamification',
    body: 'Leaderboards, badges, streaks, points, challenges, and goals keep recognition habitual instead of a once-a-year event.',
  },
  {
    title: 'Rewards & regalos',
    body: 'A redeemable rewards catalog (the Regalos module) with categories, approval requests, redemption codes, carts, and order history.',
  },
  {
    title: 'Team gifting toolkit',
    body: 'Group gifts, gift circles, registries, wish lists, Secret Santa draws, and wrapping/DIY ideas — the whole gifting workflow in one place.',
  },
  {
    title: 'Surveys & insights',
    body: 'Pulse surveys, sentiment tracking, manager dashboards, a team health score, and a digest that summarizes engagement trends.',
  },
  {
    title: 'Web, mobile & extension',
    body: 'One platform across a React web app, native Android and iOS via Capacitor, and a companion browser extension for saving gift ideas.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/quick-start"
          >
            Quick Start
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/intro"
          >
            Read the docs
          </Link>
          <Link className="button button--outline button--lg" href={APP_URL}>
            Open GiftSpark
          </Link>
        </div>
        <p className={styles.subnote}>
          Free to use · <Link href={PLAY_URL}>Get it on Google Play</Link>
        </p>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="col col--4"
              style={{ marginBottom: '1.5rem' }}
            >
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Employee Recognition, Rewards & Gifting`}
      description="Documentation for GiftSpark: peer recognition feeds, leaderboards and badges, a rewards/regalos catalog, surveys, budgets, and team gifting tools across web and mobile."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
