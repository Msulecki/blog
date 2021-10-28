import styles from './PostQuote.module.scss';

interface IPostQuoteWithCite {
  children: string;
  source: string;
  href: string;
}

interface IPostQuoteWithoutCite {
  children: string;
  source?: never;
  href?: never;
}

type TPostQuote = IPostQuoteWithCite | IPostQuoteWithoutCite;

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
