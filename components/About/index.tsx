import Image from 'next/image';
import avatar from '@public/img/28259872.jpeg';
import styles from './About.module.scss';
import PostList from '@components/Post/PostList';
import SocialIcons from '@components/SocialLinks';

function About() {
  return (
    <article className={styles['about']}>
      <div className={styles['about__top']}>
        <div className={styles['about__image']}>
          <div className={styles['about__image-wrapper']}>
            <Image src={avatar} alt='Profile picture' />
          </div>
        </div>
        <div className={styles['about__hello']}>
          <PostList>
            <PostList.Item>Based in Tricity, Poland.</PostList.Item>
            <PostList.Item>Remote work only.</PostList.Item>
            <PostList.Item>Code performance.</PostList.Item>
            <PostList.Item>Crazy side projects fan.</PostList.Item>
            <PostList.Item>JS/TS/React/Node/TDD</PostList.Item>
          </PostList>
        </div>
        <div className={styles['about__bio']}>
          Hi, I&apos;m Matt. When I&apos;m not coding, I&apos;m usually
          sleeping. I like to explore things I&apos;m interested in to the
          deepest possible level. I love pizza, photography and astrophysics.
          Currently developing front-end part of popular cryptocurrency mining
          OS/Platform.
        </div>
      </div>
      <p>
        My technologies of choice are JS/TS with all new cool features that
        I&apos;m not afraid of using. Backwards compatibility is important, but
        I have strong faith polyfills too. I&apos;m focusing on client-side
        operations, so code optimization is super significant. I&apos;ve done
        multiple projects, like web scrappers, AudioApi tools, PWA pages and
        smart home integrations with API, dashboard and adjusted hardware.
      </p>
      <p>
        I&apos;m open to participate in open source projects that will introduce
        any kind of innovations. I like to use some less popular parts of
        JavaScript, like Observers, Proxies, Custom Events, IndexedDB, microtask
        management, Map/Set etc. In the past I was working as Product Manager
        and Product Owner, helping with implementation of ERP software in
        leading e-commerce company.
      </p>
    </article>
  );
}

export default About;
