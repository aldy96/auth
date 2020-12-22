import styled from 'styled-components';
import { StyledButton } from '../../Components/Buttons/Buttons';

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
  @media (min-width: 480px) {
    text-align: right;
    padding: 0 16px;
  } ;
`;
