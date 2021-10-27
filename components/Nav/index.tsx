import Link from 'next/link';
import { useRouter } from 'next/router';
import { paths } from '@config/menuConfig';
import styles from './Nav.module.scss';

function Nav() {
  const { asPath } = useRouter();

  const getClassName = (path: string, className: string) => {
    if (path === asPath) {
      return `${styles[className]} ${styles['active']}`;
    }

    return styles[className];
  };

  return (
    <nav className={styles['nav']}>
      <ul>
        {paths.map((path) => (
          <li key={path.href} className={getClassName(path.href, path.class)}>
            <Link href={path.href}>{path.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
