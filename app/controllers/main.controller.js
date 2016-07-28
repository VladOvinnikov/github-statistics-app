/**
 * Created by vlad on 26/07/16.
 */
(function () {
    'use strict';

    angular.module('githubStatisticsApp.main.controller', [])
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$log', 'RepoService'];

    function MainCtrl($scope, $log, RepoService) {
        $log.info('MainCtrl loaded!');

        init();

        function init() {
            $scope.companyName = 'x-formation';
            $scope.repositories = null;
            $scope.order = '-forks';

            RepoService.getRepositories($scope.companyName)
                .then(function (data) {

                    $scope.repositories = data;
                }, function (error) {

                    $log.error(error);
                }
            )

        }
    }

})();