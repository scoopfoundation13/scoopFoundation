import React from 'react';
import NavLink from './NavLink';
import ThreeARow from './ThreeARow';

const About = () => {
  const divStyle = {
    width: 'auto',
    height: '100%',
    backgroundImage: 'url(modules/assets/img01.jpg)',
    backgroundSize: 'cover'
  };
  const imgArray = [{
    img: 'modules/assets/img01.jpg',
    link: 'meettheteam',
    text: 'Meet the Team'
  }, {
    img: 'modules/assets/img02.jpg',
    link: '#impact',
    text: 'Impact'
  }, {
    img: 'modules/assets/img03.jpg',
    link: '#syria',
    text: 'Syria\'s Vibes'
  }];
  return (
    <div className="text-container">
      <section>
        <h1>THIS IS SCOOP</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus at urna nec consectetur. In elementum vitae eros sit amet interdum. Fusce non aliquam tellus. Suspendisse velit sapien, porttitor at aliquam in, consectetur vitae metus. Aenean pulvinar dui id erat ultrices dictum. In varius mi eget augue efficitur elementum. Fusce vitae arcu eu sapien euismod bibendum. Phasellus nulla ante, fringilla eget tempus sed, imperdiet vel mi. Nullam viverra metus a dui aliquet accumsan.
        </p>
      </section>
      <section>
        <ThreeARow img={imgArray}/>
      </section>
      <section>
      <h2>Who?</h2>
      <p>We are a non-profit organisation building schools to end child poverty in developing countries.</p>
      <p>Our Founders, Andy & Calvin, also created <a href="www.syriasvibes.com">Syrias Vibes</a> - an initiative that supports medical clinics and emergency rescue services in Syria.</p>
      <p><NavLink to="/team" className="nav-sublink">Meet the team here</NavLink></p>
      <h2>How?</h2>
      <p>Working with local partners and hiring local builders and engineers, we build schools and offer professional on-going to support. We encourage teachers and long term volunteers to travel and work at the schools also.</p>
      <p>We have built a global community and work with grass root NGOs in Cambodia, India and Syria. We have partners in Australia, Germany, Syria, Spain and England.</p>
      <p>Meet our Partners here</p>
      <h2>Why?</h2>
      <p>The countries we work in have a huge amount of children living in poverty or engaging in child labour.  They also rank as the most corrupt countries in the world, and children are the ones suffering.</p>
      <br />
      </section>
      <section>
      <h1>Our Progress</h1>
      <div className="progress">
        <div>
          <span>Students in class</span><span>100</span>
        </div>
        <div>
          <span>Students graduated</span><span>100</span>
        </div>
        <div>
          <span>Schools</span><span>100</span>
        </div>
        <div>
          <span>Local Partners</span><span>100</span>
        </div>
      </div>
      </section>
    </div>
    );
};

export default About;