import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
// Views
import Error404 from './components/Error404/Error404';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Nav />
        <Switch>
          <Route exact path='/' />
          <Route exact path='/login' />
          <Route exact path='/register' />
          <Route path='*' component={Error404} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
