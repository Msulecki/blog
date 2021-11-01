import { IPostLink } from '../Post.types';
import styles from './PostLink.module.scss';

function PostLink({ href, children }: IPostLink) {
  return (
    <a
      className={styles['post-link']}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}

export default PostLink;
