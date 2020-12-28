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

const Register = ({ isLogged }) => {
  // State for Errors
  const [errorFromBackEnd, setErrorFromBackEnd] = useState();
  // State for Successful Created user
  const [isCreatedUser, setCreatedUser] = useState(false);

  // handle submit to form
  const onSubmit = async (formValues) => {
    try {
      // Make request
      const { data } = await axios.post('/api/v1/auth/register', formValues);
      // If ok clear error & redirected to login page
      setErrorFromBackEnd('');
      setCreatedUser(data.success);
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
      {/* If user already logged, redirected to dashboard */}
      {isLogged && <Redirect to='/dashboard' />}
      {/* If Successful Created user,  redirected to login*/}
      {isCreatedUser ? (
        <Redirect to='/login' />
      ) : (
        <StyledFormWrapper>
          <Form
            onSubmit={onSubmit}
            // FrontEnd Validation
            validate={({ email, password, password2 }) => {
              const errors = {};
              // email
              if (!email) {
                errors.email = 'E-mail is Required';
              } else if (!validEmail.test(email)) {
                errors.email = 'Please enter a valid email address';
              }
              // password
              if (!password) {
                errors.password = 'Password is Required';
              } else if (password.length < 6) {
                errors.password = 'Password must be minimum 6 characters';
              }
              // confirm password
              if (password !== password2) {
                errors.password2 = 'Passwords must be the same';
              }
              return errors;
            }}
            render={({ handleSubmit }) => (
              <StyledForm onSubmit={handleSubmit}>
                {errorFromBackEnd && <Error primary>{errorFromBackEnd}</Error>}
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
                <Field name='password2'>
                  {({ input, meta }) => (
                    <>
                      <InputWrapper>
                        <label htmlFor='password2'>Confirm Password</label>
                        <input
                          id='password2'
                          {...input}
                          type='password'
                          placeholder='Confirm Password'
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
                    <h3>Do you already have account?</h3>
                    <FormButton as={Link} to='/login'>
                      Log In
                    </FormButton>
                  </SignInWrapper>
                  <FormButton primary type='submit'>
                    Create Account
                  </FormButton>
                </ButtonsWrapper>
              </StyledForm>
            )}
          />
        </StyledFormWrapper>
      )}
    </>
  );
};

export default Register;
