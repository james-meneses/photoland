// PhotoLand Services and Factories
module.exports.ImageService = function($http) {

	var self    = this
	self.apiKey = 'g4yqx75uz6y93p7kxe7tq96b'

	return {
		getImages: function(filter) {
			console.log(self.apiKey)
			
			var req = {
				method: 'GET',
				url: 'https://api.gettyimages.com/v3/search/images?phrase=' + filter,
				headers: {
					'Api-Key' : self.apiKey
				} 
			}

			return $http(req)
		}
	}

}