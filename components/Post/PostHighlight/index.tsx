import { IStringChildrenFromProps } from '@globalTypes/index';
import styles from './PostHighlight.module.scss';

function PostHighlight({ children }: IStringChildrenFromProps) {
  return <mark className={styles['highlight']}>{children}</mark>;
}

export default PostHighlight;
