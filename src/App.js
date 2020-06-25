import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/shop';
import Header from './components/Header/header'


function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
