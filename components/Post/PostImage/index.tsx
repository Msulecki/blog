import Image from 'next/image';
import { IPostImage } from '../Post.types';
import styles from './PostImage.module.scss';

function PostImage({ src, children }: IPostImage) {
  return (
    <div className={styles['post-image']}>
      <figure className={styles['post-image__wrapper']}>
        <Image src={src} alt={children} />
        <figcaption>{children}</figcaption>
      </figure>
    </div>
  );
}

export default PostImage;
