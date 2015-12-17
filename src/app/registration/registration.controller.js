(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('RegistrationController', RegistrationController);

    /** @ngInject */
    function RegistrationController(Token, User, $log) {
        var vm = this;

        $log.debug(vm.entity);

        vm.submit = function () {
            vm.errors = {};

            Token.get().then(
                function (response) {
                    User.post({fos_user_registration: vm.entity}, {access_token: response.plain().access_token}).then(
                        function (response) {
                            $log.debug('true', response.plain());
                        },
                        function (error) {
                            if (typeof error.data !== 'undefined') {
                                vm.errors = error.data.errors.children;
                                vm.errors.plainPassword = vm.errors.plainPassword.children;
                                $log.debug(vm.errors);
                            }
                        }
                    );
                },
                function (error) {
                    $log.error(error);
                }
            );
        };

    }
})();
