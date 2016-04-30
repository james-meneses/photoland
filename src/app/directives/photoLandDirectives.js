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