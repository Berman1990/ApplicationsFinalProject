/**
 * Created by idan on 24/04/2016.
 */
moviesStoreApp.controller('adminController', function($scope) {

    $scope.allCinemas;


    $scope.createCinema = function(){
        if(validateFields()) {
            $.ajax({
                method: 'POST',
                url: '/cinemas/add',
                data: $scope.newCinema,
                dataType: 'json',
                success: function () {
                    $state.go('home');
                }
            });
        }
    };

    $scope.deleteCinema = function(){
            $.ajax({
                method: 'POST',
                url: '/deleteCinemas',
                data: $scope.cinemaToDelete,
                dataType: 'json',
                success: function () {
                    $state.go('home');
                }
            });
    };

    $scope.editCinema = function(){
        $.ajax({
            method: 'POST',
            url: '/editCinemas',
            data: $scope.editedCinema,
            dataType: 'json',
            success: function () {
                $state.go('home');
            }
        });
    };

    $scope.getAllCinemas = function(){
        $.ajax({
            method: 'GET',
            url: '/cinemas/all',
            dataType: 'json',
            success: function (result) {
                $scope.allCinemas = result;
            }
        });
    }

    var validateFields = function(){
        if($scope.newCinema.name === "" || $scope.newCinema.name === undefined ||
            $scope.newCinema.address === "" || $scope.newCinema.address === undefined ||
            $scope.newCinema.openingHourse === "" || $scope.newCinema.openingHourse === undefined)
        {
            $scope.error = "Not all fields were filled";
            return false;
        }

        return true;
    }
});