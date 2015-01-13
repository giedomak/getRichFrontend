angular.module("getRichFrontendApp").controller('TweetCtrl', function($rootScope, $scope, $http) {
  $rootScope.tab = "tweets"

  function updateText(text)
  {
    document.getElementById("result").innerHTML =text;
  }
});