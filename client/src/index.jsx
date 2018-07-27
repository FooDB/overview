import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Description from './components/Description.jsx';
import LeftCol from './components/LeftCol.jsx';
import Map from './components/Map.jsx';
import RightCol from './components/RightCol.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.header = {
      name: 'Mourad',
      stars: 4.7,
      reviews: 1588,
      range: "$50 and over",
      cuisines : ["Moroccan, Californian"],
      toptags : ['Fit For Foodies', 'Creative Cuisines', 'Special Occasion']
    }
  }

  render() {
    return (
      <div id="overview-section">
        <Header data={this.header}/>
        <Description />
        <div id ="body">
          <div id="left">
            <LeftCol />
         </div>
         <div id="right">
            <Map />
            <RightCol />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Overview/>, document.getElementById('overview'));
