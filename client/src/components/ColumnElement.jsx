import React from 'react';

const ColumnElement = props => (
  <div id={props.elementID}>
    <h2>{props.name}</h2>
    <div>{props.contents}</div>
  </div>
);

export default ColumnElement;
