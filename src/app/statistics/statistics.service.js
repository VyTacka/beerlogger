(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .factory('Statistics', Statistics);

    /** @ngInject */
    function Statistics() {
        return {
            get: function (drinks) {
                var stats = {
                    amount: 0,
                    price: {
                        total: 0,
                        min: Number.MAX_VALUE,
                        max: Number.MIN_VALUE
                    },
                    alc_vol: {
                        min: Number.MAX_VALUE,
                        max: Number.MIN_VALUE
                    }
                };

                angular.forEach(drinks, function (key) {
                    stats.amount += key.packaging_capacity * key.packaging_amount;
                    stats.price.total += key.packaging_price * key.packaging_amount;

                    if (stats.price.min > key.packaging_price) {
                        stats.price.min = key.packaging_price;
                    } else if (stats.price.max < key.packaging_price) {
                        stats.price.max = key.packaging_price;
                    }

                    if (stats.alc_vol.min > key.alc_vol) {
                        stats.alc_vol.min = key.alc_vol;
                    } else if (stats.alc_vol.max < key.alc_vol) {
                        stats.alc_vol.max = key.alc_vol;
                    }
                });

                return [
                    {
                        title: 'Total amount of drinks You have drank',
                        value: (stats.amount / 1000).toFixed(2) + ' <small>l</small>'
                    },
                    {
                        title: 'Cheapest drink that You have drank',
                        value: stats.price.min + ' <small>&euro;</small>'
                    },
                    {
                        title: 'Most expensive drink that You have drank',
                        value: stats.price.max + ' <small>&euro;</small>'
                    },
                    {
                        title: 'Money You have spent for all Your drinks',
                        value: stats.price.total + ' <small>&euro;</small>'
                    },
                    {
                        title: 'Weakest drink that You have drank',
                        value: stats.alc_vol.min + ' <small>%</small>'
                    },
                    {
                        title: 'Strongest drink that You have drank',
                        value: stats.alc_vol.max + ' <small>%</small>'
                    }
                ];
            }
        }
    }
})();
