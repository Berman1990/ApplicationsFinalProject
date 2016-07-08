/**
 * Created by idan on 24/04/2016.
 */

moviesStoreApp.controller('homeController', function($scope) {

    $scope.menuItems = [{displayName: 'Home', link: "#"},
        {displayName: 'Contact', link: "/contact"},
        {displayName: 'About', link: "/about"},
        {displayName: 'Other', link: "/other"}];
    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem
    }

    $scope.initLogo = function() {
        var canvas = document.getElementById("logoCanvas");
        var context = canvas.getContext("2d");

        var img = new Image();
        img.src = document.getElementById("imgForCanvas").src;

        img.onload = function () {
            context.drawImage(img, 0, 0);
        };
    }
});