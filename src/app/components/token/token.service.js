(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .factory('Token', Token);

    /** @ngInject */
    function Token(Restangular, api_oauth, client_id, client_secret) {
        var token = Restangular.allUrl('oauth', api_oauth + '/token');

        function get() {
            return token.post({grant_type: 'client_credentials', client_id: client_id, client_secret: client_secret});
        }

        return {
            get: get
        };
    }

})();
