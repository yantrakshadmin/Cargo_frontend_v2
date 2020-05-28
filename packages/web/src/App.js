import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { store } from '@app/common/reducers';

import SignInScreen from 'screens/public/signIn';
import SignUpShipper from 'screens/public/signup.shipper';
import SignUpSupplier from 'screens/public/signUp.supplier';
import ScreenWrapper from 'components/screenWrapper';
import VendorForm from 'forms/vendor.form';
import AddressForm from 'forms/address.form';
import { Profile } from 'screens/profile';

function App() {
  const routes = [
    { Component: SignInScreen, path: '/' },
    { Component: SignUpShipper, path: '/sign-up-shipper/' },
    { Component: SignUpSupplier, path: '/sign-up-supplier/' },
    { Component: ScreenWrapper, path: '/screen/' },
    { Component: VendorForm, path: '/vendor/' },
    { Component: AddressForm, path: '/address/' },
    { Component: Profile, path: '/profile/' },
  ];
  return (
    <Provider store={store}>
      <Router>
        {routes.map((Route, index) => (
          <Route.Component path={Route.path} key={index.toString()} />
        ))}
      </Router>
    </Provider>
  );
}

export default App;
