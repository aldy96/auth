import React from 'react';
import { Redirect } from 'react-router-dom';

const Register = ({ isLogged }) => {
  return <>{isLogged && <Redirect to='/dashboard' />}</>;
};

export default Register;
