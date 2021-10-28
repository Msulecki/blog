import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import Articles from '@components/Articles';
import articlesOverview from '@articles/articlesOverview.json';

const Post: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  const title = articlesOverview?.filter(
    (article) => article.slug === postId
  )?.[0]?.title;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Articles slug={postId as string} />
    </>
  );
};

export default Post;
