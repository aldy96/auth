import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Theme with GlobalStyle
import AppTheme from './Theme/Theme';
// Components
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
//Utils
import ProtectedRoute from './Utils/ProtectedRoute';
// Views
import Error404 from './Views/Error404/Error404';
import Login from './Views/Login&Register/Login';
import Register from './Views/Login&Register/Register';
import Dashboard from './Views/Dashboard/Dashboard';
const App = () => {
  // Simulated Logged User
  const [isLogged, setLogged] = useState();
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
    })();
  }, []);
  return (
    <AppTheme>
      <Router>
        <>
          <Nav />
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
      </Router>
    </AppTheme>
  );
};

export default App;
