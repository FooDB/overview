import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.data.name;
        this.stars = props.data.stars;
        this.reviews = props.data.reviews;
        this.range = props.data.range;
        this.cuisine = props.data.cuisines[0];
        this.toptags = props.data.toptags;
    }

    render() {
        return (
          <div id="header">
            <h1>{this.name}</h1>
            <span id="stars">{this.stars} </span>
          </div>
        );
      }
}

export default Header;
