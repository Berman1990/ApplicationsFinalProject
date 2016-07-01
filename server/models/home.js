/**
 * Created by matan on 01-Jul-16.
 */
var fs = require('fs');

var media = global.myDb.collection('media');

exports.render = function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../client/views/', 'index.html'));
};