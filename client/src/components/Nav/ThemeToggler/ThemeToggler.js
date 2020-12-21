import React from 'react';
import { withTheme } from 'styled-components';
//Styles
import { StyledToggleButton, Indicator } from './ThemeToggler.styled';

const ThemeToggler = ({ theme: { themeToggler, isLight } }) => {
  return (
    <StyledToggleButton onClick={themeToggler}>
      <Indicator isLight={isLight} />
    </StyledToggleButton>
  );
};

export default withTheme(ThemeToggler);
