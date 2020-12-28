import { useState, useEffect } from 'react';

// Detec User Theme
const detectUserTheme = () => {
  // Protect from SSR
  const isWindow = typeof window !== `undefined`;
  const isLocalStorage = window.localStorage.getItem('theme');
  const isDarkMatchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    .matches;
  // If we have dark theme from user browser and nothing in local storage
  if (isWindow && isDarkMatchMedia && !isLocalStorage) {
    return 'dark';
  }
  // If we have theme settings in local storage
  else if (isWindow && isLocalStorage) {
    return window.localStorage.getItem('theme');
  }
  // In any other case
  else {
    return 'light';
  }
};

export const useDarkMode = () => {
  // Its works but I don't know it's a good pratice
  // Of course we can use useEffect
  const [theme, setTheme] = useState(detectUserTheme());
  const [componentMounted, setComponentMounted] = useState(false);

  // Save Theme To LocalStorage
  const setThemeToLocalStorage = (theme) => {
    window.localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  // Toggle Theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setThemeToLocalStorage('dark');
    } else {
      setThemeToLocalStorage('light');
    }
  };
  useEffect(() => {
    // We can use this info in styled-components
    setComponentMounted(true);
  }, []);

  return [componentMounted, theme, toggleTheme];
};
