import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledWrapper,
  StyledHeader,
  StyledButton,
  StyledLoader,
} from './Error404.styled';

const Error404 = () => {
  const history = useHistory();

  return (
    <StyledWrapper>
      <StyledHeader>Something Went Wrong</StyledHeader>
      <StyledLoader type='Oval' color='#0074d9' height={80} width={80} />
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
