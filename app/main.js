(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// PhotoLandController
// By @jhe_xo

module.exports = function($scope, $http, $q, $log, imageService){
	$scope.photoRows = []
	$scope.times = 0
	$scope.isLoading = false

	$scope.loadImages = function(filter) {

		$scope.isLoading = true

		filter = (typeof filter == "string") ? filter : 'nature' 

		// console.log('we gonna load images of:', filter)

		var img = new Image()
		var promise = imageService.getImages(filter)

		promise.then(
			function(res) {
				this.rowIdx = 0
					res.data.images.forEach(function(image, idx){
						if(idx % 3 === 0) {
							if(idx>0) this.rowIdx++
							$scope.photoRows[this.rowIdx] = []
							$scope.photoRows[this.rowIdx].images = []
						}
						
						// console.log('rowIdx ', this.rowIdx, 'photoRows ', $scope.photoRows[rowIdx])
						$scope.photoRows[this.rowIdx].images.push(image)
					})	
					// console.log('now its gone', $scope.photoRows)
					
					$scope.isLoading = false
							
			}, 
			function(err) {
				$log.error('Falha ao carregar imagens: ', err)
			},
			function(progress) {
				$log.error('Estamos tentando: ', progress)
			}
		)

	}

	// $scope.assignImages = function(images) {
	// 	$scope.images.push(images)
	// }

	// $scope.promise = $scope.loadImages()

	// $scope.promise.then(
	// 	function(answer) {
	// 		console.log("Loaded! ", answer);
	// 	},
	// 	function(error) {
	// 		console.log("Something went wrong :/ ", error);
	// 	},
	// 	function(update) {
	// 		console.log("A new update: ", update);
	// 	})
	
} 
},{}],2:[function(require,module,exports){
// Photo Directive
// by @jhe_xo

module.exports.photo = function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: './app/directives/photoView.html',
		link: function(scope, elem, attr, PhotoLandCtrl) {

		}
	}
}

module.exports.loader = function() {
	return {
		restrict: 'E',
		templateUrl: './app/directives/loaderView.html'
	}
}
},{}],3:[function(require,module,exports){
;(function(window) {
	/* ------------------------------------------------------------ *\
		Require Modules
	\* ------------------------------------------------------------ */
	// Controllers
	var PhotoLandCtrl = require('./controllers/PhotoLandController')

	// Directives
	var photoLandDirectives = require('./directives/photoLandDirectives')

	// Services
	var PhotoLandServices = require('./services/PhotoLandServices')


	var app = angular.module('app', ['ui.bootstrap', 'ngAnimate', 'ui.router'])

	app.config( function( $stateProvider, $urlRouterProvider ) {
			
			$urlRouterProvider.otherwise('/photoland')
 
			$stateProvider
				// PHOTOLAND PAGE AND ITS VIEWS
				.state('photoland', {
					url: '/photoland',
					views: {
						'': {
							templateUrl : '../app/partials/photoland.html',
							controller  : 'PhotoLandCtrl'
						}
					}
				})
	}) // closes app.config()

	app.factory('ImageService', PhotoLandServices.ImageService)
	   .controller('PhotoLandCtrl', [ '$scope', '$http', '$q', '$log', 'ImageService', PhotoLandCtrl])
	   .directive('photo', photoLandDirectives.photo)		
	   .directive('loader', photoLandDirectives.loader)
})(window);
},{"./controllers/PhotoLandController":1,"./directives/photoLandDirectives":2,"./services/PhotoLandServices":4}],4:[function(require,module,exports){
// PhotoLand Services and Factories
module.exports.ImageService = function($http) {

	this.apiKey = 'g4yqx75uz6y93p7kxe7tq96b'

	return {
		getImages: (filter) => {
			
			var req = {
				method: 'GET',
				url: 'https://api.gettyimages.com/v3/search/images?phrase=' + filter,
				headers: {
					'Api-Key' : this.apiKey
				} 
			}

			return $http(req)
		}
	}

}
},{}]},{},[3]);
