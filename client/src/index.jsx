import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Description from './components/Description.jsx';
import LeftCol from './components/LeftCol.jsx';
import Map from './components/Map.jsx';
import RightCol from './components/RightCol.jsx';
import PrivateDining from './components/PrivateDining.jsx'
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //header
      restaurant_name: 'undefined',
      avg_rating: 0,
      num_ratings: 0,
      price_range: 'undefined',
      top_tags:[],
      
      //description
      description: 'undefined',

      //map
      latitude: 0.00,
      longitude: 0.00,
      
      //leftcol
      private_url: 'www.google.com',
      style: 'undefined',
      cuisines: [],
      hours:{},
      telephone: 'undefined',
      website: 'www.google.com',
      payment_options: [],
      dress_code: 'undefined',
      chef: 'undefined',
      catering: 'undefined',

      //rightcol
      neighborhood: 'undefined',
      cross_street: 'undefined',
      parking: 'undefined',
      public_transport: 'undefined',
      additional_tags:[]
      
    };
    this.getGeneralInfo = this.getGeneralInfo.bind(this);
  }

  componentDidMount() {
    this.getGeneralInfo();
    this.getPaymentInfo(); 
    this.getCuisineInfo();
    this.getTagsInfo();
    this.getHoursInfo();
  }

  getCuisineInfo() {
    axios.get(`cuisines/${2}`).then(result => {
      let info = [];
      for (let i = 0; i < result.data.length; i ++) {
        let obj = result.data[i];
        info.push(obj.cuisine);
      }

      this.setState({
        cuisines: info
      });
    }).catch(err => console.log(err));
  }

  getHoursInfo() {
    axios.get(`hours/${2}`)
    .then(result => {
      let data = result.data;
      let newHours = {};

      for(let i = 0; i < data.length; i ++) {
        let obj = data[i];
        newHours[obj.meal] = obj.day_name + ', ' + obj.time_range;
      }

      this.setState({
        hours: newHours
      });
    })
    .catch(err => console.log(err));
  }

  getTagsInfo() {
    axios.get(`tags/${2}`)
    .then(result => {

      const top = [];
      const additional = [];
      for(let i = 0; i < result.data.length; i ++) {
        let name = result.data[i].tag;
        let isTop = result.data[i].top_tag ;

        if (isTop === 1 && !top.includes(name) && !additional.includes(name)) {
          top.push(name);
        } else if (!additional.includes(name) && !top.includes(name)) {
          additional.push(name);
        }
      }

      this.setState({
        top_tags: top,
        additional_tags: additional
      });
    })
    .catch(err => console.log(err));
  }

  getGeneralInfo() {
    axios.get(`general/${2}`)
    .then(result => {
      let data = result.data[0];
      this.setState({
        restaurant_name: data.restaurant_name,
        description: data.description,
        telephone: data.telephone,
        website: data.website,
        chef:data.chef,
        avg_rating: data.avg_rating,
        num_ratings: data.num_ratings,
        style: data.style,
        dress_code: data.dress_code,
        catering: data.catering,
        price_range: data.price_range,
        private_dining: data.private_dining,
        latitude: data.latitude,
        longitude: data.longitude,
        addr: data.addr,
        neighborhood: data.neighborhood, 
        cross_street: data.cross_street,
        parking: data.parking,
        public_transport: data.public_transport,
        neighborhood:data.neighborhood
      });
    })
    .catch(err => console.log(err));
  }

  getPaymentInfo() {
    axios.get(`payments/${2}`)
    .then(result => {
      let data = result.data;

      const options = [];
      for(let i = 0; i < data.length; i ++) {
        if(!options.includes(data[i].opt)) {
          options.push(data[i].opt);
        }
      }

      this.setState({
        payment_options: options
      });
    })
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div id="overview-section">
        <Header data={
          {
            name: this.state.restaurant_name,
            stars: this.state.avg_rating,
            reviews: this.state.num_ratings,
            range: this.state.price_range,
            top: this.state.top_tags,
            cuisine: this.state.cuisines[0]
          }
        }/>
        <Description description={this.state.description}/>
        <div id ="body">
          <div id="left">
            <LeftCol data = {
              {
                private_url: this.state.private_url,
                style: this.state.style,
                cuisines: this.state.cuisines,
                hours: this.state.hours,
                telephone: this.state.telephone,
                website: this.state.website,
                payment_options: this.state.payment_options,
                dress_code: this.state.dress_code,
                chef: this.state.chef,
                catering: this.state.catering
              }
            }/>
         </div>
         <div id="right">
            <Map data = {
              {
                longitude: this.state.longitude,
                latittude: this.state.latitude
              }
            }/>
            <RightCol data ={
              {
                addr: this.state.addr,
                neighborhood: this.state.neighborhood,           
                cross_street: this.state.cross_street,
                parking: this.state.parking,
                public_transport: this.state.public_transport,
                additional: this.state.additional_tags
              }
            }/>
          </div>
        </div>
        <div id="bottom">
            <PrivateDining description={this.state.private_dining}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Overview/>, document.getElementById('overview'));
