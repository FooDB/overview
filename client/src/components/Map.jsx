import React from 'react';

class Map extends React.Component {
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
        {console.log (this.props.data)}
      </div>
    );
  }
}

export default Map;
