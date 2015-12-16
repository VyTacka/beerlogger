(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('DrinkController', DrinkController);

    /** @ngInject */
    function DrinkController(Drink, $log) {
        var vm = this;

        $log.debug(vm.entity);
        vm.save = function () {
            vm.errors = {};
            Drink.save(vm.entity,
                function (response) {
                    $log.debug('true', response);
                    //$state.go('home');
                }, function (error) {
                    // do something on error
                    $log.debug(error);
                    if (typeof error.data !== 'undefined') {
                        vm.errors = error.data.errors.children;
                    }
                }
            );
        };
    }
})();
