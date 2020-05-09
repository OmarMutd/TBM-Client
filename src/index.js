import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from "react-router";
import history from './history';
import { ProductProvider } from './context.js'

ReactDOM.render(
  <ProductProvider>
    <Router history={history}>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);

