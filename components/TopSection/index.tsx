import Header from '@components/Header';
import Nav from '@components/Nav';
import ThemeToggle from '@components/ThemeToggle';
import SectionSeparator from '@components/SectionSeparator';
import styles from './TopSection.module.scss';

function TopSection() {
  return (
    <>
      <section className={styles['top-section']}>
        <Header />
        <Nav />
        <ThemeToggle />
      </section>
      <SectionSeparator />
    </>
  );
}

export default TopSection;
