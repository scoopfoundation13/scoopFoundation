import styles from './About.css';
import Analytics from './Analytics';
import React from 'react';
import NavLink from './NavLink';
import ImageRow from './ImageRow';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      pdfLightboxIsOpen: false
    };
    this.handlePDFLightBox = this.handlePDFLightBox.bind(this);
  }  
  
  componentDidMount() {
    Analytics.page('/About');
  }

  handlePDFLightBox() {
    this.setState(state => {
      return {pdfLightboxIsOpen: !state.pdfLightboxIsOpen}
    });
  }

  render() {
    const imgArray = [{
      img: 'modules/assets/thumbnails/About%20-%20Meet%20the%20team.jpg',
      link: 'meettheteam',
      path: '/team',
      text: 'Meet the Team'
    }, {
      img: 'modules/assets/thumbnails/impact.jpg',
      path: '/impact',
      link: '#impact',
      text: 'Impact'
    }, {
      img: 'modules/assets/thumbnails/About%20-%20Syrias%20Vibes.jpg',
      path: 'http://syriasvibes.com',
      link: '#syria',
      text: 'Syrias Vibes'
    }];
    return (
      <div className="About">

<div>
  <h1>Who?</h1>
  <p>Created by two Irish brothers, SCOOP is a fundraising machine that aims to build schools and change the lives of impoverished children in Cambodia & India. Our Founders, Andy & Calvin, also created <a href="https://syriasvibes.com/">Syrias Vibes</a> — an initiative that supports doctors, emergency rescue services and internally displaced people in Syria & Iraq.</p>
  <p>In 2018, we wish to help those in need in war-struck Yemen, and we also wish to support an orphanage in rural Kenya.</p>
</div>

<ImageRow img={imgArray}/>

<div>
  <h2>HOW?</h2>
  <p>Working with local partner organisations and hiring local builders, we build schools that focus on free education and community development.</p>
  <p>We have built a global community and work with grass root NGOs living and working on the ground in Cambodia, India, Kenya and Syria. We also work with similar NGOs in Australia, Germany, Syria, Spain and England. <NavLink className="orange" to="/partners">Meet our Partners here.</NavLink></p>
</div>

<div>
  <h2>WHY?</h2>
  <p>The countries we work in are suffering from the horrors of war, or have a huge amount of children living in poverty or engaging in child labour. They also rank as the most corrupt countries in the world, and children are the ones suffering most, entering a poverty cycle they have very little chance of breaking.</p>
  <p>Having an education is the key to breaking this cycle.</p>
  <img src="modules/assets/SCOOP_Annual_Report_2017_banner.png"/>
</div>

<div>
  <p>
  The aim of our schools is to provide an education and social support to children and families living in poverty.
  2017 was arguably our best year to date, in terms of funds raised, progress made, ideas developed, partnerships made, and,
  of course, those in need – helped!
  </p>
  <a href="modules/assets/SCOOP_Annual_Report_2017.pdf" target="_blank">View the 2017 Annual Report</a>
  
  <img src="modules/assets/donationchart.png"/>

  <a href="#donate" className="donate-btn">Make a Donation</a>

  <img src="modules/assets/founders.png"/>
</div>

      </div>
      );
  }
};

export default About;