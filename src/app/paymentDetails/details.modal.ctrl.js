/**
 * Created by sudhir on 16/9/16.
 */

angular
  .module('dataVis')
  .controller('ModalInstanceCtrl', function ($uibModalInstance, payment) {
    var $ctrl = this;
    $ctrl.paymentDetails = payment;
    
    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
