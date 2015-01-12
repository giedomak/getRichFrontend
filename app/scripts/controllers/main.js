angular.module("getRichFrontendApp").controller('MainCtrl', function($rootScope, $scope, $http) {
  $rootScope.tab = "home"


  $http.get("http://www.giedomak.nl:8008/data").success(function(response)
    {
      //we add data to the scope, we have the twitter mood data taken from a json file
      //so we linked the 8 moods to there corresponding date allong with the Stock data of that day.
      $scope.data = [];
      var date;
      var dateArray;
      var newDate;

      for(var i = 0; i < response.length; i++ )
      {
        date = response[i].x;
        dateArray = date.split("/");
        newDate = (dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2] );
        $scope.data.push(
        {
          x: new Date(newDate),
          joy: parseFloat(response[i].joy),
          trust: parseFloat(response[i].trust),
          fear: parseFloat(response[i].fear),
          surprise: parseFloat(response[i].surprise),
          sadness: parseFloat(response[i].sadness),
          disgust: parseFloat(response[i].disgust),
          anger: parseFloat(response[i].anger),
          anticipation: parseFloat(response[i].anticipation),
          Stock: parseFloat(response[i].Stock),
          Prediction: parseFloat(response[i].prediction)
        });
      }
    });


  //The Scope options, here we define how it looks and we define the 2 different y value graphs of the stock and of the moods
  //we also choose the line style, for instance the line of the stock will be made black and thicker so it's more noticable.
  $scope.options = {
    axes: {
      x: {
        type: "date",
        key: "x"
      },
      y1: {
        type: "linear"
      },
      y2: {
        type: "linear"
      }
    },
    lineMode: 'cardinal',
    tension: 0.3,
    series: [{
      y: 'joy',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'trust',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'fear',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'surprise',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'sadness',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'disgust',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'anger',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'anticipation',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'Stock',
      axis: 'y2',
      thickness: "10px",
      color: "#000000",
      type: 'area'
    }, {
      y: 'Prediction',
      axis: 'y2',
      thickness: '10px',
      color: '#FF0000',
      type: 'area'
    }],
    tooltip: {
      mode: "scrubber",
      formatter: function(x, y1, series) {
        return y1;
      }
    }
  }
});
