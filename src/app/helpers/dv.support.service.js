/**
 * Created by sudhir on 16/9/16.
 */

(function () {
  'use strict';

  angular
    .module('dataVis.helper', [])
    .factory('DvSupport', DvSupport)
    .factory('DvBusiness', DvBusiness);

  function DvBusiness() {
    return {
      compute_paymentRecordRowTotal: compute_paymentRecordRowTotal
    };

    function compute_paymentRecordRowTotal(usage, freeQuota, chargable, perUnit) {
      return 0;
    }

  }

  /** @ngInject */
  function DvSupport() {

    return {
      CSVtoJSON: CSVtoJSON
    };

    function CSVtoJSON(csvString) {
      var papaData = Papa.parse(csvString);
      return papaData.errors.length == 0 ? papaData.data : null;
    }
  }
})();