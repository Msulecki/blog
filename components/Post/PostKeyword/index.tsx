import { IStringChildrenFromProps } from '@globalTypes/index';
import styles from './PostKeyword.module.scss';

function PostKeyword({ children }: IStringChildrenFromProps) {
  return <code className={styles['keyword']}>{children}</code>;
}

export default PostKeyword;
