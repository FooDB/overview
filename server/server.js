const express = require('express')
const app = express();
const path = require('path');
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(3001, () => console.log('App listening on port 3001!'));
