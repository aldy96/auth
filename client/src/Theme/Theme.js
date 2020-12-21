import React from 'react';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
// Custom Hook
import { useDarkMode } from '../CustomHooks/useDarkMode';

// Global styles for Light and Dark Theme
const stylesForBothTheme = {
  themeTransition: 'all 250ms ease-in-out',
};

// Light Theme
const lightTheme = {
  ...stylesForBothTheme,
  isLight: true,
  body: '#eeeeee',
  secondaryColor: '#e1e1e1',
  oppositeColor: '#5e5d5e',
  mainTextColor: '#252526',
  // secondaryText: '#ffffff',
  mainColor: '#0066c0',
};
// Dark Theme
const darkTheme = {
  ...stylesForBothTheme,
  isLight: false,
  body: '#a6a6a6',
  secondaryColor: '#5e5d5e',
  oppositeColor: '#e1e1e1',
  mainTextColor: '#1b1a1b',
  // secondaryText: '#ffffff',
  mainColor: '#0d8eff',
  // secondaryColor: '#0074d9',
};

// First option is add themeToggler to the theme object and share it through ThemeProvider from 'styled-components'

// The Second options is to create Context and add themeToggler to Provider.
// In next step we can get themeToggler in another Component through 'useContext'

const AppTheme = ({ children }) => {
  // Custom Hook
  const [componentMounted, theme, themeToggler] = useDarkMode();

  lightTheme.themeToggler = themeToggler;
  darkTheme.themeToggler = themeToggler;
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle isMounted={componentMounted} />
      <>{children}</>
    </ThemeProvider>
  );
};

export default AppTheme;
