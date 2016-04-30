// PhotoLand Services and Factories
module.exports.ImageService = function($http) {

	this.apiKey = 'g4yqx75uz6y93p7kxe7tq96b'

	return {
		getImages: (filter) => {
			
			var req = {
				method: 'GET',
				url: 'https://api.gettyimages.com/v3/search/images?phrase=' + filter,
				headers: {
					'Api-Key' : this.apiKey
				} 
			}

			return $http(req)
		}
	}

}