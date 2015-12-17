(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('NewDrinkController', NewDrinkController);

    /** @ngInject */
    function NewDrinkController($scope, Drinks, AccessToken, $uibModalInstance, $log) {
        var vm = this;

        vm.rating = {};

        vm.rating.overStar = null;
        vm.rating.hoveringOver = function (value) {
            vm.rating.overStar = value;
            vm.rating.percent = 100 * (value / 10);
        };

        vm.submit = function () {
            vm.errors = {};

            if ($scope.drinkForm.$valid) {
                Drinks.post({app_bundle_drink: vm.entity}, {access_token: AccessToken.get().access_token}).then(
                    function (response) {
                        $uibModalInstance.close(response.plain());
                    },
                    function (error) {
                        vm.errors = error.data.errors.children;
                    }
                );
            }
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
