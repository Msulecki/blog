import articleComponents from '@articles/articleComponents';
import articlesOverview from '@articles/articlesOverview.json';
import { render, screen, waitFor } from '@testing-library/react';
import Articles from '@components/Articles';

const componentsSlugs = Object.keys(articleComponents);
const articlesSlugs = articlesOverview.map((item) => item.slug);

describe('Articles', () => {
  it('matches all slugs from config with articleComponents', () => {
    expect(componentsSlugs).toHaveLength(articlesSlugs.length);

    const isSlugsTheSame = componentsSlugs.every((key) => {
      if (articlesSlugs.includes(key)) {
        return true;
      } else {
        console.log('\x1b[31m%s\x1b[0m', `Slug not found: ${key}`);
        return false;
      }
    });

    expect(isSlugsTheSame).toBeTruthy();
  });

  it('renders page with correct post header and date', async () => {
    const { rerender } = render(<Articles />);

    for (const article of articlesOverview) {
      const { slug, date, title } = article;

      rerender(<Articles slug={slug} />);

      await waitFor(() => {
        const postDate = screen.getByText(date);
        const postTile = screen.getByText(title);

        expect(postDate).toBeInTheDocument();
        expect(postTile).toBeInTheDocument();
      });
    }
  });
});
