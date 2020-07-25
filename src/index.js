import React from 'react';
import ReactDOM from 'react-dom';
import './_styles/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import DATA from './data.js';
import ScrollToTop from './Components/ScrollToTop'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop/>
    <App data={DATA}/>
  </BrowserRouter>,
  document.getElementById('root')
);

