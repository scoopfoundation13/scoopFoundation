import React from 'react';

const Team = () => {
  return (
    <div className="text-container">
      <h1>The Team</h1>
      <hr style={{width:"100%"}}/>
      <div className="partner">
        <div style={{width: "40%", paddingRight:"30px"}}><img src="/modules/assets/team/andy2.jpg"/></div>
        <div style={{width: "60%"}}>
          <h2>Andrew Sweeney</h2>
          <h5 className="orange">FOUNDER / EVENTS / SCOOP TOUR</h5>
          <p>In 2008, Andy embarked on a trip around Asia where he came across a small family run school, an encounter that led him on the path to building SCOOP. Since then, SCOOP has grown to an organisation that has built and supported schools across Cambodia and India. It is Andy’s creativity and love for travelling, music, art and innovation that has seen him create a non-profit that merges altruism and inspiration with fun and adventure.</p>
        </div>
      </div>
      <div className="partner">
        <div style={{width: "60%"}}>
          <h2>Calvin James</h2>
          <h5 className="purple">SYRIAS VIBES & SCOOP CO-FOUNDER</h5>
          <p>It was a visit by Calvin to Cambodia in 2002 that prompted Andrew to go several years later. A DJ, Special Needs Assistant and all round good guy, since leaving school aged 18 Calvin has never stopped travelling and has visited over 80 countries worldwide. He is currently writing down all of his travel stories (to a blog coming to you very soon!) while working as a Medical Assistant outside Rojava in Syria. No one rewrites the rules like Calvin does…</p>
        </div>
        <div style={{width: "40%", paddingLeft:"30px"}}><img src="/modules/assets/team/calvin.jpg"/></div>
      </div>
      <div className="partner">
        <div style={{width: "40%", paddingRight:"30px"}}><img src="/modules/assets/team/jodi.jpg"/></div>
        <div style={{width: "60%"}}>
          <h2>Jodi Rashbrook</h2>
          <h5 className="orange">INDIA & SCOOP AUSTRALIA CO-FOUNDER</h5>
          <p>Whilst she calls Perth home she lives a semi nomadic lifestyle and enjoys volunteering overseas. Just before Jodi co-founded SCOOP Australia, she had just returned from teaching English for 5 months in Ladakh, India. It wasn’t long before she was back in India, this time spending 6 months at our partner NGO supporting the Jeevan School of Life. Is being with the kids and seeing them learn, create and grow that drives Jodi’s passion.</p>
        </div>
      </div>
      <div className="partner">
        <div style={{width: "60%"}}>
          <h2>Lisa Rennie</h2>
          <h5 className="purple">SCOOP AUSTRALIA (FOUNDER)</h5>
          <p>After university Lisa moved to Cambodia to volunteer for SCAO and then intern for the UNDP. It was these experiences, and her South African childhood, that compelled Lisa to take action for change. But her final inspiration for bringing The SCOOP Foundation to Australia was the birth of her daughter, who Lisa hopes will grow and learn that the world, and its people can be beautiful.</p>
        </div>
        <div style={{width: "40%", paddingLeft:"30px"}}><img src="/modules/assets/team/lisa.jpg"/></div>
      </div>
    </div>
    );
};

export default Team;