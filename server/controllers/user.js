var usersModel = require('../models/user');



module.exports.add = function(user) {
    usersModel.add(user);
};

module.exports.findAll = function(callback){
    usersModel.findAll(function (err, users) {
        if (err) {
            callback("server error");
        }
        else {
            callback(users);
        }
    });
};

module.exports.findById = function(id, callback){
    usersModel.findById(id, function (err, users) {
        if (err) {
            callback("server error");
        }
        else {
            callback(users);
        }
    });
};

module.exports.deleteById = function(id, callback){
    usersModel.deleteById(id, function (err, users) {
        if (err) {
            callback("server error");
        }
        else {
            callback(users);
        }
    });
};