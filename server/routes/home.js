/**
 * Created by matan on 01-Jul-16.
 */
'use strict';

module.exports = function(app) {
    var home = require('../model/home');
    app.route('/')
        .get(home.render);

    app.route('/home')
        .get(home.render);
}