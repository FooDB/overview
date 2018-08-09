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

const postGeneral = (query, callback) => {
  connection.query(query, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const updateGeneral = (query, callback) => {
  connection.query(query, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const deleteGeneral = (query, callback) => {
  connection.query(query, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

module.exports = {
  connection,
  retreive,
  postGeneral,
  updateGeneral,
  deleteGeneral,
};
