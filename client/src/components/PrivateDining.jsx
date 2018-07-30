import React from 'react';

class PrivateDining extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="private"> {this.props.description}</div>
        );
    }
}

export default PrivateDining;