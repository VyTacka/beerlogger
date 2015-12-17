(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('DrinksController', DrinksController);

    /** @ngInject */
    function DrinksController(Drinks, AccessToken, $uibModal) {

        var vm = this;

        vm.drinks = [];

        Drinks.getList({access_token: AccessToken.get().access_token}).then(
            function (response) {
                vm.drinks = response.plain();
            }
        );

        vm.addDrink = function () {
            var modalInstance = $uibModal.open({
                size: 'lg',
                animation: true,
                templateUrl: 'app/drinks/new-drink.html',
                controller: 'NewDrinkController',
                controllerAs: 'vm'
            });
            modalInstance.result.then(function (drink) {
                vm.drinks.push(drink);
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
        };
    }
})();
