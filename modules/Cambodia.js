import Analytics from './Analytics';
import React from 'react';
import NavLink from './NavLink';

class Cambodia extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    Analytics.page('/Cambodia')
  }
  render() {
    return ( 
      <div className="cambodia-bg">
        <section id="cambodia" className = "text-container" >
          <h1> SCAO I, III & III </h1> 
          <br />


          <p>
          Cambodia is where the SCOOP story begins, when Andy came across an under-resourced, single classroom school just outside Phnom Penh back in 2008. Upon returning home to Ireland, Andy began running events on their behalf, raising funds to build more classrooms for what would become the SCAO I School. He also encouraged qualified teachers and Development Studies graduates to travel to spend time at the school; helping them develop their curriculum, and supporting capacity-building for the teachers, school and organisation itself.</p> 
          
          <p>The SCAO is now one of the hardest working local NGOs in and around Phnom Penh and together we plan to build more schools and reach more children.</p> 
          
          <p>
          In 2011, SCOOP and SCAO built a new school from scratch: the SCAO II School &mdash; and at the tail end of 2016 a third school was constructed and opened: SCAO III. This time the school was built with support from a growing network of other NGOs and altruists from all around the world.</p>
          
          <br />

          <h3> The future? </h3>

          <p>
          To continue building schools farther into Cambodia's countryside (which makes up 80% of the country) in order to stop the migration of uneducated young people and children to the main cities. The sad reality is that often through this migration, children and young people find themselves vulnerable and desperate for work, usually finding it in low paid garment factories or in the vast amount of 'girly' bars and brothels where young women, men and children are exploited daily. Through offering education and opportunities to young people in their hometowns we strive to break this cycle.</p> 
        
          <br />
          <div className="flex-row" style={{alignItems:"center"}}>
          <div style={{width: "70%"}}>
            <iframe className="video-iframe" style={{margin:"auto"}} width="560" height="315" src="https://www.youtube.com/embed/bqz5mJ_8eXI" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="volunteer-box" style={{textAlign:"center"}}>
            <center style={{margin:"20px auto 30px"}}><NavLink className="blue-inverse-btn" to="/donate">Sponsor a Teacher Today!</NavLink></center>
            
            <h3>Want to volunteer?</h3> 
            <p> If you would like to teach at the schools, work with SCAO or help develop the communities around the schools, we can put you directly in touch with the gang in Cambodia. <a className="orange" href="mailto:info@scoopfoundation.com">Get in touch.</a></p> 
            </div>
          </div>
        </section> 
        <br />
        <img className = "home-bk" src = 'modules/assets/img03.png' />
      </div>
    );
  }
}

export default Cambodia;