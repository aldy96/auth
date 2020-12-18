import React, { useState } from 'react';

// Components
import Menu from './Menu/Menu';
import Burger from './Burger/Burger';
// import Logo from './Logo/Logo';
// Style
import { StyledNavWrapper } from './Nav.styled';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledNavWrapper>
      {/* <Logo /> */}
      <Menu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </StyledNavWrapper>
  );
};

export default Nav;
