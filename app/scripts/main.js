// require('angular')
(function(){
	var FormController = require('./controllers/FormController');

	var app = angular.module('app', ['ui.bootstrap']);

	app.controller('FormController', ['$scope', FormController]);

}) ();