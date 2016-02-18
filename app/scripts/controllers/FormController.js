module.exports = function($scope) {
	$scope.master = {};

	$scope.update = function(user) {
		alert("Updating");
		$scope.master = angular.copy(user);
	}

	$scope.reset = function(form) {
		if (form) {
			form.$setPristine();
			form.$setUntouched();
		}
		$scope.user = angular.copy($scope.master);
	};

	$scope.reset();
}