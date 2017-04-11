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

  render() {
    return (
        <div className='donate-container'>
        <center>
        <h2>Make a Donation</h2>
        <p>together we can change more futures</p>
        <iframe src="https://donorbox.org/embed/nonprofitcampaign?amount=50" height="685px" width="100%" style={{maxWidth:"500px", minWidth:"310px"}} seamless="seamless" id="dbox-form-embed" name="donorbox" frameBorder="0" scrolling="no">
        </iframe></center>
          {/*<div className='donate-box'>
            <div className="donate-header">
            Enter an amount to donate
            </div>
            <input placeholder="€50"/>
            <center>
              <span className={this.state.isMonthly ? '' : 'donate-selected'} value={'false'} onClick={() => this.handleClick(false)}>Give Once</span>
              <span className={this.state.isMonthly ? 'donate-selected' : ''} value={'true'} onClick={() => this.handleClick(true)}>Give Monthly</span>
            </center>
            <button className='donate-btn'>Donate</button>
          </div>*/}
          <img src='modules/assets/img04.jpg'/>
        </div>
      );
  }
}

export default Donate;