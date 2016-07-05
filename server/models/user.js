/**
 * Created by matan on 03/07/2016.
 */
var db = require('../app').db;

var schema = new db.Schema({
    id: { type: Number, unique: true },
    username: String,
    password: String,
    email: Number
});

var userModel = db.model('users', schema);
module.exports = userModel;

module.exports.add = function(user) {
    new userModel(user).save(function (err) {})
};

module.exports.findAll = function(callback){
    userModel.find({}, callback);
};

module.exports.findById = function(id, callback){
    userModel.find({'id' : id}, callback);
};

module.exports.deleteById = function(id, callback){
    userModel.find({'id' : id}).remove(callback);
};

