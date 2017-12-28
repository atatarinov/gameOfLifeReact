'use strict';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

function reducer(state = {}, action) {
  return state;
}


const middleware = applyMiddleware(thunkMiddleware, logger);


const store = createStore(
  reducer,
  middleware
);


export default store;

