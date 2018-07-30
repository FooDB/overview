import React from 'react';

class RightCol extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div id="rightcol">
            <div id="address">
              <h2> Address url </h2>
              <div>{this.props.data.addr}</div>
            </div>

            <div id="neighborhood">
              <h2> Neighborhood </h2>
              <div>{this.props.data.neighborhood}</div>
             </div>

            <div id="crossStreet">
              <h2> Cross street </h2>
              <div>{this.props.data.cross_street}</div> 
            </div>

            <div id="parking">
              <h2> Parking details </h2>
              <div>{this.props.data.parking}</div>

            </div>

            <div id="publicTransport">
              <h2> Public transit </h2>
              <div>{this.props.data.public_transport}</div>
            </div>

            <div id="additional">
              <h2> Additional </h2>
              <div>{this.props.data.additional.join(', ')}</div> 
            </div>
          </div>
        );
      }
}

export default RightCol;