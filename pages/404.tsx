import type { NextPage } from 'next';
import Head from 'next/head';
import NotFound from '@components/NotFound';

const ErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NotFound code={404} />
    </>
  );
};

export default ErrorPage;
