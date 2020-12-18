import React from 'react';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  body: '#f9f9f9',
  mainText: '#363537',
  // secondaryText: '#ffffff',
  mainColor: '#0074d9',
  // secondaryColor: '#0074d9',
  // toggleBorder: '#FFF',
  // gradient: 'linear-gradient(#39598A, #79D7ED)',
};

const darkTheme = {
  body: '#363537',
  mainText: '#FAFAFA',
  // secondaryText: '#ffffff',
  mainColor: '#0074d9',
  // secondaryColor: '#0074d9',
  // toggleBorder: '#6B8096',
  // gradient: 'linear-gradient(#091236, #1E215D)',
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <>{children}</>
    </ThemeProvider>
  );
};

export default Theme;
