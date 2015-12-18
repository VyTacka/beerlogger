/* global moment:false */
(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .constant('moment', moment)
        .constant('api', 'http://api.beerlogger.tru.lt/api')
        .constant('api_oauth', 'http://api.beerlogger.tru.lt/oauth/v2')
        .constant('client_id', '1_5qejn38rtukggw4w4ko0sk0okcgsk4c4s0g0cc8c40wcok0w4g')
        .constant('client_secret', '4zom9re3vlogo0og8scggc8cc0wok8k88okkk8wcwo4sc4ccos');

})();
