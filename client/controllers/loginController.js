/**
 * Created by matan on 02-Jul-16.
 */
moviesStoreApp
    .controller('loginController',['$scope','$state','$resource','loginService', function ($scope, $state,$resource, loginService) {
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
            $.ajax({
                method   : 'POST',
                url      : '/login',
                data     : $scope.loginDetails,
                dataType : 'json',
                success: function(user) {
                    if(user)
                    {
                        loginService.setLoggedUSer(user);
                        $state.go('home');
                    }
                    else {
                        $scope.error = "Username or password were wrong";
                        $scope.$apply();
                    }
                }
            });
        }
    };

    $scope.register = function(){
        if(validateFields())
        {
            $.ajax({
                method   : 'POST',
                url      : '/register',
                data     : $scope.user,
                dataType : 'json',
                success: function(result) {
                    if(result.error != null || result.error != undefined)
                    {
                        $scope.error = "Username taken";
                        $scope.$apply();
                    }else {
                        loginService.setLoggedUSer(result);
                        $state.go('home');
                    }
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
            logout: logout,
        };
    }]
);