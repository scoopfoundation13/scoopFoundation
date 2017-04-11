import React from 'react';


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['modules/assets/gallery/1. Andy visits the original SCAO Centre in 2008.jpg', 'modules/assets/gallery/2. He helps them improve the centre and build more classrooms in 2009.jpg', 'modules/assets/gallery/3. Robotnik performs at our launch gig in 2010.jpg', 'modules/assets/gallery/3a. Local Cambodian Teacher Srey Lat in 2009.jpg', 'modules/assets/gallery/4. SCOOP co-founder George Gerard Mealy as auctioneer at the 1st SCOOP Art Auction in Pygmalion.jpg', 'modules/assets/gallery/5. Cast.ie\'s incredible trophy for the SCOOP Poker tournie - the very 1st SCOOP Event.jpg', 'modules/assets/gallery/6. James Vincent McMorrow performs at an early SCOOP gig.jpg', 'modules/assets/gallery/7. Andy and co-founder Annmarie, with local teacher Srey Lat, visit the site of the 2nd school in Cambodia in 2010.png', 'modules/assets/gallery/8. The 2nd school in Cambodia ready to open in 2011.jpg', 'modules/assets/gallery/9. SCOOP supporters David Uda (artist) and Tanya Sweeney (journalist) with Andy visitinin ghe 2nd school in Cambodia.jpg', 'modules/assets/gallery/10 .Artist ADW creates a special artwork for us in 2010.jpg', 'modules/assets/gallery/11. ADW\'s Elton which raised €900.jpg', 'modules/assets/gallery/12. The Better Than Socks event 2012.jpg', 'modules/assets/gallery/13. The SCOOP Ireland Team in 2014.jpg', 'modules/assets/gallery/14. The SCOOP Social - at this stage we have run every possible type of event imaginable.jpg', 'modules/assets/gallery/15. The SCOOP Australia Team 2015.jpg', 'modules/assets/gallery/16. SCOOP Australia 1st logo 2015.jpg', 'modules/assets/gallery/17. We partner up with The Jeevan School in Varanasi, India in 2010.jpg', 'modules/assets/gallery/17a. The Jeevan School offers a home and safe haven for homeless children in the city.jpg', 'modules/assets/gallery/18. The site for The Jeevan Village in Varanasi 2014.jpg', 'modules/assets/gallery/19. Architects plan for The Jeevan Village.jpg', 'modules/assets/gallery/20. We partnered up with the Oktoberfest Festival in 2014.JPG', 'modules/assets/gallery/21. New SCOOP logo in 2015.jpg', 'modules/assets/gallery/22. The site for the 3rd school in Cambodia 2016.jpg', 'modules/assets/gallery/23. Andy at the site for the 3rd school inj Cambodia in 2016.jpg', 'modules/assets/gallery/24. Laying the foundations for the 3rd school in Cambodia (2016).jpg', 'modules/assets/gallery/25. The building site for the 3rd school in Cambodia 2016.jpg', 'modules/assets/gallery/26. Calvin and colleague with their ambulance in Syria (2016).jpg', 'modules/assets/gallery/27. Calvin at the site in Qamishli where 2 trucks full of explosives destroyed a city block (2016).jpg', 'modules/assets/gallery/28. Calvin at the Syrias Vibes launch in Dublin in October, 2016.jpg', 'modules/assets/gallery/29. The Artist\'s Cook Book will launch in the summer of 2017.jpg'],
      activeIdx: 0,
      encodedImages: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLeftArrow = this.handleLeftArrow.bind(this);
    this.handleRightArrow = this.handleRightArrow.bind(this);
  }

  ComponentDidMount() {
    const encoded = this.state.images.map(pic => {
      return pic.split(' ').join('%20');
    });
    this.setState({encodedImages: encoded});

  }

  handleClick(idx) {
    this.setState({activeIdx: idx, count: false});
  }

  handleLeftArrow(event) {
    event.preventDefault();
    const newIdx = this.state.activeIdx === 0 ? 0 : (this.state.activeIdx - 1);
    this.setState({activeIdx: newIdx, count: false});
    return false;
  }

  handleRightArrow(event) {
    event.preventDefault();
    const newIdx = this.state.activeIdx === (this.state.images.length - 1) ? (this.state.images.length - 1) : (this.state.activeIdx + 1);
    this.setState({activeIdx: newIdx});
    return false;
  }

  render() {

    const dots = this.state.images.map((pic, idx) => { 
      if (idx === this.state.activeIdx) {
        return (
          <span key={pic} idx={idx} onClick={() => this.handleClick(idx)} className="bullet bullet-active">&bull;</span>
          );   
      }
      return (<span key={pic} idx={idx} onClick={() => this.handleClick(idx)} className="bullet">&bull;</span>); 
    });

    const caption = this.state.images[this.state.activeIdx].split('.')[1];

    return (
      <div className="gallery-container">
        <span onClick={this.handleLeftArrow}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
        <span onClick={this.handleRightArrow}><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
        <img className="gallery-img" src={this.state.images[this.state.activeIdx]}/>
        <center style={{margin: '10px 200px', textAlign: 'center'}}>{caption}</center>
        <div className="bullets-container">{dots}</div>
        <img className="home-bk" src="modules/assets/img09.jpg"/>
      </div>
      );    
  }
};

export default Gallery;