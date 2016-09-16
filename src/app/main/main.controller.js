(function () {
  'use strict';

  angular
    .module('dataVis')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($q, $uibModal
    , DL, DvSupport, DvBusiness) {
    var vm = this;

    vm.store = {
      payment_details: [],
      history_records: []
    };

    vm.getSubTotal = _getSubTotal;
    vm.showDetails = _showDetails;

    initView();

    function initView() {
      $q.all([
          _updatePaymentRecords(),
          _updatePaymentHistory()
        ])
        .then(function (resultBundle) {
          /* On fetch success */
          console.log(resultBundle);
        })
        .catch(function () {
          /* On fetch fail */
        })
    }

    function _showDetails(payment) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/paymentDetails/details.modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: 'lg',
        resolve: {
          payment: function () {
            return payment;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    }

    function _getSubTotal(paymentRow) {
      return DvBusiness.compute_paymentRecordRowTotal(
        paymentRow[1], // usage
        paymentRow[2], // freeQuota
        paymentRow[3], // chargable
        paymentRow[4]) // perUnit
        ;
    }

    function _updatePaymentRecords() {
      return DL.fetchPaymentDetails()
        .then(function (csvString) {

          var records = DvSupport.CSVtoJSON(csvString);

          vm.store.payment_details = records;
          return records;
        })
    }

    function _updatePaymentHistory() {
      return DL.fetchPaymentHistory()
        .then(function (csvString) {

          var records = DvSupport.CSVtoJSON(csvString);

          vm.store.history_records = records;
          return records;
        })
    }

  }
})();
