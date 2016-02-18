// require('angular')
(function(){

	var app = angular.module('app', []);

	app.factory('messages', function(){
		var messages = {};

		messages.list = [];
		messages.add = function(msg) {
			messages.list.push({id: messages.list.length, text: msg});
		};

		return messages;
	});

	app.controller('ListCtrl', function (messages) {
		var self = this;

		self.messages = messages.list;
	});

	app.controller('PostCtrl', function (messages) {
		var self = this;
		self.newMessage = 'You know nothing, Jon Snow';
		
		self.addMessage = function(message) {
			messages.add(message);
			self.newMessage = '';
		};

	});

}) ();