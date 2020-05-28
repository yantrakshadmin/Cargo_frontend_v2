import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { demo } from './demo';
import { auth } from './auth';

const reducers = combineReducers({
  demo,
  auth,
});

export const store = createStore(reducers, applyMiddleware(thunk));
