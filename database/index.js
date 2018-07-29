const mysql = require('mysql');
const config = require('./config.js');


const connection = mysql.createConnection(config);

const  retrive = (query, callback) => {
    connection.query(query, (err, data) => {
        if (err) {
            console.log(err, 'error');
        } else {
            callback(null, data);
        }
    });
};

const insert = (query, callback) => {
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err, 'error');
        } else {
            callback(null, result);
        }
    });
};

module.exports = {
    connection,
    retrive,
    insert,
};