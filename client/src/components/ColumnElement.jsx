import React from 'react';

const ColumnElement = props => (
  <div id={props.elementID}>
    <div>{props.contents}</div>
  </div>
);
export default ColumnElement;
