import React, { useCallback } from 'react';
// Components
import ThemeToggler from '../ThemeToggler/ThemeToggler';
// Style
import { StyledStaticMenu, StyledMobileMenu, StyledLink } from './Menu.styled';

export const MobileMenu = ({ open, setOpen }) => {
  const handleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, [setOpen]);
  return (
    <>
      <StyledMobileMenu open={open}>
        <li>
          <StyledLink to='/' onClick={handleOpen}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to='/login' onClick={handleOpen}>
            Log In
          </StyledLink>
        </li>
        <li>{/* <ThemeToggler /> */}</li>
      </StyledMobileMenu>
    </>
  );
};

export const StaticMenu = () => (
  <>
    <StyledStaticMenu>
      <li>
        <StyledLink secondary={`true`} to='/'>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/login'>Log In</StyledLink>
      </li>
      <li>
        <ThemeToggler />
      </li>
    </StyledStaticMenu>
  </>
);
