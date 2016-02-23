// require('angular')
(function(){

	function TestCtrl() {
		var self = this;
		self.myString = "Hello world";
		self.email = "";
	}

	function CapitalizeFilter() {
		return function (text) {
			return text.toUpperCase() ;
		}
	}

	function IsValidEmail() {
		return function(email) {
			return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email) ? "Válido" : "Inválido";
		}
	}

	var app = angular.module('app', []);

	app.controller('TestCtrl', TestCtrl);

	app.filter('capitalize', CapitalizeFilter);
	app.filter('validEmail', IsValidEmail);

}) ();