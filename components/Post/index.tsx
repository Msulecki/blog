import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostImage from './PostImage';
import PostCode from './PostCode';
import PostIntroduction from './PostIntroduction';
import { createContext } from 'react';
import { IPostHeaderDate } from './PostHeader';
import styles from './Post.module.scss';

interface IPost extends IPostHeaderDate {
  children: React.ReactNode;
}

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

export default Post;
