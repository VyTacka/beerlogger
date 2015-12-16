(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .filter('replace', Replace);

    /** @ngInject */
    function Replace() {
        return function(str, searchValue, replaceValue) {
            return str.replace(searchValue, replaceValue);
        }
    }

})();
