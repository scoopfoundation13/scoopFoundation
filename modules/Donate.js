import Analytics from './Analytics';
import React from 'react';

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMonthly: false
    };
  }
  componentDidMount() {
    Analytics.page('/Donate');

    const s = document.createElement('script');
    s.setAttribute("type", "text/javascript");
    s.setAttribute("src", "https://donorbox.org/widget.js");

    document.getElementById('js-script').appendChild(s);
  }
  handleClick(isMonthly) {
    this.setState({isMonthly});
  }

  render() {
    return (
      <div style={{display: "block"}}>
      <div style={{position:"relative", width:"100%"}}>
        <div className='donate-container'>
        <center>
        <h1>Donate Now</h1>
        <h3>and together we can change more lives.</h3>
        </center>
          <img className="bg" src='modules/assets/img04.png'/>
        </div>
        <div style={{textAlign:"center", display:"flex", width: "100%", justifyContent:"center"}}>
        <iframe src="https://donorbox.org/embed/scoopdonate" height="685px" width="100%" style={{maxWidth:"500px", minWidth:"310px", margin:"0 auto", paddingLeft:"60px", position:"absolute", top:"130px", width:"100%"}} seamless="seamless" id="dbox-form-embed" align="center" name="donorbox" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
      <div id="js-script"></div>
      </div>
      );
  }
}

export default Donate;