import dynamic from 'next/dynamic';

interface IComponents {
  [key: string]: Function;
}
const components: IComponents = {
  'mobile-tables-with-css-grid': dynamic(
    () => import('@articles/mobile-tables-with-css-grid')
  ),
  'react-patterns-compound-components': dynamic(
    () => import('@articles/compound-components')
  ),
  'blog-showcase': dynamic(() => import('@articles/blog-showcase')),
};

export default components;