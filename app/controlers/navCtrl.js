app.controller('NavCtrl', function($scope){
  $scope.navItems = [{
    name: "Logout",
    url: "/logout"
  },{
    name: "Addresses",
    url: "/addresses"
  },{
    name: "New Address",
    url: "/newAddress"
  }];
});