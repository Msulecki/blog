import { useContext } from 'react';
import { PostContext } from '..';
import styles from './PostHeader.module.scss';

export interface IPostHeaderDate {
  date: string;
}

interface IPostHeaderTitle {
  children: string;
}

function PostHeader({ children }: IPostHeaderTitle) {
  const { date } = useContext<IPostHeaderDate>(PostContext);

  return (
    <div className={styles['post-header']}>
      <h3>{children}</h3>
      <time dateTime={date}>{date}</time>
    </div>
  );
}

export default PostHeader;
