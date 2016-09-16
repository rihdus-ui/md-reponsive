(function() {
  'use strict';

  angular
    .module('dataVis')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
