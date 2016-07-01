/**
 * Created by idan on 24/04/2016.
 */
var moviesStore = angular.module('moviesStoreApp',[]);

moviesStore.controller('homeController', function($scope) {
    $scope.menuItems = [{displayName: 'Home', link: "#"},
        {displayName: 'Contact', link: "/contact"},
        {displayName: 'About', link: "/about"},
        {displayName: 'Other', link: "/other"}];
    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem
    }

    $scope.login = function(usere) {

    }
});