const express = require ('express');
const app = express ();
const path = require ('path');
const db = require ('../database/index.js');
const parser = require ('body-parser');

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
    response.send (data);
  });
});

app.get ('/restaurant/:id/payments', (request, response) => {
  let query = `SELECT * FROM Payment_Options WHERE rest_id = ${request.params.id};`;

  db.retreive (query, (err, data) => {
    if (err) console.log (err);
    response.send (data);
  });
});

app.get ('/restaurant/:id/cuisines', (request, response) => {
  let query = `SELECT * FROM Cuisines WHERE rest_id = ${request.params.id};`;

  db.retreive (query, (err, data) => {
    if (err) console.log (err);
    response.send (data);
  });
});

app.get ('/restaurant/:id/tags', (request, response) => {
  let query = `SELECT * FROM Tags WHERE rest_id = ${request.params.id};`;

  db.retreive (query, (err, data) => {
    if (err) console.log (err);
    response.send (data);
  });
});

app.get ('/overview/:id/hours', (request, response) => {
  let query = `SELECT * FROM Hours WHERE rest_id = ${request.params.id};`;

  db.retreive (query, (err, data) => {
    if (err) console.log (err);
    response.send (data);
  });
});

// POST handler for general
app.post('/restaurant', (request, response) => {
  let info = {
    restaurant_name: 'getRandomName ()',
    description: 'faker.lorem.sentences ()',
    telephone: 'faker.phone.phoneNumberFormat ()',
    website: 'faker.internet.url ()',
    chef: 'faker.name.findName ()',
    avg_rating: 4,
    num_ratings: 100,
    style: 'faker.lorem.words ()',
    dress_code: 'faker.lorem.words ()',
    catering: 'faker.lorem.sentences ()',
    price_range: 'faker.lorem.words ()',
    private_dining: 'faker.lorem.sentences ()',
    private_url: 'faker.internet.url ()',
    latitude: 80.4616,
    longitude: 31.6101,
    addr: 'getRandomAddress ()',
    neighborhood: 'faker.address.county ()',
    cross_street: 'faker.address.streetAddress ()',
    parking: 'faker.lorem.sentences ()',
    public_transport: 'faker.lorem.sentences ()',
  };
  
  let query = `INSERT INTO General (restaurant_name, description, telephone, website, chef,
    avg_rating, num_ratings, style, dress_code, catering, price_range, private_dining,
    private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport) 
    VALUES ('${info.restaurant_name}', '${info.description}', '${info.telephone}', '${info.website}', '${info.chef}',
    '${info.avg_rating}', '${info.num_ratings}', '${info.style}', '${info.dress_code}', '${info.catering}', '${info.price_range}', '${info.private_dining}',
    '${info.private_url}', '${info.latitude}', '${info.longitude}', '${info.addr}','${info.neighborhood}' ,'${info.cross_street}', '${info.parking}', '${info.public_transport}');`;
  
  db.postGeneral(query, (err) => {
    if (err) {
      response.status(500).send('error');
      return;
    }
    console.log('postGeneral success');
    response.status(200).send('ok');
  });
});

// PUT handler




const port = 3001;
app.listen (port, () => console.log (`App listening on port ${port}!`));