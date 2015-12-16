/* global moment:false */
(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .constant('moment', moment)
        .constant('api', 'http://backend.restapi.dev/api')
        .constant('api_oauth', 'http://backend.restapi.dev/oauth/v2')
        .constant('client_id', '1_5qejn38rtukggw4w4ko0sk0okcgsk4c4s0g0cc8c40wcok0w4g')
        .constant('client_secret', '4zom9re3vlogo0og8scggc8cc0wok8k88okkk8wcwo4sc4ccos');

})();
