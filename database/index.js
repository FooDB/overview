const mysql = require ('mysql');
const config = require ('./config.js');

const connection = mysql.createConnection (config);

const retreive = (query, callback) => {
  connection.query (query, (err, data) => {
    if (err) {
      console.log (err, 'error');
    } else {
      callback (null, data);
    }
  });
};

module.exports = {
  connection,
  retreive,
};
