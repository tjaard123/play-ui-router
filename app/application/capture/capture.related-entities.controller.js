(function() {
  'use strict';

  angular
    .module('playground')
    .directive('flyCaptureRelatedEntities', flyCaptureRelatedEntities)
    .controller('CaptureRelatedEntitiesController', CaptureRelatedEntitiesController);

  flyCaptureRelatedEntities.$inject = [];
  function flyCaptureRelatedEntities() {
    var directive = {
        controller: 'CaptureRelatedEntitiesController',
        controllerAs: 'relatedEntities',
        templateUrl: '/app/application/capture/capture.related-entities.html',
        restrict: 'E',
        scope: { currentApplication: "=" }
    };
    return directive;
  }

  CaptureRelatedEntitiesController.$inject = ['$scope'];
  function CaptureRelatedEntitiesController($scope) {
    var vm = this;
    vm.currentApplication = $scope.currentApplication;
  }  
})();