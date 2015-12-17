(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('ShowDrinkController', ShowDrinkController);

    /** @ngInject */
    function ShowDrinkController($scope, Drinks, $log, $uibModalInstance, drink) {
        var vm = this;

        vm.drink = drink;

        vm.rating = {};
        vm.rating.max = 10;

        vm.close = function () {
            $uibModalInstance.close();
        };
    }
})();
