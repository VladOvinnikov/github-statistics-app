/**
 * Created by vlad on 26/07/16.
 */
(function () {
    'use strict';

    angular.module('githubStatisticsApp.repo.service', [])
        .service('RepoService', RepoService);

    RepoService.$inject = ['$http', '$log', 'REST_URL'];

    function RepoService($http, $log, REST_URL) {
        $log.info('RepoService loaded!');

        return {
            getRepositories: getRepositories,
            getContributors: getContributors
        };

        function getRepositories(companyName) {
            return $http.get(REST_URL + '/orgs/' + companyName + '/repos')
                .then(function (res) {

                    var array = res.data;
                    return _.each(array, function (repo) {

                        getContributors(repo.name, companyName)
                            .then(function (data) {

                                repo.contribution = data;

                            }
                        );

                    });
                })
                .finally(function () {
                    $log.info('Request getRepositories finished at:', new Date())
                }
            );
        }

        function getContributors(repoName, companyName) {
            return $http.get(REST_URL + '/repos/' + companyName + '/' + repoName + '/contributors')
                .then(function (res) {

                    return res.data;
                })
                .finally(function () {
                    $log.info('Request getContributors finished at:', new Date())
                }
            );
        }
    }

})();