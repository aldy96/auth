import styled from 'styled-components';

export const StyledNavWrapper = styled.nav`
  z-index: 999;
  position: sticky;
  top: 0;
  padding: 8px 32px;
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  transition: all 250ms ease-in-out;
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-rows: 64px;
  }
`;
