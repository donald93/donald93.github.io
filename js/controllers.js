var siteControllers = angular.module('siteControllers', [

]);

siteControllers.controller('NavigationController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation == $location.path();
  };
});

siteControllers.controller('GamesListController', function ($scope, httpService) {

  var onRecentGamesComplete = function (response) {
    $scope.games = response.games;
  };

  var onError = function (reason) {
    $scope.error = "Could not fetch data";
  };

  httpService.getRecentGames().then(onRecentGamesComplete, onError);

  $scope.gamesListOrder = '-date';
});

siteControllers.controller('PlayersListController', function ($scope, httpService) {

  var onGetPlayersComplete = function (response) {
    $scope.players = response.players;
  }

  var onError = function (reason) {
    $scope.error = "Could not fetch data";
  }

  httpService.getPlayers().then(onGetPlayersComplete, onError);

  $scope.playerListOrder = '+name';
});

siteControllers.controller('IndividualPlayerController', function ($scope, $routeParams) {
  $scope.playerName = $routeParams.playerName
});

siteControllers.controller('AlienListController', function ($scope) {
  $scope.aliens = [
    {
      'name': 'The Claw',
      'power': 'kind of op'
    },
    {
      'name': 'The Virus',
      'power': 'really OP'
    },
    {
      'name': 'The Loser',
      'power': 'broken'
    },

  ];
  $scope.alienListOrder = '+name';

});