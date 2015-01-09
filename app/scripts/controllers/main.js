angular.module("getRichFrontendApp").controller('MainCtrl', function($rootScope, $scope, $http) {
  $rootScope.tab = "home"

  //right now manually added dates, these will be given by the Json file as well later.
  var d = [];
  d[1] = new Date("September 1, 2013");
  d[2] = new Date("September 2, 2013");
  d[3] = new Date("September 3, 2013");
  d[4] = new Date("September 4, 2013");
  d[5] = new Date("September 5, 2013");
  d[6] = new Date("September 6, 2013");
  d[7] = new Date("September 7, 2013");
  d[8] = new Date("September 8, 2013");
  d[9] = new Date("September 9, 2013");
  d[10] = new Date("September 10, 2013");
  d[11] = new Date("September 11, 2013");
  d[12] = new Date("September 12, 2013");
  d[13] = new Date("September 13, 2013");
  d[14] = new Date("September 14, 2013");
  d[15] = new Date("September 15, 2013");
  d[16] = new Date("September 16, 2013");
  d[17] = new Date("September 17, 2013");
  d[18] = new Date("September 18, 2013");
  d[19] = new Date("September 19, 2013");
  d[20] = new Date("September 20, 2013");
  d[21] = new Date("September 21, 2013");
  d[22] = new Date("September 22, 2013");
  d[23] = new Date("September 23, 2013");
  d[24] = new Date("September 24, 2013");
  d[25] = new Date("September 25, 2013");
  d[26] = new Date("September 26, 2013");
  d[27] = new Date("September 27, 2013");
  d[28] = new Date("September 28, 2013");
  d[29] = new Date("September 29, 2013");
  d[30] = new Date("September 30, 2013");
  d[31] = new Date("September 31, 2013");

  $http.get("http://www.giedomak.nl:8008/data").success(function(response) 
    {
      //we add data to the scope, we have the twitter mood data taken from a json file
      //so we linked the 8 moods to there corresponding date allong with the Stock data of that day.
      $scope.data = [];

      for( i = 0; i < response.length; i++ )
      {
        $scope.data.push(
        {
          x: d[i+1],
          joy: parseFloat(response[i].joy),
          trust: parseFloat(response[i].trust),
          fear: parseFloat(response[i].fear),
          surprise: parseFloat(response[i].surprise),
          sadness: parseFloat(response[i].sadness),
          disgust: parseFloat(response[i].disgust),
          anger: parseFloat(response[i].anger),
          anticipation: parseFloat(response[i].anticipation),
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