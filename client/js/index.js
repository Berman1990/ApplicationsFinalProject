/**
 * Created by matan on 01-Jul-16.
 */

var moviesStoreApp = angular.module( 'moviesStoreApp',
    [
        'uiRouterApp',
        'ngAnimate',
        'ngResource',
        'ngMaterial',
        'ngCookies',
        'ngMaterial'
    ] );
	
var socket = io.connect('http://localhost:8000', 
{
    'sync disconnect on unload': true
});
window.onbeforeunload = function () 
{
    socket.disconnect();
};

moviesStoreApp.run(function () 
{
    socket.on('notification', function (news) 
	{
		console.log(news);
    });
});
