module.exports = function($scope) {
	$scope.message = 'Two birds killed with one stone by me!'

	// BUTTONS ====================
	
	// define some random object and button values
	$scope.bigData = {};

	$scope.bigData.breakfast = false;
	$scope.bigData.lunch = false;
	$scope.bigData.dinner = false;

	// COLLAPSE ===================
	$scope.isCollapsed = false;

	$scope.toggleCollapse = function ($event) {
		$scope.isCollapsed = !$scope.isCollapsed;
	}
}