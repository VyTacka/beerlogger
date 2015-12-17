(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('DrinksController', DrinksController);

    /** @ngInject */
    function DrinksController(Drinks, AccessToken, $log, $uibModal) {
        var vm = this;

        vm.drinks = [];

        Drinks.getList({access_token: AccessToken.get().access_token}).then(
            function (response) {
                vm.drinks = response.plain();
                $log.debug(vm.drinks);
            }
        );

        vm.addDrink = function () {
            var modalInstance = $uibModal.open({
                size: 'lg',
                animation: true,
                templateUrl: 'app/drinks/new-drink.html',
                controller: 'NewDrinkController',
                controllerAs: 'vm',
                resolve: {
                    drink: function () {
                        return vm.drink;
                    }
                }
            });
            modalInstance.result.then(function (drink) {
                $log.debug(drink);
                vm.drinks.push(drink);
            }, function (response) {
                $log.debug(response);
            });
        };

        vm.show = function (drink) {
            var modalInstance = $uibModal.open({
                size: 'lg',
                animation: true,
                templateUrl: 'app/drinks/show-drink.html',
                controller: 'ShowDrinkController',
                controllerAs: 'vm',
                resolve: {
                    drink: function () {
                        return drink;
                    }
                }
            });
            modalInstance.result.then(function (response) {
                $log.debug(response);
            }, function (response) {
                $log.debug(response);
            });
        };
    }
})();
