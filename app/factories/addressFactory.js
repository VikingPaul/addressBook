app.factory('addressStuff', function($http, $q){
  var getAddresses = function() {
    let addresses = [];
    return $q(function(resolve, reject) {
      $http.get("https://vikiing-addressbook.firebaseio.com/firebases.json")
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
      $http.delete(`https://vikiing-addressbook.firebaseio.com/firebases/${addressId}.json`)
        .success(function(thingy) {
          resolve(thingy);
        });
    });
  };

  var postAddress = function(newAddress) {
    return $q(function(resolve, reject) {
      $http.post("https://vikiing-addressbook.firebaseio.com/firebases.json", JSON.stringify(newAddress))
        .success(function(thingy) {
          resolve(thingy);
        });
    });
  };
  return {getAddresses:getAddresses, deleteAddress:deleteAddress, postAddress:postAddress}
});