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
    const images = ['modules/assets/img01.jpg', 'modules/assets/img02.jpg', 'modules/assets/img03.jpg'];
    const divStyle = {
      height: '500px',
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