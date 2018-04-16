import Analytics from './Analytics';
import React from 'react';

const defaultState = {
  members: [{
    image: "/modules/assets/team/andy2.jpg",
    name: "Andrew Sweeney",
    contribution: "FOUNDER / EVENTS / SCOOP TOUR",
    biography: `<p>In 2008, right after college, Andy embarked on a trip around the world, ending up in South-East Asia where he came across a small, family run school &mdash; an encounter that led him on the path to creating SCOOP. Andy has a love for running all types events, creating innovative ways of fundraising, and generally loves building an organisation that is open to all to get involved, and that tries out new ideas all the time.</p>
    <p><u><a className="hover-orange" href="mailto:andy@scoopfoundation.com">andy@scoopfoundation.com</a></u></p>`
  },
  {
    image: "/modules/assets/team/calvin.jpg",
    name: "Calvin James",
    contribution: "SYRIAS VIBES & SCOOP CO-FOUNDER",
    biography: `<p>It was a visit by Andy’s brother Calvin to Cambodia in 2002 that prompted him to go several years later. A DJ, Special Needs Assistant and all round good guy, since leaving school aged 18 Calvin has never stopped travelling and has visited over 80 countries worldwide. He is currently writing down all of his travel stories (<u><a className="hover-purple" href="http://scoopfoundationblog.wordpress.com">check out our blog</a></u>) and spends time each year working as a Medical Assistant in Syria.</p>`
  },
  {
    image: "/modules/assets/team/jodi.jpg",
    name: "Jodi Rashbrook",
    contribution: "INDIA & SCOOP AUSTRALIA CO-FOUNDER",
    biography: `<p>Whilst she calls Perth home, she lives a semi nomadic lifestyle and enjoys volunteering overseas. Just before Jodi co-founded SCOOP Australia, she had returned from teaching English for 5 months in Ladakh, India. It wasn’t long before she was back in India, this time spending 6 months at our partner NGO supporting the Jeevan School. It’s being with the kids and seeing them learn, create and grow that drives Jodi’s passion.</p>`
  },
  {
    image: "/modules/assets/team/lisa.jpg",
    name: "Lisa Rennie",
    contribution: "SCOOP AUSTRALIA (FOUNDER)",
    biography: `<p>After university Lisa moved to Cambodia to volunteer for SCAO and then intern for the UNDP. It was these experiences, and her South African childhood, that compelled Lisa to take action for change. But her final inspiration for bringing The SCOOP Foundation to Australia was the birth of her daughter, who Lisa hopes will grow and learn that the world, and its people, can be beautiful.</p>`
  },
  {
    image: "/modules/assets/team/Karol.jpg",
    name: "Karol Keane",
    contribution: "Chair",
    biography: `<p>Karol is the Food Operations manager at Airbnb in Dublin. He trained as a chef in Belgium before going on to complete an MA in Globalization focusing on Political Islam, The Arab Israeli conflict and Peace Keeping/Peace Making initiatives.</p>
    <p>After college, he spent 5 years in Berlin working as a chef and in other hospitality roles. Needing a challenge, he then moved to Port au Prince, Haiti, to work on a sustainable social development project where he trained young adults to cook professionally and developed a Train-the-Trainer program. He is passionate about food, food systems and social justice</p>`
  },
  {
    image: "/modules/assets/team/Maria.jpg",
    name: "Maria Drzazga",
    contribution: "Board Secretary",
    biography: `<p>Maria is very passionate about human rights. For many years she was involved with various Amnesty International local groups - first in Poland during her studies, then in London and Dublin. During the year she spent living and traveling in South America she witnessed how commonplace poverty and social injustice was on the continent.</p>
    <p>In 2014/2015 Maria spent few months volunteered for a grass-root charity 'Colombia sin Fronteras' in Santa Marta, Colombia. Upon moving to Dublin she undertook an internship in the fundraising department in Camara Education. Maria works as a legal executive in a commercial law firm in Dublin.</p>`
  },
  {
    image: "/modules/assets/team/George.jpg",
    name: "George Gerard Mealy",
    contribution: "Founding Director",
    biography: `<p>George is a Founding Director of SCOOP and our resident auctioneer. He grew up in Castlecomer, Co Kilkenny, and went to school alongside Andy & Calvin at St Gerard’s School in Co Wicklow.</p>
    <p>After the Leaving Certificate, he studied at and graduated from Southampton Solent University with a diploma in fine art valuation.</p>
    <p>He returned to Dublin to pursue a bachelor’s degree in Business and Law in UCD and as part of the international programme spent a year in Toronto – at Osgoode Hall Law School.</p>
    <p>After university, George trained at PwC in advisory services, going on to pass the New York bar exams. He was admitted to the New York State Bar in 2012.</p>
    <p>After that he ran the family business for almost a decade before emigrating to Kenya.</p>`
  },
  {
    image: "/modules/assets/team/wendy.jpg",
    name: "Wendy Cheung",
    contribution: "SOFTWARE ENGINEER",
    biography: `<p>Wendy is a Software Engineer and the creator of scoopfoundation.com website, she is also part of The United Nations Volunteers program (UNV). Currently based in San Francisco, she is a lover of life and believes by supporting one another we can make the world a better place. Check out more of her work <u><a className="hover-purple" href="//wendycheung.me">here</a></u>.</p>`
  }]
};
class Image extends React.Component {
  constructor(){
    super();
  }
  render(){
    if (this.props.img) {
    return <img src={this.props.img} />;
    }
    return null;
  }
}
class Team extends React.Component{
  constructor(){
    super();
    this.state = defaultState;
  }
  componentDidMount() {
    Analytics.page('/Team');
  }
  render(){
    return (
      <div className="text-container">
        <h1>The Team</h1>
        {this.state.members.map(function(value,index,array){
          if (index%2 === 0) {
            return (
              <div key={index} className="partner">
                <div style={value.image ? {width: "40%", paddingRight:"30px"} : {} }>
                  <Image img={value.image} />
                </div>
                <div style={value.image ? {width: "60%"} : {} }>
                  <h2>{value.name}</h2>
                  <h5 className="orange">{value.contribution}</h5>
                  <div dangerouslySetInnerHTML={{__html: value.biography}} />
                </div>
              </div>
            )
          }
          return (
            <div key={index}  className="partner">
              <div style={value.image ? {width: "60%"} : {} }>
              <h2>{value.name}</h2>
                <h5 className="purple">{value.contribution}</h5>
                <div dangerouslySetInnerHTML={{__html: value.biography}} />
              </div>
              <div style={value.image ? {width: "40%", paddingLeft:"30px"} : {} }>
                <Image img={value.image} />
              </div>
            </div>
          )
        
        })}
      </div>
    );
  }
};

export default Team;