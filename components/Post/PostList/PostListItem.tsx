import styles from './PostList.module.scss';

interface IProstListItemChildren {
  children: React.ReactNode;
}

interface ProsOnly extends IProstListItemChildren {
  pros?: boolean;
  cons?: never;
}

interface ConsOnly extends IProstListItemChildren {
  cons?: boolean;
  pros?: never;
}

type IPostListItem = ProsOnly | ConsOnly;

const getItemStyle = (pros: boolean, cons: boolean) => {
  if (pros) {
    return 'pros';
  }

  if (cons) {
    return 'cons';
  }

  return '';
};

function PostListItem({ children, pros, cons }: IPostListItem) {
  return <li className={styles[getItemStyle(!!pros, !!cons)]}>{children}</li>;
}

export default PostListItem;
