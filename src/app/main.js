;(function(window) {
	/* ------------------------------------------------------------ *\
		Require Modules
	\* ------------------------------------------------------------ */
	// Controllers
	var TableCtrl 	  = require('./controllers/TableController'),
	    PhotoLandCtrl = require('./controllers/PhotoLandController')

	// Directives
	var navDirectives = require('./directives/navDirective'),
		photoLandDirectives = require('./directives/photoLandDirectives')

	// Services
	var PhotoLandServices = require('./services/PhotoLandServices')

	// Directive isActiveNav
	var isActiveNav = function($location) {
		return {
			restrict: 'A',
			link: function(scope, element) {
				scope.location = $location
				scope.$watch('location.path()', function(currentPath) {
					
					// Checks the actual active element in menu according to url
					(('#' + currentPath).indexOf(element[0].attributes['href'].nodeValue) > -1) ?
						element.parent().addClass('active') :
						element.parent().removeClass('active')
				})
			}
		}
	}
	// END Directive isActiveNav


	var app = angular.module('app', ['ui.bootstrap', 'ngAnimate', 'ui.router'])

	app.config( function( $stateProvider, $urlRouterProvider ) {
			
			$urlRouterProvider.otherwise('/home')

			$stateProvider

				// HOME STATES AND NESTED VIEWS
				.state('home', {
					url: '/home',
					templateUrl: './app/partials/partial-home.html'
				})

				.state('home.list', {
					url: '/list',
					templateUrl: './app/partials/partial-home-list.html', 
					controller : function($scope) {
						$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle']
					}
				})

				.state('home.paragraph', {
					url: '/paragraph', 
					template: 'I could sure use a drink right nowo'
				})

				// ABOUT PAGE AND MUTIPLE NAMED VIEWS  
				.state('about', {
					url: '/about',
					views: {
						// the main template will be placed here (relatively named)
						'': { templateUrl: './app/partials/partial-about.html' },

						//  the child views will be defined here (absolutely named)
						'columnOne@about': { template: 'Look I\'m a column!' },

						// for column two, we'll define a separate controller
						'columnTwo@about' : {
							templateUrl : './app/partials/table-data.html',
							controller  : 'TableCtrl'
						}
					}
				})

				// PHOTOLAND PAGE AND ITS VIEWS
				.state('photoland', {
					url: '/photoland',
					views: {
						'': {
							templateUrl : './app/partials/photoland.html',
							controller  : 'PhotoLandCtrl'
						}
					}
				})
	}) // closes app.config()

	app.factory('ImageService', PhotoLandServices.ImageService)
	   .controller('TableCtrl', TableCtrl)
	   .controller('PhotoLandCtrl', [ '$scope', '$http', '$q', '$log', 'ImageService', PhotoLandCtrl])
		.directive('photo', photoLandDirectives.photo)
		.directive('navigation', navDirectives.navigation)
		.directive('navitem', navDirectives.navitem)
		.directive('isActiveNav', [ '$location', isActiveNav ])
		

})(window);