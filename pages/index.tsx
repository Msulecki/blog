import type { NextPage } from 'next';
import Head from 'next/head';
import Introduction from '@components/Introduction';

const Overview: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Sulecki - blog</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Introduction />
    </>
  );
};

export default Overview;
