(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('drinks', {
                url: '/drinks',
                templateUrl: 'app/drinks/drinks.html',
                controller: 'DrinksController',
                controllerAs: 'vm'
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'app/registration/registration.html',
                controller: 'RegistrationController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
