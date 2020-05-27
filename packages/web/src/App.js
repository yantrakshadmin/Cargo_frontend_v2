import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { store } from '@app/common/reducers';

import { GettingStarted } from 'components/GettingStarted';
import { MonorepoIntro } from 'components/MonorepoIntro';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GettingStarted path='/' />
        <MonorepoIntro path='/intro/' />
      </Router>
    </Provider>
  );
}

export default App;
