import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { store } from '@app/common/reducers';

import { GettingStarted } from 'components/GettingStarted';
import { MonorepoIntro } from 'components/MonorepoIntro';
import SignInScreen from './screens/public/signIn';
import SignUpShipper from './screens/public/signup.shipper';
import SignUpSupplier from './screens/public/signUp.supplier';
import ScreenWrapper from './components/screenWrapper';
import VendorForm from './components/forms/vendor.form';
import AddressForm from './components/forms/address.form';

function App() {
  const routes = [
    { component: SignInScreen, path: '/' },
    { component: SignUpShipper, path: '/sign-up-shipper/' },
    { component: SignUpSupplier, path: '/sign-up-supplier/' },
    { component: ScreenWrapper, path: '/screen/' },
    { component: VendorForm, path: '/vendor/' },
    { component: AddressForm, path: '/address/' },
  ];
  return (
    <Provider store={store}>
      <Router>
        {routes.map((i, index) => (
          <i.component path={i.path} key={index.toString()} />
        ))}
      </Router>
    </Provider>
  );
}

export default App;
