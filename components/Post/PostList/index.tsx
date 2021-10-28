import PostListItem from './PostListItem';
import styles from './PostList.module.scss';

interface IPostList {
  children: React.ReactNode;
  title?: string;
}

function PostList({ children, title }: IPostList) {
  return (
    <>
      <strong>{title}</strong>
      <ul className={styles['post-list']}>{children}</ul>
    </>
  );
}

PostList.Item = PostListItem;

export default PostList;
