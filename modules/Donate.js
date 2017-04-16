import React from 'react';

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMonthly: false
    };
  }

  handleClick(isMonthly) {
    this.setState({isMonthly});

  }

          /*<div className='donate-box'>
            <div className="donate-header">
            Enter an amount to donate
            </div>
            <input placeholder="€50"/>
            <center>
              <span className={this.state.isMonthly ? '' : 'donate-selected'} value={'false'} onClick={() => this.handleClick(false)}>Give Once</span>
              <span className={this.state.isMonthly ? 'donate-selected' : ''} value={'true'} onClick={() => this.handleClick(true)}>Give Monthly</span>
            </center>
            <button className='donate-btn'>Donate</button>
          </div>*/
  render() {
    return (
      <div style={{position:"relative", width:"100%"}}>
      {/*
        <div style={{position: "absolute", top: 0, left: 0, marginTop: "750px"}} className="ggg">
          <img src='modules/assets/img04.jpg' width="100%"/>
        </div>
        <div>
          <iframe src="https://donorbox.org/embed/scoopdonate" height="685px" width="100%" style={{maxWidth:"500px", minWidth:"310px", margin:"auto", paddingLeft:"55px"}} seamless="seamless" id="dbox-form-embed" name="donorbox" frameBorder="0" scrolling="no"></iframe>
        </div>*/}

        <div className='donate-container'>
        <center>
        <h2>Donate Now</h2>
        <p>and together we can change more lives.</p>
        </center>
          <img src='modules/assets/img04.jpg'/>
        </div>
        <div style={{textAlign:"center", display:"flex", width: "100%", justifyContent:"center"}}>
        <iframe src="https://donorbox.org/embed/scoopdonate" height="685px" width="100%" style={{maxWidth:"500px", minWidth:"310px", margin:"0 auto", paddingLeft:"60px", position:"absolute", top:"130px", width:"100%"}} seamless="seamless" id="dbox-form-embed" align="center" name="donorbox" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
      );
  }
}

export default Donate;