import { ITag } from './Tag.types';
import styles from './Tag.module.scss';

function Tag({ name, children }: ITag) {
  return (
    <div
      className={`${styles['tag']} ${
        styles[`tag--with-${name ? 'name' : 'children'}`]
      } `}
    >
      {name || children}
    </div>
  );
}

export default Tag;
