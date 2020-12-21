import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import './index.css';
import Home from './Components/Home';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import Notfound from './Components/NotFound'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={Info} />
      <Route component={Notfound} />
    </Switch>
  </Router>
)

render(routing, window.document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
