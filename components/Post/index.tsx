import { createContext } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostImage from './PostImage';
import PostCode from './PostCode';
import PostIntroduction from './PostIntroduction';
import PostQuote from './PostQuote';
import PostSources from './PostSources';
import PostList from './PostList';
import styles from './Post.module.scss';
import { IPost } from './Post.types';

export const PostContext = createContext<any>({});

function Post({ children, date }: IPost) {
  return (
    <PostContext.Provider value={{ date }}>
      <article className={styles['article']}>{children}</article>
    </PostContext.Provider>
  );
}

Post.Header = PostHeader;
Post.Content = PostContent;
Post.Image = PostImage;
Post.Code = PostCode;
Post.Introduction = PostIntroduction;
Post.Quote = PostQuote;
Post.Sources = PostSources;
Post.List = PostList;

export default Post;
