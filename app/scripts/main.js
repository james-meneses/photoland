// require('angular')
(function(){

	var app = angular.module('app', []);

	app.controller('MyController', ['$scope', 'notify', function($scope, notify){
		$scope.msgs = [];

		$scope.callNotify = function(msg){
			notify($scope.msgs, msg);
			$scope.message = "";
			$scope.msgs = $scope.msgs.length == 3 ? [] : $scope.msgs;
		};
	}]).
		factory('notify', ['$window', function(win){
			return function(msgs, msg) {
				msgs.push(msg);

				if( msgs.length == 3) {
					win.alert(msgs.join('\n'));
					msgs = [];
				}
			}
		}]);

}) ();