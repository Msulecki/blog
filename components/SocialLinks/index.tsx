import styles from './SocialLinks.module.scss';

function SocialLinks() {
  return (
    <section className={styles['social-links']}>
      |
      <a
        href='https://github.com/Msulecki'
        target='_blank'
        rel='noopener noreferrer'
        className={styles['social-links__link']}
      >
        Github
      </a>
      |{' '}
      <a
        href='https://www.linkedin.com/in/msulecki/'
        target='_blank'
        rel='noopener noreferrer'
        className={styles['social-links__link']}
      >
        LinkedIn
      </a>
    </section>
  );
}

export default SocialLinks;
