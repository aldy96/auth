import React from 'react';

// Components
import Menu from './Menu/Menu';
// Style
import { StyledNavWrapper } from './Nav.styled';

const Nav = () => {
  return (
    <StyledNavWrapper>
      <Menu />
    </StyledNavWrapper>
  );
};

export default Nav;
