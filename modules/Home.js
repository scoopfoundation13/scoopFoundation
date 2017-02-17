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
    console.log(this.state.activeCard, 'activeCard', cardNum);
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
            <span>No Child should live in Poverty </span>
          <video autoPlay loop id="video-background" muted>
            <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"/>
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
          <h2>Gallery</h2>
          <Gallery />
        </section>
        <section className="home-sec4">
          <h2>SCOOP NEWS</h2>
          <img className="home-img4" src="modules/assets/img03.jpg"/>
        </section>
        <footer>
          <a href="https://www.facebook.com/scoopfoundation"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="https://twitter.com/scoopfoundation"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/scoopfoundation_ireland/?hl=en"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/company/the-scoop-foundation?trk=prof-following-company-logo"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.youtube.com/channel/UCU3693Xfnd5e_iWAp41YrbA?app=desktop"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
        </footer>
      </div>
      );
  }
}

export default Home;
