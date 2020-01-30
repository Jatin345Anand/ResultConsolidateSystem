const mongoose = require('mongoose');
const dbConfig = require('./config');
// mongoose.connect(dbConfig.dbURL);
const options = { user: 'maruti', pass: 'maruti23' };
const dbConn = mongoose.connect(dbConfig.dbURL, options);
// mongoose.connect(dbConfig.dbURL,dbConfig.get('mongodb.options'));
module.exports = mongoose;
