'use strict';

/**
  * @ngdoc overview
  * @name getRichFrontendApp
  * @description
  * # getRichFrontendApp
  *
  * Main module of the application.
 */
var app = angular.module('getRichFrontendApp', ['n3-line-chart', 'ngAnimate',
'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize',
'ngTouch', 'tc.chartjs', 'angulartics', 'angulartics.google.analytics']);

app.config(["$routeProvider", function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  }).when('/tweets', {
    templateUrl: 'views/tweets.html',
    controller: 'TweetCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);

angular.module("getRichFrontendApp").controller('MainCtrl', ["$rootScope", "$scope", "$http", function($rootScope, $scope, $http) {
  $rootScope.tab = "home"

  $scope.updateChart = function() {
    $http.get("http://www.giedomak.nl:8008/data").success(function(response)
    {
      //we add data to the scope, we have the twitter mood data taken from a json file
      //so we linked the 8 moods to there corresponding date allong with the Stock data of that day.
      var date;
      var dateArray;
      var newDate;
      var d = [];
      $scope.data = [];
      $scope.totaltweets = [];
      $scope.totalanalysed = 0;

      response.sort(function(a,b) {
        var a_date = a.x.split("/");
        var new_a_date = new Date(a_date[1] + "/" + a_date[0] + "/" + a_date[2] );
        var b_date = b.x.split("/");
        var new_b_date = new Date(b_date[1] + "/" + b_date[0] + "/" + b_date[2] );
        return (new_a_date.valueOf() - new_b_date.valueOf());
      });

      for( var k = 0; k < response.length; k++ )
      {

        date = response[k].x;
        dateArray = date.split("/");
        newDate = (dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2] );
        d[k] = new Date(newDate);
      }

      if( parseFloat(response[0].Stock) == 0 )
      {
        response[0].Stock = 4527.69;
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
          joy: parseFloat(response[i].sadness),
          trust: parseFloat(response[i].disgust),
          fear: parseFloat(response[i].anger),
          surprise: parseFloat(response[i].anticipation),
          sadness: parseFloat(response[i].joy),
          disgust: parseFloat(response[i].trust),
          anger: parseFloat(response[i].fear),
          anticipation: parseFloat(response[i].surprise),
          Stock: parseFloat(response[i].Stock),
          // Prediction: parseFloat(response[i].prediction),
        });

        $scope.totaltweets.push(
        {
          x: d[i],
          total: parseInt(response[i].total)
        });
        $scope.totalanalysed += parseInt(response[i].total);
      }
    });

  };


  $scope.updateChart();


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
    tension: 0.7,
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
      thickness: "6px",
      color: "#000000",
      type: "line",
    }],
    // }, {
    //   stacks: [],
    //   y: 'Prediction',
    //   axis: 'y2',
    //   thickness: '10px',
    //   color: '#FF0000',
    //   type: "line",
    // }],
    tooltip: {
      mode: "scrubber",
      formatter: function(x, y1, series) {
        return y1;
      },

    }
  }
}]);
function sortFunction(a, b)
{
}
(function() {
  angular.module("getRichFrontendApp").controller("AboutCtrl", [
    "$rootScope", "$scope", function($rootScope, $scope) {
      return $rootScope.tab = "about";
    }
  ]);

}).call(this);

//# sourceMappingURL=about.js.map

angular.module("getRichFrontendApp").controller('TweetCtrl', ["$rootScope", "$scope", "$http", function($rootScope, $scope, $http) {
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
}]);
