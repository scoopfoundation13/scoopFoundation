import React from 'react';
import NavLink from './NavLink';

const Impact = () => {
  return (
    <div>
      <div className="text-container">
        <h1>Impact</h1>
        <br />
        <center>
        <p>Our schools help steer children away from child labour and other forms of child abuse. This is our mission, it's what drives us most.</p>
        </center>
      </div>

      <section className="flex-row">
        <div style={{width: "25%", padding:"2%"}}>
          <img style={{width: "100%"}} src="modules/assets/earth.png"/>
          <center>There are currently 800 children in class or in care worldwide, and counting…</center>
        </div>
        <div style={{width: "25%", padding:"2%"}}>
          <img style={{width: "100%"}} src="modules/assets/playground.png"/>
          <center>Since we started our mission in 2009, over 2460 children and teenagers have attended class at the schools we support.</center>
        </div>
        <div style={{width: "25%", padding:"2%"}}>
          <img style={{width: "100%"}} src="modules/assets/Bedroom.png"/>
          <center>Our partner organisation in Syria work with children who have been injured, lost or kidnapped. In 2016 over 1870 children received medical treatment or an education by our two partner orgs there.</center>
        </div>
      </section>

      <div className="text-container">
      <h2>Cambodia</h2>
      
      <div className="flex-row">
        <div className="impact-img" style={{backgroundImage:"url(modules/assets/img09.jpg)", backgroundSize:"cover"}}></div>
        <div className="impact-img hide-sm" style={{backgroundImage:"url(modules/assets/img20.jpg)", backgroundSize:"cover"}}></div>
        <div className="impact-img hide-sm" style={{backgroundImage:"url(modules/assets/img10.jpg)", backgroundSize:"cover"}}></div>
      </div>
      <p>The <NavLink to="/cambodia" className="orange">SCAO</NavLink> offer free classes in English and Computers for over 600 children and young adults, as well as offering other social services such as healthcare, eye tests & spectacles, dental work, mosquito nets, clothes, water filters etc to their families.</p>
   
      <p>They also train up young local teachers, empowering them to become the change their communities need.</p>
      </div>
      <br />

      <div className="text-container">
        <h2>Varanasi, India</h2>
         
        <p>The Jeevan School is a loving home to 40 homeless ‘street' children living in full time accommodation, and another 100+ receive an all-round education and meals.</p>

        <p>Our <NavLink to="/india" className="purple">Jeevan Village</NavLink> will offer a home to 100 homeless children and schooling to over 300 more. Support the project today!</p>

        <div className="flex-row">
          <div className="impact-img" style={{backgroundImage:"url(modules/assets/img19.jpg)", backgroundSize:"cover"}}></div>
          <div className="impact-img hide-sm" style={{backgroundImage:"url(modules/assets/img01.jpg)", backgroundSize:"cover"}}></div>
          <div className="impact-img hide-sm" style={{backgroundImage:"url(modules/assets/img21.jpg)", backgroundSize:"cover"}}></div>
        </div>
      </div>
      <br />

      <div className="text-container">
        <h2>Syria</h2>
         
        <p>The 8 medical clinics we support tend to over 500,000 civilians caught in the middle of the war, children included. We also support ambulances, trained medical staff and help provide medical equipment.</p>
     
        <p>Need improved text from Calvin. The school in the Bajed Kandala Refugee camp has nearly 400 children crying out for an education. We wish to support them through materials and school supplies.</p>
      </div>
    </div>
  );
}

export default Impact;