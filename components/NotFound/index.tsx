import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <article className={styles['not-found']}>
      <span className={styles['not-found__header']}>
        404
        <span className={styles['not-found__ascii']}>ಠ_ಠ</span>
        <span className={styles['not-found__sorry']}>sorry...</span>
      </span>
    </article>
  );
}

export default NotFound;
