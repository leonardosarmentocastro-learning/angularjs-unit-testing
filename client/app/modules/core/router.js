(function() {
  'use strict';

  angular
    .module('nodejs-client-quickstart')
    .config(['$routeProvider', Router])
    .run(['$route', routeRunner]);

  function Router($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/modules/home/views/home.view.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  function routeRunner($route) {
    $route.reload();
  }
})();
