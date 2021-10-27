import styles from './SocialIcons.module.scss';

function SocialIcons() {
  return (
    <section className={styles['social-icons']}>
      <a
        href='https://github.com/Msulecki'
        target='_blank'
        rel='noopener noreferrer'
        className={styles['social-icons__icon']}
      >
        gh
      </a>
      <a
        href='https://www.linkedin.com/in/msulecki/'
        target='_blank'
        rel='noopener noreferrer'
        className={styles['social-icons__icon']}
      >
        in
      </a>
    </section>
  );
}

export default SocialIcons;
