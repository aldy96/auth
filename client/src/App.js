import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Theme with GlobalStyle
import AppTheme from './Theme/Theme';
// Components
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
// Views
import Error404 from './Components/Error404/Error404';

const App = () => {
  return (
    <AppTheme>
      <Router>
        <>
          <Nav />
          <Header />
          <Switch>
            <Route exact path='/' />
            <Route exact path='/login' />
            <Route exact path='/register' />
            <Route path='*' component={Error404} />
          </Switch>
        </>
      </Router>
    </AppTheme>
  );
};

export default App;
