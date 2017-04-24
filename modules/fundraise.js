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
      <br />
        <h1 style={{textAlign: "center"}}>Three ways to get involved ...</h1>
        <br />
        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/img15.png"/>
          <div className="fundraise-section" style={{top: "20%"}}>
            <img style={{height: "80px", paddingTop:"10px"}} src="modules/assets/numbers/SCOOP_icons-1.png"/>
            <h1 className="shadow">Set up a Fundraising Page on our behalf</h1>
            <a href="https://www.justgiving.com/scoop/raisemoney/?utm_source=website_cid250506&utm_medium=buttons&utm_content=scoop&utm_campaign=makeapage_start_white"><img src="http://www.justgiving.com/charities/content/images/logo-buttons/white/makeapage_start_white.gif" alt="Start fundraising with JustGiving" /></a>
          </div>
        </div>
        <br />
        <div className="text-container" style={{fontSize: "1.2em"}}>
          <center>
            <p>We are big fans of the Just Giving platform as it is super easy and safe to use and just about anyone can use it. We have used it previously to raise funds to build classrooms and run schools, as well as to support medical clinics & buy ambulances in Syria.</p>

            <p>To set up a page, <a className="purple" href="https://www.justgiving.com/scoop" target="_blank">click here</a></p>

            <p>If you need any assistance, contact <a className="orange" href="mailto:andy@scoopfoundation.com">andy@scoopfoundation.com</a></p>
          </center>
        </div>
        <br />

        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/img26.png"/>
          <div className="fundraise-section" style={{top: "20%"}}>
            <img style={{height: "80px", paddingTop:"10px"}} src="modules/assets/numbers/SCOOP_icons-2.png"/>
            <h1 className="shadow">Sponsor an entire classroom</h1>
          </div>
        </div>
        <br />
        <div className="text-container" style={{fontSize: "1.2em"}}>
          <center>
            <p>For €10,000 you or your company can build an entire classroom or help run one for an entire year.</p>
            <br />
            <p>Email the founder to find out more:
            <a href="emailto:andy@scoopfoundation.com"><span className="gallery-btn">I am interested!</span></a>
            </p>
          </center>
        </div>
        <br />

        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/img24.png"/>
          <div className="fundraise-section">
            <img style={{height: "80px", paddingTop:"10px"}} src="modules/assets/numbers/SCOOP_icons-3.png"/>
            <h1 className="shadow">Run an event for us!</h1>
          </div>
        </div>
        <br />
        <div className="text-container" style={{fontSize: "1.2em"}}>
          <center>
            <p>When Andy & Calvin founded SCOOP, and for the first 5 years, 100% of our funds raised came from our events, so we are passionate about running them and know the impact they can have.</p>
            <p>Not only do events raise much needed funds, they create a great sense of community – people meet, ideas are exchanged, people have a good time. What’s not to love…</p>
            <p>Get in touch with Andy (contact link) now and he will help you every step of the way. </p>
            <br />
            <p>Check out some of the events we have run down the years:
            <span className="interested-btn" onClick={(e) => this.openLightbox(e)}>View past events</span>
            </p>
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