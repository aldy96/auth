import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled(Link)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    grid-row: 1 / span 1;
  }
  svg {
    // Responsive SVG
    width: auto;
    max-width: 100%;
    min-height: 48px;
    height: 10vh;
    fill: ${({ theme }) => theme.mainColor};
  }
`;
