/**
 * Created by vlad on 26/07/16.
 */
/**
 * Created by vlad on 24/03/16.
 */
(function () {
    'use strict';

    angular.module('githubStatisticsApp.app.router.config', [])
        .config(['$stateProvider', '$urlRouterProvider', stateProvider]);

    function stateProvider($stateProvider, $urlRouterProvider) {
        $stateProvider
            // Main route
            .state('home', {
                url: '/',
                views: {

                    '': {
                        templateUrl: '../views/main.html',
                        controller: 'MainCtrl'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/');
    }

})();