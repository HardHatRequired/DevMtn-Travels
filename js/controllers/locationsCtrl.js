angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {

  // $scope.test = "What?"
  $scope.destinations = mainSrv.travelInfo;

})
