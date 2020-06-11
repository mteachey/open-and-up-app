import React from 'react';
import ReactDOM from 'react-dom';
import './_styles/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import DATA from './data.js';

ReactDOM.render(
  <BrowserRouter>
    <App data={DATA}/>
  </BrowserRouter>,
  document.getElementById('root')
);

