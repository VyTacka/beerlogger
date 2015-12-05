(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig, $locationProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;

        // Activate the HTML5 mode to catch the access token.
        $locationProvider.html5Mode(true).hashPrefix('!');
    }

})();