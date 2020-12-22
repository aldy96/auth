import React from 'react';
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
  const onSubmit = async (formValues) => {
    console.log('submit');
    try {
      const res = await axios.post('/api/v1/auth/login', formValues);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLogged ? (
        <Redirect to='/dashboard' />
      ) : (
        <StyledFormWrapper>
          <Form
            onSubmit={onSubmit}
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
