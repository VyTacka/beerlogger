(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .controller('RegistrationController', RegistrationController);

    /** @ngInject */
    function RegistrationController($rootScope, Token, User) {
        var vm = this;

        vm.submit = function () {
            vm.errors = {};

            Token.get().then(
                function (response) {
                    User.post({fos_user_registration: vm.entity}, {access_token: response.plain().access_token}).then(
                        function () {
                            $rootScope.alerts.push({ type: 'success', msg: 'Well done! You successfully created new user. Now You can sign in.' });
                        },
                        function (error) {
                            if (typeof error.data !== 'undefined') {
                                vm.errors = error.data.errors.children;
                                vm.errors.plainPassword = vm.errors.plainPassword.children;
                            }
                        }
                    );
                }
            );
        };
    }
})();
