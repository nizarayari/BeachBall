import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import resolvePromise from 'redux-promise'

import './style/style.css'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(resolvePromise)(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.querySelector('.container'));