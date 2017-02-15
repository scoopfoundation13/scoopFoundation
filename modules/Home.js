import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavLink from './NavLink';

class Home extends React.Component {
  render() {
    return (
      <div>
        <section>
            No Child should live in Poverty 
          <video autoplay loop id="video-background" muted>
            <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"/>
          </video>
        </section>
        <section className="home-sec2">
          <div className="card">
            <img src="modules/assets/BrickNBuilder-0.jpg"/>
            <h3>BUILDING PROJECTS</h3>
            <span>Help us create more spaces that transform children’s lives</span>
            <div><NavLink className="home-learnmore" to="/buildingprojects">LEARN MORE</NavLink></div>
          </div>
          <div className="card">
            <img src="modules/assets/Classroom.jpg"/>
            <h3>THE SCHOOLS</h3>
            <span>Check out the projects that are already flourishing</span>
            <div><NavLink className="home-learnmore" to="/inclass">LEARN MORE</NavLink></div>
          </div>
          <div className="card">
            <img src="modules/assets/Solar.jpg"/>
            <h3>FUNDRAISE</h3>
            <span>Your ideas and energy can change lives. Get involved today!</span>
            <div><NavLink className="home-learnmore" to="/fundraise">LEARN MORE</NavLink></div>
          </div>
        </section>
        <section className="home-sec3">gallery</section>
        <section className="home-sec4">SCOOP NEWS</section>
      </div>
      );
  }
}

export default Home;
