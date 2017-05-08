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
    path: 'http://syriasvibes.com',
    link: '#syria',
    text: 'Syrias Vibes'
  }];
  return (
    <div>
      <section className="text-container">
      <h1 className="purple">WHO?</h1>
      <br />
          <p>We are a non-profit organisation building schools to end child poverty in developing countries. Our Founders, Andy & Calvin, also created <a className="purple" href="www.syriasvibes.com">Syrias Vibes</a> - an initiative that supports medical clinics and emergency rescue services in Syria.</p>
      </section>
      <section>
        <ThreeARow img={imgArray}/>
      </section>
      <section className="text-container about-align">
        <div style={{width:"47%", margin:"3%", marginRight:"5%"}}>
          <div className="about-title" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <i style={{fontSize:"1.6em"}} className="fa fa-users orange" aria-hidden="true"></i>
            <span className="orange">HOW?</span>
          </div>
          <p className="about-text">Working with local partner organisations and hiring local builders, we build schools that focus on free education and community development. We have built a global community and work with grass root NGOs living and working on the ground in Cambodia, India and Syria. We also work with similar NGOs in Australia, Germany, Syria, Spain and England. Meet <NavLink className="orange" to="/partners">Meet our Partners here.</NavLink></p>
        </div>
        <div style={{width:"47%", margin:"3%", marginLeft:"5%"}}>
          <div className="about-title" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <i style={{fontSize:"1.6em"}} className="fa fa-globe blue" aria-hidden="true"></i>
            <span className="blue">WHY?</span>
          </div>
          <p className="about-text">The countries we work in have a huge amount of children living in poverty or engaging in child labour.  They also rank as the most corrupt countries in the world, and children are the ones suffering.</p>
        </div>
      </section>
      <img className="home-bk" src="modules/assets/founders.jpg"/>
    </div>
    );
};

export default About;