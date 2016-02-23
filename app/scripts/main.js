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
				// It's better that the directive don't know much about the directive. Keep them separated
				// Avoid doing smth like: scope.fun.start()
				// Instead use scope.$apply(), like so
				scope.$apply(attrs.entering)
			})
		}
	})
	.directive('leaving', function() {
		return function(scope, element, attrs){
			element.bind('mouseleave', function() {
				// As in the entering event, here we do the same, just changing the method to be called
				scope.$apply(attrs.leaving)
			})
		}
	})

}) ();