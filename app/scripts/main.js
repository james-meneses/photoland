;(function(window) {
	
	var TableCtrl = require('./scripts/controller/TableController')

	var app = angular.module('app', ['ui.bootstrap', 'ngAnimate', 'ui.router'])

	app.config(function($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/home')

			$stateProvider

				// HOME STATES AND NESTED VIEWS
				.state('home', {
					url: '/home',
					templateUrl: './partials/partial-home.html'
				})

				.state('home.list', {
					url: '/list',
					templateUrl: './partials/partial-home-list.html', 
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
					views: {
						// the main template will be placed here (relatively named)
						'': { templateUrl: './partials/partial-about.html' },

						//  the child views will be defined here (absolutely named)
						'columnOne@about': { template: 'Look I\'m a column!' },

						// for column two, we'll define a separate controller
						'columnTwo@about' : {
							templateUrl : 'table-data.html',
							controller  : 'TableCtrl'
						}
					}
				})
	}) // closes app.config()

	app.controller('TableCtrl', TableCtrl)

})(window);