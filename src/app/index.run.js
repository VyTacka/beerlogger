(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .run(alerts)
        .run(oauth);

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

    /** @ngInject */
    function oauth($rootScope, $timeout, AccessToken) {

        $timeout(function () {
            $rootScope.logged = !!AccessToken.get();
        }, 0);

        $rootScope.$on('oauth:login', function () {
            $rootScope.logged = true;
        });

        $rootScope.$on('oauth:logout', function () {
            $rootScope.logged = false;
        });
    }

})();
