// require('angular')
(function(){

	var app = angular.module('app', []);

	app
	.directive('welcome', function() {
		return {
			restrict: 'E',
			// Below we isolate the scope, so that each directive instance has its own local scope
			scope: {},
			controller: function($scope) {
				var self = this;
				$scope.words = [];

				self.greetBitch = function() {
					$scope.words.push("Hey bitch, I came to slay")
				}
				self.greetLady = function () {
					$scope.words.push("Hey pretty little lady")
				}
				self.greetLonelyGirl = function() {
					$scope.words.push("Hey there lonely girl")
				}
			},
			link: function(scope, element){
				element.bind('mouseenter', function(){
					console.log(scope.words);
				})
			}
		}
	})

	app.directive('lady', function(){
		return {
			require: 'welcome',
			link: function(scope, element, attrs, welcomeCtrl) {
				welcomeCtrl.greetLady();
			}
		}
	})


	app.directive('bitch', function() {
		return {
			require: 'welcome',
			link: function(scope, element, attrs, welcomeCtrl) {
				welcomeCtrl.greetBitch();
			}
		}
	})

	app.directive("lonelygirl", function() {
		return {
			require: 'welcome',
			link: function(scope, element, attrs, welcomeCtrl) {
				welcomeCtrl.greetLonelyGirl();
			}
		}
	})

}) ();