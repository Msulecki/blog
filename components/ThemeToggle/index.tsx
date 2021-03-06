import { useState, useEffect } from 'react';
import { setTheme, onAfterThemeChange } from './helpers/themeToggleFunctions';
import getGlobalTheme from './helpers/getGlobalTheme';
import getNextTheme from './helpers/getNextTheme';
import type { TTheme } from './ThemeToggle.types';
import styles from './ThemeToggle.module.scss';

function ThemeToggle() {
  const [localTheme, setLocalTheme] = useState<TTheme>('light');

  const onThemeChange = () => setTheme(getNextTheme(localTheme));

  useEffect(() => {
    setLocalTheme(getGlobalTheme());

    onAfterThemeChange(() => {
      setLocalTheme((prev) => getNextTheme(prev));
    });
  }, []);

  if (!localTheme) {
    return null;
  }

  return (
    <button
      aria-label='dark theme toggle'
      className={`${styles['theme-toggle']} ${
        styles[`theme-toggle--${localTheme}`]
      }`}
      onClick={onThemeChange}
    >
      <div className={styles['theme-toggle__indicator']}></div>
    </button>
  );
}

export default ThemeToggle;
