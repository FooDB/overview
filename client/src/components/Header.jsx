import React from 'react';

const Header = props => (
  <div id="header">
    <h1>{props.name}</h1>
    <span id="stars">{props.stars} </span>
    <span id="reviews">{props.reviews}</span>
    <span id="range">{props.range}</span>
    <span id="cuisine">{props.cuisine}</span>
    <div id="tags">{props.top.join (', ')}</div>
  </div>
);

export default Header;
