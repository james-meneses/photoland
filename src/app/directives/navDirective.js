module.exports.navigation = function(){
	return {
		resctrict: 'E',
		scope: { },
		transclude: true,
		templateUrl: './app/directives/navView.html',
		controllerAs: 'navigation',
		controller: function( $location ) {
			var self = this
			self.navitems = []

			self.addItem = function(navitem) {
				self.navitems.push(navitem)

				if(self.navitems.length === 1) {
					navitem.active = true
				}
			}

			self.selectItem = function(navitem) {
				self.navitems.forEach(function(el){
					el.active = false
				})

				navitem.active = true
			}

			self.setActive = function() {
				self.navitems.forEach(function(el){
					el.active = false
					console.log('el: ', el, '$location: ', $location)
					// if(el.link === $location)
				})


			}

		}
	}
}

module.exports.navitem = function(){
	return  {
		restrict: 'E',
		require: '^navigation',
		transclude: true,
		scope: { 
			text : '@',
			link : '@'
		},
		template: '<li ng-class="{\'active\': active}"><a ui-sref="{{link}}" ng-click="selectItem(this)" >{{text}}</a></li>',
		link: function(scope, el, attrs, navigationCtrl){
			scope.classes = {}

			scope.active = false

			navigationCtrl.addItem(scope)

		}
	}
}