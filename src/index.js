import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
 <React.Fragment>
    <BrowserRouter>
    <App />
     </BrowserRouter>
 </React.Fragment>
   ,
  document.getElementById('root')
);


