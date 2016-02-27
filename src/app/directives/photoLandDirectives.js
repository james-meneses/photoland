// Photo Directive
// by @jhe_xo

// module.exports.photoRow = function() {
// 	return {
// 		restrict: 'E',
// 		transclude: true,
// 		templateUrl: './app/directives/photoView.html',
// 		link: function() {
			
// 		}
// 	}
// }

module.exports.photo = function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: './app/directives/photoView.html',
		link: function(scope, elem, attr, PhotoLandCtrl) {

		}
	}
}