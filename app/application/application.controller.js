(function() {
'use strict';

  angular
    .module('playground')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['currentApplication'];
  function ApplicationController(currentApplication) {
    // We're using controller as in states, therefore we don't need to inject $scope here
    // The convention is to bind a variable vm (view-model) to this    
    var vm = this;
    
    console.debug('Hello ApplicationController');

    // State is setup to first resolve currentApplication before it routes
    // It is injected here, the actual value!
    vm.currentApplication = currentApplication;
  }
})();