import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMenu = styled.ul`
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
    padding: 0 64px;
  }
  @media (min-width: 801px) {
    position: relative;
    display: flex;
    flex-direction: row;
    transition-duration: 0ms;
    transform: translateX(0%);
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  padding: 8px;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.body};
  border-radius: 10px;
  @media (min-width: 801px) {
    border: 2px solid ${({ theme }) => theme.mainColor};
    background: transparent;
    color: ${({ theme }) => theme.mainColor};
  }
`;
