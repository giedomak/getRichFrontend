angular.module("getRichFrontendApp").controller('TweetCtrl', function($rootScope, $scope, $http) {
  $rootScope.tab = "tweets"

  $scope.updatePlutchik = function(text) {
    var words = [];
    words = text.split(" ");
    var URLWord;

    for( var i = 0; i < words.length; i++ )
    {
      if( i == 0 )
      {
        URLWord = (URLWord + "%20" + words[i]);
      }
      else
      {
        URLWord = (words[i]);
      }
    }

    $http.get("http://giedomak.nl:8008/plutchik?text=" + URLWord).success(function(response)
    {
      document.getElementById("result").innerHTML = "sadness: " + response.sadness + " anticipation: " + response.anticipation 
      + " disgust: " + response.disgust + " surprise: " + response.surprise + " anger: " + response.anger + " joy: " + response.joy 
      + " fear: " + response.fear + " trust: " + response.trust;
    });
  }

  $scope.updateText = function(text) 
  {
    $scope.updatePlutchik(text);
  }
});
