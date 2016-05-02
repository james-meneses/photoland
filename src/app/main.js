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