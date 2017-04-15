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
import Cambodia from './modules/Cambodia';
import India from './modules/India';
import Syria from './modules/Syria';
import Team from './modules/Team';
import Partners from './modules/Partners';
import Impact from './modules/Impact';
import CambodiaProject from './modules/CambodiaProject';
import IndiaProject from './modules/IndiaProject';
import SyriaProject from './modules/SyriaProject';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/inclass" component={InClass}/>
      <Route path="/buildingprojects" component={BuildingProjects}/>
      <Route path="/donate" component={Donate}/>
      <Route path="/fundraise" component={Fundraise}/>
      <Route path="/cambodia" component={Cambodia}/>
      <Route path="/india" component={India}/>
      <Route path="/syria" component={Syria}/>
      <Route path="/cambodiaproject" component={CambodiaProject}/>
      <Route path="/indiaproject" component={IndiaProject}/>
      <Route path="/syriaproject" component={SyriaProject}/>
      <Route path="/team" component={Team}/>
      <Route path="/partners" component={Partners}/>
      <Route path="/impact" component={Impact}/>
    </Route>
  </Router>
), document.getElementById('app'));
