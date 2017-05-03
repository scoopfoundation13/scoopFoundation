import React from 'react';

const Team = () => {
  return (
    <div className="text-container">
      <h1>The Team</h1>
      <p>SCOOP has no paid employees but we reward our fundraisers with 7.5% back out of what they have raised. We feel this helps them live their life, takes a bit of pressure off, helps them pay their rent and bills etc. But more importantly it helps get the ideas flowing again for future endeavours…</p>
      <hr style={{width:"100%"}}/>
      <div className="partner">
        <div style={{width: "40%", paddingRight:"30px"}}><img src="/modules/assets/team/andy2.jpg"/></div>
        <div style={{width: "60%"}}>
          <h2>Andrew Sweeney</h2>
          <h5 className="orange">FOUNDER / EVENTS / SCOOP TOUR</h5>
          <p>In 2008, right after college, Andy embarked on a trip around the world, ending up in South-East Asia where he came across a small, family run school - an encounter that led him on the path to creating SCOOP. Andy has a love for running all types events, creating innovative ways of fundraising, and generally loves building an organisation that is open to all to get involved, and that tries out new ideas all the time.</p>
          <p><a className="hover-orange" href="mailto:andy@scoopfoundation.com">andy@scoopfoundation.com</a></p>
        </div>
      </div>
      <div className="partner">
        <div style={{width: "60%"}}>
          <h2>Calvin James</h2>
          <h5 className="purple">SYRIAS VIBES & SCOOP CO-FOUNDER</h5>
          <p>It was a visit by Andy’s brother Calvin to Cambodia in 2002 that prompted him to go several years later. A DJ, Special Needs Assistant and all round good guy, since leaving school aged 18 Calvin has never stopped travelling and has visited over 80 countries worldwide. He is currently writing down all of his travel stories (<a className="hover-purple" href="">check out our blog</a>) and spends time each year working as a Medical Assistant in Syria.</p>
        </div>
        <div style={{width: "40%", paddingLeft:"30px"}}><img src="/modules/assets/team/calvin.jpg"/></div>
      </div>
      <div className="partner">
        <div style={{width: "40%", paddingRight:"30px"}}><img src="/modules/assets/team/jodi.jpg"/></div>
        <div style={{width: "60%"}}>
          <h2>Jodi Rashbrook</h2>
          <h5 className="orange">INDIA & SCOOP AUSTRALIA CO-FOUNDER</h5>
          <p>Whilst she calls Perth home, she lives a semi nomadic lifestyle and enjoys volunteering overseas. Just before Jodi co-founded SCOOP Australia, she had just returned from teaching English for 5 months in Ladakh, India. It wasn’t long before she was back in India, this time spending 6 months at our partner NGO supporting the Jeevan School. It’s being with the kids and seeing them learn, create and grow that drives Jodi’s passion.</p>
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
      <div className="partner">
        <div style={{width: "40%", paddingRight:"30px"}}><img src="/modules/assets/team/lauren1.jpg"/></div>
        <div style={{width: "60%"}}>
          <h2>Lauren McCalla</h2>
          <h5 className="orange">MARKETING & SOCIAL MEDIA</h5>
          <p>From a young age, I’ve been passionate about social policies and development. Working and volunteering with nonprofits has given me valuable experience and a better understanding of the struggles people around the world face. I'm excited to not only work on and promote SCOOP’s projects but to also to connect and work alongside people around the world.</p>
        </div>
      </div>
      <div className="partner">
        <div style={{width: "60%"}}>
          <h2>Claire Seringhaus</h2>
          <h5 className="purple">BLOG MANAGER</h5>
          <p>Claire is a professional freelance writer, editor and project manager, having worked with the Canadian Encyclopedia, ICOMOS, Bauhaus University, Youth Science Foundation Canada, MyWorldAbroad.com, and many others. She also works as an interdisciplinary artist, and has performed and exhibited in Canada, the US, Germany and Bosnia. Claire is currently based in Bogotá, Colombia, and is thrilled to be volunteering with Syrias Vibes.</p>
        </div>
        <div style={{width: "40%", paddingLeft:"30px"}}><img src="/modules/assets/team/claire.jpg"/></div>
      </div>
    </div>
    );
};

export default Team;