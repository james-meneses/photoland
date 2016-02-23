// require('angular')
(function(){

	function asyncGreet(name) {
		return $q(function(resolve, reject){
			setTimeout(function() {
				if(mightGreet(name)){
						resolve('Olá, ' + name + '!' );
					} else {
						reject('Não foi possível dizer olá para ' + name + '!');
					}
				}, 1000);
		})
	}

	var app = angular.module('app', []);

	var promise = asyncGreet("James");
	// We get promise from the asyncGreet method return(retrieved by the service $q)
	// So we use it, setting a callback function in case of success
	// And optionally, we might also set a callback function in case something goes wrong
	promise.then(function(greeting){
		console.log('Success! ' + greeting);
	}, function(reason) {
		console.log('Error! ' + reason);
	});

}) ();