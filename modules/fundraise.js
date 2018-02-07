import Analytics from './Analytics';
import React from 'react';
import Lightbox from 'react-images';

const posters = [{
  src: "modules/assets/fundraise/5.png"
}, {
  src: "modules/assets/fundraise/6.jpg"
}, {
  src: "modules/assets/fundraise/a%20river.jpg"
}, {
  src: "modules/assets/fundraise/A3%20poster%20Art%20Auction%20jpeg.jpg"
}, {
  src: "modules/assets/fundraise/art%20with%20mealys.jpg"
}, {
  src: "modules/assets/fundraise/auction%2014.jpg"
}, {
  src: "modules/assets/fundraise/babyraveposter.png"
}, {
  src: "modules/assets/fundraise/Better%20Than%20Socks%20Poster%20Final.jpg"
}, {
  src: "modules/assets/fundraise/blue%20note.jpg"
}, {
  src: "modules/assets/fundraise/Cinco%20de%20Mayo.jpg"
}, {
  src: "modules/assets/fundraise/comedy%20poster.jpg"
}, {
  src: "modules/assets/fundraise/elton%20john%20sponsor%202.jpeg"
}, {
  src: "modules/assets/fundraise/flyer%20details%20landscape%20july.jpg"
}, {
  src: "modules/assets/fundraise/lovescoop.jpg"
}, {
  src: "modules/assets/fundraise/poker%20trophy.jpg"
}, {
  src: "modules/assets/fundraise/quiz%20poster.jpg"
}, {
  src: "modules/assets/fundraise/SCOOP%20POSTER.jpg"
}, {
  src: "modules/assets/fundraise/SCOOP%20Social%20Aug.jpg"
}, {
  src: "modules/assets/fundraise/SCOOP_River-page-001.jpg"
}, {
  src: "modules/assets/fundraise/Street%20Art%20Gig.jpg"
}
];

class Fundraise extends React.Component {
  constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
  }
  componentDidMount() {
    Analytics.page('/Fundraise');
  }

  openLightbox (event) {
    event.preventDefault();
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  render() {
    return (
      <div>
        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/store.png"/>
          <div className="fundraise-section">
            
            <a href="https://scoopfoundation.squarespace.com" target="_blank"><h1 className="shadow">Check out our store!</h1></a>
          </div>
        </div>
        <br/>
        <div className="text-container" style={{fontSize: "1.1em"}}>
          <center>
            <p>You can support us and our work in Syria, Iraq, India, Yemen, Kenya and Cambodia by purchasing a tee-shirt, our Artists' Cookbook, limited edition art prints and more! </p>
            <p>Each item includes a life changing donation.</p>
          </center>
        </div>

        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/img15.png"/>
          <div className="fundraise-section" style={{top: "20%"}}>
            
            <h1 className="shadow">Set up a Fundraising Page on our behalf</h1>
            <a href="https://www.justgiving.com/scoop/raisemoney/?utm_source=website_cid250506&utm_medium=buttons&utm_content=scoop&utm_campaign=makeapage_start_white"><img src="http://www.justgiving.com/charities/content/images/logo-buttons/white/makeapage_start_white.gif" alt="Start fundraising with JustGiving" /></a>
          </div>
        </div>
        <br/>
        <div className="text-container" style={{fontSize: "1.1em"}}>
          <center>
            <p>We are big fans of the Just Giving platform as it is super easy and safe to use and just about anyone can use it. We have used it previously to raise funds to build classrooms and run schools, as well as to support medical clinics & buy ambulances in Syria. </p>
            <p>Are you planning to run a marathon, take on a challenge or simply wish to make a difference in children’s lives? Set up a Fundraising Page or get in touch with Andy now!</p>
            <br/>
            <a className="purple-btn fund-btn" href="https://www.justgiving.com/scoop" target="_blank">Set up a Fundraising page</a>

            <a className="orange-btn fund-btn" href="mailto:andy@scoopfoundation.com">Get in touch with Andy</a>
          </center>
        </div>
        <br/>

        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/img26.png"/>
          <div className="fundraise-section" style={{top: "20%"}}>
            
            <h1 className="shadow">Sponsor an entire classroom</h1>
          </div>
        </div>
        <br/>
        <div className="text-container" style={{fontSize: "1.1em"}}>
          <center>
            <p>For €10,000 you or your company can build an entire classroom or help run one for an entire year.</p>
            <br />
            <p>Email the founder to find out more:</p>
            <a href="mailto:andy@scoopfoundation.com"><span className="gallery-btn">I am interested!</span></a>
            
          </center>
        </div>
        <br/>

        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/img24.png"/>
          <div className="fundraise-section">
            
            <h1 className="shadow">Run an event for us!</h1>
          </div>
        </div>
        <br/>
        <div className="text-container" style={{fontSize: "1.1em"}}>
          <center>
            <p>For the first 5 years of SCOOP’s life, 100% of our funds raised came from the events Andy &amp; Calvin ran, so we are passionate about running them and know the impact they can have. Not only do events raise much needed funds, they create a great sense of community – people meet, ideas are exchanged, people have a good time… what’s not to love!</p>
            <p><a className="purple" href="mailto:andy@scoopfoundation.com">Get in touch with Andy</a> now and he will help you every step of the way.</p>
            <br />
            <p>Check out some of the events we have run down the years:</p>
            <span className="interested-btn" onClick={(e) => this.openLightbox(e)}>View past events</span>
            
          </center>
          <Lightbox
            currentImage={this.state.currentImage}
            images={posters}
            isOpen={this.state.lightboxIsOpen}
            onClose={() => this.closeLightbox()}
            onClickNext={() => this.gotoNext()}
            onClickPrev={() => this.gotoPrevious()}
          />
        </div>
      </div>
    );
  }
}

export default Fundraise;