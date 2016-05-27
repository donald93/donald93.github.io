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