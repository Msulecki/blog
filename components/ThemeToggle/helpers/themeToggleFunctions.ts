import type { TTheme } from '../ThemeToggle.types';

export const setTheme = (theme: TTheme) => {
  if (typeof window === 'undefined') {
    return;
  }

  return (window as any).__setTheme(theme);
};

export const onAfterThemeChange = (callback: Function) => {
  if (typeof window === 'undefined') {
    return;
  }

  (window as any).__onAfterThemeChange = callback;
};
