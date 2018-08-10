const express = require ('express');
const app = express ();
const path = require ('path');
const db = require ('../database/index.js');
const parser = require ('body-parser');
const faker = require ('faker');

app.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Headers', '*');
  res.header ('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next ();
});

app.use ('/', express.static (path.join (__dirname, '../client/dist')));
app.use (
  '/restaurant/:id',
  express.static (path.join (__dirname, '../client/dist'))
);
app.use (parser.json ());
app.use (parser.urlencoded ({extended: true}));

// GET handlers
app.get ('/restaurant/:id/general', (request, response) => {
  console.log (request.body);
  let query = `SELECT * FROM General WHERE id = ${request.params.id};`;

  db.retreive (query, (err, data) => {
    if (err) console.log (err);

    // handle payment_options 
    data[0].payment_options = data[0].payment_options.split(',');
    
    //handle cuisines
    data[0].cuisines = data[0].cuisines.split(',');

    //handle tags
    data[0].top_tags = data[0].top_tags.split(',');
    data[0].additional_tags = data[0].additional_tags.split(',');

    //handle hours
    data[0].hours = data[0].hours.split(',');

    response.send(data);
  });
});

// app.get ('/overview/:id/hours', (request, response) => {
//   let query = `SELECT * FROM Hours WHERE rest_id = ${request.params.id};`;

//   db.retreive (query, (err, data) => {
//     if (err) console.log (err);
//     response.send (data);
//   });
// });

// generate random general info
const generalInfo = () => {
  let info = {
    restaurant_name: 'Restaurant',
    description: faker.lorem.sentences().replace(",", " "),
    telephone: faker.phone.phoneNumberFormat (),
    website: faker.internet.url (),
    chef: faker.name.firstName (),
    avg_rating: Math.floor (Math.random () * 5),
    num_ratings: Math.floor (Math.random () * 10000),
    style: faker.lorem.words (),
    dress_code: faker.lorem.words (),
    catering: faker.lorem.sentences().replace(",", " "),
    price_range: faker.lorem.words (),
    private_dining: faker.lorem.sentences().replace(",", " "),
    private_url: faker.internet.url (),
    latitude: faker.address.latitude (),
    longitude: faker.address.longitude (),
    addr: '944 Market Street',
    neighborhood: faker.address.county (),
    cross_street: '945 Market Street',
    parking: faker.lorem.sentences().replace(",", " "),
    public_transport: faker.lorem.sentences().replace(",", " "),
  };

  return info;
};

// POST handler for general
app.post('/api/restaurant/post/general', (request, response) => {
  const info = generalInfo();
  
  const query = `INSERT INTO General (restaurant_name, description, telephone, website, chef,
    avg_rating, num_ratings, style, dress_code, catering, price_range, private_dining,
    private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport) 
    VALUES ('${info.restaurant_name}', '${info.description}', '${info.telephone}', '${info.website}', '${info.chef}',
    '${info.avg_rating}', '${info.num_ratings}', '${info.style}', '${info.dress_code}', '${info.catering}', '${info.price_range}', '${info.private_dining}',
    '${info.private_url}', '${info.latitude}', '${info.longitude}', '${info.addr}','${info.neighborhood}' ,'${info.cross_street}', '${info.parking}', '${info.public_transport}');`;
  
  db.postGeneral(query, (err) => {
    if (err) {
      console.log(err);
      response.status(500).send('postGeneral error');
      return;
    }
    response.status(201).send('postGeneral ok');
  });
});

// PUT handler
app.put('/api/restaurant/:id/general', (request, response) => {
  const targetId = request.params.id;
  const info = generalInfo();
  const query = 
    `UPDATE General SET 
      restaurant_name = '${info.restaurant_name}',
      description = '${info.description}',
      telephone = '${info.telephone}',
      website = '${info.website}',
      chef = '${info.chef}',
      avg_rating = '${info.avg_rating}',
      num_ratings = '${info.num_ratings}',
      style = '${info.style}',
      dress_code = '${info.dress_code}',
      catering = '${info.catering}',
      price_range = '${info.price_range}',
      private_dining = '${info.private_dining}',
      private_url = '${info.private_url}',
      latitude = '${info.latitude}',
      longitude = '${info.longitude}',
      addr = '${info.addr}',
      neighborhood = '${info.neighborhood}',
      cross_street = '${info.cross_street}',
      parking = '${info.parking}',
      public_transport = '${info.public_transport}' WHERE id = ${targetId};
    `

  db.updateGeneral(query, (err) => {
    if (err) {
      console.log(err);
      response.status(500).send('updateGeneral error');
      return;
    }
    response.status(200).send('updateGeneral ok');
  })
})

// DELETE handler
app.delete('/api/restaurant/:id/general', (request, response) => {
  const targetId = request.params.id;
  const query = `DELETE from General WHERE id = ${targetId};`

  db.deleteGeneral(query, (err) => {
    if (err) {
      console.log(err);
      response.status(500).send('deleteGeneral error');
      return;
    }
    response.status(200).send('deleteGeneral ok');
  })
})

const port = 3001;
app.listen (port, () => console.log (`App listening on port ${port}!`));
