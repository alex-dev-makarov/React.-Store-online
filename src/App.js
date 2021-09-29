import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyle } from './global.styles';


import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/userReducer/user.selector';

import { checkUserSession } from './redux/userReducer/userReducer'

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import CheckOut from './pages/check-out/check-out';

import SignInUpPage from './pages/sign-In-up-page/sign-in-up-page';



const App = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])


  return (
    <div>
      <GlobalStyle/>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInUpPage />} />
        <Route exact path='/checkout' component={CheckOut} />
      </Switch>
    </div>
  );
}




export default App
