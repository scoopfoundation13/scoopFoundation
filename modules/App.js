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
            // <Grid className="nav-full">
            //   <Row className="show-grid">
            //   <Col xs={8} md={8}>
              // </Col>
              // <Col xs={4} md={4}>
            //   </Col>
            // </Row>
            // </Grid>
                  // <ul className="drop">
                  //   <NavLink to="/team" className="nav-sublink">Team</NavLink>
                  //   <NavLink to="/schools" className="nav-sublink">Impact</NavLink>
                  //   <NavLink to="/syriasvibes" className="nav-sublink">Syrias Vibes</NavLink>
                  // </ul>

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation">
              <ul className="nav-full">
                <li><NavLink to="/" id="logo-container"><img className="logo" src="modules/assets/scoop-logo-kl3.png"/></NavLink></li>
                <li><NavLink to="/about" id="about" className="nav-left">ABOUT</NavLink></li>
                <li><NavLink to="/inclass" className="nav-left">IN CLASS</NavLink></li>
                <li><NavLink to="/buildingprojects" className="nav-left">BUILDING PROJECTS</NavLink></li>
                <li><span className="nav-right"><a href="https://www.facebook.com/scoopfoundation"><i className="fa fa-facebook fa-2x purple icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><a href="https://twitter.com/scoopfoundation"><i className="fa fa-twitter fa-2x blue icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><a href="https://www.instagram.com/scoopfoundation_ireland/?hl=en"><i className="fa fa-instagram fa-2x orange icon" aria-hidden="true"></i></a></span></li>
                <li><span className="nav-right"><NavLink to="/donate" className="nav-pill">DONATE</NavLink></span></li>
                <li><span className="nav-right"><NavLink to="/fundraise" className="nav-pill">FUNDRAISE</NavLink></span></li>
              </ul>
            <div>
            { this.state.isDropdown ?
            <ul id="nav-mobile" className="side-nav" onClick={() => this.setState({isDropdown: !this.state.isDropdown})}>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/team" className="nav-sublink">&nbsp;&nbsp;Team</NavLink></li>
              <li><NavLink to="/schools" className="nav-sublink">&nbsp;&nbsp;Impact</NavLink></li>
              <li><NavLink to="/syriasvibes" className="nav-sublink">&nbsp;&nbsp;Syrias Vibes</NavLink></li>
              <li><NavLink to="/inclass">IN CLASS</NavLink></li>
              <li><NavLink to="/buildingprojects">BUILDING PROJECTS</NavLink></li>
              <li><NavLink to="/buildingprojects">DONATE</NavLink></li>
              <li><NavLink to="/buildingprojects">FUNDRAISE</NavLink></li>
            </ul>
            : null }
            <i className="fa fa-bars fa-2x button-collapse" aria-hidden="true" onClick={() => this.setState({isDropdown: !this.state.isDropdown})}></i>
            </div>   
        </nav>
            {this.props.children}
        <footer>
          <div className="footer-social">
          <a href="https://www.facebook.com/scoopfoundation"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="https://twitter.com/scoopfoundation"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/scoopfoundation_ireland/?hl=en"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/company/the-scoop-foundation?trk=prof-following-company-logo"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.youtube.com/channel/UCU3693Xfnd5e_iWAp41YrbA?app=desktop"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;