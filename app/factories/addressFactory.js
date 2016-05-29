"use strict";
app.factory('addressStuff', function($http, $q, authFactory, URL){
  var getAddresses = function() {
    let user = authFactory.getUser();
    let addresses = [];
    return $q(function(resolve, reject) {
      $http.get(`${URL}firebases.json?orderBy="uid"&equalTo="${user.uid}"`)
        .success(function(addressList) {
          Object.keys(addressList).forEach(function(key) {
            addressList[key].id = key;
            addresses.push(addressList[key]);
          });
          resolve(addresses);
        }).error(function(error) {
          reject(error);
        });
    });
  };

  var deleteAddress = function(addressId) {
    return $q(function(resolve, reject) {
      $http.delete(`${URL}firebases/${addressId}.json`)
        .success(function(thingy) {
          resolve(thingy);
        });
    });
  };

  var postAddress = function(newAddress) {
    let user = authFactory.getUser();
    newAddress.uid = user.uid
    return $q(function(resolve, reject) {
      $http.post(`${URL}firebases.json`, JSON.stringify(newAddress))
        .success(function(thingy) {
          resolve(thingy);
        });
    });
  };

  var oneAddress = function(addressId) {
    return $q(function(resolve, reject) {
      $http.get(`${URL}firebases/${addressId}.json`)
        .success(function(item) {
          resolve(item);
        });
    });
  };

  var editAddress = function(addressId, address) {
    let user = authFactory.getUser();
    address.uid = user.uid
    return $q(function(resolve, reject) {
      $http.put(`${URL}firebases/${addressId}.json`, 
        JSON.stringify(address))
        .success(function(thing) {
          resolve(thing);
        });
    });
  };

  return {getAddresses:getAddresses, deleteAddress:deleteAddress, postAddress:postAddress, oneAddress:oneAddress, editAddress:editAddress};
});