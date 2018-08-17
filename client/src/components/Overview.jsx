import React from 'react';
import Header from './Header.jsx';
import Description from './Description.jsx';
import LeftCol from './LeftCol.jsx';
import GoogleMap from './GoogleMap.jsx';
import RightCol from './RightCol.jsx';
import PrivateDining from './PrivateDining.jsx';
import ColumnElement from './ColumnElement.jsx';
import defaultData from '../defaultData.js';
import styles from './Overview.css';
import axios from 'axios';

class Overview extends React.Component {
  constructor (props) {
    super (props);
    this.state = defaultData;
  }

  getIDFromURL () {
    return window.location.pathname.split ('/')[2];
  }

  componentDidMount () {
    const num = this.getIDFromURL ();
    console.log ('hello num', num);
    this.getGeneralInfo (num);
    this.setState ({num});
  }

  getGeneralInfo (id) {
    axios
      .get (`/restaurant/${id}/general`)
      .then (result => {
        let data = result.data[0];
        console.log('axios data', data);
        this.setState (data);
      })
      .catch (err => console.log (err));
  }

  render () {
    return (
      <div id="overview-section">
        <Header
          name={this.state.restaurant_name}
          stars={this.state.avg_rating}
          reviews={this.state.num_ratings}
          range={this.state.price_range}
          top={this.state.top_tags}
          cuisine={this.state.cuisines[0]}
        />
        <Description description={this.state.description} />
        <div id="body">
          <div id="left">
            <LeftCol
              private_url={this.state.private_url}
              style={this.state.style}
              cuisines={this.state.cuisines}
              hours={this.state.hours}
              telephone={this.state.telephone}
              website={this.state.website}
              payment_options={this.state.payment_options}
              dress_code={this.state.dress_code}
              chef={this.state.chef}
              catering={this.state.catering}
            />
          </div>
          <div id="right">
            <GoogleMap
              longitude={this.state.longitude}
              latitude={this.state.latitude}
            />
            <RightCol
              addr={this.state.addr}
              neighborhood={this.state.neighborhood}
              cross_street={this.state.cross_street}
              parking={this.state.parking}
              public_transport={this.state.public_transport}
              additional={this.state.additional_tags}
            />
          </div>
        </div>
        <div id="bottom">
          <PrivateDining description={this.state.private_dining} />
        </div>
      </div>
    );
  }
}

export default Overview;
