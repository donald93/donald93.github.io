var cosmicCompanionApp = angular.module('cosmicCompanionApp', [
  'ngRoute',
  'siteControllers'
]);

cosmicCompanionApp.config(['$routeProvider',
function($routeProvider){
  $routeProvider.when('/games', {
    templateUrl: 'gameList.html',
    controller: 'GamesListController'
  }).
  otherwise({
    redirectTo: '/games'
  });
}]);