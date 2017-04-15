import React from 'react';
import NavLink from './NavLink';

const ThreeARow = (props) => {
  console.log('propspropsprops', props);
  var images = props.img.map((obj) => {
    const divStyle = {
      backgroundImage: 'url(' + obj.img + ')',
      backgroundSize: 'cover'
    };
    return (
        <div className="three-a-row" key={obj.img} style={divStyle}>
          <NavLink to={obj.path}>{obj.text}</NavLink>
          <div className="three-overcast"></div>
        </div>
      );
  });
  return (
    <div className="threerow-container">{images}</div>
    );
};

export default ThreeARow;