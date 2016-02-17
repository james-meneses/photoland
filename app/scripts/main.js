// require('angular')

var MainController = require('./controllers/MainController')

var app = angular.module('app', ['ui.bootstrap'])

app.controller('MainController', ['$scope', MainController]) 