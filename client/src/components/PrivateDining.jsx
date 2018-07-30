import React from 'react';

class PrivateDining extends React.Component {
  constructor (props) {
    super (props);
    this.description = props.description;
    this.url = props.url;
  }

  render () {
    return (
      <div>
        <h2>Private Dining</h2>
        <div id="private"> {this.props.description}</div>
        <button href={this.url}>View Private Dining Details</button>
      </div>
    );
  }
}

export default PrivateDining;
