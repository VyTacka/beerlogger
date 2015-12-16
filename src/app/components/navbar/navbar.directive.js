(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .directive('navbar', navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController($scope, $timeout, AccessToken) {
            var vm = this;

            $timeout(function () {
                vm.logged = !!AccessToken.get();
            }, 0);

            $scope.$on('oauth:login', function () {
                vm.logged = true;
            });

            $scope.$on('oauth:logout', function () {
                vm.logged = false;
            });
        }
    }

})();
