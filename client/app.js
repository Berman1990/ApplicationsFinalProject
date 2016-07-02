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
                // Posts list state. This state is child of posts state
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'homeController'
            })
        .state('map', {
            // Posts info state. This state is child of posts state
            url: '/map',
            templateUrl: 'views/map.html',
        })
        .state('authors', {
            // Authors state. This state will contain multiple views
            url: '/authors',
            views: {
                // Main template. It will be placed in the ui-view of the index.html file when /authors url is visited (relatively named)
                '': { template: '<div class="jumbotron text-center"><h1>Authors page</h1><p>This page shows a list of popular and recent authors and it is intended to show the use of Multiple Views.</p></div><div class="row">   <!-- Popular authors named view -->   <div class="col-sm-6">     <div ui-view="popular"></div>   </div>   <!-- Recent authors named view -->   <div class="col-sm-6">      <div ui-view="recent"></div>   </div></div>' },

                // popular child view. Absolutely named. It will be injected in the popular ui-view of authors state
                'popular@authors': {
                    template: '<ul><li ng-repeat="author in authors">{{author.name}} {{author.surname}}</li></ul>',
                    controller: ['$scope', function($scope) {
                        $scope.authors = [
                            {name: 'John', surname: 'Benneth'},
                            {name: 'Anthony', surname: 'Horner'},
                            {name: 'James', surname: 'Blanch'},
                            {name: 'Harrison', surname: 'Williams'},
                        ];
                    }]
                },

                // recent child view. Absolutely named. It will be injected in the recent ui-view of authors state
                'recent@authors': { template: 'No recent authors since last month' }
            }
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