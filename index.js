import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Home from './modules/Home';
import InClass from './modules/InClass';
import BuildingProjects from './modules/BuildingProjects';
import Donate from './modules/donate';
import Fundraise from './modules/fundraise';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/inclass" component={InClass}/>
      <Route path="/buildingprojects" component={BuildingProjects}/>
      <Route path="/donate" component={Donate}/>
      <Route path="/fundraise" component={Fundraise}/>
    </Route>
  </Router>
), document.getElementById('app'));
