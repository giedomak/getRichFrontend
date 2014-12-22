angular.module('getRichFrontendApp').controller('AboutCtrl', ['$scope', function($scope) {
  $scope.model = {
    test2: [
    {x: 45, y: 45},
    {x: 100, y: 120},
    {x: 180, y: 15},
    {x: 72, y: 145},
    {x: 10, y: 66},
    {x: 90, y: 95}
    ]
  };
}]);

angular.module('getRichFrontendApp').directive('cbCircleSquare', [function() {
  return {
    restrict: 'A',
    template: '<circle ng-attr-cx="{{x}}" cy="100" r="25"></circle><rect ng-attr-x="{{x - 25}}" y="75" width="50" height="50" fill="none" stroke="blue"></rect>',
    scope: {
      'x': '=cbX'
    }
  };
}]);

angular.module('getRichFrontendApp').directive('cbScatter', [function() {
  return {
    restrict: 'E',
    template: '<svg></svg>',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.scatterData, function(scatterData) {
        var svg = d3.select(element[0].firstChild);

        svg.selectAll('circle')
            .data(scatterData)
          .enter().append('circle')
            .attr('r', 3)
            .attr('cx', function(d) {return d.x; })
            .attr('cy', function(d) {return d.y; });
      });
    }
  };
}]);