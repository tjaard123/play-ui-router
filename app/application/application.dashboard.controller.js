(function() {
'use strict';

  angular
    .module('playground')
    .controller('ApplicationDashboardController', ApplicationDashboardController);

  ApplicationDashboardController.$inject = ['currentApplication'];
  function ApplicationDashboardController(currentApplication) {
    var vm = this;
    console.debug('Hello ApplicationDashboardController');
    
    vm.currentApplication = currentApplication;
  }
})();