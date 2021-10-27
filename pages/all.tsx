import type { NextPage } from 'next';
import Head from 'next/head';
import TopSection from '@components/TopSection';
import Articles from '@components/Articles';
import Footer from '@components/Footer';
import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Sulecki - blog | All posts</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles['app']}>
        <TopSection />
        <Articles />
        <Footer />
      </main>
    </>
  );
};

export default Home;
