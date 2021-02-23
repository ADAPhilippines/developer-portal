import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Learn Cardano',
    imageUrl: 'img/cardano-black.png',
    targetUrl: 'docs/vision-and-mission/',
    description: (
      <>
        Learn how Cardano works with the vision and mission, inspiration, why cardano, and key concepts.
      </>
    ),
  },
  {
    title: 'Getting Started',
    imageUrl: 'img/cardano-black.png',
    targetUrl: 'docs/cardano-node',
    description: (
      <>
        Step by step instructions, tech, stake pools.
      </>
    ),
  },
  {
    title: 'Smart Contracts and Building DApps',
    imageUrl: 'img/cardano-black.png',
    targetUrl: 'docs',
    description: (
      <>
        Creating smart contracts and decentralized applications with Cardano.
      </>
    ),
  },

  {
    title: 'Adrestia - SDKs and APIs',
    imageUrl: 'img/cardano-black.png',
    targetUrl: 'docs',
    description: (
      <>
        Depending on the use-cases you have and the control that you seek, you may use any of the components below.
      </>
    ),
  },
  {
    title: 'Resources',
    imageUrl: 'img/cardano-black.png',
    targetUrl: 'docs',
    description: (
      <>  
      Community, research paper, news, events, funding.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, targetUrl}) {
  const imgUrl = useBaseUrl(imageUrl); // not used right now
  const trgUrl = useBaseUrl(targetUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <Link className="navbar__link" to={trgUrl}>
        <div className="card">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
        </div>
      </Link>
      )}
       
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
