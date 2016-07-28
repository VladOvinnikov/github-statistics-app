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
            $scope.repoName = $stateParams.repo;
            $scope.companyName = $stateParams.org;

            RepoService.getContributors($scope.repoName, $scope.companyName)
                .then(function (data) {

                    $scope.contributors = data;

                }, function (error) {

                    $log.error(error);
                }
            )
        }
    }

})();