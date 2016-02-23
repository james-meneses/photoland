// require('angular')
(function(){

	function FunCtrl() {
		var self = this;

		this.start = function() {
			console.log("Here comes the fun!");
		}

		this.end = function() {
			console.log("Fuck! The fun is over.");
		}
	}

	var app = angular.module('app', []);

	app.controller('FunCtrl', FunCtrl);

	app
	.directive('entering', function() {
		return function(scope, element, attrs) {
			element.bind('mouseenter', function() {
				scope.fun.start()
			})
		}
	})
	.directive('leaving', function() {
		return function(scope, element, attrs){
			element.bind('mouseleave', function() {
				scope.fun.end()
			})
		}
	})

}) ();