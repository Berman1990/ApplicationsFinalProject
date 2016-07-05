/**
 * Created by idan on 25/04/2016.
 */
moviesStoreApp.controller('moviesController', function($http, $scope) {

    $scope.allMovies = [];
    $scope.filteredMovies = [];

    $scope.getAllGroups = function(){
        $.ajax({
            method: 'GET',
            url: '/movies/groupbyyears',
            dataType: 'json',
            success: function (result) {
                $scope.allMovies = angular.copy(result);
            }
        });
    };

    $scope.getMoviesFromYear = function(year){
        $.ajax({
            method: 'POST',
            url: '/movies/search/normal',
            data: { year: year },
            dataType: 'json',
            success: function (result) {
                $scope.allMovies = angular.copy(result);
            }
        });
    }
});