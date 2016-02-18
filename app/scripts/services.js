( function () {

	var app = angular.module('todoApp', []);

	app.controller('TodoController', function(Todo) {
		var drink = new Todo("Take a sip of xo", 3);
		var fuck = new Todo("Fuck some bitches", 1);
		var lick = new Todo("Lick some pussies", 2);

		console.log(drink, fuck, lick);
		fuck.complete();
	});

	app.factory('Todo', function(){
		return function(description, priority) {
			return {
				description: description,
				priority: priority,
				complete: function() {
					console.log('The task ' + description + ' is done!');
				}
			}
		}
	});

	app.config(['$provide', function($provide) {
		$provide.factory('serviceId', function() {
			var newInstance;
			// factory functions body that builds newInstance
			return newInstance;
		})
	}])

}) ();