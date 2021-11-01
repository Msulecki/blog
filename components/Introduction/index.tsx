import Post from '@components/Post';
import articlesOverview from '@articles/articlesOverview.json';
import { sortKey } from '@config/articlesConfig';

function Introduction() {
  const allIntroductions = articlesOverview.sort((a, b) =>
    b[sortKey].localeCompare(a[sortKey])
  );

  return (
    <>
      {allIntroductions.map((introduction) => (
        <Post key={introduction.slug} date={introduction.date}>
          <Post.Introduction
            slug={introduction.slug}
            caption={introduction.caption}
          >
            <Post.Header>{introduction.title}</Post.Header>
            <Post.Tags tags={introduction.tags || []} />
          </Post.Introduction>
        </Post>
      ))}
    </>
  );
}

export default Introduction;
