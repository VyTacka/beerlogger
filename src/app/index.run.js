(function() {
  'use strict';

  angular
    .module('beerLoggerApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
