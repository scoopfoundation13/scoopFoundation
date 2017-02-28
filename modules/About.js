import React from 'react';
import NavLink from './NavLink';

const About = () => {
  const divStyle = {
    width: 'auto',
    height: '100%',
    backgroundImage: 'url(modules/assets/img01.jpg)',
    backgroundSize: 'cover'
  };
  return (
    <div>
      <section style={divStyle}></section>
      <section className="text-container">
        <br />
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
        <h2>Annual Report & Director's Report</h2>
        <p>report</p>
        <p>report</p>
        <p>report</p>
      </section>
    </div>
    );
};

export default About;