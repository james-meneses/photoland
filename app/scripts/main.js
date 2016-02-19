// require('angular')
(function(){

	function getData($timeout, $q) {
		return function() {
			return $q(function(resolve, reject){
				$timeout(function(){
					resolve(Math.floor(Math.random() * 10))
				}, 2000)
			})
		}
	}

	var app = angular.module('app', []);

	app
	   .factory('getData', getData)
	   .run(function(getData){
	   		var promise = getData()
	   			.then(function(num) {
	   				console.log(num)
	   				return num * 2
	   			})
	   			.then(function(num) {
	   				console.log(num)
	   			})
	   			.finally(function() {
	   				console.log('Finished at ', new Date())
	   			});
	   })

}) ();