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
            return $http.get(REST_URL + '/orgs/x-formation/repos')
                .then(function (res) {

                    return addContributionsToRepo(res.data, companyName);

                }, function (error) {

                    return error.data;
                })
                .finally(function () {
                    $log.info('Request getRepositories finished at:', new Date())
                }
            );
        }

        function getContributors(name) {
            return $http.get(REST_URL + '/repos/x-formation/' + name + '/contributors')
                .then(function (res) {

                    return res.data;
                }, function (error) {

                    return error.data;
                })
                .finally(function () {
                    $log.info('Request getContributors finished at:', new Date())
                }
            );
        }

        function addContributionsToRepo(array) {

            _.each(array, function (repo) {

                getContributors(repo.name)
                    .then(function (data) {

                        repo.contribution = data;

                    }, function (error) {

                        return error.data;
                    }
                );

            });

            return array;
        }
    }

})();