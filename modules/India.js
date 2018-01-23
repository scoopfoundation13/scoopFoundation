import Analytics from './Analytics';
import React from 'react';

class India extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    Analytics.page('/India');
  }
  render() {
    return (
        <div className="india-bg">
          <section id="india" className="text-container">
            <h1>The Jeevan School & Home, Varanasi, India</h1>
            <br />
            <p>
            In the holy city of Varanasi, it’s not uncommon to see children wandering the streets alone, begging. Over 250,000 people live there in 175 different slums there, while many families live and sleep on the side of busy dirty roads.
            </p>
            <p>
            The Jeevan School is a shining light, in a city full of scam schools and sham NGOs. It offers an all-round education to over 120 children from begging families, and is also a home to 40 of the worst affected children living in the poorest area of Varanasi.
            </p>
            <br />
            <h3>Why Varanasi?</h3>
            <p>
            The Holy City of Varanasi is at the heart of the Hindu religion and is a sight to behold, enjoying a huge wave of domestic and international visitors each year. 
            </p>
            <p>
            The dark side of this boom leaves over 80,000 families making desperate choices to simply survive. Children are forced to beg, steal, work long hard hours, and are exploited in too many other ways. But at The Jeevan School the children’s spirits soar and you will never meet a nicer group of well-rounded, well-mannered and brilliantly intelligent children – the result of the incredible work done by its dedicated staff and teachers. 
            </p>
            <p>Together we want to take their work a step further, and help more children receive an education or a safe home. Check out our plan.(link to Jeevan Village page)
            </p>
            <br />
            <div className="flex-row" style={{alignItems:"center"}}>
            <div style={{width: "70%"}}>
              <iframe className="video-iframe" style={{margin:"auto"}} width="560" height="315" src="https://www.youtube.com/embed/9AAhia2AaQs" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="volunteer-box india">
              <h3>Want to volunteer?</h3> 
              <p>Due to the sensitive nature of the experiences suffered by many of the children, The Jeevan School only work with long term, dedicated volunteers, teachers and other professionals. 
            </p>
            <p>
            Varanasi is also a very tough place to work and live, due to the extreme poverty, fluctuating temperatures (stuffy summers and freezing winters), the annual flooding of the Ganges, local illnesses etc. But working at The Jeevan School can also be a life changing experience, so <a href="emailto:andy@scoopfoundation.com" className="orange">get in touch today</a>
            </p>
              </div>
            </div>

          </section>
          <img className = "home-bk" src = 'modules/assets/inclass-india-bg.jpg' />
      </div>
    );
  }
}

export default India;