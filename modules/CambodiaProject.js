import Analytics from './Analytics';
import React from 'react';
import NavLink from './NavLink';

class CambodiaProject extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    Analytics.page('/CambodiaProject')
  }
  render() {
    return (
      <div className="cambodia-p-bg">
        <section className="text-container">
          <h1>SCAO III</h1>
          <br />
          <p>As you can see, the 3rd school in Cambodia is built, but now we just need to raise the funds needed to equip the classrooms with white board, desks, teaching materials, classroom supplies etc as well as raising funds to have a canteen where 100 children can receive 2 healthy meals a day.</p>
          <p>We also want to develop quality accommodation to attract qualified teachers and Development Study graduates to come and live in village.</p>
          <p>To get involved, get in touch with Andy today, <NavLink className="orange" to="/donate">make a donation</NavLink> or <a href="https://www.justgiving.com/scoop" className="purple">set up a fundraising page</a> on our behalf.</p>
        </section>
        <img className="home-bk" src="modules/assets/Cambodia-school.jpg"/>
      </div>
    );
  }
}



export default CambodiaProject;