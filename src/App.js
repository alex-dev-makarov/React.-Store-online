import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyle } from './global.styles';

import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/userReducer/user.selector';
import { checkUserSession } from './redux/userReducer/userReducer'


import HomePage from './pages/homepage/homepage';
import Header from './components/header/header';
import Loader from './components/Loader/loader';

import ErrorBoundary from './pages/error-boundary/error-boundary';

const ShopPage = lazy(() => import('./pages/shop/shop'))
const SignInUpPage = lazy(() => import('./pages/sign-In-up-page/sign-in-up-page'))
const CheckOut = lazy(() => import('./pages/check-out/check-out'))

const App = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])


  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Route exact path='/' component={HomePage} />
          <Suspense fallback={<Loader />}>
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInUpPage />} />
            <Route exact path='/checkout' component={CheckOut} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}




export default App
