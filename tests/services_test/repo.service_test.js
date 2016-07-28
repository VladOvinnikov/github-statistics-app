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

            var log, http, httpBackend, REST_URL, RepoService, q, deferred;

            beforeEach(inject(
                function (_$log_, _$http_, _$httpBackend_, _REST_URL_, _RepoService_, _$q_) {

                    log = _$log_;
                    http = _$http_;
                    httpBackend = _$httpBackend_;
                    REST_URL = _REST_URL_;
                    RepoService = _RepoService_;
                    q = _$q_;
                    deferred = q.defer();

                }
            ));

            afterEach(function () {
                httpBackend.verifyNoOutstandingExpectation();
                httpBackend.verifyNoOutstandingRequest();
            });

            it('RepoService should be initialized', function () {
                expect(RepoService).toBeDefined();
            });

            it('should have sent a GET request to the getRepositories with success result', function () {

                var returnData = {};

                httpBackend.expectGET(REST_URL + '/orgs/x-formation/repos').respond(200, returnData);
                //httpBackend.expectGET(REST_URL + '/repos/x-formation/' + returnData.name + '/contributors').respond(200, returnData);

                var returnedPromise = RepoService.getRepositories();

                var result;
                returnedPromise.then(function (response) {
                    result = response;
                });

                httpBackend.flush();

                expect(result).toEqual(returnData);
            });

            it('should have sent a GET request to the getRepositories with error result', function () {

                var returnData = {error: 'Error 500!'};

                httpBackend.expectGET(REST_URL + '/orgs/x-formation/repos').respond(500, returnData);

                var returnedPromise = RepoService.getRepositories();

                var result;
                returnedPromise.then(function (response) {
                    result = response;
                });

                httpBackend.flush();

                expect(result).toEqual(returnData);
            });

        });
    });

})();