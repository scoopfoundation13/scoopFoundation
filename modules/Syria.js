import Analytics from './Analytics';
import React from 'react';
import NavLink from './NavLink';

class Syria extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    Analytics.page('/Syria')
  }
  render(){
    return (
      <div className="syria-bg">
        <div className="text-container">
          <h1>Syrias Vibes</h1>
          <br />
          <p>The school in the Bajed Kandala Refugee camp has nearly 400 Yazidi children crying out for an education. We wish to support them through materials and school supplies.</p>
          <p>To find out more <a className="orange" target="_blank" href="https://www.justgiving.com/campaigns/charity/scoop/syriasvibesschool">click here</a></p>
          <br />
          <br />
          <br />

          <div className="flex-row">
            <div style={{width:"70%"}}>
                <iframe className="video-iframe" width="560" height="315" src="https://www.youtube.com/embed/8dNGUqMigGU" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="volunteer-box" style={{textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <p>Want to support our Syrias Vibes campaign?</p>
                <p>We are currently not taking volunteers, if you want to get involved with our Syrias Vibes campaign, <a className="orange" href="mailto:calvin@syriasvibes.com">contact us today!</a></p>
                <span className="purple-inverse-btn"><a target="_blank" href="https://www.justgiving.com/campaigns/charity/scoop/syriasvibesschool">Make a Donation</a></span>
            </div>
          </div>
        </div>
          <img className = "home-bk" src = 'modules/assets/img40.jpg' />
      </div>
    );
  }
}

export default Syria;