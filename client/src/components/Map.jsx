import React from 'react';
import axios from 'axios';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          longitude: null,
          latitude: null
        }
    }

    componentDidMount() {
      this.getMap();
    }

    getMap() {
      //server call
      //make googleAPI Call
      //render it accordingly
      console.log('hi');
    }
    render() {
        return (
          <div id="map">
            this is a map elem
          </div>
        );
      }
}

export default Map;