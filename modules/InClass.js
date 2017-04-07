import React from 'react';
import ThreeARow from './ThreeARow';

class InClass extends React.Component {
  render() {
    const imgArray = [{
      img: 'modules/assets/thumbnails/In%20class%20-Cambodia.jpg',
      link: '#cambodia',
      path: '/cambodia',
      text: 'Cambodia'
    }, {
      img: 'modules/assets/thumbnails/jeevan%20school%20MUST%20USE.jpg',
      link: '#india',
      path: '/india',
      text: 'India'
    }, {
      img: 'modules/assets/thumbnails/In%20class%20-%20Syria.jpg',
      link: '#syria',
      path: '/syria',
      text: 'Syria'
    }];
    return (
      <div className="container-topMargin class-bg">
        <section className="text-container center">
        <h1>This is in Class</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <section>
          <ThreeARow img={imgArray}/>
        </section>
        <img className="home-bk" src="modules/assets/img06.jpg"/>
        {/*<section id="cambodia">
        <h2>Cambodia</h2>
          <p>
          Cambodia is where the SCOOP story begins, when Andy came across an under-resourced, single classroom school just outside Phnom Penh back in 2008. Upon returning home to Ireland, Andy began running events on their behalf, raising funds to build more classrooms for what would become the SCAO I School. He also encouraged qualified Teachers and Development Studies graduates to live there, helping them build up the school and the organisation itself.
          </p>
          <p>
          The SCAO (link to the SCAO page) is now one of the hardest working local NGOs in and around Phnom Penh and together we plan to build more schools and reach more children.</p>
          <p>**(Possible slideshow of pics showing the first pic all the way through to the opening of the latest school?)**</p>
          <p>
          In 2011, together we built a new school from scratch – the SCAO II School - and at the tail end of 2016 a third school was constructed and opened - SCAO III - this time alongside other NGOs and altruists from all around the world. 
          </p>

          <h3>The future?</h3>

          <p>
          To continue building schools farther into Cambodia’s countryside (which is 80% of the country), in order to stop the migration of uneducated young people and children to its cities - who sadly find themselves vulnerable and desperate for work, usually finding it in low paid garment factories or in the vast amount of ‘girly’ bars and brothels where young women, men and children are exploited daily. 
          </p>
          <p><em>Want to volunteer?</em></p>
          <p>If you would like to teach at the schools, work with SCAO or help develop the communities around the schools, we can put you directly in touch with the gang in Cambodia. Get in touch today! (link to contact form)</p>
        </section>
        <section id="india">
          <h2>The Jeevan School & Home, Varanasi, India</h2>
          <p>
          In the holy city of Varanasi, it’s not uncommon to see children wandering the streets alone, begging. Over 250,000 people live there in 175 different slums there, many families live and sleep on the side of busy dirty roads.
          </p>
          <p>
          The Jeevan School is a shining light, in a city full of scam schools and sham NGOs. It offers an all-round education to over 120 children from begging families, and is also a home to 40 of the worst affected children living in the poorest area of Varanasi.
          </p>
          <h3>Why Varanasi?</h3>
          <p>
          The Holy City of Varanasi is the heart of the Hindu religion and is a sight to behold, enjoying a huge wave of annual domestic and international visitors. 
          </p>
          <p>
          The dark side of this boom leaves over 80,000 families making desperate choices to simply survive. Children are forced to beg, steal, work long hard hours, and are exploited in too many other ways. But at The Jeevan School the children’s spirits soar and you will never meet a nicer group of well-rounded, well-mannered and brilliantly intelligent children – the result of the incredible work done by its dedicated staff and teachers. 
          </p>
          <p>Together we want to take their work a step further, and help more children receive an education or a safe home. Check out our plan.(link to Jeevan Village page)
          </p>
          <p><em>Want to volunteer?</em></p>
          <p>
          Due to the sensitive nature of the experiences suffered by many of the children, The Jeevan School only work with long term, dedicated volunteers, teachers and other professionals. 
          </p>
          <p>
          Varanasi is also a very tough place to work and live, due to the extreme poverty, fluctuating temperatures (stuffy summers and freezing winters), the annual flooding of the Ganges, local illnesses etc. But working at The Jeevan School can also be a life changing experience, so get in touch today… (link to contact form)
          </p>
        </section>
        <section id="syria">
          <h2>Syria</h2>
          <p></p>
        </section>*/}
      </div>
      );
  }
}

export default InClass;