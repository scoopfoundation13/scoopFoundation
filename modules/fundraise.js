import React from 'react';

const posters = [{
  src: "modules/assets/fundraise/5.png",
  caption: ""
}, {
  src: "modules/assets/fundraise/6.jpg",
  caption: ""
}, {
  src: "modules/assets/fundraise/a%20river.jpg",
  caption: ""
}, {
  src: "",
  caption: ""
}, {
  src: "",
  caption: ""
}
];

class Fundraise extends React.Component {

  render() {
    return (
      <div>
      <br />
        <h1 style={{textAlign: "center"}}>Three ways to get involved ...</h1>
        <br />
        <div style={{position:"relative"}}>
          <img style={{width:"100%"}} src="modules/assets/img15.jpg"/>
          <div className="" style={{position:"absolute", top: "20%", left: "10%", color:"#fff"}}>
            <img style={{height: "80px", paddingTop:"10px"}} src="modules/assets/numbers/SCOOP_icons-1.png"/>
            <h1 style={{textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}>Set up a Fundraising Page on our behalf</h1>
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
          <img style={{width:"100%"}} src="modules/assets/img17.jpg"/>
          <div style={{position:"absolute", top: "25%", left: "10%", color:"#fff"}}>
            <img style={{height: "80px", paddingTop:"10px"}} src="modules/assets/numbers/SCOOP_icons-2.png"/>
            <h1 style={{textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}>Sponsor an entire classroom</h1>
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
          <img style={{width:"100%"}} src="modules/assets/img14.jpg"/>
          <div style={{position:"absolute", top: "25%", left: "10%", color:"#fff"}}>
            <img style={{height: "80px", paddingTop:"10px"}} src="modules/assets/numbers/SCOOP_icons-3.png"/>
            <h1 style={{textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}>Run an event for us!</h1>
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
            <span className="interested-btn">View past events</span>
            </p>
          </center>
        </div>
      </div>
    );
  }
}

export default Fundraise;