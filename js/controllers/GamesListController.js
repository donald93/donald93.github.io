siteControllers.controller('GamesListController', function ($scope, httpService) {

  $scope.newGamePlayersCount = 3;
  $scope.newGame = {};
  $scope.newGame.players = new Array($scope.newGamePlayersCount);

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

  $scope.addGame = function (newGame) {
    var gameToBeAdded = {};
    gameToBeAdded.players = new Array(0);
    gameToBeAdded.date = newGame.date;

    for (i = 0; i < newGame.players.length; i++) {
      var wasPlayerWinner = newGame.players[i].winner;
      if (wasPlayerWinner != true) {
        wasPlayerWinner = false;
      }
      var playerToBeAdded = {
        id: newGame.players[i].id,
        name: newGame.players[i].id,
        alien: newGame.players[i].alien,
        winner: wasPlayerWinner
      };

      gameToBeAdded.players.push(playerToBeAdded);

    }

    $scope.games.push(gameToBeAdded);
    $scope.newGamePlayersCount = 3;
    $scope.newGame = {};
    $scope.newGame.players = new Array($scope.newGamePlayersCount);
  };

});