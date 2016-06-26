/**
 * Created by idan on 24/04/2016.
 */
var moviesStore = angular.module('moviesStoreApp',[]);

moviesStore.controller('homeController', function($scope) {
    $scope.menuItems = ['Home', 'Contact', 'about', 'Other'];
    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem
    }
});