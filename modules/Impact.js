import Analytics from './Analytics';
import React from 'react';
import NavLink from './NavLink';

class Impact extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    Analytics.page('/Impact');
  }
  render() {
    return (
      <div>
        <div className="text-container">
          <h1>Impact</h1>
          <br />
          <center>
          <p>Our schools help steer children away from child labour and other forms of child abuse. This is our mission, it's what drives us most.</p>
          </center>
        </div>

        <div>
        <section className="flex-row">
          <div style={{width: "25%", padding:"2%"}}>
            <img style={{width: "100%"}} src="modules/assets/Playground.png"/>
            <center>Since we started our mission in 2009, over 2462 children and teenagers have attended class at the schools we support.</center>
          </div>
          <div style={{width: "25%", padding:"2%"}}>
            <img style={{width: "100%"}} src="modules/assets/earth.png"/>
            <center>Today, we have 832 children in class or care because of SCOOP projects.. and counting.</center>
          </div>
          <div style={{width: "25%", padding:"2%"}}>
            <img style={{width: "100%"}} src="modules/assets/resize_bedroom.png"/>
            <center>Our partner organisation in Syria work with children who have been injured, lost or kidnapped. In 2016 over 1876 children received medical treatment or an education by our two partner orgs there.</center>
          </div>
        </section>
        <br />
        <br />
        <br />
        <div className="">
          <section style={{textAlign:"center"}}>
            <h1 className="purple">Get involved today!</h1>
            <div>
              <NavLink to="/fundraise"><span className="interested-btn">Start a fundraiser</span></NavLink>
              <NavLink to="/donate"><span className="interested-btn">Make a donation</span></NavLink>
            </div>
          </section>
          <div className="text-container">
          <br />
          <br />
          <br />
          <h2>Cambodia</h2>
          <p>SCOOP is proud to partner with Cambodian charity: The <NavLink to="/cambodia" className="blue">SCAO</NavLink>. SCAO offer free classes in English and Computing for over 600 children and young adults, as well as offering other much needed social services for families such as healthcare, eye tests &amp; spectacles, dental work, mosquito nets, clothes, water filters etc.</p>
      
          <p>They also train up young local teachers; empowering them to become the change their communities need.</p>
          </div>
          <br />
          <br />
          <br />
          <img className="home-bk" src="modules/assets/img25.png"/>
          </div>
        </div>
        <div className="">
        <div className="text-container">
          <br />
          <br />
          <br />
          <h2>Varanasi, India</h2>
          
          <p>The Jeevan School is a loving home to 40 homeless 'street' children who are now living in full time accommodation, with another 100+ receiving an all-round education and daily meals.</p>

          <p>The <NavLink to="/india" className="purple">Jeevan Village</NavLink> will offer a home to 100 homeless children and schooling to over 300 more. Support the project today!</p>
        </div>
          <br />
          <br />
          <br />
          <img className="home-bk" src="modules/assets/img41.jpg"/>
        </div>

        <div className="">
        <div className="text-container">
          <br />
          <br />
          <br />
          <h2>Syria</h2>
          
          <p>The 8 medical clinics we support in Northern Syria tend to over 500,000 civilians caught in the middle of the war, children included. We also support ambulances, trained medical staff and help provide medical equipment.</p>

          <p>The school in the Bajed Kandala Refugee camp has nearly 400 children crying out for an education. We wish to support them through materials and school supplies.</p>

          <p>We also wish to get involved with 100s of children who have been abducted by ISIS in Iraq and Syria, and then returned to their families, and who are in need of counselling, on-going care and support, and an education.</p>
        </div>
        <br />
        <br />
        <br />
        <img className="home-bk" src="modules/assets/img42.jpg"/>
        </div>
      </div>
    );
  }
}

export default Impact;