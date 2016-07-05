/**
 * Created by idan on 24/04/2016.
 */

moviesStoreApp.controller('homeController', function($scope) {

    var c = document.getElementById("logoCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("imgForCanvas");
    ctx.drawImage(img,0,0);

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