import React from 'react';
import axios from 'axios';

class Header extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div id="header">
        <h1>{this.props.name}</h1>
        <span id="stars">{this.props.stars} </span>
        <span id="reviews">{this.props.reviews}</span>
        <span id="range">{this.props.range}</span>
        <span id="cuisine">{this.props.cuisine}</span>
        <div id="tags">{this.props.top.join (', ')}</div>
      </div>
    );
  }
}

export default Header;
