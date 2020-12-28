import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// Wrapper for Static Menu
export const StyledStaticMenu = styled.ul`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  display: grid;
  grid-template-columns: repeat(2, 10vw);
  grid-gap: 5vw;
  justify-content: end;
  align-content: center;
  padding: 2px 0px;
`;
// Link / Anchor for Static Menu
export const StyledStaticLink = styled(NavLink)`
  padding: 2px 0px;
  color: ${({ theme }) => theme.oppositeColor};
  border: 2px solid ${({ theme }) => theme.oppositeColor};
  border-radius: 10px;
  transition: ${({ theme }) => theme.themeTransition};
  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.3);
  ${({ secondary }) =>
    secondary &&
    css`
      border: 2px solid ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.mainColor};
    `};
  &.active {
    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.9);
  }
  &:hover {
    transform: translateY(2px);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;

// Wrapper for Mobile Menu
export const StyledMobileMenu = styled.ul`
  position: fixed;
  // 80 px = 64px from highest label and 8px * 2 from top and bottom padding
  height: calc(100vh - 80px);
  width: 100vw;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: ${({ theme }) => theme.themeTransition};
  transform: ${({ open }) => (open ? `translateX(0%)` : `translateX(-100%)`)};
  li:first-child {
    align-self: flex-end;
    padding: 2px 20px;
    /* margin: 0px 20px; */
  }
`;

// Link / Anchor for Menu
export const StyledMobileLink = styled(NavLink)`
  width: 80vw;
  font-size: 24px;
  border: 2px solid ${({ theme }) => theme.oppositeColor};
  color: ${({ theme }) => theme.oppositeColor};
  padding: 2px 0px;
  border-radius: 10px;
  margin: 20px;
  &.active {
    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.4);
  }
`;
