const mongoose = require('../common/connection');
var schema = mongoose.Schema;
var nstudents = new schema({});
 
var StudentModel = mongoose.model('nstudents', nstudents);
module.exports = StudentModel;