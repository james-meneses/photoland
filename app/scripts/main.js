// require('angular')
(function(){
	var FormController = require('./controllers/FormController');

	var app = angular.module('app', ['ui.bootstrap']);

	app.controller('FormController', ['$scope', FormController]);

	var INTEGER_REGEXP = /^\-?\d+$/;

	app.directive('integer', function() {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				ctrl.$validators.integer = function(modelValue, viewValue) {
					if(ctrl.$isEmpty(modelValue)){
						// consider empty models to be valid
						return true;
					}

					if(INTEGER_REGEXP.test(viewValue)) {
						// it's valid
						return true;
					}

					//if dindn't passed already, for sure, it's invalid
					return false;
				};
			}
		};
	});

	app.directive('username', function($q, $timeout) {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				var usernames = ['Jim', 'James', 'John', 'Jackie'];

				ctrl.$asyncValidators.username = function(modelValue, viewValue) {
					if(ctrl.$isEmpty(modelValue)) {
						// consider empty model valid
						return $q.when();
					}

					var def = $q.defer();

					$timeout(function() {
						// Mock a delayed response
						if (usernames.indexOf(modelValue) === -1) {
							// The username is available
							def.resolve();
						} else {
							def.reject();
						}
					}, 2000);

					return def.promise;
				};
			}
		};
	});

}) ();