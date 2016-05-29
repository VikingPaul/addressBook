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

  $scope.edit = function(id) {
    console.log("editId", id);
    
  }
});
$('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() { alert('Ready'); }, // Callback for Modal open
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );