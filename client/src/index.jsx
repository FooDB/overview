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
      
      //description
      description: 'undefined',

      //map
      latitude: 0.00,
      longitude: 0.00,
      
      //leftcol
      private_url: 'www.google.com',
      style: 'undefined',
      telephone: 'undefined',
      website: 'www.google.com',
      dress_code: 'undefined',
      chef: 'undefined',
      catering: 'undefined',

      //rightcol
      neighborhood: 'undefined',
      cross_street: 'undefined',
      parking: 'undefined',
      public_transport: 'undefined'
      
    };
    this.getGeneralInfo = this.getGeneralInfo.bind(this);
  }

  componentDidMount() {
    this.getGeneralInfo();
    // this.getPaymentInfo();
    // this.getCuisineInfo();
    // this.getTagsInfo();
    // this.getHoursInfo();
  }

  getGeneralInfo() {
    axios.get(`general/${2}`)
    .then(result => {
      let data = result.data[0];
      console.log(data);
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
  
  render() {
    return (
      <div id="overview-section">
        <Header data={
          {
            name: this.state.restaurant_name,
            stars: this.state.avg_rating,
            reviews: this.state.num_ratings,
            range: this.state.price_range
          }
        }/>
        <Description description={this.state.description}/>
        <div id ="body">
          <div id="left">
            <LeftCol data = {
              {
                private_url: this.state.private_url,
                style: this.state.style,
                telephone: this.state.telephone,
                website: this.state.website,
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
                public_transport: this.state.public_transport
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
