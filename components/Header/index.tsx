import Link from 'next/link';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <Link href='/' passHref>
        <hgroup>
          <h1>Matt Sulecki</h1>
          <h2>Notes that I&apos;ve made instead of sleeping.</h2>
        </hgroup>
      </Link>
    </header>
  );
}

export default Header;
