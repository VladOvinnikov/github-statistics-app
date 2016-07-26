/**
 * Created by vlad on 26/07/16.
 */
(function () {
    'use strict';

    angular.module('githubStatisticsApp.repo.service', [])
        .service('RepoService', RepoService);

    RepoService.$inject = ['$q', '$http', '$log', 'REST_URL'];

    function RepoService($q, $http, $log, REST_URL) {
        $log.info('RepoService loaded!');

        var deferred = $q.defer();

        return {
            getRepositories: getRepositories,
            getContributions: getContributions
        };

        function getRepositories() {
            return $http.get(REST_URL + '/orgs/x-formation/repos')
                .then(function (res) {

                    return addContributionsToRepo(res.data);

                }, function (error) {

                    return error.data;

                })
                .finally(function () {
                    $log.info('Request getRepositories finished at:', new Date())
                }
            );
        }

        function getContributions(name) {
            return $http.get(REST_URL + '/repos/x-formation/' + name + '/contributors')
                .then(function (res) {

                    return res.data;
                }, function (error) {

                    return error.data;

                })
                .finally(function () {
                    $log.info('Request getContributions finished at:', new Date())
                }
            );
        }

        function addContributionsToRepo(array) {
            var arrayWithContributions = [];

            _.each(array, function (repo) {

                getContributions(repo.name)
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