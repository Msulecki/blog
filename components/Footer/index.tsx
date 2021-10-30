import SocialIcons from '@components/SocialIcons';
import ThemeToggle from '@components/ThemeToggle';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <small>
        &copy;{` ${new Date().getFullYear()} Mateusz Sułecki | `}
        <ThemeToggle />
      </small>
      <SocialIcons />
    </footer>
  );
}

export default Footer;
