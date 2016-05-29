"use strict";
app.controller("loginCtrl", function($scope, URL, authFactory, $location) {
  let ref = new Firebase(URL);

  $scope.account = {
    email: "",
    password: ""
  };

  if ($location.path() === "/logout") {
    ref.unauth();
  };

  $scope.register = () => {
    ref.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    }, (error, userData) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("no error", userData.uid);
        $scope.login();
      }
    });
  };

  $scope.login = () => {
    authFactory.authenticate($scope.account)
      .then(() => {
        $location.path("/");
        $scope.$apply();
      });
  };
});
