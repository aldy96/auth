import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Theme with GlobalStyle
import AppTheme from './Theme/Theme';
// Components
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
//Utils
import ProtectedRoute from './Utils/ProtectedRoute';
// Views
import Error404 from './Views/Error404/Error404';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';
import Dashboard from './Views/Dashboard/Dashboard';
const App = () => {
  // Simulated Logged User
  const [isLogged, setLogged] = useState(false);
  return (
    <AppTheme>
      <Router>
        <>
          <Nav />
          <Header />
          <Switch>
            <Route exact path='/' />
            <Route path='/login'>
              <Login isLogged={isLogged} />
            </Route>
            <Route path='/register'>
              <Register isLogged={isLogged} />
            </Route>
            <ProtectedRoute
              isLogged={isLogged}
              path='/dashboard'
              component={Dashboard}
            />
            <Route path='*' component={Error404} />
          </Switch>
        </>
      </Router>
    </AppTheme>
  );
};

export default App;
