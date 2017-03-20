import React from 'react';

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
        <div className='donate-container'>
        <h3>Help a Child</h3>
          <div className='donate-box'>
            <span>Enter an amount to donate</span>
            <input placeholder="€50"/>
            <button className='donate-btn'>Donate</button>
          </div>
          <img src='modules/assets/img04.jpg'/>
        </div>
      );
  }
}

export default Donate;