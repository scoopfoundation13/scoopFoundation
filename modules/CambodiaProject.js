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
      <h1>SCAO III (on-going development)</h1>
      <br />
      <p>As you can see, the​ 3rd​ school​ in Cambodia​ is already half finished, but now we​ just​ need to build the 2nd floor​,​ which will have more classrooms​ for more children​.</p>

      <p>We also want to build quality accommodation to attract qualified teachers and Development Study graduates to come and live in village. </p>

      <p>To get involved, get in touch with Andy today, <NavLink to="/donate" className="orange">make a donation</NavLink> or <a href="https://www.justgiving.com/scoop" className="purple">set up a fundraising page</a> on our behalf.</p>
      </section>
      <img className="home-bk" src="modules/assets/cambodiaproject.png"/>
      </div>
    );
  }
}



export default CambodiaProject;