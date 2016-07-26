(function () {
    'use strict';

    angular.module('githubStatisticsApp', [

        // Declare vendors
        'githubStatisticsApp.app.module.config',

        // Declare constants
        'githubStatisticsApp.app.constant.config',

        // Declare rout states
        'githubStatisticsApp.app.router.config',

        // Declare app level module which depends on models, controllers, services, filters and directives
        'githubStatisticsApp.controllers',
        'githubStatisticsApp.services'

    ]);

})();