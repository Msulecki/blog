import Tag from '@components/Tag';
import { IPostTags } from '../Post.types';
import styles from './PostTags.module.scss';

function PostTags({ tags }: IPostTags) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={styles['tags']}>
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  );
}

export default PostTags;
