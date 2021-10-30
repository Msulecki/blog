import MobileTablesWithCssGrid from '@articles/mobile-tables-with-css-grid';
import ReactPatternsCompoundComponents from '@articles/compound-components';
import BlogShowcase from '@articles/blog-showcase';

interface IComponents {
  [key: string]: Function;
}
const components: IComponents = {
  'mobile-tables-with-css-grid': MobileTablesWithCssGrid,
  'react-patterns-compound-components': ReactPatternsCompoundComponents,
  'blog-showcase': BlogShowcase,
};

export default components;
