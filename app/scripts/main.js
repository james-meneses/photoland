// require('angular')
(function(){
	require('./controllers/MainController')

	var app = angular.module('app', []);

	app.controller('MainController', MainController);

}) ();