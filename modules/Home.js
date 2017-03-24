import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavLink from './NavLink';
import Gallery from './Gallery';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCard: 2
    };
    this.handleClick = this.handleClick.bind(this);
  }

  isActive(cardNum) {
    if (cardNum === this.state.activeCard) {
      return 'card card-active';
    }
    return 'card';
  }

  handleClick(state) {
    this.setState({activeCard: state});
  }

  render() {
    return (
      <div>
        <section className="home-sec1">
          <div className="flex-col">
            <span>NO CHILD SHOULD LIVE IN POVERTY</span>
            <span><hr className="line-purple"/><hr className="line-blue"/><hr className="line-orange"/></span>
            <span><NavLink to="/donate" className="home-nav-pill">MAKE A DONATION<i className="fa fa-arrow-right" aria-hidden="true"></i></NavLink></span>
          </div>
          <video autoPlay loop id="video-background" muted>
            <source src="modules/assets/INTR.mp4" type="video/mp4"/>
          </video>
        </section>
        <section className="home-sec2">
          <div className={this.isActive(1)} onClick={() => this.handleClick(1)}>
            <img src="modules/assets/BrickNBuilder-0.jpg"/>
            <h3>BUILDING PROJECTS</h3>
            <span>Help us create more spaces that transform children’s lives</span>
            <div><NavLink className="home-learnmore" to="/buildingprojects">LEARN MORE</NavLink></div>
          </div>
          <div className={this.isActive(2)} onClick={() => this.handleClick(2)}>
            <img src="modules/assets/Classroom.jpg"/>
            <h3>THE SCHOOLS</h3>
            <span>Check out the projects that are already flourishing</span>
            <div><NavLink className="home-learnmore" to="/inclass">LEARN MORE</NavLink></div>
          </div>
          <div className={this.isActive(3)} onClick={() => this.handleClick(3)}>
            <img src="modules/assets/Solar.jpg"/>
            <h3>FUNDRAISE</h3>
            <span>Your ideas and energy can change lives. Get involved today!</span>
            <div><NavLink className="home-learnmore" to="/fundraise">LEARN MORE</NavLink></div>
          </div>
        </section>
        <section className="home-sec3">
          <h2>SCOOP stories so far in pictures ...</h2>
          <Gallery />
        </section>
        <section className="home-sec4">
          <h2>SCOOP NEWS</h2>

        </section>
        <img className="home-bk" src='modules/assets/img03.jpg'/>
      </div>
      );
  }
}

export default Home;
