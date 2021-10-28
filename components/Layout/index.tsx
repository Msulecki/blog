import TopSection from '@components/TopSection';
import Footer from '@components/Footer';
import styles from './Layout.module.scss';
import { useLayoutEffect } from 'react';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  useLayoutEffect(() => {
    document.body.classList.add('light');
  }, []);

  return (
    <main className={`${styles['root']}`}>
      <TopSection />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
