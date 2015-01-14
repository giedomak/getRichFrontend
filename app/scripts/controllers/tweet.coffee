angular.module("getRichFrontendApp").controller "TweetCtrl", ($rootScope, $scope, $http) ->
  $rootScope.tab = "tweet"
  $scope.tweetinput = ""


  $scope.$watch('tweetinput', () ->
    # console.log "New data"
    $scope.updateResult()
    )

  randomHexColor = (len=3)->
    pattern = '0123456789ABCDEF'.split ''
    str     = '#'
    for i in [1..len]
      str += pattern[Math.round(Math.random() * pattern.length)]
    str

  $scope.updateResult = ->
    # console.log "Updating result"

    $http.get("http://giedomak.nl:8008/plutchik?text=" + $scope.tweetinput).success (response) ->
      $scope.data = []
      $scope.data.push {label: k, value: v, color: randomHexColor(), highlight: "#FF5A5E"} for k,v of response
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

  angular.module("myModule", ["tc.chartjs"]).controller "myController", ($scope) ->


  # Chart.js Options
  $scope.options =

    # Sets the chart to be responsive
    responsive: true

    #Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true

    #String - The colour of each segment stroke
    segmentStrokeColor: "#fff"

    #Number - The width of each segment stroke
    segmentStrokeWidth: 2

    #Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 0 # This is 0 for Pie charts

    #Number - Amount of animation steps
    animationSteps: 100

    #String - Animation easing effect
    animationEasing: "easeOutBounce"

    #Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true

    #Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false

    #String - A legend template
    legendTemplate: "<ul class=\"tc-chart-js-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

  return
