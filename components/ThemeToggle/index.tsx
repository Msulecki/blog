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
    <button className={styles['theme-toggle']} onClick={onThemeChange}>
      {'Go ' + getNextTheme(localTheme)}
    </button>
  );
}

export default ThemeToggle;
