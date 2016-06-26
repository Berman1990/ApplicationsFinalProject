var app = angular.module( 'moviesStoreApp', ['ngRoute','ngMaterial', 'ChatService','computerService', 'btford.socket-io'] )
    .value('nickName', 'anonymous');

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/index.html',
            controller: 'homeController'
        }).
        when('/map', {
            templateUrl: 'views/map.html',
            controller: 'mapController'
        }).
        when('/topRated', {
            templateUrl: 'views/topRated.html',
            controller: 'topRatedController'
        }).
        when('/findMovie', {
            templateUrl: 'views/find.html',
            controller: 'findCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]);
