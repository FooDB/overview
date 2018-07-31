import React from 'react';
import ColumnElement from './components/ColumnElements.jsx';

class RightCol extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div id="rightcol">
        <div id="address">
          <div>{this.props.addr}</div>
        </div>

        <div id="neighborhood">
          <h2> Neighborhood </h2>
          <div>{this.props.neighborhood}</div>
        </div>

        <div id="crossStreet">
          <h2> Cross street </h2>
          <div>{this.props.cross_street}</div>
        </div>

        <div id="parking">
          <h2> Parking details </h2>
          <div>{this.props.parking}</div>

        </div>

        <div id="publicTransport">
          <h2> Public transit </h2>
          <div>{this.props.public_transport}</div>
        </div>

        <div id="additional">
          <h2> Additional </h2>
          <div>{this.props.additional.join (', ')}</div>
        </div>
      </div>
    );
  }
}

export default RightCol;
