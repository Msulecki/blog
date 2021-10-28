import Post from '@components/Post';
import PostList from '@components/Post/PostList';
import image_sample from '@public/img/20211022/image_sample.png';
import { IArticle } from '../types';

function Article({ date, title }: IArticle) {
  return (
    <Post date={date}>
      <Post.Header>{title}</Post.Header>
      <Post.Content>
        <div>Test post Content</div>

        <h4>This is H4</h4>
        <h5>This is H5</h5>
        <h6>And this is H6</h6>

        <p>
          First line is only for making this text wrap, so i can test if line
          height will be affected by additional styling. This paragraph have
          some example of <code className='keyword'>keyword</code> that will be
          formatted differently. And maybe i&apos;ll keep{' '}
          <mark className='highlight'>highlighting</mark> also. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt culpa suscipit
          aliquam facilis voluptatem placeat veritatis, ullam corporis eligendi
          qui.
        </p>

        <PostList title='Pros and cons of lists:'>
          <PostList.Item pros>Can be ordered or unordered</PostList.Item>
          <PostList.Item pros>Emojis as bullets!</PostList.Item>
          <PostList.Item pros>Free to use</PostList.Item>
          <PostList.Item pros>Easy to modify</PostList.Item>
          <PostList.Item pros>Blessed by Jesus himself</PostList.Item>
          <PostList.Item cons>You must watch out for semantics</PostList.Item>
          <PostList.Item cons>They don&apos;t speak to you</PostList.Item>
          <PostList.Item cons>Requires style resetting</PostList.Item>
          <PostList.Item cons>There are 3 tags to remember</PostList.Item>
          <PostList.Item cons>No one uses &lt;ol&gt; anymore</PostList.Item>
          <PostList.Item>Just some lonely neutral item</PostList.Item>
        </PostList>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          necessitatibus numquam repudiandae voluptates. Minus tempora facere
          voluptas doloremque. Quos, at consectetur laudantium praesentium cum
          sint et. Non temporibus magni quis repellat reiciendis amet velit ad
          eligendi eos veniam natus officiis dolorem, ipsam mollitia? Sint
          asperiores corporis laboriosam fugit nihil itaque numquam molestiae
          modi quas nostrum aliquid, assumenda non aliquam reprehenderit,
          laborum vel incidunt voluptate amet. Quo quos cum repellendus earum
          aliquam dolores voluptatem assumenda deleniti facere maxime sit,
          consequuntur itaque nesciunt corrupti perferendis? Impedit voluptatum
          architecto, tempore iste molestias incidunt sit sed, est accusamus
          quasi, aperiam possimus in qui corporis.
        </p>
        <Post.Code title='Compound components example'>
          {`import { createContext } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostImage from './PostImage';
import PostCode from './PostCode';
import { IPostHeaderDate } from './PostHeader';

interface IPost extends IPostHeaderDate {
  children: React.ReactNode;
}

export const PostContext = createContext<any>({});

function Post({ children, date }: IPost) {
  return (
    <PostContext.Provider value={{ date }}>
      <article>{children}</article>
    </PostContext.Provider>
  );
}

Post.Header = PostHeader;
Post.Content = PostContent;
Post.Image = PostImage;
Post.Code = PostCode;

export default Post;`}
        </Post.Code>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          tenetur laboriosam cum officia explicabo dicta, voluptate cumque
          delectus in perspiciatis nobis ipsum aspernatur excepturi eum
          consequuntur non ipsam placeat necessitatibus obcaecati ipsa qui
          dignissimos accusamus doloribus! Id dolore nobis sequi, debitis neque
          consectetur enim atque, ipsam quo in mollitia a.
        </p>
        <Post.Image src={image_sample}>
          Compatibility isn&apos;t excuse not to learn Grid no more
        </Post.Image>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          repellendus laboriosam autem cupiditate est corporis, culpa ipsa ea
          voluptatum, voluptatem ipsum. Reprehenderit, impedit natus suscipit
          corporis qui, id perferendis sequi quaerat ab dolore voluptates,
          officiis labore nulla dignissimos! Nisi, natus quo debitis beatae amet
          facere reprehenderit quae ipsum sunt neque.
        </p>
        <Post.List>
          <Post.List.Item>This is deault styled list</Post.List.Item>
          <Post.List.Item>Bullets are standard but blue</Post.List.Item>
          <Post.List.Item>Last item with default style</Post.List.Item>
        </Post.List>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          tempora possimus veniam ut ad est hic aspernatur molestiae quis
          aliquam.
        </p>
      </Post.Content>
    </Post>
  );
}

export default Article;
