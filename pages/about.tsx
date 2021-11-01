import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '@components/About';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Sulecki - blog | About</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AboutMe />
    </>
  );
};

export default About;
