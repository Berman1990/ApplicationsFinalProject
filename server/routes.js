module.exports = function(app) {
    app.use('/', require('./routes/index'));
    app.use('/api/cinemas', require('./routes/cinemas'));
    app.use('/api/movies', require('./routes/movies'));
    app.use('/api/users', require('./routes/users'));
};