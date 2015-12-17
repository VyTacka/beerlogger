(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .run(alerts);

    /** @ngInject */
    function alerts($rootScope, $timeout) {

        $rootScope.alerts = [];

        $rootScope.alertClose = function (index) {
            $rootScope.alerts.splice(index, 1);
        };

        $rootScope.$watch('alerts', function (newValue, oldValue) {

            if (newValue.length > oldValue.length) {
                angular.forEach(newValue, function (key, index) {
                    if (-1 === oldValue.indexOf(key)) {
                        $timeout(function () {
                            newValue.splice(index, 1);
                        }, 5000)
                    }
                });
            }
        }, true);
    }

})();
