import SocialLinks from '@components/SocialLinks';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <small>
        <span className={styles['footer__copyrights']}>
          &copy;{` ${new Date().getFullYear()} Mateusz Sułecki`}
        </span>
        <SocialLinks />
      </small>
    </footer>
  );
}

export default Footer;
