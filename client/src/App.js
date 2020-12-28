import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Components
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import StyledLoader from './components/loader/Loader';

// Views
import Error404 from './views/error404/Error404';
import Login from './views/login&register/Login';
import Register from './views/login&register/Register';
import Dashboard from './views/dashboard/Dashboard';
// Theme with GlobalStyle
import AppTheme from './theme/Theme';
//Utils
import ProtectedRoute from './utils/ProtectedRoute';

const App = () => {
  // Simulated Logged User
  const [isLogged, setLogged] = useState();
  // ComponentMount
  const [isComponentMount, setComponentMount] = useState(false);
  useEffect(() => {
    // Check if we have active user session
    (async () => {
      try {
        // Get User Data
        const { data } = await axios.get('/api/v1/auth');
        setLogged(data.success);
      } catch (error) {
        // If error => logout user
        // console.error({ error });
        setLogged(false);
      }
      setComponentMount(true);
    })();
  }, []);
  return (
    <AppTheme>
      <Router>
        <>
          {isComponentMount ? (
            <>
              <Nav isLogged={isLogged} />
              <Header />
              <Switch>
                <Route exact path='/' />
                <Route path='/login'>
                  <Login setLogged={setLogged} isLogged={isLogged} />
                </Route>
                <Route path='/register'>
                  <Register isLogged={isLogged} />
                </Route>
                <ProtectedRoute
                  isLogged={isLogged}
                  setLogged={setLogged}
                  path='/dashboard'
                  component={Dashboard}
                />
                <Route path='*' component={Error404} />
              </Switch>
            </>
          ) : (
            <StyledLoader />
          )}
        </>
      </Router>
    </AppTheme>
  );
};

export default App;
