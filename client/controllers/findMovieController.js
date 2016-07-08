/**
 * Created by idan on 13/05/2016.
 */
    var searchApp = angular.module('searchApp', []);
    searchApp.controller('findMovieController', function($http, $scope) {
        $scope.isNormalSearch = true;
        $scope.isAdvancedSearch = false;
        $scope.searchParams = {};
        /*
        $http.get('/movies/all').success(function (data) {
            $scope.movies = data;
        });
        */

        $scope.findMovie = function(){
            if ($scope.isNormalSearch)
            {
                $http({
                    method: 'POST',
                    url: '/movies/search/normal',
                    data: $scope.searchParams,
                    dataType: 'json'
                }).then(function (data) {
                    $scope.movies = data.data;
                });
            }
            else
            {
                $http({
                    method: 'POST',
                    url: '/movies/search/advanced',
                    data: $scope.searchParams,
                    dataType: 'json'
                }).then(function (data) {
                    $scope.movies = data.data;
                });
            }
/*
            $http.get('/movies/all').success(function (data) {
                $scope.movies = data;
            });
            */
        }

        $scope.normalSearchClicked = function() {
            $scope.isNormalSearch = true;
            $scope.isAdvancedSearch = false;
        }

        $scope.advancedSearchClicked = function() {
            $scope.isNormalSearch = false;
            $scope.isAdvancedSearch = true;
        }
    });