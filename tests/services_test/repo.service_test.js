/**
 * Created by vlad on 27/07/16.
 */
(function () {
    'use strict';

    describe('githubStatisticsApp.repo.service module:', function () {

        beforeEach(function () {

            module('githubStatisticsApp.services');
            module('githubStatisticsApp.app.constant.config');

        });

        describe('RepoService - ', function () {

            var log, http, httpBackend, REST_URL, RepoService, q, deferred, rootScope, scope, companyName, repos;

            beforeEach(inject(
                function (_$log_, _$http_, _$httpBackend_, _REST_URL_, _RepoService_, _$q_, _$rootScope_) {

                    log = _$log_;
                    http = _$http_;
                    httpBackend = _$httpBackend_;
                    REST_URL = _REST_URL_;
                    RepoService = _RepoService_;
                    q = _$q_;
                    deferred = q.defer();
                    rootScope = _$rootScope_;
                    scope = rootScope.$new();

                    httpBackend.expectGET(REST_URL + '/orgs/x-formation/repos').respond(200);
                    httpBackend.expectGET(REST_URL + '/repos/x-formation/pulsekit/contributors').respond(200);

                    companyName = 'x-formation';
                    repos = [
                        {name: "pulsekit"},
                        {name: "schemagen"}
                    ]
                }
            ));

            it('RepoService should be initialized', function () {
                expect(RepoService).toBeDefined();
            });

            it('should have sent a GET request to the getRepositories with success result', function () {

                var result;

                spyOn(_, 'each').and.callFake(
                    function () {
                        return repos;
                    });


                RepoService.getRepositories(companyName)
                    .then(function (response) {
                        result = response;

                        RepoService.getContributors(response[0].name, companyName);
                    });

                httpBackend.flush();

            });

        });
    });

})();