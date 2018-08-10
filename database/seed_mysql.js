const db = require ('./index.js');
const gen = require('./new_data_generator.js');

const insertOverviews = () => {
  for (let i = 0; i < 100; i++) {
    let general = gen.generalInfo();

    let generalQuery = `INSERT INTO General (restaurant_name, description, telephone, website, chef,
      avg_rating, num_ratings, style, dress_code, catering, price_range, private_dining,
      private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) 
      VALUES ('${general.restaurant_name}', '${general.description}', '${general.telephone}', '${general.website}', '${general.chef}',
      '${general.avg_rating}', '${general.num_ratings}', '${general.style}', '${general.dress_code}', '${general.catering}', '${general.price_range}', '${general.private_dining}',
      '${general.private_url}', '${general.latitude}', '${general.longitude}', '944 Market Street', '${general.neighborhood}', '945 Market Street', '${general.parking}', '${general.public_transport}',
      '${general.payment_options}', '${general.cuisines}', '${general.top_tags}', '${general.additional_tags}', '${general.hours}');`;

    db.connection.query (generalQuery, (err, result) => {
      if (err) {
        console.log('general', err);
        throw err;
      } else {
        // console.log ('general');
      }
    });
  }
};

insertOverviews();
