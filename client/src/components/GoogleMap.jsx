import React from 'react';

class GoogleMap extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {
    this.getMap ();
  }

  getMap () {
    //server call
    //make googleAPI Call
    //render it accordingly
    console.log ('hi');
  }
  render () {
    return (
      <div id="map">
        This is a map
        {console.log (this.props)}
      </div>
    );
  }
}

export default GoogleMap;
