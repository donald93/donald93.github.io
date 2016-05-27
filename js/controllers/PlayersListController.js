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