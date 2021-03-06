var siteServices = angular.module('siteServices', []);

siteServices.factory('httpService', function ($http) {

  var getRecentGames = function () {
    return $http.get("sample-game-data.json")
      .then(function (response) {
        return response.data;
      });


  };

  var getPlayers = function () {
    return $http.get("sample-player-data.json")
      .then(function (response) {
        return response.data;
      });
  };

  return {
    getRecentGames: getRecentGames,
    getPlayers: getPlayers
  };
});