const express = require('express')
const app = express();
const path = require('path');
const db = require('../database/index.js');
const parser = require('body-parser');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));


app.listen(3001, () => console.log('App listening on port 3001!'));


app.get('/general/:id', (request, response) => {
    let query = `SELECT * FROM General WHERE id = ${request.params.id};`;

    db.retreive(query, (err, data) => {
        if (err) console.log(err);
        response.send(data);
    });
});

app.get('/payments/:id', (request, response) => {
    let query = `SELECT * FROM Payment_Options WHERE rest_id = ${request.params.id};`;

    db.retreive(query, (err, data) => {
        if (err) console.log(err);
        response.send(data);
    });
});

app.get('/cuisines/:id', (request, response) => {
    let query = `SELECT * FROM Cuisines WHERE rest_id = ${request.params.id};`;

    db.retreive(query, (err, data) => {
        if (err) console.log(err);
        response.send(data);
    });
});

app.get('/tags/:id', (request, response) => {
    let query = `SELECT * FROM Tags WHERE rest_id = ${request.params.id};`;

    db.retreive(query, (err, data) => {
        if (err) console.log(err);
        response.send(data);
    });
});

app.get('/hours/:id', (request, response) => {
    let query = `SELECT * FROM Hours WHERE rest_id = ${request.params.id};`;

    db.retreive(query, (err, data) => {
        if (err) console.log(err);
        response.send(data);
    });
});
