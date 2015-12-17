(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('StatisticsController', StatisticsController);

    /** @ngInject */
    function StatisticsController(Drinks, Statistics, AccessToken) {
        var vm = this;

        var drinks = [];
        vm.statistics = [];

        Drinks.getList({access_token: AccessToken.get().access_token}).then(
            function (response) {
                drinks = response.plain();
                vm.statistics = Statistics.get(drinks);
            }
        );
    }
})();
