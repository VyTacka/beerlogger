(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .directive('bsInput', input);

    /** @ngInject */
    function input() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/input/input.html',
            scope: {
                name: '@',
                type: '@',
                label: '@',
                placeholder: '@',
                value: '=',
                errors: '='
            },
            controller: InputController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function InputController($scope, $log) {
        }
    }
})();
