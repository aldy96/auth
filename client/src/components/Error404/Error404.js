import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledWrapper, StyledButton } from './Error404.styled';

const Error404 = () => {
  const history = useHistory();

  return (
    <StyledWrapper>
      <StyledButton primary type='button' onClick={() => history.goBack()}>
        Go Back
      </StyledButton>
      <StyledButton primary type='button' onClick={() => history.push('/')}>
        Go Home
      </StyledButton>
    </StyledWrapper>
  );
};

export default Error404;
