angular.module('devmtnTravel').controller('homeCtrl', function($scope, mainSrv) {

  // $scope.test = "What?"
  $scope.name = mainSrv.getData();

})
