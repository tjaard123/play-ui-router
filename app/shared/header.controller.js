(function() {
'use strict';

  angular
    .module('playground')
    .controller('headerController', headerController);

  headerController.$inject = ['$stateParams', 'ApplicationFactory'];
  function headerController($stateParams, ApplicationFactory) {
    var vm = this;

    ApplicationFactory.getApplication($stateParams.id)
    .then(function (response) {
      vm.currentApplication = response;
    });
  }
})();