import React from 'react';
import PostSourceItem from './PostSourceItem';
import { IChildrenFromProps } from '@globalTypes/index';
import styles from './PostSources.module.scss';

function PostSources({ children }: IChildrenFromProps) {
  return (
    <div className={styles['post-sources']}>
      <hr className={styles['post-sources__separator']}></hr>
      <ol className={styles['list']}>{children}</ol>
    </div>
  );
}

PostSources.Item = PostSourceItem;

export default PostSources;
