var app = angular.module("AddressBook", ['ngRoute'])
  .constant('URL', "https://vikiing-addressbook.firebaseio.com/");

let isAuth = (authFactory) => new Promise ((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    resolve();
  } else {};
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/addresses", {
      templateUrl: "partials/show-address.html",
      controller: "addressListCtrl",
      resolve: {isAuth}
    })
    .when("/newAddress", {
      templateUrl: "partials/new-address.html",
      controller: "newAddressCtrl",
      resolve: {isAuth}
    })
    .when("/edit/:addressId", {
      templateUrl: "partials/new-address.html",
      controller: "editAddressCtrl",
      resolve: {isAuth}
    })
    .when("/login", {
      templateUrl: "partials/login.html",
      controller: "loginCtrl"
    })
    .when("/logout", {
      templateUrl: "partials/login.html",
      controller: "loginCtrl"
    })
    .otherwise("/addresses");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

app.run(($location) => {
  let ref = new Firebase('https://vikiing-addressbook.firebaseio.com/');
  ref.onAuth((authData) => {
    if(!authData) {
      $location.path("/login");
    }
  });
});