import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export const StyledWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
export const StyledLoader = styled(Loader)`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
`;
