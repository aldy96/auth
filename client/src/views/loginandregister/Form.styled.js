import styled, { css, keyframes } from 'styled-components';
import { StyledButton } from '../../components/buttons/Buttons';

const error = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const StyledFormWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
`;

export const StyledForm = styled.form`
  width: 80vw;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.mainColor};
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
  transition: color ${({ theme }) => theme.themeTransition},
    background-color ${({ theme }) => theme.themeTransition};
  @media (min-width: 801px) {
    width: 50vw;
  } ;
`;

export const InputWrapper = styled.div`
  font-size: 20px;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  row-gap: 2vh;
  align-items: center;
  input {
    padding: 0.5vw;
  }
  input::placeholder {
    color: ${({ theme }) => theme.mainTextColor};
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
  grid-gap: 5vw;
  padding: 1vw;
  align-items: center;
  justify-content: center;
`;

export const SignInWrapper = styled.div``;

export const FormButton = styled(StyledButton)`
  padding: 0;
  margin: 0;
  width: 100%;
  /* height: 100%; */
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.errorColor};
  text-align: center;
  transition: color ${({ theme }) => theme.themeTransition};
  animation: ${error} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  @media (min-width: 480px) {
    text-align: right;
    padding: 0 16px;
  }
  ${({ primary }) =>
    primary &&
    css`
      text-align: center !important;
      font-size: 24px;
    `}
`;
