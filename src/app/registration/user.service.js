(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .factory('User', User);

    /** @ngInject */
    function User(Restangular) {
        return Restangular.service('users');
    }

})();
