import React from 'react';
import NavLink from './NavLink';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation">
              <ul className="nav-full">
                <li><NavLink to="/" id="logo-container"><img className="logo" src="modules/assets/scoop-logo-kl3.png"/></NavLink></li>
                <li><NavLink to="/about" id="about" className="nav-left">ABOUT US</NavLink></li>
                <li><NavLink to="/inclass" className="nav-left">IN CLASS</NavLink></li>
                <li><NavLink to="/buildingprojects" className="nav-left">BUILDING PROJECTS</NavLink></li>
                <li><span className="nav-right"><a target="_blank" href="https://www.facebook.com/scoopfoundation"><i className="fa fa-facebook fa-2x purple icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><a target="_blank" href="https://twitter.com/scoopfoundation"><i className="fa fa-twitter fa-2x blue icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><a target="_blank" href="https://www.instagram.com/scoopfoundation_ireland/?hl=en"><i className="fa fa-instagram fa-2x orange icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><NavLink to="/donate" className="nav-pill">DONATE</NavLink></span></li>
                <li><span className="nav-right"><NavLink to="/fundraise" className="nav-pill">FUNDRAISE</NavLink></span></li>
              </ul>
            <div>
            { this.state.isDropdown ?
            <ul id="nav-mobile" className="side-nav" onClick={() => this.setState({isDropdown: !this.state.isDropdown})}>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/inclass">IN CLASS</NavLink></li>
              <li><NavLink to="/buildingprojects">BUILDING PROJECTS</NavLink></li>
              <li><NavLink to="/donate">DONATE</NavLink></li>
              <li><NavLink to="/fundraise">FUNDRAISE</NavLink></li>
              <li><NavLink to="/team" className="nav-sublink">Team</NavLink></li>
              <li><NavLink to="/impact" className="nav-sublink">Impact</NavLink></li>
              <li><NavLink to="/partners" className="nav-sublink">Partners</NavLink></li>
            </ul>
            : null }
            <i className="fa fa-bars fa-2x button-collapse" aria-hidden="true" onClick={() => this.setState({isDropdown: !this.state.isDropdown})}></i>
            </div>   
        </nav>
            {this.props.children}
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
            <span className="link">Read our Blog</span>
            </div>
            <div>
            <span><b>Get Involved</b></span>
            <span className="link"><NavLink to="/fundraise">Fundraise</NavLink></span>
            <span className="link"><NavLink to="/donate">Donate</NavLink></span>
            <span className="link">Shop</span>
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
      </div>
    );
  }
}

export default App;