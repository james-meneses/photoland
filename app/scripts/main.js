;(function(window) {

	var app = angular.module('app', [])

	app.directive('tab', function() {
		return{
			restrict: 'E',
			transclude: 'true',
			template: '<div role="tabpanel" class="alone" ng-show="active" ng-transclude></div>',
			require: '^tabset',
			scope: { 
				heading: '@'
			},
			link: function(scope, elem, attr, tabsetCtrl) {
				scope.active = false

				scope.disabled = false

				if( attr.disable ) {
					attr.$observe('disable', function(value) {
						scope.disabled = ( value === 'true' )
					})
				}

				tabsetCtrl.addTab(scope)
			}
		}
	})
	.directive('tabset', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: { 
				type: '@',
				vertical: '@',
				justified: '@'
			},
			templateUrl: 'tabset.html',
			bindToController: true,
			controllerAs: 'tabset',
			controller: function() {
				var self  = this
				self.tabs = []

				self.addTab = function addTab(tab) {
					self.tabs.push(tab)
					tab.active = self.tabs.length === 1
				}

				self.classes = {}
				self.type === 'tabs' ? ( self.classes['nav-tabs']  = true ) : ( self.classes['nav-pills'] = true )
				if( self.justified ) self.classes['nav-justified'] = true
				if( self.vertical  ) self.classes['nav-stacked']   = true

				self.select = function (selectedTab) {
					if( selectedTab.disabled ) return
					
					self.tabs.forEach(function(el) {
						el.active = false
					})

					selectedTab.active = true
				}

			}
		}
	});

})(window);