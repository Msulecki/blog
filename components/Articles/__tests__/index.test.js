import articlesOverview from '@articles/articlesOverview.json';
import convertPathToModuleName from '@articles/convertPathToModuleName';
import * as allArticles from '@articles/index';

describe('Articles', () => {
  it('matches articles overview corresponds to articles', () => {
    expect(articlesOverview.length).toEqual(Object.keys(allArticles).length);
  });

  it('converts slugs from overview to components', () => {
    articlesOverview.forEach((article) => {
      expect(
        Object.keys(allArticles).includes(convertPathToModuleName(article.slug))
      );
    });
  });
});
