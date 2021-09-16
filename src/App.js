import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import { setCurrentUser } from './redux/userReducer/userReducer'
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/userReducer/user.selector';
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import CheckOut from './pages/check-out/check-out';

import SignInUpPage from './pages/sign-In-up-page/sign-in-up-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import Loader from './components/Loader/Loader'

class App extends React.Component {

  unsubsribeFromAuth = null

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      } else {
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInUpPage />} />
          <Route exact path='/checkout' component={CheckOut} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps, { setCurrentUser })(App);
