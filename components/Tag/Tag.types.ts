import { IChildrenFromProps } from '@globalTypes/index';

interface ITagWithName {
  name: string;
  children?: never;
}

interface ITagWithChildren extends IChildrenFromProps {
  name?: never;
}

export type ITag = ITagWithName | ITagWithChildren;
