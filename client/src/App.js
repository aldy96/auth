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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          quis ratione culpa quas laborum facere, commodi atque. Corrupti sit
          eligendi laboriosam, animi veniam facere. Ipsa labore cum laudantium
          tenetur eaque. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Praesentium quidem dolorum tenetur voluptas suscipit, ex odit
          ipsam consequatur magnam quam tempora quas, minus quibusdam iure
          consectetur tempore quae, reprehenderit facilis?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quod repudiandae ullam nam tenetur
          ipsum, ipsam magni aperiam similique tempore cum reprehenderit facilis
          voluptatem dolores optio nihil? Velit natus porro sequi?Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Natus et totam ducimus
          numquam harum laboriosam, ab animi deserunt voluptatibus dolorum?
          Deleniti nulla odio sed rem fugiat tempore libero maiores
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
