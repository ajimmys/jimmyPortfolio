import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';

import './Styles/index.css';
import Home from './Components/Home';
import ContactMe from './Components/ContactMe.js';
import Navbar from './Components/Navbar';
import Notfound from './Components/NotFound'
import reportWebVitals from './reportWebVitals';
import WorkingOnNow from "./Components/WorkingOnNow";
import Blog from "./Components/Blog"

const routing = (
  <Router>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/WorkingOnNow" element={<WorkingOnNow />}/>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route element={Notfound} />
    </Routes>
  </Router>
)

render(routing, window.document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
