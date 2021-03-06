import './App.css';

import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import 'helpers/shared';

import { store } from '@app/common/reducers';
import { Loading } from 'components/Loding';
import { RootRouter } from 'components/RootRouter';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <RootRouter />
      </Suspense>
    </Provider>
  );
}

export default App;
