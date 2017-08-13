(function() {
'use strict';

  angular
    .module('playground')
    .factory('ApplicationFactory', ApplicationFactory);

  ApplicationFactory.$inject = ['$http', '$q'];
  function ApplicationFactory($http, $q) {
    var service = {
      getApplication:getApplication
    };
    
    return service;

    ////////////////

    // Using $q.defer() to cache promise
    function getApplication (id) {
      var deferred = $q.defer();
      $http.get('/api/application.json')
        .success(deferred.resolve)
        .error(deferred.reject);
      return deferred.promise;
    }
  }
})();