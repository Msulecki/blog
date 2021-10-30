import React from 'react';
import Link from 'next/link';
import { IPostIntroduction } from '../Post.types';
import styles from './PostIntroduction.module.scss';

function Introduction({ children, caption, slug }: IPostIntroduction) {
  return (
    <div className={styles['introduction']}>
      {children}
      <p
        className={styles['introduction__caption']}
        dangerouslySetInnerHTML={{ __html: caption }}
      ></p>
      <div className={styles['introduction__link']}>
        <Link href={`/post/${slug}`}>&gt;Read.me&lt;</Link>
      </div>
    </div>
  );
}

export default Introduction;
