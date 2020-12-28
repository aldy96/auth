import React, { useState, useEffect } from 'react';

// Components
import { MobileMenu, StaticMenu } from './menu/Menu';
import Burger from './burger/Burger';
import Logo from './logo/Logo';
import ThemeToggler from './themeToggler/ThemeToggler';

// Style
import { StyledNavWrapper } from './Nav.styled';

const Nav = ({ isLogged }) => {
  // State for open/close mobile menu
  const [open, setOpen] = useState(false);
  // State for Mobile/Static Menu
  const [isMobile, setMobile] = useState(
    typeof window !== `undefined` && window.innerWidth <= 800
  );

  useEffect(() => {
    // Listener for changing window width
    let mediaQuery;
    if (typeof window !== `undefined`) {
      mediaQuery = window.matchMedia(`(max-width: 800px)`);
      mediaQuery.addEventListener('change', (e) => {
        setMobile(e.matches);
      });
    }
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', (e) => {
        setMobile(e.matches);
      });
    };
  }, []);
  // All Navigation depend on window width */
  return (
    <>
      <StyledNavWrapper>
        <Logo />
        {!isMobile && <ThemeToggler />}
        {isMobile && <Burger open={open} setOpen={setOpen} />}
        {!isMobile && <StaticMenu isLogged={isLogged} />}
      </StyledNavWrapper>
      {isMobile && (
        <MobileMenu isLogged={isLogged} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export default Nav;
