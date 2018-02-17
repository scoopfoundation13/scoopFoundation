// modules/NavLink.js
import React from 'react';
import {
  Link
} from 'react-router-dom';

export default React.createClass({
  handleClick() {
    window.scrollTo(0, 0);
  },
  render() {
    return <Link {...this.props} onClick={this.handleClick}/>
  }
});
