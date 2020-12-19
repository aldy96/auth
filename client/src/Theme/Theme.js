import React from 'react';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
// Custom Hook
import { useDarkMode } from '../CustomHooks/useDarkMode';

// Light Theme
const lightTheme = {
  body: '#efefef',
  mainText: '#363537',
  // secondaryText: '#ffffff',
  mainColor: '#0074d9',
  // secondaryColor: '#0074d9',
  // toggleBorder: '#FFF',
  // gradient: 'linear-gradient(#39598A, #79D7ED)',
};
// Dark Theme
const darkTheme = {
  body: '#363537',
  mainText: '#efefef',
  // secondaryText: '#ffffff',
  mainColor: '#0074d9',
  // secondaryColor: '#0074d9',
  // toggleBorder: '#6B8096',
  // gradient: 'linear-gradient(#091236, #1E215D)',
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
