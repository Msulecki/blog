import React from 'react';
import Head from 'next/head';
import articlesOverview from '@articles/articlesOverview.json';
import NotFound from '@components/NotFound';
import { sortKey } from '@config/articlesConfig';
import * as allArticles from '@articles/index';
import convertPathToModuleName from '@articles/convertPathToModuleName';

interface IArticles {
  slug?: string;
}

function Articles({ slug }: IArticles) {
  if (slug) {
    const Component = (allArticles as any)[convertPathToModuleName(slug)];

    if (Component) {
      const { date, title } = articlesOverview.filter(
        (article) => article.slug === slug
      )[0];

      return <Component date={date} title={title} />;
    }

    return (
      <>
        <Head>
          <title>Post not found</title>
          <meta name='description' content='Matt Sulecki - personal blog' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <NotFound code={404} title="this post doesn't exist" />
      </>
    );
  }

  const reorderedPosts = articlesOverview.sort((a, b) =>
    b[sortKey].localeCompare(a[sortKey])
  );

  return (
    <>
      {reorderedPosts.map((article) => {
        const Component = (allArticles as any)[
          convertPathToModuleName(article.slug)
        ];

        return (
          <Component
            key={article.slug}
            title={article.title}
            date={article.date}
          />
        );
      })}
    </>
  );
}

export default Articles;
