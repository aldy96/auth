import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapperLogo = styled(Link)`
  display: flex;
  justify-content: center;

  flex-grow: 1;
  svg {
    fill: ${({ theme }) => theme.mainColor};
  }
`;
