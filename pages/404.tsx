import type { NextPage } from 'next';
import Head from 'next/head';
import TopSection from '@components/TopSection';
import Footer from '@components/Footer';
import NotFound from '@components/NotFound';
import styles from './index.module.scss';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles['app']}>
        <TopSection />
        <NotFound />
        <Footer />
      </main>
    </>
  );
};

export default About;
