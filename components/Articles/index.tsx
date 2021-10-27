import React from 'react';
import components from '@articles/articleComponents';
import articlesOverview from '@articles/articlesOverview.json';
import NotFound from '@components/NotFound';
import { sortKey } from '@config/articlesConfig';

interface IArticles {
  slug?: string;
}

function Articles({ slug }: IArticles) {
  if (slug) {
    if (components[slug]) {
      const Component = components[slug];

      const { date, title } = articlesOverview.filter(
        (article) => article.slug === slug
      )[0];

      return <Component date={date} title={title} />;
    }

    return <NotFound />;
  }

  const reorderedPosts = articlesOverview.sort((a, b) =>
    b[sortKey].localeCompare(a[sortKey])
  );

  return (
    <>
      {reorderedPosts.map((article) => {
        const Component = components[article.slug];

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
