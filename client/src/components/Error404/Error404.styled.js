import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner';

export const StyledWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
export const StyledHeader = styled.h1`
  text-align: center;
  margin: 16px 0;
  padding: 0 16px;
`;
export const StyledLoader = styled(Loader)`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
`;

export const StyledButton = styled.button`
  margin: 16px 16px;
  padding: 4px 24px;
  background: transparent;
  border: 2px solid #0074d9;
  border-radius: 10px;
  color: #0074d9;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
      background: #0074d9;
      color: white;
      transition: all ease-in-out 300ms;
      &:hover {
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
      }
    `};
`;
