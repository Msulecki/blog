import PostListItem from './PostListItem';
import { IPostList } from '../Post.types';
import styles from './PostList.module.scss';

function PostList({ children, title }: IPostList) {
  return (
    <>
      {title && <strong>{title}</strong>}
      <ul className={styles['post-list']}>{children}</ul>
    </>
  );
}

PostList.Item = PostListItem;

export default PostList;
