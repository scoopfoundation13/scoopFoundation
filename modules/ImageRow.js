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
      <NavLink className="ImageRow__item" key={obj.img} to={obj.path}>
        <span className="ImageRow__text">{obj.text}</span>
        <div className="ImageRow__pic-overlay"></div>
        <img className="ImageRow__pic" src={obj.img} alt="" />
      </NavLink>
    );
  });
  return (
    <div className="ImageRow">{images}</div>
    );
};

export default ImageRow;