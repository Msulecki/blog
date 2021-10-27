import SocialIcons from '@components/SocialIcons';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <small>&copy;{` ${new Date().getFullYear()} Mateusz Sułecki`}</small>
      <SocialIcons />
    </footer>
  );
}

export default Footer;
