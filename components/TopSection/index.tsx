import Header from '@components/Header';
import Nav from '@components/Nav';
import SectionSeparator from '@components/SectionSeparator';
import styles from './TopSection.module.scss';

function TopSection() {
  return (
    <>
      <section className={styles['top-section']}>
        <Header />
        <Nav />
      </section>
      <SectionSeparator />
    </>
  );
}

export default TopSection;
