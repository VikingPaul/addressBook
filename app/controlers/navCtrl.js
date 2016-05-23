app.controller('NavCtrl', function($scope){
  $scope.navItems = [{
    name: "Logout",
    url: "#/BOO!"
  },{
    name: "Addresses",
    url: "#/addresses"
  },{
    name: "New Address",
    url: "#/new/address"
  }];
});