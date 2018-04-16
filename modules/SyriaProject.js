import Analytics from './Analytics';
import React from 'react';
import NavLink from './NavLink';

class SyriaProject extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
    Analytics.page('/SyriaProject');
  }
  render(){
    return (
      <div className="Syria-p-bg">
        <div className="text-container">
        <h1>Syria Project</h1>
        <br/>
        <p>Together with our partner organisation on the ground in Syria & Iraq - JHK -  we wish to build a new school in an area sacred to the Yazidi people, who live in extreme poverty and who receive very little support in the region.</p>

        <p>The plan is to build a school in an area where there hasn't been one for decades (since Saddam's own time of brutality) and to provide and ensure access to educational services for all Yazidi children and illiterate adolescents affected by the ISIS brutality and the situation in the Sharfedin area.</p>

        <p>We believe the journey for displaced children to regain a normal life begins at school, and by investing in their education today we secure their future.  The school will also serve as community centre for those in need of medical attention, clothes, drinking water and, of course, an education.</p>

        <div className='flex-row' style={{alignItems:'center', height:'auto'}}>
          <div style={{width:'60%'}}>
            <img width="100%" src="modules/assets/project-syria-sm2.jpg"/>
          </div>
          <div className='volunteer-box' style={{width:'40%', margin:"2%", paddingBottom:"5%", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <h3>The numbers</h3>
            <p>It will cost 60k to build a 2 story / 4 classroom school, and a further 20k to fit it out with whiteboards, desks, copybooks and all other materials teaching and learning materials.</p>
            <p>There are 500+ children in the area, plus another 300+ teenagers and young adults in the area.</p>
            <a className="blue-inverse-btn" target="_blank" rel="noopener" href="https://www.justgiving.com/campaigns/charity/scoop/syriasvibesschool">Donate now!</a>
          </div>
        </div>
        <br/>
        <div style={{backgroundColor:"rgba(255,255,255,0.5)", padding:"3%", borderRadius:"5px"}}>
          <h3>Why the Sharfedin area?</h3>

          <p>Sharfedin is a holy place for Yazidi people. JHK visited Sharfedin area in 2014 when ISIS were trying to seize the area. The brave people defended their area and fortunately ISIS plan never succeed to destroy the 800 year old shrine that is one of the holiest places on earth for Yazidis.</p>

          <p>The team have learned that among those thousands of 'zidis' who have been captured by ISIS, those who were illiterate or brainwashed (especially young girls) have not been able to to contact their families as they could not even dial a phone number.</p>

          <p>This centre will help keep children safe and help kickstart a community on its knees after the conflict in Syria and Iraq.</p>
          <center><a className="orange-inverse-btn" target="_blank" rel="noopener" href="https://www.justgiving.com/campaigns/charity/scoop/syriasvibesschool">Start a fundraiser on our behalf</a></center>
        </div>
        </div>
        <img className = 'home-bk' src = 'modules/assets/img35.jpg' />
      </div>
    );
  }
}

export default SyriaProject;