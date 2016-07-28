/**
 * Created by vlad on 27/07/16.
 */
(function () {
    'use strict';

    angular.module('githubStatisticsApp.contribution.controller', [])
        .controller('ContributionCtrl', ContributionCtrl);

    ContributionCtrl.$inject = ['$scope', '$log', 'RepoService', '$stateParams'];

    function ContributionCtrl($scope, $log, RepoService, $stateParams) {
        $log.info('ContributionCtrl loaded!');

        init();

        function init() {
            $scope.contributors = null;
            $scope.order = '-contributions';
            $scope.repoName = $stateParams.name;

            RepoService.getContributors($scope.repoName)
                .then(function (data) {

                    $scope.contributors = data;

                }, function (error) {

                    $log.error(error);
                }
            )
        }
    }

})();