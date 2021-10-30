import styles from './NotFound.module.scss';

interface INotFound {
  code: number;
  title?: string;
}

function NotFound({ code, title = 'sorry...' }: INotFound) {
  return (
    <article className={styles['not-found']}>
      <span className={styles['not-found__header']}>
        {code}
        <span className={styles['not-found__ascii']}>ಠ_ಠ</span>
        <span className={styles['not-found__sorry']}>{title}</span>
      </span>
    </article>
  );
}

export default NotFound;
