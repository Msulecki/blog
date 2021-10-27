import Post from '@components/Post';
import { IArticle } from '../types';

function Article({ date, title }: IArticle) {
  return (
    <Post date={date}>
      <Post.Header>{title}</Post.Header>
      <Post.Content>
        <ul className={'list'}>
          <li>This is deault styled list</li>
          <li>Bullets are standard but blue</li>
          <li>Last item with default style</li>
        </ul>
      </Post.Content>
    </Post>
  );
}

export default Article;
