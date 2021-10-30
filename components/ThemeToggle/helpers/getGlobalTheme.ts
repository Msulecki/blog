const getGlobalTheme = () => {
  if (typeof window === 'undefined') {
    return;
  }

  return (window as any).__APP_THEME;
};

export default getGlobalTheme;
