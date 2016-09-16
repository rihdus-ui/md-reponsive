(function() {
  'use strict';

  angular
    .module('dataVis')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('details', {
        url: '/details',
        templateUrl: 'app/paymentDetails/details.html',
        // controller: 'MainController',
        // controllerAs: 'main'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
