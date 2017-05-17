import React from 'react';
import NavLink from './NavLink';
import ThreeARow from './ThreeARow';

class BuildingProjects extends React.Component {
  render() {
    const imgArray = [{
      img: 'modules/assets/thumbnails/Building%20projects%20-%20Cambodia.jpg',
      link: '#project-cambodia',
      path: '/cambodiaproject',
      text: 'Cambodia'
    }, {
      img: 'modules/assets/thumbnails/Building%20projects%20-%20India.jpg',
      link: '#project-india',
      path: '/indiaproject',
      text: 'India'
    }, {
      img: 'modules/assets/thumbnails/Building%20projects%20-%20%20Syria.jpg',
      link: '#project-syria',
      path: '/syriaproject',
      text: 'Syria'
    }];
    return (
      <div className="projects-bg">
      <section className="text-container center">
      <h1>Building Projects</h1>
      <br />
      <p>To date we have helped build 3 schools from scratch, and renovate or improve 4 more, and bought 2 acres of land in India. This may not seem like much, it works at about 1 a year, but we do not receive any government funding and the majority of our funds raised have come from events or online crowdfunding campaigns run by volunteers. To date we have helped build 3 schools from scratch, renovate or improve 4 more, and bought 2 acres of land in India​ in order to build a new set of homes and classrooms for children of begging families​. </p>

      <p>This may not seem like much, it works at about 1 a year, but we do not receive any government funding and the majority of our funds raised have come from​​ events or online crowdfunding campaigns run by volunteers​.</p>
      <p><NavLink to="/fundraise" className="purple">Get involved today!</NavLink></p>
      </section>
      <section>
        <ThreeARow img={imgArray}/>
      </section>
      <section className="empty-section"></section>
      <img className="home-bk" src='modules/assets/img05.jpg'/>
      </div>
      );
  }
}

export default BuildingProjects;