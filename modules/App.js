import styles from './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Analytics from './Analytics';

import NavLink from './NavLink';

import About from './About';
import Home from './Home';
import InClass from './InClass';
import BuildingProjects from './BuildingProjects';
import Donate from './Donate';
import Fundraise from './Fundraise';
import Cambodia from './Cambodia';
import India from './India';
import Syria from './Syria';
import Team from './Team';
import Partners from './Partners';
import Impact from './Impact';
import CambodiaProject from './CambodiaProject';
import IndiaProject from './IndiaProject';
import SyriaProject from './SyriaProject';

import ScoopDonation from './ScoopDonation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false
    };
  }

  componentDidMount() {
    Analytics.initialize();
    Analytics.mark('App.js mounted.');
  }

  // const logo = isHome ? 'logo-white.png' : 'scoop-logo-kl3.png';
  render() {    
    return (
      <div className="App">
        <nav className="navbar" role="navigation">
              <ul className="nav-full">
                <li><NavLink to="/" id="logo-container"><img className="logo" src="modules/assets/logo-white.png"/></NavLink></li>
                <li><NavLink to="/about" id="about" className="nav-left">ABOUT US</NavLink></li>
                <li><NavLink to="/inclass" className="nav-left">IN CLASS</NavLink></li>
                <li><NavLink to="/buildingprojects" className="nav-left">BUILDING PROJECTS</NavLink></li>
                <li><span className="nav-right"><a target="_blank" href="https://www.facebook.com/scoopfoundation"><i className="fa fa-facebook fa-2x purple icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><a target="_blank" href="https://twitter.com/scoopfoundation"><i className="fa fa-twitter fa-2x blue icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><a target="_blank" href="https://www.instagram.com/scoopfoundation_ireland/?hl=en"><i className="fa fa-instagram fa-2x orange icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><a href="#donate" className="nav-pill nav-pill--donate">DONATE</a></span></li>
                <li><span className="nav-right"><NavLink to="/fundraise" className="nav-pill">FUNDRAISE</NavLink></span></li>
              </ul>
            <div>
            <img className="logo-mobile" src="modules/assets/scoop-logo-kl3.png" style={{height:"50px"}}/>
            { this.state.isDropdown &&
            <ul className="nav-mobile">
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/inclass">IN CLASS</NavLink></li>
              <li><NavLink to="/buildingprojects">BUILDING PROJECTS</NavLink></li>
              <li><a href="#donate">Donate</a></li>
              <li><NavLink to="/fundraise">FUNDRAISE</NavLink></li>
              <li><NavLink to="/team" className="nav-sublink">TEAM</NavLink></li>
              <li><NavLink to="/impact" className="nav-sublink">IMPACT</NavLink></li>
              <li><NavLink to="/partners" className="nav-sublink">PARTNERS</NavLink></li>
            </ul>
            }
            <i className="fa fa-bars fa-2x button-collapse" aria-hidden="true" onClick={() => this.setState({isDropdown: !this.state.isDropdown})}></i>
            </div>   
        </nav>
        
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/buildingprojects" component={BuildingProjects}/>
        <Route path="/cambodia" component={Cambodia}/>
        <Route path="/cambodiaproject" component={CambodiaProject}/>
        <Route path="/donate" component={Donate}/>
        <Route path="/fundraise" component={Fundraise}/>
        <Route path="/impact" component={Impact}/>
        <Route path="/inclass" component={InClass}/>
        <Route path="/india" component={India}/>
        <Route path="/indiaproject" component={IndiaProject}/>
        <Route path="/partners" component={Partners}/>
        <Route path="/syria" component={Syria}/>
        <Route path="/syriaproject" component={SyriaProject}/>
        <Route path="/team" component={Team}/>

        <footer>
          <center className="newsletter">
          <form action="https://formspree.io/info@scoopfoundation.com" method="post">
          <h3>Join our mailing list!</h3>
          <input type="email" name="email" placeholder="  enter your email"/>
          <button type="submit">Join</button>
          </form>
          </center>
          <div className="footer-links">
            <div>
            <span><b>Get to know us</b></span>
            <span className="link"><NavLink to="/about">About Us</NavLink></span>
            <span className="link"><NavLink to="/impact">Impact</NavLink></span>
            <span className="link"><NavLink to="/team">Meet the Team</NavLink></span>
            <span className="link"><a href="http://scoopfoundationblog.wordpress.com">Read our Blog</a></span>
            </div>
            <div>
            <span><b>Get Involved</b></span>
            <span className="link"><NavLink to="/fundraise">Fundraise</NavLink></span>
            <span className="link"><a href="#donate">Donate</a></span>
            <span className="link"><a href="https://scoopfoundation.squarespace.com/" target="_blank">Store</a></span>
            <span className="link"><NavLink to="/partners">Partners</NavLink></span>
            </div>
            <div>
            <span><b>Contact us</b></span>
            <span className="link"><a href="mailto:info@scoopfoundation.com">Email: info@scoopfoundation.com</a></span>
            <span>Phone: +353 85 778 1058</span>
            </div>
          </div>
          <div className="footer-social">
          <a target="_blank" href="https://www.facebook.com/scoopfoundation"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a target="_blank" href="https://twitter.com/scoopfoundation"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a target="_blank" href="https://www.instagram.com/scoopfoundation_ireland/?hl=en"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
          <a target="_blank" href="https://www.linkedin.com/company/the-scoop-foundation?trk=prof-following-company-logo"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCU3693Xfnd5e_iWAp41YrbA?app=desktop"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
          </div>
          <center style={{paddingBottom: "15px"}}>SCOOP is a registered charity in Ireland (CHY 18767) and Australia (ABN 74156239766)</center>
        </footer>
        <ScoopDonation />
      </div>
    );
  }
}

export default App;