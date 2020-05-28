import React, { lazy } from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { store } from '@app/common/reducers';

import { LayoutOutlined } from '@ant-design/icons';
import SignInScreen from './screens/public/signIn';
import SignUpShipper from './screens/public/signup.shipper';
import SignUpSupplier from './screens/public/signUp.supplier';
import ScreenWrapper from './components/screenWrapper';
import VendorForm from './components/forms/vendor.form';
import AddressForm from './components/forms/address.form';
import SalesOrderForm from './components/forms/salesOrder.form';

function App() {
  const routes = [
    { component: SignInScreen, path: '/' },
    { component: SignUpShipper, path: '/sign-up-shipper/' },
    { component: SignUpSupplier, path: '/sign-up-supplier/' },
    { component: ScreenWrapper, path: '/screen/' },
    { component: VendorForm, path: '/vendor/' },
    { component: AddressForm, path: '/address/' },
    { component: SalesOrderForm, path: '/sales/' },
  ];
  const privateRoutes = [
    {
      name: 'Dashboard',
      icon: <LayoutOutlined />,
      path: '/dashboard',
      component: lazy('./screens/private/dashboard'),
    },
    {
      name: 'Masters',
      icon: <LayoutOutlined />,
      path: '/dashboard',
      component: lazy('./screens/private/dashboard'),
      isSubMenu: true,
      subMenu: [
        {
          name: 'Item',
          path: '/master/item',
          component: lazy('./screens/private/dashboard'),
        },
        {
          name: 'Vendor',
          path: '/master/vendor',
          component: lazy('./screens/private/dashboard'),
        },
        { name: 'Address', path: '/master/address', component: lazy('./screens/private/dashboard') },
      ],
    },
    {
      name: 'Sales Order',
      icon: <LayoutOutlined />,
      path: '/dashboard',
      component: lazy('./screens/private/dashboard'),
    },
    {
      name: 'Carrier Selection',
      icon: <LayoutOutlined />,
      path: '/dashboard',
      component: lazy('./screens/private/dashboard'),
    },
    {
      name: 'Shipping',
      icon: <LayoutOutlined />,
      path: '/dashboard',
      component: lazy('./screens/private/dashboard'),
    },
    {
      name: 'Transporter Director',
      icon: <LayoutOutlined />,
      path: '/dashboard',
      component: lazy('./screens/private/dashboard'),
    },
  ];
  return (
    <Provider store={store}>
      <ScreenWrapper routes={privateRoutes}>
        <Router>
          {privateRoutes.map((i) => {
            return i.subMenu
              ? i.subMenu.map((subI, ind) => (
                <subI.component path={subI.path} key={ind.toString()} />
              ))
              : null;
          })}
          {privateRoutes.map((i, index) => {
            return <i.component path={i.path} key={index.toString()} />;
          })}
        </Router>
      </ScreenWrapper>
    </Provider>
  );
}

export default App;
