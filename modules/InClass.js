import Analytics from './Analytics';
import React from 'react';
import ThreeARow from './ThreeARow';

class InClass extends React.Component {
  constructor(){
    super();
  }
  componentDidMount() {
    Analytics.page('/InClass');
  }
  render() {
    const imgArray = [{
      img: 'modules/assets/thumbnails/In%20class%20-Cambodia.jpg',
      link: '#cambodia',
      path: '/cambodia',
      text: 'Cambodia'
    }, {
      img: 'modules/assets/thumbnails/inclass-india.jpg',
      link: '#india',
      path: '/india',
      text: 'India'
    }, {
      img: 'modules/assets/thumbnails/In%20class%20-%20Syria.jpg',
      link: '#syria',
      path: '/syria',
      text: 'Syria'
    }];
    return (
      <div className="class-bg">
        <section className="text-container center">
        <h1>In Class</h1>
        <br />
        <p>We currently work in Cambodia​ and in Varanasi​, India​, and with your help we want to build schools in​ Syria​ & Iraq too​. Click on the boxes below to find about the projects already in full flow…​</p>
        </section>
        <section>
          <ThreeARow img={imgArray}/>
        </section>
        <img className="home-bk" src="modules/assets/img06.png"/>
      </div>
      );
  }
}

export default InClass;