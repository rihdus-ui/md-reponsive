(function () {
  'use strict';

  angular
    .module('dataVis', [
      'ngAnimate', 'ngCookies',
      'ngTouch', 'ngSanitize', 'ngMessages',
      'ngAria', 'ui.router', 'ui.bootstrap',

      'dataVis.helper', 'dataVis.dl']);

})();
