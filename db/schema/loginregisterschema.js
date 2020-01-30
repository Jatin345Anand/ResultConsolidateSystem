const mongoose = require('../common/connection');
var schema = mongoose.Schema;
var users = new schema({});
 
var UserModel = mongoose.model('users', users);
module.exports = UserModel;