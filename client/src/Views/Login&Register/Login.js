import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
//Style
import {
  StyledFormWrapper,
  StyledForm,
  InputWrapper,
  ButtonsWrapper,
  FormButton,
  SignInWrapper,
  Error,
} from './Form.styled';

const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const Login = ({ isLogged, setLogged }) => {
  // State for Errors
  const [errorFromBackEnd, setErrorFromBackEnd] = useState();

  const onSubmit = async (formValues) => {
    try {
      // Await for response
      const response = await axios.post('/api/v1/auth/login', formValues);
      // Clear Errors
      setErrorFromBackEnd('');
      // Of course better way is using redux
      // SetLogged on true and automatically redirected to /dashboard
      setLogged(response.data.success);
    } catch (error) {
      // Clear previus error
      setErrorFromBackEnd('');
      // We can use Error Boundaries but for now we use useState
      if (error.response.data.error) {
        // Custom error from BackEnd
        setErrorFromBackEnd(error.response.data.error);
      } else {
        // In any other case
        setErrorFromBackEnd('Server Error, Please try again later.');
      }
    }
  };

  return (
    <>
      {isLogged ? (
        <Redirect to='/dashboard' />
      ) : (
        <>
          <StyledFormWrapper>
            <Form
              onSubmit={onSubmit}
              validate={({ email, password }) => {
                const errors = {};
                // email
                if (!email) {
                  errors.email = 'E-mail is Required';
                } else if (!validEmail.test(email)) {
                  errors.email = 'Please enter a valid email address';
                }
                //password
                if (!password) {
                  errors.password = 'Password is Required';
                } else if (password.length < 6) {
                  errors.password = 'Password must be minimum 6 characters';
                }
                return errors;
              }}
              render={({ handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit}>
                  {errorFromBackEnd && (
                    <Error primary>{errorFromBackEnd}</Error>
                  )}
                  <Field name='email'>
                    {({ input, meta }) => (
                      <>
                        <InputWrapper>
                          <label htmlFor='email'>E-mail</label>
                          <input
                            id='email'
                            {...input}
                            type='text'
                            placeholder='E-mail'
                          />
                        </InputWrapper>
                        {meta.error && meta.touched && (
                          <Error>{meta.error}</Error>
                        )}
                      </>
                    )}
                  </Field>
                  <Field name='password'>
                    {({ input, meta }) => (
                      <>
                        <InputWrapper>
                          <label htmlFor='password'>Password</label>
                          <input
                            id='password'
                            {...input}
                            type='password'
                            placeholder='Password'
                          />
                        </InputWrapper>
                        {meta.error && meta.touched && (
                          <Error>{meta.error}</Error>
                        )}
                      </>
                    )}
                  </Field>
                  <ButtonsWrapper>
                    <SignInWrapper>
                      <h3>Don't have account yet?</h3>
                      <FormButton as={Link} to='/register'>
                        Sign In
                      </FormButton>
                    </SignInWrapper>
                    <FormButton primary type='submit'>
                      Log In
                    </FormButton>
                  </ButtonsWrapper>
                </StyledForm>
              )}
            />
          </StyledFormWrapper>
        </>
      )}
    </>
  );
};

export default Login;
