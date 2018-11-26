import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import jwtDecode from 'jwt-decode';
import { asyncActions } from './util/AsyncUtil';
import { LOGIN } from './actionTypes/UserConstants';
import setAuthToken from './util/AuthTokenUtil';
import rootReducer from './reducers/Index';
import './styles/style.scss';
import App from './App';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunk));

if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(asyncActions(LOGIN).success(jwtDecode(localStorage.token)));
}

if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(asyncActions(LOGIN).success(jwtDecode(localStorage.token)));
}

const Index = () => (
  <BrowserRouter>
    <Provider store={ store }>
      <div>
        <App />
      </div>
    </Provider>
  </BrowserRouter>
);

render(<Index/>, document.getElementById('root'));
