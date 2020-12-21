import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ isLogged }) => {
  return <>{isLogged && <Redirect to='/dashboard' />}</>;
};

export default Login;
