import React from 'react';
import ReactDOM from 'react-dom';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="overview-section">
        this will disappear when other components render
      </div>
    );
  }
}

ReactDOM.render(<Overview />, document.getElementById('overview'));
