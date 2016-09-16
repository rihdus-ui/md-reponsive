/**
 * Created by sudhir on 16/9/16.
 */

(function () {
  'use strict';

  angular
    .module('dataVis.dl', [])
    .factory('DL', DataLl);

  /** @ngInject */
  function DataLl($timeout, $http) {

    return {
      fetchPaymentHistory: fetchPaymentHistory,
      fetchPaymentDetails: fetchPaymentDetails
    };

    function fetchPaymentHistory() {
      return $http.get('./assets/data/csv/payment_history.csv')
        .then(function (result) {

          /* Return data fetched from the csv file */
          return result.data || null;
        });
    }

    function fetchPaymentDetails() {
      return $http.get('./assets/data/csv/usage_details.csv')
        .then(function (result) {

          /* Return data fetched from the csv file */
          return result.data || null;
        });
    }
  }
})();

