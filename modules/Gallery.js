import React from 'react';


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['modules/assets/img01.jpg', 'modules/assets/img02.jpg', 'modules/assets/img03.jpg'],
      activeIdx: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx) {
    this.setState({activeIdx: idx});
  }

  render() {
    const images = ['modules/assets/gallery/1. Andy visits the original SCAO Centre in 2008.jpg', 'modules/assets/gallery/2. He helps them improve the centre and build more classrooms in 2009.jpg', 'modules/assets/gallery/3. Robotnik performs at our launch gig in 2010.jpg', 'modules/assets/gallery/3a. Local Cambodian Teacher Srey Lat in 2009.jpg', 'modules/assets/gallery/4. SCOOP co-founder George Gerard Mealy as auctioneer at the 1st SCOOP Art Auction in Pygmalion.jpg', 'modules/assets/gallery/5. Cast.ie\'s incredible trophy for the SCOOP Poker tournie - the very 1st SCOOP Event.jpg', 'modules/assets/gallery/6. James Vincent McMorrow performs at an early SCOOP gig.jpg', 'modules/assets/gallery/7. Andy and co-founder Annmarie, with local teacher Srey Lat, visit the site of the 2nd school in Cambodia in 2010.png', 'modules/assets/gallery/8. The 2nd school in Cambodia ready to open in 2011.jpg', 'modules/assets/gallery/9. SCOOP supporters David Uda (artist) and Tanya Sweeney (journalist) with Andy visitinin ghe 2nd school in Cambodia'].map((file) => {
        return file.replace(' ', '%20');
    });
    console.log(images);
    
    const divStyle = {
      backgroundImage: 'url(' + this.state.images[this.state.activeIdx] + ')',
      backgroundSize: 'cover'
    };
    const dots = images.map((pic, idx) => { 
      if (idx === this.state.activeIdx) {
        return (
          <span key={pic} idx={idx} onClick={() => this.handleClick(idx)} className="bullet bullet-active">&bull;</span>
          );   
      }
      return (<span key={pic} idx={idx} onClick={() => this.handleClick(idx)} className="bullet">&bull;</span>); 
    });

    return (
      <div className="gallery-container">
        <img className="gallery-img" src={this.state.images[this.state.activeIdx]}/>
        <div className="bullets-container">{dots}</div>
      </div>
      );    
  }
};

export default Gallery;