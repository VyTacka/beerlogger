(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .config(config);

    /** @ngInject */
    function config($logProvider, RestangularProvider, $locationProvider, api) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Activate the HTML5 mode to catch the access token.
        $locationProvider.html5Mode(true).hashPrefix('!');

        RestangularProvider.setBaseUrl(api);
    }

})();
