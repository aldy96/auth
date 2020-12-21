import React, { useCallback } from 'react';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
// Style
import {
  StyledStaticMenu,
  StyledStaticLink,
  StyledMobileMenu,
  StyledMobileLink,
} from './Menu.styled';

// Menu for Mobile
export const MobileMenu = ({ open, setOpen }) => {
  const handleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, [setOpen]);
  return (
    <>
      <StyledMobileMenu open={open}>
        <li>
          <ThemeToggler />
        </li>
        <li>
          <StyledMobileLink exact to='/' onClick={handleOpen}>
            Home
          </StyledMobileLink>
        </li>
        <li>
          <StyledMobileLink exact to='/login' onClick={handleOpen}>
            Log In
          </StyledMobileLink>
        </li>
      </StyledMobileMenu>
    </>
  );
};

// Menu for Desctop / Static
export const StaticMenu = () => (
  <>
    <StyledStaticMenu>
      <li>
        {/* We have to do it like this because Link adds secondary='true' into DOM  */}
        <StyledStaticLink exact to='/'>
          Home
        </StyledStaticLink>
      </li>
      <li>
        <StyledStaticLink exact secondary={`true`} to='/login'>
          Log In
        </StyledStaticLink>
      </li>
    </StyledStaticMenu>
  </>
);
