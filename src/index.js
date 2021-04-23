import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import HomePage from './components/Pages/Home.js';
import ResumePage from './components/Pages/Resume.js'
import reportWebVitals from './reportWebVitals';

import {createBrowserHistory} from 'history'
import {Router, Route, Switch} from 'react-router-dom'
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/resume" component={ResumePage} />
    </Switch>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
