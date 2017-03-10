(function() {
    'use strict';

    angular
        .module('nodejs-client-quickstart')
        .controller('HomeController', Controller);
    Controller.$inject = ['HomeService', '$http'];

    function Controller(HomeService, $http) {
        var self = this;

        self.home = {
          foo: 'bar'
        };
        self.view = {};
        self.model = {};

        self.init = function() {
          console.log('HomeController.init()');
          HomeService.init();
        }

        self.init();
    };
})();
