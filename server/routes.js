module.exports = function(app) {
    app.use('/cinemas', require('./routes/cinemas'));
    app.use('/movies', require('./routes/movies'));
    app.use('/users', require('./routes/users'));
};