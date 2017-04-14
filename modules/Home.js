import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavLink from './NavLink';
import Gallery from './Gallery';
import Lightbox from 'react-images';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCard: 2,
      lightboxIsOpen: true,
      images: ['modules/assets/gallery/1. Andy visits the original SCAO Centre in 2008.jpg', 'modules/assets/gallery/2. He helps them improve the centre and build more classrooms in 2009.jpg', 'modules/assets/gallery/3. Robotnik performs at our launch gig in 2010.jpg', 'modules/assets/gallery/3a. Local Cambodian Teacher Srey Lat in 2009.jpg', 'modules/assets/gallery/4. SCOOP co-founder George Gerard Mealy as auctioneer at the 1st SCOOP Art Auction in Pygmalion.jpg', 'modules/assets/gallery/5. Cast.ie\'s incredible trophy for the SCOOP Poker tournie - the very 1st SCOOP Event.jpg', 'modules/assets/gallery/6. James Vincent McMorrow performs at an early SCOOP gig.jpg', 'modules/assets/gallery/7. Andy and co-founder Annmarie, with local teacher Srey Lat, visit the site of the 2nd school in Cambodia in 2010.png', 'modules/assets/gallery/8. The 2nd school in Cambodia ready to open in 2011.jpg', 'modules/assets/gallery/9. SCOOP supporters David Uda (artist) and Tanya Sweeney (journalist) with Andy visitinin ghe 2nd school in Cambodia.jpg', 'modules/assets/gallery/10 .Artist ADW creates a special artwork for us in 2010.jpg', 'modules/assets/gallery/11. ADW\'s Elton which raised €900.jpg', 'modules/assets/gallery/12. The Better Than Socks event 2012.jpg', 'modules/assets/gallery/13. The SCOOP Ireland Team in 2014.jpg', 'modules/assets/gallery/14. The SCOOP Social - at this stage we have run every possible type of event imaginable.jpg', 'modules/assets/gallery/15. The SCOOP Australia Team 2015.jpg', 'modules/assets/gallery/16. SCOOP Australia 1st logo 2015.jpg', 'modules/assets/gallery/17. We partner up with The Jeevan School in Varanasi, India in 2010.jpg', 'modules/assets/gallery/17a. The Jeevan School offers a home and safe haven for homeless children in the city.jpg', 'modules/assets/gallery/18. The site for The Jeevan Village in Varanasi 2014.jpg', 'modules/assets/gallery/19. Architects plan for The Jeevan Village.jpg', 'modules/assets/gallery/20. We partnered up with the Oktoberfest Festival in 2014.JPG', 'modules/assets/gallery/21. New SCOOP logo in 2015.jpg', 'modules/assets/gallery/22. The site for the 3rd school in Cambodia 2016.jpg', 'modules/assets/gallery/23. Andy at the site for the 3rd school inj Cambodia in 2016.jpg', 'modules/assets/gallery/24. Laying the foundations for the 3rd school in Cambodia (2016).jpg', 'modules/assets/gallery/25. The building site for the 3rd school in Cambodia 2016.jpg', 'modules/assets/gallery/26. Calvin and colleague with their ambulance in Syria (2016).jpg', 'modules/assets/gallery/27. Calvin at the site in Qamishli where 2 trucks full of explosives destroyed a city block (2016).jpg', 'modules/assets/gallery/28. Calvin at the Syrias Vibes launch in Dublin in October, 2016.jpg', 'modules/assets/gallery/29. The Artist\'s Cook Book will launch in the summer of 2017.jpg']
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleImagesString = this.handleImagesString.bind(this);
    // this.closeLightbox = this.closeLightbox.bind(this);
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

  handleImagesString() {
    const imgObj = {};
    const curObj = {};
    this.state.images.forEach((str, idx) => {
      if (idx === 1 || idx % 5 === 0) {
        curObj.src = str;
      } else {
        curObj.srcset = [...curObj.srcset, str];
      }
    });
    return curObj;
  }

  closeLightbox() {
    this.setState({lightboxIsOpen: false});
  }

  render() {
    // const images = this.handleImagesString();
    const images = [
    { src: 'modules/assets/gallery/1. Andy visits the original SCAO Centre in 2008.jpg'},
    { src: 'modules/assets/gallery/2. He helps them improve the centre and build more classrooms in 2009.jpg' }
    ];
    // console.log(images);
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
            <NavLink className="home-learnmore" to="/buildingprojects">
            <h3>BUILDING PROJECTS</h3>
            <span>Help us create more spaces that transform children’s lives</span>
            </NavLink>
          </div>
          <div className={this.isActive(2)} onClick={() => this.handleClick(2)}>
            <img src="modules/assets/Classroom.jpg"/>
            <NavLink className="home-learnmore" to="/inclass">
            <h3>THE SCHOOLS</h3>
            <span>Check out the projects that are already flourishing</span>
            </NavLink>
          </div>
          <div className={this.isActive(3)} onClick={() => this.handleClick(3)}>
            <img src="modules/assets/Solar.jpg"/>
            <NavLink className="home-learnmore" to="/fundraise">
            <h3>FUNDRAISE</h3>
            <span>Your ideas and energy can change lives. Get involved today!</span>
            </NavLink>
          </div>
        </section>
        <section className="home-sec3">
          <h2 className="">The SCOOP story so far ...</h2>
{ /*         <Lightbox
            images={images}
            isOpen={this.state.lightboxIsOpen}
            
            onClose={() => this.closeLightbox()}
          />*/}
          <Gallery />
        </section>
        {/*<section className="home-sec4">
          <h2>SCOOP NEWS</h2>

        </section>
        <img className="home-bk" src='modules/assets/img03.jpg'/>*/}
      </div>
      );
  }
}

export default Home;
