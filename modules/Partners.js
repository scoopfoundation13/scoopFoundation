import React from 'react';

const Partners = () => {
  return (
    <div className="text-container">
    <h1 style={{margin: "80px 0 50px"}}>Project partners</h1>
      <div className="partner">
        <div style={{width: "30%", margin: "0 30px 0 0"}}>
          <img src="/modules/assets/partners/scao.png"/>
          <img style={{paddingTop: "35px"}} src="/modules/assets/img10.jpg"/>
        </div>
        <div style={{width: "70%"}}>
          <h3>SCAO (Cambodia)</h3>
          <p>SCAO stands for Support Children In Asia and it is one of the hardest working and fastest growing local NGOs in Phnom Penh, Cambodia. It was set up by Mr Samith and his wife, and their goal is to educate as many of Cambodia’s poor.</p>

          <p>Although its volunteers hail from Ireland, Germany and Australia, the organisation is Cambodia run, and always will be.</p>

          <p>Our Founder came across their first school by chance in 2008, and a quick friendship and bond was formed. Andy helped them build more classrooms, and eventually schools, and persuaded Irish teachers and Development Studies graduates to live in Cambodia and work with them. </p>

          <p>SCAO is going from strength to strength, and each school becomes more ambitious, reaching more children and offering more service to their families. </p>

          <p>We are proud to work with them and together have big plans to build more schools in future.</p>

          <p>Get involved!</p>
        </div>
      </div>

      <div className="partner">
        <div style={{width: "70%"}}>
        <h3>Basic Human Needs (Varanasi, India)</h3>
        <p>Established by a mix of Canadian, German and Irish volunteers, Basic Human Needs is the incredible organisation behind the life changing Jeevan School, working in the poorest part of a city that is situated in the poorest state in India.</p>

        <p>Living and working in Varanasi, Uttar Pradesh is not easy for Westerners. Cultural differences, sexist remarks, extreme poverty, stories behind the children that would make you weep, local and severe illnesses – the team at BHN have stood up to all challenges and have also stood the test of time – being in Varanasi now for over 12 years.</p>

        <p>They have seen every scam, saved more lives than we can count, changed 100s of children’s futures, and continue their work there still. Our Jeevan Village project is one of the most adventurous projects to ever happen in Varanasi, and it’s not surprising that the Basic Human Needs team are behind it.</p>

        <p>We are proud to work with them and will work equally hard to make The Jeevan Village a reality. </p>
        </div>
        <div style={{width: "30%", margin: "0 0 0 30px"}}>
          <img src="/modules/assets/img02.jpg"/>
        </div>
      </div>

      <div className="partner">
        <div style={{width: "30%", margin: "0 0 0 30px"}}>
          <img src="/modules/assets/partners/HeyvaSoraKurd.jpg"/>
        </div>
        <div style={{width: "70%"}}>
          <h3>Heyva Sor a Kurd (Syria)</h3>
          <p>NEED TEXT</p>
        </div>
      </div>

      <div className="partner">
        <div style={{width: "70%"}}>
          <h3>Joint Help for Kurdistan (Syria)</h3>
          <p>JLK are a Swedish organisation supporting NGOs and individual funds and voluntaries support in Northern Syria and Kurdistan.</p>
        </div>
        <div style={{width: "30%", margin: "0 0 0 30px"}}>
          <img src="/modules/assets/partners/joint%20help.jpg"/>
        </div>
      </div>

      <h1 style={{margin: "80px 0 50px"}}>Global Partners</h1>

      <div className="partner">
        <div style={{width: "30%", margin: "0 30px 0 0"}}>
          <img src="/modules/assets/partners/scoopoz.jpg"/>
        </div>
        <div style={{width: "70%"}}>
        <h3>SCOOP Austraila</h3>
        <p>Set up in 2012 by Lisa Rennie and Jodi Rashbrook from Perth, SCOOP Australia focuses predominantly on raising funds to support The Jeevan School and to support the teacher salaries and teacher training projects in Cambodia. </p>
        </div>
      </div>

      <div className="partner">
        <div style={{width: "70%"}}>
          <h3>KiK (Germany / Cambodia)</h3>
          <p>KiK are small but dedicated German organisation who provide the vast bulk of the running costs for the SCAO in Cambodia through a small number of regular donors connected to the SCAO Board.</p>
        </div>
        <div style={{width: "30%", margin: "0 0 0 30px"}}>
          <img src="/modules/assets/partners/Kik%20logo.png"/>
        </div>
      </div>

      <div className="partner">
        <div style={{width: "30%", margin: "0 30px 0 0"}}>
          <img style={{width: "70%"}} src="/modules/assets/partners/Gecko.jpg"/>
        </div>
        <div style={{width: "70%"}}>
        <h3>Gecko (Germany / Cambodia)</h3>
        <p>Another German organisation with strong ties in Cambodia, Gecko offer development assistance and support to children and young adults in need in Cambodia. They focus on healthcare and pay for badly needs operations for those generally shunned by society, like the blind, deaf, those with cleft lips etc.</p>
        </div>
      </div>
      <div className="partner">
        <div style={{width: "70%"}}>
        <h3>Oxford University (Interns)</h3>
        <p>We are honoured to partner with Oxford University and their Micro-Internship Programme, which allows us to work some of the finest minds in the world for intensive 5 day stints, three times a year.</p>
        <p>If you are a company and would like to become an official partner, check out their <a className="orange" href='http://www.careers.ox.ac.uk/'>website</a></p>
        </div>
        <div style={{width: "30%", margin: "0 0 0 30px"}}>
          <img src="/modules/assets/partners/Oxford%20Uni%20Internships.jpg"/>
        </div>
      </div>

    </div>
    );
}

export default Partners;