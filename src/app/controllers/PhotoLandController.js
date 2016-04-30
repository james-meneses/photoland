// PhotoLandController
// By @jhe_xo

module.exports = function($scope, $http, $q, $log, imageService){
	$scope.photoRows = []
	$scope.times = 0

	$scope.loadImages = function(filter) {
		console.log(filter, typeof filter )
		filter = (typeof filter == "string") ? filter : 'nature' 

		console.log('we gonna load images of ', filter)

		var img = new Image()
		var promise = imageService.getImages(filter)

		promise.then(
			function(res) {
				$scope.times += 1
				console.log('times ', $scope.times)
			
						console.log('succes goes')
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

								console.log('now its gone', $scope.photoRows)
							
			}, 
			function(error) {
				$log.error('Falha ao carregar imagens: ', error)
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