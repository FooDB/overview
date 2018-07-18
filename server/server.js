const express = require('express');
const db = require('../database/index.js');
const app = express();

app.use(express.static('public'));

app.listen(3001, () => console.log('App listening on port 3001!'));
