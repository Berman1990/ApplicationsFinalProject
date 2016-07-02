/**
 * Created by idan on 24/04/2016.
 */
moviesStoreApp.controller('adminController', function($scope) {
    $scope.createCinema = function(){
        if(validateFields()) {
            $.ajax({
                method: 'POST',
                url: '/createCinemas',
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

    }

    var validateFields = function(){
        if($scope.newCinema.cinemaName === "" || $scope.newCinema.cinemaName === undefined ||
            $scope.newCinema.cinemaAddress === "" || $scope.newCinema.cinemaAddress === undefined ||
            $scope.newCinema.cinemaOpeningHours === "" || $scope.newCinema.cinemaOpeningHours === undefined)
        {
            $scope.error = "Not all fields were filled";
            return false;
        }

        return true;
    }
});