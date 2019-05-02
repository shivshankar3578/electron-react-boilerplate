import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
const DO_NOT_LOGIN = false;

runWithAdal(
  authContext,
  () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  },
  DO_NOT_LOGIN
);
