(function() {
  'use strict';

  angular
    .module('playground')
    .directive('flyCaptureLegalEntity', flyCaptureLegalEntity)
    .controller('CaptureLegalEntityController', CaptureLegalEntityController);

  flyCaptureLegalEntity.$inject = [];
  function flyCaptureLegalEntity() {
    var directive = {
        controller: 'CaptureLegalEntityController',
        controllerAs: 'legalEntity',
        templateUrl: '/app/application/capture/capture.legal-entity.html',
        restrict: 'E',
        scope: { currentApplication: "=" }
    };
    return directive;
  }

  CaptureLegalEntityController.$inject = ['$scope'];
  function CaptureLegalEntityController($scope) {
    var vm = this;
    vm.currentApplication = $scope.currentApplication;
  }  
})();