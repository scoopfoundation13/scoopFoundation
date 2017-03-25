import React from 'react';
import ThreeARow from './ThreeARow';

class BuildingProjects extends React.Component {
  render() {
    const imgArray = [{
      img: 'modules/assets/thumbnails/Building%20projects%20-%20Cambodia.jpg',
      link: '#project-cambodia',
      text: 'Cambodia'
    }, {
      img: 'modules/assets/thumbnails/Building%20projects%20-%20India.jpg',
      link: '#project-india',
      text: 'India'
    }, {
      img: 'modules/assets/thumbnails/Building%20projects%20-%20%20Syria.jpg',
      link: '#project-syria',
      text: 'Syria'
    }];
    return (
      <div className="container-topMargin">
      <section className="text-container">
      <h1>BuildingProjects</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </section>
      <section>
        <ThreeARow img={imgArray}/>
      </section>
      <section className="empty-section"></section>
{/*      <section className="project-cambodia">
        <h2>Cambodia -  SCAO III</h2>
        <p>
        As you can see, the school is already half finished, but now we need to build the 2nd floor which will have more classrooms.
        </p>
        <p>
        We also want to build quality accommodation to attract qualified teachers and Development Study graduates to come and live in village.
        </p>
        <p>
        To get involved, get in touch with Andy today, make a donation (link to DONATE page) or set up a fundraising page (link to Just Giving Page) on our behalf.
        </p>
      </section>
      <section className="project-india">
        <h2>India</h2>
        <p>India building projects content here...</p>
      </section>
      <section className="project-syria">
        <h2>syria</h2>
        <p>Syria building project content here...</p>
      </section>*/}
      <img className="home-bk" src='modules/assets/img05.jpg'/>
      </div>
      );
  }
}

export default BuildingProjects;