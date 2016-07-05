/**
 * Created by idan on 25/04/2016.
 */
moviesStoreApp.controller('moviesController', function($http, $scope) {

    $scope.allMovies = [];
    $scope.filteredMovies = [];

    $scope.getAllGroups = function(){
        $http({
            method: 'GET',
            url: '/movies/groupbyyears',
            dataType: 'json'
        }).then(function (result) {
            $scope.allMovies = angular.copy(result.data);
        });
    };

    $scope.getMoviesFromYear = function(year){
        $http({
            method: 'POST',
            url: '/movies/search/normal',
            data: { year: year },
            dataType: 'json',
        }).then(function (result) {
            $scope.filteredMovies = angular.copy(result.data);
        });
    }
});