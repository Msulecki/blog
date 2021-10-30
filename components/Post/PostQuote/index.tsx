import type { TPostQuote } from '../Post.types';
import styles from './PostQuote.module.scss';

function PostQuote({ children, source, href }: TPostQuote) {
  return (
    <blockquote className={styles['post-quote']}>
      <p>{children}</p>
      {source && href ? (
        <cite>
          <a href={href} rel='noopener noreferrer' target='_blank'>
            {source}
          </a>
        </cite>
      ) : null}
    </blockquote>
  );
}

export default PostQuote;
