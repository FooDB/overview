import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import apiKey from '../apikey.js';
class GoogleMap extends React.Component {
  constructor (props) {
    super (props);
    console.log (props);
  }

  render () {
    return (
      <div id="map">
        <iframe
          title="location"
          width="350"
          height="280"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${this.props.latitude},${this.props.longitude}&zoom=10`}
          allowFullScreen
        />
      </div>
    );
  }
}

export default GoogleMap;
