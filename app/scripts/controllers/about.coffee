'use strict'

###*
 # @ngdoc function
 # @name getRichFrontendApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the getRichFrontendApp
###
angular.module('getRichFrontendApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.model = test: [100, 200, 300]