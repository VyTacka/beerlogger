(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .factory('Drink', Drink);

    /** @ngInject */
    function Drink(Restangular) {
        return Restangular.service('drinks')
    }
})();
