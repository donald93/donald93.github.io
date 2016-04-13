var siteControllers = angular.module('siteControllers', []);

siteControllers.controller('GamesListController', function($scope)
{
  
  $scope.games = [
    {'date': '03/01/2016', 
      'winner': 'Donald'},
          {'date': '03/02/2016', 
      'winner': 'Jared'},
          {'date': '03/03/2016', 
      'winner': 'Ben'},
  ];
  
  $scope.gamesListOrder = '-date';
  
});

siteControllers.controller('PlayersListController', function($scope){
  $scope.players = [
    {
      'name': 'Donald',
      'bio': 'super cool'
    },
        {
      'name': 'Ben',
      'bio': 'Bald'
    },
        {
      'name': 'Jared',
      'bio': 'crossfit'
    },
    
  ];
  
  $scope.playerListOrder = '+name';
  
});

siteControllers.controller('IndividualPlayerController', function($scope, $routeParams){
  $scope.playerName = $routeParams.playerName
});

siteControllers.controller('AlienListController', function($scope){
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