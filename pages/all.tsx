import type { NextPage } from 'next';
import Head from 'next/head';
import Articles from '@components/Articles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Sulecki - blog | All posts</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Articles />
    </>
  );
};

export default Home;
