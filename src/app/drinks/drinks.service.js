(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .factory('Drinks', Drinks);

    /** @ngInject */
    function Drinks(Restangular) {
        return Restangular.service('drinks')
    }
})();
