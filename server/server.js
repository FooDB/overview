const express = require ('express');
const app = express ();
const path = require ('path');
const db = require ('../database/index.js');
const parser = require ('body-parser');
const gen = require('../database/new_data_generator.js');

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

// GET handler
app.get ('/restaurant/:id/general', (request, response) => {
  let query = `SELECT * FROM General WHERE id = ${request.params.id};`;

  db.retreive (query, (err, data) => {
    if (err) {
      console.log(err);
      response.status(500).send('retrieve error');
      return;
    };

    if(data[0] !== undefined) {
      // handle payment_options 
      data[0].payment_options = data[0].payment_options.split(',');
      
      //handle cuisines
      data[0].cuisines = data[0].cuisines.split(',');
  
      //handle tags
      data[0].top_tags = data[0].top_tags.split(',');
      data[0].additional_tags = data[0].additional_tags.split(',');
  
      //handle hours
      data[0].hours = data[0].hours.split(',');
    }

    response.send(data);
  });
});

// POST handler for general
app.post('/api/restaurant/post/general', (request, response) => {
  const info = gen.generalInfo();
  
  let query = `INSERT INTO General (restaurant_name, description, telephone, website, chef,
    avg_rating, num_ratings, style, dress_code, catering, price_range, private_dining,
    private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) 
    VALUES ('${info.restaurant_name}', '${info.description}', '${info.telephone}', '${info.website}', '${info.chef}',
    '${info.avg_rating}', '${info.num_ratings}', '${info.style}', '${info.dress_code}', '${info.catering}', '${info.price_range}', '${info.private_dining}',
    '${info.private_url}', '${info.latitude}', '${info.longitude}', '944 Market Street', '${info.neighborhood}', '945 Market Street', '${info.parking}', '${info.public_transport}',
    '${info.payment_options}', '${info.cuisines}', '${info.top_tags}', '${info.additional_tags}', '${info.hours}');`;

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
  const info = gen.generalInfo();

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
      public_transport = '${info.public_transport}',
      payment_options = '${info.payment_options}',
      cuisines = '${info.cuisines}',
      top_tags = '${info.top_tags}',
      additional_tags = '${info.additional_tags}',
      hours = '${info.hours}' WHERE id = ${targetId};
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
