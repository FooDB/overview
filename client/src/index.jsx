import React from 'react';
import ReactDOM from 'react-dom';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> The overview will go here</h1>
      </div>
    );
  }
}

ReactDOM.render(<Overview />, document.getElementById('overview'));
