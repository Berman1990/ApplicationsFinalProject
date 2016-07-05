/**
 * Created by matan on 02-Jul-16.
 */
moviesStoreApp
    .controller('loginController',['$scope','$state','$resource','loginService', '$http', function ($scope, $state,$resource, loginService, $http) {
    var user = loginService.getLoggedUser();
    if(user != null)
    {
        $scope.user = JSON.parse(user);
    }else {
        $scope.user = undefined;
    }
    $scope.error = "";
    $scope.loginDetails = {
        userName: "",
        password: ""
    };
    var validateLoginFields = function(){
        if($scope.loginDetails.userName === "" || $scope.loginDetails.userName === undefined ||
            $scope.loginDetails.password === "" || $scope.loginDetails.password === undefined)
        {
            $scope.error = "Not all fields were filled";
            return false;
        }
        return true;
    };
    var validateFields = function(){
        if($scope.user.userName === "" || $scope.user.userName === undefined ||
            $scope.user.email === "" || $scope.user.email === undefined ||
            $scope.user.password === "" || $scope.user.password === undefined)
        {
            $scope.error = "Not all fields were filled";
            return false;
        }
        else if($scope.user.password != $scope.user.scndPassword){
            $scope.error = "Passwords dont match";
            return false;
        }
        return true;
    };

    $scope.login = function (){
        if(validateLoginFields())
        {
            $http({
                method   : 'POST',
                url      : '/login',
                data     : $scope.loginDetails,
                dataType : 'json'
            }).then(function(user) {
                if(user.data)
                {
                    loginService.setLoggedUSer(user.data);
                    $state.go('home');
                }
                else {
                    $scope.error = "Username or password were wrong";
                    $scope.$apply();
                }
            });
        }
    };

    $scope.register = function(){
        if(validateFields())
        {
            $http({
                method   : 'POST',
                url      : '/users/add',
                data     : JSON.stringify($scope.user),
                dataType : 'json'
            }).then(function(result) {
                if(result.error != null || result.error != undefined)
                {
                    $scope.error = "Username taken";
                    $scope.$apply();
                }else {
                    loginService.setLoggedUSer(result.data);
                    $state.go('home');
                }
            });
        }
    }
    if($scope.user != null)
    {
        $scope.userDetails = $scope.user;
    }
    else
    {
        $scope.userDetails = {};
    }
}]);

moviesStoreApp.service('loginService',['$cookies', '$state', function($cookies,$state) {
        var setLoggedUSer = function(usr){
            $cookies.put("loggedUser", JSON.stringify(usr));
        };

        var getLoggedUser = function(){
            return $cookies.get("loggedUser");
        };

        var logout = function(){
            $cookies.remove("loggedUser");
            $state.go('home');
        };

        return {
            setLoggedUSer: setLoggedUSer,
            getLoggedUser: getLoggedUser,
            logout: logout
        };
    }]
);