import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Wrapper for Static Menu
export const StyledStaticMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Wrapper for MobileMenu
export const StyledMobileMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: transform 300ms ease-in;
  transform: ${({ open }) => (open ? `translateX(0%)` : `translateX(-100%)`)};
  li {
    width: 100%;
    padding: 0 32px;
    @media (min-width: 361px) {
      padding: 0 64px;
    }
  }
`;

// Link / Anchor for Menu
export const StyledLink = styled(Link)`
  font-size: 24px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.body};
  border-radius: 10px;
  @media (min-width: 801px) {
    font-size: 16px;
    padding: 4px 24px;
    margin: 0px 16px;
    border: 2px solid ${({ theme }) => theme.mainColor};
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.mainColor};
    }

    ${({ secondary }) =>
      secondary &&
      css`
        background: transparent;
        color: ${({ theme }) => theme.mainColor};
      `};
  }
`;
