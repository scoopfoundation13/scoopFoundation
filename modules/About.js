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
    path: '/syria',
    link: '#syria',
    text: 'Syrias Vibes'
  }];
  return (
    <div className="container-topMargin">
      <section className="text-container">
      <h1>About SCOOP</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </section>
      <section>
        <ThreeARow img={imgArray}/>
      </section>
      <section className="text-container">
        <div className="about-align">
          <p className="about-title purple">WHO?</p>
          <p className="about-text">We are a non-profit organisation building schools to end child poverty in developing countries. Our Founders, Andy & Calvin, also created <a className="purple" href="www.syriasvibes.com">Syrias Vibes</a> - an initiative that supports medical clinics and emergency rescue services in Syria.</p>
        </div>
        <div className="about-align">
          <p className="about-title orange">HOW?</p>
          <p className="about-text">Working with local partners and hiring local builders and engineers, we build schools and offer professional on-going to support. We encourage teachers and long term volunteers to travel and work at the schools also. We have built a global community and work with grass root NGOs in Cambodia, India and Syria. We have partners in Australia, Germany, Syria, Spain and England. <NavLink className="orange" to="/partners">Meet our Partners here.</NavLink></p>
        </div>
        <div className="about-align">
          <p className="about-title blue">WHY?</p>
          <p className="about-text">The countries we work in have a huge amount of children living in poverty or engaging in child labour.  They also rank as the most corrupt countries in the world, and children are the ones suffering.</p>
        </div>
      </section>
      <img className="home-bk" src="modules/assets/founders.jpg"/>
    </div>
    );
};

export default About;