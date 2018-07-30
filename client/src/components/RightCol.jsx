import React from 'react';
import axios from 'axios';

class RightCol extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div id="rightcol">
            <div id="address"> Address url</div>
            <div id="neighborhood"> Neighborhood </div>
            <div id="crossStreet"> Cross street </div>
            <div id="parking"> Parking details </div>
            <div id="publicTransit"> Public transit </div>
            <div id="additional"> Additional </div>
          </div>
        );
      }
}

export default RightCol;