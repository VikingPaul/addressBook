app.controller('editAddressCtrl', function($scope, $location, addressStuff, $routeParams){
  $scope.newAddress = {}
  addressStuff.oneAddress($routeParams.addressId)
    .then(function(stuff) {
      $scope.newAddress = stuff;
    });

  $scope.addAddress = function() {
    addressStuff.editAddress($routeParams.addressId, $scope.newAddress)
      .then(function(response) {
        $location.url("/addresses");
      });
  };
});