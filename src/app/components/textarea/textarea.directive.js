(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .directive('bsTextarea', textarea);

    /** @ngInject */
    function textarea() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/textarea/textarea.html',
            scope: {
                name: '@',
                label: '@',
                placeholder: '@',
                value: '=',
                errors: '='
            },
            controller: TextareaController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function TextareaController() {
        }
    }
})();
