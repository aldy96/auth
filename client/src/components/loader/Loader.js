import { withTheme } from 'styled-components';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoader = ({ theme }) => (
  <LoaderWrapper>
    <Loader type='ThreeDots' color={theme.mainColor} height={80} width={80} />
  </LoaderWrapper>
);

export default withTheme(StyledLoader);
