import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@app/common/reducers';

import { useUser } from '@app/common/hooks/user';
import { $User$SHIPPER, $User$Supplier$FTL } from '@app/common/constants/userTypes';

import { getUserMeta } from '@app/common/helpers/auth';

import { Spin } from 'antd';
import ScreenWrapper from './components/screenWrapper';
import { shipperRoutes, publicRoutes, supplierFTLRoutes } from './helpers/routes';
import Loading from './components/loadingComponent';
import { storage } from './helpers/store';

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
  const [loading, setLoading] = useState(true);

  const user = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      console.log({ storage });
      await getUserMeta(dispatch);
    };

    init().then(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Spin />
      </div>
    );

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
