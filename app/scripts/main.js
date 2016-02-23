// require('angular')
(function(){

	function TestCtrl() {
		var self = this;
		self.people  = [
				{ name: 'Valerie', species: 'bitch' },
				{ name: 'Nanda',   species: 'fox' },
				{ name: 'Lia',     species: 'cat' },
				{ name: 'Nath',    species: 'bitch' },
				{ name: 'Camile',  species: 'tiger' },
				{ name: 'Tiffany', species: 'cat' },
				{ name: 'Gaby',    species: 'bitch' },
				{ name: 'Key',     species: 'fox' }
			];

		self.addPerson = function (name, species) {
			self.people.push({ name: name, species: species});
		}
	}

	var app = angular.module('app', []);

	app.controller('TestCtrl', TestCtrl);

}) ();