import React, { Suspense } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import { store } from '@app/common/reducers';
import { LoadingOutlined } from '@ant-design/icons';
import ScreenWrapper from './components/screenWrapper';
import { supplierRoutes, publicRoutes } from './helpers/routes';

function App() {
  const loading = () => (
    <div className=''>
      <LoadingOutlined />
    </div>
  );

  const userType = 'anonymous';
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
          <ScreenWrapper routes={supplierRoutes}>
            <Router>
              {supplierRoutes.map((i, index) => {
                return <i.component path={i.path} key={index.toString()} />;
              })}
              {supplierRoutes.map((i) => {
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
      <Suspense fallback={loading()}>{getRouter()}</Suspense>
    </Provider>
  );
}

export default App;
