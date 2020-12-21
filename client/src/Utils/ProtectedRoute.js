import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLogged, ...restProps }) => (
  <Route
    {...restProps}
    render={(props) =>
      !isLogged ? <Redirect to='/login' /> : <Component {...props} />
    }
  />
);

export default PrivateRoute;
