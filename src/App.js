import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/shop';
import Header from './components/Header/header';
import SignInOut from './pages/SignInOut/signinout';
import {auth} from './firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super();

    this.state = {CurrentUser: null}
  }

  UnsubscribeFromAuth = null;

  componentDidMount() {
   this.UnsubscribeFromAuth = auth.onAuthStateChanged(
      user => {this.setState({CurrentUser: user})}
    )
  }
  componentWillUnmount() {
    this.UnsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header CurrentUser={this.state.CurrentUser}/>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
