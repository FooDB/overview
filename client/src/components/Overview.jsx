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

const getIDFromURL = () => window.location.pathname.split ('/')[2];

class Overview extends React.Component {
  constructor (props) {
    super (props);
    this.state = defaultData;
    this.getGeneralInfo = this.getGeneralInfo.bind (this);
  }

  componentDidMount () {
    const num = getIDfromURL ();
    this.getGeneralInfo (num);
    this.getPaymentInfo (num);
    this.getCuisineInfo (num);
    this.getTagsInfo (num);
    this.getHoursInfo (num);
    this.setState ({num});
  }

  getCuisineInfo (id) {
    axios
      .get (`/overview/${id}/general`)
      .then (result => {
        let info = [];
        for (let i = 0; i < result.data.length; i++) {
          let obj = result.data[i];
          info.push (obj.cuisine);
        }

        this.setState ({
          cuisines: info,
        });
      })
      .catch (err => console.log (err));
  }

  getHoursInfo (id) {
    axios
      .get (`/overview/${id}/hours`)
      .then (result => {
        let data = result.data;
        let newHours = {};

        for (let i = 0; i < data.length; i++) {
          let obj = data[i];
          newHours[obj.meal] = obj.day_name + ', ' + obj.time_range;
        }

        this.setState ({
          hours: newHours,
        });
      })
      .catch (err => console.log (err));
  }

  getTagsInfo (id) {
    axios
      .get (`/overview/${id}/tags`)
      .then (result => {
        const top = [];
        const additional = [];
        for (let i = 0; i < result.data.length; i++) {
          let name = result.data[i].tag;
          let isTop = result.data[i].top_tag;

          if (
            isTop === 1 &&
            !top.includes (name) &&
            !additional.includes (name)
          ) {
            top.push (name);
          } else if (!additional.includes (name) && !top.includes (name)) {
            additional.push (name);
          }
        }

        this.setState ({
          top_tags: top,
          additional_tags: additional,
        });
      })
      .catch (err => console.log (err));
  }

  getGeneralInfo (id) {
    axios
      .get (`/overview/${id}/general`)
      .then (result => {
        let data = result.data[0];
        this.setState (data);
      })
      .catch (err => console.log (err));
  }

  getPaymentInfo (id) {
    axios
      .get (`/overview/${id}/payments`)
      .then (result => {
        let data = result.data;

        const options = [];
        for (let i = 0; i < data.length; i++) {
          if (!options.includes (data[i].opt)) {
            options.push (data[i].opt);
          }
        }

        this.setState ({
          payment_options: options,
        });
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
