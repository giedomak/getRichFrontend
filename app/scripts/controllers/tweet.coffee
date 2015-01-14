angular.module("getRichFrontendApp").controller "TweetCtrl", ($rootScope, $scope, $http) ->
  $rootScope.tab = "tweet"
  $scope.tweetinput = ""


  $scope.$watch('tweetinput', () ->
    # console.log "New data"
    $scope.updateResult()
    )

  $scope.updateResult = ->
    # console.log "Updating result"

    $http.get("http://giedomak.nl:8008/plutchik?text=" + $scope.tweetinput).success (response) ->
      $scope.result2 = []
      $scope.result2.push {key: k, value: v} for k,v of response
      console.log response
      $scope.result =
        "joy: " + response.joy +
        " trust: " + response.trust +
        " fear: " + response.fear +
        " surprise: " + response.surprise +
        " sadness: " + response.sadness +
        " disgust: " + response.disgust +
        " anger: " + response.anger +
        " anticipation: " + response.anticipation
