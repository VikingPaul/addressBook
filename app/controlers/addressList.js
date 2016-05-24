app.controller("addressListCtrl", function($scope, addressStuff) {
  $scope.items = [];
  addressStuff.getAddresses().then(function(stuff) {
    $scope.items = stuff;
  });
  $scope.delete = function(id) {
    addressStuff.deleteAddress(id).then(function(thing) {
      addressStuff.getAddresses().then(function(stuff) {
        $scope.items = stuff;
      });
    });
  };
});