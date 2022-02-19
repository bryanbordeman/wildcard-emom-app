import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import MainRoutes from './components/MainRoutes';

ReactDOM.render(
  <BrowserRouter>
    <MainRoutes/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


