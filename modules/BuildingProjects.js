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
      path: 'indiaproject',
      text: 'India'
    }, {
      img: 'modules/assets/thumbnails/Building%20projects%20-%20%20Syria.jpg',
      link: '#project-syria',
      path: '/syriaproject',
      text: 'Syria'
    }];
    return (
      <div className="container-topMargin projects-bg">
      <section className="text-container center">
      <h1>BuildingProjects</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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