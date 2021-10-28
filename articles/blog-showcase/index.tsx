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

        <Post.Quote
          source='Haskell documentation'
          href='https://www.haskell.org/'
        >
          Every expression in Haskell has a type which is determined at compile
          time. All the types composed together by function application have to
          match up. If they don&apos;t, the program will be rejected by the
          compiler. Types become not only a form of guarantee, but a language
          for expressing the construction of programs.
        </Post.Quote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla
          aspernatur deleniti, iste fugit nisi soluta facere eos autem sed ut
          inventore natus nostrum blanditiis, perspiciatis delectus qui
          laboriosam ab neque amet voluptas praesentium quis adipisci aut? Rerum
          sapiente dolores veniam placeat ipsam numquam, voluptate amet.
          Excepturi nihil nemo veniam suscipit, doloremque sit nesciunt
          accusantium optio. Voluptatem deleniti sapiente vitae, ea deserunt
          similique quia suscipit quae est? Maiores, est dolorem quam eaque
          debitis itaque laudantium alias beatae cumque ratione laboriosam
          possimus praesentium error dolorum quas eligendi repellat architecto
          reiciendis fugit porro recusandae! Ea ipsum excepturi assumenda minus?
          Sunt, quidem porro.
        </p>
        <Post.Sources>
          <Post.Sources.Item link='https://wikipedia.org'>
            Wikipedia
          </Post.Sources.Item>
          <Post.Sources.Item link='https://medium.com'>
            Medium.com
          </Post.Sources.Item>
          <Post.Sources.Item link='https://dev.to'>Dev.to</Post.Sources.Item>
          <Post.Sources.Item link='https://developer.mozilla.org/pl/docs/Web/CSS/list-style-type'>
            MDN - list-style-type docs
          </Post.Sources.Item>
        </Post.Sources>
      </Post.Content>
    </Post>
  );
}

export default Article;
