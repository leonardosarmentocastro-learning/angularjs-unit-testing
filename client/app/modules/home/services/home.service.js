(function() {
  'use strict';

  angular
    .module('nodejs-client-quickstart')
    .service('HomeService', Service);
  // HomeService.$inject = [];

  function Service() {
    var self = this;

    self.init = function() {
      console.log('HomeService.init()');
    };

    return self;
  }

})();
