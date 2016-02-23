// require('angular')
(function(){

	var app = angular.module('app', []);

	app.directive('welcome', function() {
		return { 
			restrict: 'E',
			scope: {},
			transclude: true,
			template: '<div>This is what I live for</div><ng-transclude></ng-transclude>'
		}
	})

}) ();