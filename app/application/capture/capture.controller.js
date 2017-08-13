(function() {
'use strict';

  angular
    .module('playground')
    .controller('ApplicationCaptureController', ApplicationCaptureController);

  ApplicationCaptureController.$inject = ['currentApplication'];
  function ApplicationCaptureController(currentApplication) {
    var vm = this;
    console.debug('Hello ApplicationCaptureController');
  
    vm.currentApplication = currentApplication;
  }
})();