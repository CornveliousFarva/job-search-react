import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/style.css'

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);

// This is the route to the home page and its child components

