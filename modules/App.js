import React from 'react';
import NavLink from './NavLink';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation">
          <div className="container">
            <Grid>
              <Row className="show-grid">
              <Col xs={8} md={8}>
              <NavLink to="/" id="logo-container"><img className="logo" src="modules/assets/scoop-logo-kl3.png"/></NavLink>
              <ul className="" role="nav">
                <li><NavLink to="/about" id="about" className="navlink">About</NavLink></li>
                <li><NavLink to="/inclass" className="navlink">In Class</NavLink></li>
                <li><NavLink to="/buildingprojects" className="navlink">Building Projects</NavLink></li>
              </ul>
              </Col>
              <Col xs={4} md={4}>
              <ul className="nav-right">
                <li><NavLink to="/buildingprojects" className="nav-pill">Donate</NavLink></li>
                <li><NavLink to="/buildingprojects" className="nav-pill">Fundraise</NavLink></li>
              </ul>
              </Col>
            </Row>
            </Grid>

            <ul id="nav-mobile" className="side-nav">
              <li><NavLink to="/" className="brand-logo logo">Home</NavLink></li>
              <li><NavLink to="/about" className="navlink">About</NavLink></li>
              <li><NavLink to="/inclass" className="navlink">In Class</NavLink></li>
              <li><NavLink to="/buildingprojects" className="navlink">Building Projects</NavLink></li>
              <li><NavLink to="/buildingprojects" className="navlink">Donate</NavLink></li>
              <li><NavLink to="/buildingprojects" className="navlink">Fundraise</NavLink></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>

            {this.props.children}
          </div>
        </nav>
      </div>
    );
  }
}

export default App;