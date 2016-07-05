/**
 * Created by idan on 24/04/2016.
 */
moviesStoreApp.controller('adminController', function($scope, mapService, $http) {

    $scope.allCinemas;

    $scope.createCinema = function(){
		 mapService.getLatLeng($scope.newCinema.address, function(lat,lng) {
			$scope.newCinema.lat = lat;
			$scope.newCinema.lng = lng;

        if(validateFields()) {
            $http({
                method: 'POST',
                url: '/cinemas/add',
                data: $scope.newCinema,
                dataType: 'json'
				}).then(function () {
                $state.go('home');
            });
			}
		})
    };

    $scope.deleteCinema = function(){
            $http({
                method: 'POST',
                url: '/cinemas/delete',
                data: $scope.deletedCinema,
                dataType: 'json'
            }).then(function () {
                $state.go('home');
            });
    };

    $scope.editCinema = function(){
	    mapService.getLatLeng($scope.editedCinema.address, function(lat,lng) {
			$scope.editedCinema.lat = lat;
			$scope.editedCinema.lng = lng;
			
			$http({
				method: 'POST',
				url: '/cinemas/edit',
				data: $scope.editedCinema,
				dataType: 'json'
			}).then(function () {
                $state.go('home');
            });
		});
    };

    $scope.getAllCinemas = function(){
        $http({
            method: 'GET',
            url: '/cinemas/all',
            dataType: 'json'
        }).then(function (result) {
            $scope.allCinemas = angular.copy(result.data);
            $scope.isResponseRecieved = true;
        });
    };

    var validateFields = function(){
        if($scope.newCinema.name === "" || $scope.newCinema.name === undefined ||
            $scope.newCinema.address === "" || $scope.newCinema.address === undefined ||
            $scope.newCinema.openingHourse === "" || $scope.newCinema.openingHourse === undefined)
        {
            $scope.error = "Not all fields were filled";
            return false;
        }

        return true;
    };
	
});