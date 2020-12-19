import React from 'react';
import { withTheme } from 'styled-components';

const ThemeToggler = ({ theme: { themeToggler } }) => {
  return <button onClick={themeToggler}>ThemeToggler</button>;
};

export default withTheme(ThemeToggler);
