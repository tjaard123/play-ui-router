angular.module('playground')
.factory('applicationFactoryCache', function ($http, $q) {

  console.debug('Hello applicationFactory (cache version)');

  // Here we maintain a cache object inside the factory
  var cache = {
    application: null
  };

  // This method extracts the .data object from the special promise that $http returns
  function extract(result) {
    return result.data;
  }

  return {
    getApplication: function (id) {
      if (cache.application) {
        // $q.when converts it to a promise
        return $q.when(cache.application);
      }
      else {
        return $http.get('/api/application.json').then(extract);
      }
    }
  };
});