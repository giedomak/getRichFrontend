angular.module("getRichFrontendApp").controller('MainCtrl', function($rootScope, $scope, $http) {
  $rootScope.tab = "home"


  $http.get("http://www.giedomak.nl:8008/data").success(function(response)
    {
      //we add data to the scope, we have the twitter mood data taken from a json file
      //so we linked the 8 moods to there corresponding date allong with the Stock data of that day.
      var date;
      var dateArray;
      var newDate;
      var a_date;
      var b_date;
      var d = [];
      $scope.data = [];
      $scope.totaltweets = [];

      response.sort(function(a,b) {
        a_date = a.x.split("/");
        new_a_date = new Date(a_date[1] + "/" + a_date[0] + "/" + a_date[2] );
        b_date = b.x.split("/");
        new_b_date = new Date(b_date[1] + "/" + b_date[0] + "/" + b_date[2] );
        return (new_a_date.valueOf() - new_b_date.valueOf());

      });

      for( var k = 0; k < response.length; k++ )
      {
        date = response[k].x;
        dateArray = date.split("/");
        newDate = (dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2] );
        d[k] = new Date(newDate);
      }

      for(var i = 0; i < response.length; i++ )
      {
        if( parseFloat( response[i].Stock) == 0 )
        {
          if( i != 0 )
          {
            response[i].Stock = response[i-1].Stock;
          }
        }
        $scope.data.push(
        {
          x: d[i],
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

        $scope.totaltweets.push(
        {
          x: d[i],
          total: parseInt(response[i].total)
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
        type: "area",
      },
      y2: {
        type: "area"
      }
    },
    lineMode: undefined,
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
      stacks: [],
      y: 'Stock',
      axis: 'y2',
      thickness: "10px",
      color: "#000000",
      type: "line",
    }, {
      stacks: [],
      y: 'Prediction',
      axis: 'y2',
      thickness: '10px',
      color: '#FF0000',
      type: "line",
    }],
    tooltip: {
      mode: "scrubber",
      formatter: function(x, y1, series) {
        return y1;
      },

    }
  }
});

function sortFunction(a, b)
{
}
