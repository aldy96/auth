import React from 'react';
import { withTheme } from 'styled-components';
//Styles
import { StyledToggleButton, Indicator } from './ThemeToggler.styled';

const ThemeToggler = ({ theme: { themeToggler } }) => (
  <StyledToggleButton onClick={themeToggler}>
    <Indicator />
  </StyledToggleButton>
);

export default withTheme(ThemeToggler);
