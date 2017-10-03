// modules/NavLink.js
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  handleClick() {
    window.scrollTo(0, 0);
  },
  render() {
    return <Link {...this.props} activeClassName="active" onClick={this.handleClick}/>
  }
});
