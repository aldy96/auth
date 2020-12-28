import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLogged, ...restProps }) => (
  <Route
    render={(props) =>
      !isLogged ? (
        <Redirect to='/login' />
      ) : (
        <Component {...restProps} {...props} />
      )
    }
  />
);

export default PrivateRoute;
