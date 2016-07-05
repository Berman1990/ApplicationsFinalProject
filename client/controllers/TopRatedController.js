/**
 * Created by idan on 25/04/2016.
 */
moviesStoreApp.controller('topRatedController', function($http, $scope) {

    $http.get('/movies/all').success(function (data) {
        $scope.movies = data;
    });

});