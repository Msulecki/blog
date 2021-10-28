import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-scss';
import 'prismjs/themes/prism-tomorrow.css';
import styles from './PostCode.module.scss';

interface IPostCode {
  children: string;
  lang?: 'tsx' | 'scss';
  title?: string;
}

function PostCode({ children, title, lang = 'tsx' }: IPostCode) {
  const codeBlockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeBlockRef.current) {
      Prism.highlightElement(codeBlockRef.current);
    }
  }, []);
  return (
    <div className={styles['post-code']}>
      <div className={styles['post-code__wrapper']}>
        <pre suppressHydrationWarning={true}>
          <code
            suppressHydrationWarning={true}
            className={`language-${lang}`}
            ref={codeBlockRef}
          >
            {children}
          </code>
        </pre>

        <div className={styles['post-code__title']}>{title}</div>
      </div>
    </div>
  );
}

export default PostCode;
