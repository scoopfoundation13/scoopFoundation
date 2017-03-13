import React from 'react';

const ThreeARow = (props) => {
  console.log('propspropsprops', props);
  var images = props.img.map((obj) => {
    const divStyle = {
      backgroundImage: 'url(' + obj.img + ')',
      backgroundSize: 'cover'
    };
    return (
        <div className="three-a-row" key={obj.img} style={divStyle}><a href={obj.link}>{obj.text}</a></div>
      );
  });
  return (
    <div className="threerow-container">{images}</div>
    );
};

export default ThreeARow;