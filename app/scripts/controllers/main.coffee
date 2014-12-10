'use strict'

###*
 # @ngdoc function
 # @name getRichFrontendApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the getRichFrontendApp
###
angular.module('getRichFrontendApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.setData = () ->
      $scope.data.datasets[0].data[2] = Math.random()*100

    input = [[0.042130459665050336, 0.04256220592928567], [0.010489882854100114, 0.014578843491695777], [0.03861954078790033, 0.033416373961073886], [0.02448007926650662, 0.026569257105270545], [0.1646477557794552, 0.17597038543212343], [0.045419938246979694, 0.04604555898472824], [0.015817824534461563, 0.01564482083121349], [0.015103162467690506, 0.017483156126393243]]

    labels = ['9/30', '9/29']

    emotions = 'joy,trust,fear,surprise,sadness,disgust,anger,anticipation'.split(',')

    # Chart.js Data
    $scope.data =
      labels: labels
      datasets: []

    for emotion, index in input
      color1 = Math.floor(Math.random()*100+150)
      color2 = Math.floor(Math.random()*100+150)
      color3 = Math.floor(Math.random()*100+150)
      dataset =
        {
          label: emotions[index]
          fillColor: "rgba("+color1+","+color2+","+color3+",0.2)"
          strokeColor: "rgba("+color1+","+color2+","+color3+",1)"
          pointColor: "rgba("+color1+","+color2+","+color3+",1)"
          pointStrokeColor: "#fff"
          pointHighlightFill: "#fff"
          pointHighlightStroke: "rgba("+color1+","+color2+","+color3+",1)"
          data: emotion
        }
      $scope.data.datasets.push dataset


    # Chart.js Options
    $scope.options =
      animation: false
      # Sets the chart to be responsive
      responsive: true

    #/Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true

    #String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)"

    #Number - Width of the grid lines
      scaleGridLineWidth: 1

    #Boolean - Whether the line is curved between points
      bezierCurve: true

    #Number - Tension of the bezier curve between points
      bezierCurveTension: 0.4

    #Boolean - Whether to show a dot for each point
      pointDot: true

    #Number - Radius of each point dot in pixels
      pointDotRadius: 4

    #Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1

    #Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20

    #Boolean - Whether to show a stroke for datasets
      datasetStroke: true

    #Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2

    #Boolean - Whether to fill the dataset with a colour
      datasetFill: true

    # Function - on animation progress
      onAnimationProgress: ->


        # Function - on animation complete
      onAnimationComplete: ->

        #String - A legend template
      legendTemplate: `'<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'`
    console.log $scope.data.datasets
