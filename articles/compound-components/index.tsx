import Post from '@components/Post';
import { IArticle } from '../types';

function Article({ date, title }: IArticle) {
  return (
    <Post date={date}>
      <Post.Header>{title}</Post.Header>
      <Post.Content>
        <Post.List>
          <Post.List.Item>This is deault styled list</Post.List.Item>
          <Post.List.Item>Bullets are standard but blue</Post.List.Item>
          <Post.List.Item>Last item with default style</Post.List.Item>
        </Post.List>
      </Post.Content>
    </Post>
  );
}

export default Article;
