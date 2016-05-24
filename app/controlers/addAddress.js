app.controller("newAddressCtrl", function($scope, addressStuff, $location) {
  $scope.newAddress = {
    name: "",
    address: "",
    city: "",
    state: ""
  }
  $scope.addAddress = function() {
    addressStuff.postAddress($scope.newAddress)
      .then(function(response) {
        $location.url("/addresses");
      });
  };
});