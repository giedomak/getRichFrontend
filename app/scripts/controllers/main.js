angular.module("getRichFrontendApp").controller('MainCtrl', function($rootScope, $scope, $http) {
  $rootScope.tab = "home"

  $http.get("http://www.w3schools.com/website/Customers_JSON.php").success(function(response) 
    {
      //we add data to the scope, we have the twitter mood data taken from a json file
      //so we linked the 8 moods to there corresponding date allong with the Stock data of that day.
      $scope.data = [];

      for( i = 0; i < TwitterMoods.length; i++ )
      {
        $scope.data.push(
        {
          x: new Date(response[i].Datum),
          joy: parseFloat(response[i].Joy),
          trust: parseFloat(response[i].Trust),
          fear: parseFloat(response[i].Fear),
          surprise: parseFloat(response[i].Suprise),
          sadness: parseFloat(response[i].Sadness),
          disgust: parseFloat(response[i].Disgust),
          anger: parseFloat(response[i].Anger),
          anticipation: parseFloat(response[i].Anticipation),
          Stock: parseFloat(response[i].Stock)
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
    }],
    tooltip: {
      mode: "scrubber",
      formatter: function(x, y1, series) {
        return y1;
      }
    }
  }
});


function MainCtrl($scope,$http) 
{
  
}