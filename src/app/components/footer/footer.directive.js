(function() {
  'use strict';

  angular
    .module('dataVis')
    .directive('visFooter', VisFooterbar);

  /** @ngInject */
  function VisFooterbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: FooterCtrl,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterCtrl(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
