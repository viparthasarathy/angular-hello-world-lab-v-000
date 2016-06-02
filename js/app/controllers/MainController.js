function MainController($scope) {
  $scope.name = "Me";
  $scope.email = "Me@me.com"
  $scope.phone = "394-1039-222";

}

angular.module('app').controller('MainController', MainController);
