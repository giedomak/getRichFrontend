angular.module('getRichFrontendApp').controller('AboutCtrl', ['$scope', function($scope) {
  $scope.model = {
    test: [100, 200, 300]
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