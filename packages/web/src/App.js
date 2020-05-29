import React, { Suspense } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import { store } from '@app/common/reducers';

import { useUser } from '@app/common/hooks/user';
import { $User$SHIPPER, $User$Supplier$FTL } from '@app/common/constants/userTypes';

import ScreenWrapper from './components/screenWrapper';
import { shipperRoutes, publicRoutes, supplierFTLRoutes } from './helpers/routes';
import Loading from './components/loadingComponent';

function PrivateRoutes({ routes }) {
  return (
    <ScreenWrapper routes={routes}>
      <Router>
        {routes.map((Route, index) => {
          return <Route.Component path={Route.path} key={index.toString()} />;
        })}
        {routes.map((Route) => {
          return Route.subMenu
            ? Route.subMenu.map((ChildRoute, ind) => (
              <ChildRoute.Component path={ChildRoute.path} key={ind.toString()} />
            ))
            : null;
        })}
      </Router>
    </ScreenWrapper>
  );
}

/**
 * @return {null}
 */
function RootRouter() {
  const user = useUser();

  // switch (user.type) {
  switch ($User$Supplier$FTL) {
    case null:
      return (
        <Router>
          {publicRoutes.map((Route, index) => {
            return <Route.Component path={Route.path} key={index.toString()} />;
          })}
        </Router>
      );
    case $User$SHIPPER:
      return <PrivateRoutes routes={shipperRoutes} />;
    case $User$Supplier$FTL:
      return <PrivateRoutes routes={supplierFTLRoutes} />;
    default:
      return null;
  }
}

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={Loading}>
        <RootRouter />
      </Suspense>
    </Provider>
  );
}

export default App;
