var siteControllers = angular.module('siteControllers', [

]);

siteControllers.controller('NavigationController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation == $location.path();
  };
});

siteControllers.controller('IndividualPlayerController', function ($scope, $routeParams) {
  $scope.playerName = $routeParams.playerName
});

