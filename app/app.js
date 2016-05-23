var app = angular.module("AddressBook", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/addresses", {
      templateUrl: "partials/show-address.html",
      controller: "addressListCtrl"
    })
    .when("/new/address", {
      templateUrl: "partials/new-address.html",
      controller: "newAddressCtrl"
    })
    .otherwise("/addresses");
});