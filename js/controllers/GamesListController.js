siteControllers.controller('GamesListController', function ($scope, httpService) {

  var onRecentGamesComplete = function (response) {
    $scope.games = response.games;
  };

  var onError = function (reason) {
    $scope.error = "Could not fetch data";
  };

  httpService.getRecentGames().then(onRecentGamesComplete, onError);

  $scope.gamesListOrder = '-date';
  
  $scope.showAddGame = false;
  
  var toggleAddGame = function(){
    $scope.showAddGame = !$scope.showAddGame;
  }
  
  $scope.toggleAddGame = toggleAddGame;
  
});