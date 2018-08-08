const express = require ('express');
const app = express ();
const path = require ('path');
const db = require ('../database/index.js');
const parser = require ('body-parser');

app.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Headers', '*');
  res.header ('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next ();
});

app.use ('/', express.static (path.join (__dirname, '../client/dist')));
app.use (
  '/restaurant/:id',
  express.static (path.join (__dirname, '../client/dist'))
);
app.use (parser.json ());
app.use (parser.urlencoded ({extended: true}));

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

const port = 3001;
app.listen (port, () => console.log (`App listening on port ${port}!`));