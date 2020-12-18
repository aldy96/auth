import React, { useCallback } from 'react';

// Style
import { StyledMenu, StyledLink } from './Menu.styled';

const MobileMenu = ({ open, setOpen }) => {
  const handleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, [setOpen]);
  return (
    <>
      <StyledMenu open={open}>
        <li>
          <StyledLink to='/' onClick={handleOpen}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to='/login' onClick={handleOpen}>
            Login
          </StyledLink>
        </li>
      </StyledMenu>
    </>
  );
};

export default MobileMenu;
