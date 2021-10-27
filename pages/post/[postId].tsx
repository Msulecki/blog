import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import TopSection from '../../components/TopSection';
import Articles from '../../components/Articles';
import Footer from '../../components/Footer';
import styles from '../index.module.scss';

const Post: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <Head>
        <title>Matt Sulecki - overview</title>
        <meta name='description' content='Matt Sulecki - personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles['app']}>
        <TopSection />
        <Articles slug={postId as string} />
        <Footer />
      </main>
    </>
  );
};

export default Post;
