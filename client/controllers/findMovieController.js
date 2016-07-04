/**
 * Created by idan on 13/05/2016.
 */

    moviesStoreApp.controller('findMovieController', function($http, $scope) {
        $scope.stages = [];

        $http.get('/movies/all').success(function (data) {
            $scope.movies = data;
        });

    });