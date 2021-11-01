import {
  IChildrenFromProps,
  IStringChildrenFromProps,
} from '@globalTypes/index';

export interface IPostHeaderDate {
  date: string;
}

export interface IPost extends IPostHeaderDate, IChildrenFromProps {}

export interface IPostCode extends IStringChildrenFromProps {
  children: string;
  lang?: 'tsx' | 'scss';
  title?: string;
}

export interface IPostImage extends IStringChildrenFromProps {
  src: StaticImageData;
}

export interface IPostIntroduction extends IChildrenFromProps {
  caption: string;
  slug: string;
}

export interface IPostList extends IChildrenFromProps {
  title?: string;
}

interface IPostQuoteWithCite extends IStringChildrenFromProps {
  source: string;
  href: string;
}

interface IPostQuoteWithoutCite extends IStringChildrenFromProps {
  source?: never;
  href?: never;
}

export type TPostQuote = IPostQuoteWithCite | IPostQuoteWithoutCite;

export interface IPostLink extends IStringChildrenFromProps {
  href: string;
}

export interface IPostTags {
  tags: string[];
}
