import styles from './PostSources.module.scss';

interface IPostSourceItem {
  children: React.ReactNode;
  link?: string;
}

function PostSourceItem({ children, link }: IPostSourceItem) {
  return (
    <li>
      {link ? (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      ) : (
        children
      )}
    </li>
  );
}

export default PostSourceItem;
