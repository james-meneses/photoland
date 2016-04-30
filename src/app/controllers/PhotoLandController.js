// PhotoLandController
// By @jhe_xo

module.exports = function($scope, $http, $q, $log, imageService){
	$scope.photoRows = []
	$scope.times = 0
	$scope.isLoading = false

	$scope.loadImages = function(filter) {

		$scope.isLoading = true

		filter = (typeof filter == "string") ? filter : 'nature' 

		console.log('we gonna load images of:', filter)

		var img = new Image()
		var promise = imageService.getImages(filter)

		promise.then(
			function(res) {
				this.rowIdx = 0
					res.data.images.forEach(function(image, idx){
						if(idx % 3 === 0) {
							if(idx>0) this.rowIdx++
							$scope.photoRows[this.rowIdx] = []
							$scope.photoRows[this.rowIdx].images = []
						}
						
						// console.log('rowIdx ', this.rowIdx, 'photoRows ', $scope.photoRows[rowIdx])
						$scope.photoRows[this.rowIdx].images.push(image)
					})	
					// console.log('now its gone', $scope.photoRows)
					
					$scope.isLoading = false
							
			}, 
			function(err) {
				$log.error('Falha ao carregar imagens: ', err)
			},
			function(progress) {
				$log.error('Estamos tentando: ', progress)
			}
		)

	}

	// $scope.assignImages = function(images) {
	// 	$scope.images.push(images)
	// }

	// $scope.promise = $scope.loadImages()

	// $scope.promise.then(
	// 	function(answer) {
	// 		console.log("Loaded! ", answer);
	// 	},
	// 	function(error) {
	// 		console.log("Something went wrong :/ ", error);
	// 	},
	// 	function(update) {
	// 		console.log("A new update: ", update);
	// 	})
	
} 