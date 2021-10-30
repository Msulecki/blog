import type { TTheme } from '../ThemeToggle.types';

const getNextTheme = (current: TTheme) =>
  current === 'light' ? 'dark' : 'light';

export default getNextTheme;
