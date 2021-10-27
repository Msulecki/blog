import type { NextPage } from 'next';
import Head from 'next/head';
import TopSection from '@components/TopSection';
import Footer from '@components/Footer';
import styles from './index.module.scss';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Sulecki - blog | About</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles['app']}>
        <TopSection />
        <h4>THIS IS ABOUT PAGE</h4>
        <Footer />
      </main>
    </>
  );
};

export default About;
