const { Pool } = require('pg');

const config = {
  // user: 'Brian',
  // password: '',
  // host: 'localhost',
  user: 'power_user',
  password: 'password',
  host: 'ec2-18-206-120-195.compute-1.amazonaws.com',
  database: 'generaldb',
  port: 5432,
};

const pool = new Pool(config);

const retreive = (query, callback) => {
  pool.query (query, (err, data) => {
    if (err) {
      console.log (err, 'error');
    } else {
      callback (null, data['rows']);
    }
  });
};

const postGeneral = (query, callback) => {
  pool.query(query, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

module.exports = {
  retreive,
  postGeneral,
};
