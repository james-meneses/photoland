// require('angular')
(function(){

	var app = angular.module('app', []);

	app.directive("welcome", function() {
		return {
			restrict: "A",
			link: function() {
				alert("Hey there!");
			}
		}
	}).directive("goodbye", function() {
		return {
			restrict: "A",
			link: function() {
				alert("Hora de dizer adeus!");
			}
		}
	})

}) ();