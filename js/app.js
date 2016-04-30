var cosmicCompanionApp = angular.module('cosmicCompanionApp', [
  'ngRoute',
  'siteControllers',
  'siteServices'
]);

cosmicCompanionApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/games', {
      templateUrl: 'partials/gameList.html',
      controller: 'GamesListController'
    }).
      when('/players', {
        templateUrl: 'partials/playerList.html',
        controller: 'PlayersListController'
      }).
      when('/aliens', {
        templateUrl: 'partials/alienList.html',
        controller: 'AlienListController'

      }).
      when('/players/:playerName', {
        templateUrl: 'partials/player-detail.html',
        controller: 'IndividualPlayerController'
      }).
      otherwise({
        redirectTo: '/games'
      });
  }]);