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

    input = [[0.04812567421790723, 0.046735606293300536], [0.007955771305285868, 0.017716118903791683], [0.04320388349514563, 0.034032968158083335], [0.01709816612729234, 0.028069007883689986], [0.1516518338727077, 0.18724190300672325], [0.05149676375404532, 0.04628510972321754], [0.017981391585760516, 0.01544998464216238], [0.01766450916936354, 0.017322787618170035]]

    labels = ['9/30', '9/29']

    # Chart.js Data
    $scope.data =
      labels: labels
      datasets: []

    for emotion in input
      dataset =
        {
          label: "joy"
          fillColor: "rgba(220,220,220,0.2)"
          strokeColor: "rgba(220,220,220,1)"
          pointColor: "rgba(220,220,220,1)"
          pointStrokeColor: "#fff"
          pointHighlightFill: "#fff"
          pointHighlightStroke: "rgba(220,220,220,1)"
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
