import React from 'react';
import PostSourceItem from './PostSourceItem';
import styles from './PostSources.module.scss';

interface IPostSources {
  children?: React.ReactNode;
}

function PostSources({ children }: IPostSources) {
  return (
    <div className={styles['post-sources']}>
      <div className={styles['post-sources__separator']}></div>
      <ol className='list'>{children}</ol>
    </div>
  );
}

PostSources.Item = PostSourceItem;

export default PostSources;
