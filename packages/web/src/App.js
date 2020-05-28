import React, { Suspense } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import { store } from '@app/common/reducers';
import ScreenWrapper from './components/screenWrapper';
import { shipperRoutes, publicRoutes } from './helpers/routes';
import Loading from './components/loadingComponent';

function App() {
  const userType = 'supplier';
  const getRouter = () => {
    switch (userType) {
      case 'anonymous':
        return (
          <Router>
            {publicRoutes.map((i, index) => {
              return <i.component path={i.path} key={index.toString()} />;
            })}
          </Router>
        );
      case 'supplier':
        return (
          <ScreenWrapper routes={shipperRoutes}>
            <Router>
              {shipperRoutes.map((i, index) => {
                return <i.component path={i.path} key={index.toString()} />;
              })}
              {shipperRoutes.map((i) => {
                return i.subMenu
                  ? i.subMenu.map((subI, ind) => (
                    <subI.component path={subI.path} key={ind.toString()} />
                  ))
                  : null;
              })}
            </Router>
          </ScreenWrapper>
        );
      default:
        return null;
    }
  };
  return (
    <Provider store={store}>
      <Suspense fallback={Loading}>{getRouter()}</Suspense>
    </Provider>
  );
}

export default App;
