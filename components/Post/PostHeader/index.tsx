import { useContext } from 'react';
import { PostContext } from '..';
import { IChildrenFromProps } from '@globalTypes/index';
import { IPostHeaderDate } from '../Post.types';
import styles from './PostHeader.module.scss';

function PostHeader({ children }: IChildrenFromProps) {
  const { date } = useContext<IPostHeaderDate>(PostContext);

  return (
    <div className={styles['post-header']}>
      <h3>{children}</h3>
      <time dateTime={date}>{date}</time>
    </div>
  );
}

export default PostHeader;
