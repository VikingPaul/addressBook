app.controller("newAddressCtrl", function($scope) {
  $scope.items = [{
    name: "Paul",
    address: "666 6th Ave.",
    city: "Goodlettsville",
    state: "TN"
  },{
    name: "Paul",
    address: "666 6th Ave.",
    city: "Goodlettsville",
    state: "TN"
  },{
    name: "Paul",
    address: "666 6th Ave.",
    city: "Goodlettsville",
    state: "TN"
  },{
    name: "Paul",
    address: "666 6th Ave.",
    city: "Goodlettsville",
    state: "TN"
  },{
    name: "Paul",
    address: "666 6th Ave.",
    city: "Goodlettsville",
    state: "TN"
  },{
    name: "Paul",
    address: "666 6th Ave.",
    city: "Goodlettsville",
    state: "TN"
  }];
  $scope.addAddress = function() {
    console.log($scope.newAddress);
  };
});