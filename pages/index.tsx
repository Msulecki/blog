import type { NextPage } from 'next';
import Head from 'next/head';
import TopSection from '@components/TopSection';
import Footer from '@components/Footer';
import styles from './index.module.scss';
import Introduction from '@components/Introduction';

const Overview: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Sulecki - blog</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles['app']}>
        <TopSection />
        <Introduction />
        <Footer />
      </main>
    </>
  );
};

export default Overview;
