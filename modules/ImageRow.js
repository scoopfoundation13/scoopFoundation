import React from 'react';
import NavLink from './NavLink';
import styles from './ImageRow.css';


const ImageRow = (props) => {
  var images = props.img.map((obj) => {
    const divStyle = {
      backgroundImage: 'url(' + obj.img + ')',
      backgroundSize: 'cover'
    };
    return (
        <div className="ImageRow__item" key={obj.img} style={divStyle}>
          {obj.path[0] === '/' ? <NavLink className="ImageRow__link" to={obj.path}>{obj.text}</NavLink> : <a className="ImageRow__link" target="_blank" href={obj.path}>{obj.text}</a>}
          <div className="ImageRow__underlay"></div>
        </div>
      );
  });
  return (
    <div className="ImageRow">{images}</div>
    );
};

export default ImageRow;