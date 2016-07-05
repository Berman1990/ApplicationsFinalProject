var uiRouterApp = angular.module('uiRouterApp',
    [
        'ui.router'
    ]);

uiRouterApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',
            {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
        .state('about',
            {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'homeController'
            })
        .state('findMovie',
        {
            url: '/findMovie',
            templateUrl: 'views/findMovie.html',
            controller: 'findMovieController'
        })
        .state('topRated',
            {
                url: '/topRated',
                templateUrl: 'views/topRated.html',
                controller: 'topRatedController'
            })
        .state('map',
            {
                url: '/map',
                templateUrl: 'views/map.html'
            })
        .state('login',
            {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })
        .state('register',
            {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'loginController'
            })
        .state('editCinemas',
            {
                url: '/editCinemas',
                templateUrl: 'views/editCinemas.html',
                controller: 'adminController'
            })
        .state('createCinemas',
            {
                url: '/createCinemas',
                templateUrl: 'views/createCinemas.html',
                controller: 'adminController'
            })
        .state('deleteCinemas',
            {
                url: '/deleteCinemas',
                templateUrl: 'views/deleteCinemas.html',
                controller: 'adminController'
            });
});




// angular.module('uiRouterApp', ['ui.router']).
// config(['$stateProvider', '$urlRouterProvider',
//     function ($stateProvider,   $urlRouterProvider) {
//         $urlRouterProvider
//             .otherwise('/');
//
//         $stateProvider
//         // home page
//             .state('home', {
//                 url: '/',
//                 template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
//                 '<p>Use the menu above to navigate. ' +
//                 'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
//                 '<p>Click these links—<a href="#/c?id=1">Alice</a> or ' +
//                 '<a href="#/user/42">Bob</a>—to see a url redirect in action.</p>'
//             }).
//         state('about', {
//             url: '/about',
//             templateUrl: '../views/about.html',
//             controller: 'homeController'
//         }).
//         state('contact', {
//             url: '/getAllMovies',
//             templateUrl: 'templates/allMovies.html',
//             controller: 'mediaController'
//         }).
//         state('getAllSeries', {
//             url: '/getAllSeries',
//             templateUrl: 'templates/allSeries.html',
//             controller: 'mediaController'
//         }).
//         state('mediaDetails',
//             {
//                 url:'/mediaDetails/:mediaId',
//                 templateUrl:'templates/mediaDetails.html',
//                 controller: 'mediaController'
//             }).
//         state('updateUser',
//             {
//                 url:'/updateUser',
//                 templateUrl:'templates/userDetails.html',
//                 controller: 'userController'
//             }).
//         state('register',
//             {
//                 url:'/register',
//                 templateUrl:'templates/register.html',
//                 controller: 'userController'
//             }).
//         state('login',
//             {
//                 url:'/login',
//                 templateUrl:'templates/login.html',
//                 controller: 'userController'
//             }).
//         state('addMedia',
//             {
//                 url:'/addMedia',
//                 templateUrl:'templates/addMedia.html',
//                 controller:'addMediaController'
//             }).
//         state('statistics',
//             {
//                 url:'/statistics',
//                 templateUrl:'templates/statistics.html',
//                 controller:'statisticsController'
//             }).
//         state('addComment',
//             {
//                 url:'/addComment',
//                 templateUrl:'templates/mediaDetails.html',
//                 controller:'mediaController'
//             }).
//         state('/deleteUser/:id',
//             {
//                 url:'/deleteUser/:id',
//                 templateUrl:'templates/userDetails.html',
//                 controller:'userController'
//             })
//     }]);
//