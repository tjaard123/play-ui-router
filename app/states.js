angular.module('playground')
.config(function ($stateProvider) {
  console.debug('Hello config');

  $stateProvider.state('application', {
    url: '/application/:id',
    templateUrl: '/app/application/application.html',
    // When there are multiple views & controllers, we need to be explicit
    // In HTML we would now have:  application.save() and balanceSheet.save() for example
    // This is setup in states.js with controller: 'ApplicationController as application'    
    controller: 'ApplicationController as application',
    resolve: {
      currentApplication: function (ApplicationFactory, $stateParams) {
        console.info('Resolving promise before routing...');
        return ApplicationFactory.getApplication($stateParams.id);
      }
    }
  })
  .state('application.capture', {
    url: '/capture',
    templateUrl: '/app/application/capture/capture.html',
    controller: 'ApplicationCaptureController as capture'     
  })
  .state('application.dashboard', {
    url: '/dashboard',
    templateUrl: '/app/application/application.dashboard.html',
    controller: 'ApplicationDashboardController as dashboard'
  });  
});