import TopSection from '@components/TopSection';
import Footer from '@components/Footer';
import styles from './Layout.module.scss';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <main className={styles['root']}>
      <TopSection />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
