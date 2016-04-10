var cosmicCompanionApp = angular.module('cosmicCompanionApp', []);

cosmicCompanionApp.controller('GamesListController', function($scope)
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

cosmicCompanionApp.controller('PlayersListController', function($scope){
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

cosmicCompanionApp.controller('IndividualPlayerController', function($scope){
  $scope.player = 
    {
      'name': 'Donald'
    };
});

cosmicCompanionApp.controller('AlienListController', function($scope){
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