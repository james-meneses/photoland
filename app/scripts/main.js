// require('angular')
(function(){

	function asyncGreet(name) {
		var deferred = $q.defer();

		setTimeout(function() {
			deferred.notify('About to greet ' + name);

			if(okToGreet(name)) {
				deferred.resolve('Hey, ' + name + '!');
			} else {
				deferred.reject('I don\'t wanna greet you ' + name + ', bitch!');
			}

		}, 1000);

		return deferred.promise;
	}

	var app = angular.module('app', []);

	var promise = asyncGreet("Valerie");
	
	// In this case, besides success and error, we might set an 'common behavior' at the end
	promise.then(function(greeting) {
		console.log('Succes! ', greeting);
	}, function(reason) {
		console.log('Error! ', reason);
	}, function(update) {
		console.log('But, ', update);
	});

}) ();