import React from 'react';
import { useHistory } from 'react-router-dom';
import { withTheme } from 'styled-components';
// Components
import Button from '../Buttons/Buttons';
import { StyledWrapper, StyledLoader } from './Error404.styled';

const Error404 = ({ theme }) => {
  const history = useHistory();

  return (
    <StyledWrapper>
      <h2>Something Went Wrong</h2>
      <StyledLoader
        type='Oval'
        color={theme.mainColor}
        height={80}
        width={80}
      />
      <Button primary type='button' handleClick={() => history.goBack()}>
        Go Back
      </Button>
      <Button primary handleClick={() => history.push('/')}>
        Go Home
      </Button>
    </StyledWrapper>
  );
};

export default withTheme(Error404);
