/**
 * Created by matan on 01-Jul-16.
 */

var moviesStoreApp = angular.module( 'moviesStoreApp',
    [
        'uiRouterApp',
        'ngAnimate',
        'ngResource',
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
    socket.on('newsNotification', function (news) 
	{
		pausecontent2.shift(); 
		pausecontent2.push("<b>" + new Date().toLocaleTimeString() + "   -   " + news + "</b>");
		console.log(news);
    });
});
