
/**
 * Created by idan on 24/04/2016.
 */
moviesStoreApp.service('mapService', function() {

	this.getLatLeng = function(address, callback)
	{
        var strLink = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAuW9c5XjRG4VPXzUQ5tF0Sjv6Vdgmz1Sc"
        $.get(strLink, function (data, status) {
            callback(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
        });
	}
});

moviesStoreApp.controller('mapController', function($scope, mapService, $http) {

	$scope.allCinemas = [];
	
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
});

var map;

function getInfoWindow(cinema)
{
	var contentString = '<div id="content">'+
						'<div id="siteNotice">'+
						'</div>'+
						'<h1 id="firstHeading" class="firstHeading">' + cinema.name + '</h1>'+
						'<div id="bodyContent">'+
						'<p><b>' + cinema.name + '</b></p>'+
						'<p>Adress: ' + cinema.address + '</p>' +
						'<p>Opening Hourse: ' + cinema.openingHourse + '</p>' +
						'</div>'+
						'</div>';
	return contentString;
}

function addInfoWindow(marker, message) {
	var infoWindow = new google.maps.InfoWindow({
		content: message
	});

	marker.addListener('click', function () {
		infoWindow.open(map, marker);
	});
}

function initAutocomplete() {
	
	// Init map
	map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(31.501857, 35.141051),
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	// Load Cinemas
	$.get('/cinemas/all', function(cinemas) {
		for (var i = 0; i < cinemas.length; i++) {
			var cinema = cinemas[i];
			var marker = new google.maps.Marker({
				position: {lat: cinema.lat, lng: cinema.lng},
				map: map,
				animation: google.maps.Animation.DROP,
				title: cinema.name
			});

			var info = getInfoWindow(cinema)
			addInfoWindow(marker,info);
		}
	});

	// Create the search box and link it to the UI element.
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() {
		searchBox.setBounds(map.getBounds());
	});

	var markers = [];
	// Listen for the event fired when the user selects a prediction and retrieve
	// more details for that place.
	searchBox.addListener('places_changed', function() {
		var places = searchBox.getPlaces();

		if (places.length == 0) {
			return;
		}

		// Clear out the old markers.
		markers.forEach(function(marker) {
			marker.setMap(null);
		});
		markers = [];

		// For each place, get the icon, name and location.
		var bounds = new google.maps.LatLngBounds();
		places.forEach(function(place) {
			var icon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			// Create a marker for each place.
			markers.push(new google.maps.Marker({
				map: map,
				icon: icon,
				title: place.name,
				position: place.geometry.location
			}));


			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
	});
}