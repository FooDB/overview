import React from 'react';
import axios from 'axios';

class Header extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {
      return (
        <div id="header">
          <h1>{this.props.data.name}</h1>
          <span id="stars">{this.props.data.stars} </span>
          <span id="reviews">{this.props.data.reviews}</span>
          <span id="range">{this.props.data.range}</span>
          <div id="tags">{this.props.data.top.join(', ')}</div>
        </div>
      );
    }
}

export default Header;
