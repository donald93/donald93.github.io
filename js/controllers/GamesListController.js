siteControllers.controller('GamesListController', function ($scope, httpService) {

  $scope.newGamePlayersCount = 3;
  $scope.newGame = {};
  $scope.newGame.players = new Array ($scope.newGamePlayersCount);

  // $scope.getNewGamePlayersCount = function () {
  //   return $scope.newGame.players = new Array ($scope.newGamePlayersCount);
  // }

  $scope.incrementPlayersCount = function () {
    $scope.newGamePlayersCount++;
    $scope.newGame.players.length = $scope.newGamePlayersCount;
  }

  $scope.decrementPlayersCount = function () {
    $scope.newGamePlayersCount--;
    $scope.newGame.players.length = $scope.newGamePlayersCount;
  }

  $scope.availableToRemove = function (index) {
    return $scope.newGamePlayersCount == index && $scope.newGamePlayersCount > 3;
  }

  $scope.reachedMaxPlayers = function () {
    return $scope.newGamePlayersCount >= 8;
  }

  var onRecentGamesComplete = function (response) {
    $scope.games = response.games;
  };

  var onError = function (reason) {
    $scope.error = "Could not fetch data";
  };

  httpService.getRecentGames().then(onRecentGamesComplete, onError);

  $scope.gamesListOrder = '-date';

  $scope.showAddGame = false;

  var toggleAddGame = function () {
    $scope.showAddGame = !$scope.showAddGame;
    $scope.newGamePlayersCount = 3;
  }

  $scope.toggleAddGame = toggleAddGame;

  $scope.addGame = function (game) {

  }

});