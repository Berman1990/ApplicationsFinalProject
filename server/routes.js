module.exports = function(app) {
    app.use('/', require('./routes/index'));
    app.use('/cinemas', require('./routes/cinemas'));
    app.use('/movies', require('./routes/movies'));
    app.use('/users', require('./routes/users'));
};