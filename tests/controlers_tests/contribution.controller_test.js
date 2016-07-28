/**
 * Created by vlad on 27/07/16.
 */
(function () {
    'use strict';

    describe('githubStatisticsApp.contribution.controller module:', function () {

        beforeEach(function () {

            module('ui.router');
            module('githubStatisticsApp.services');
            module('githubStatisticsApp.app.constant.config');
            module('githubStatisticsApp.controllers');

        });

        describe('ContributionCtrl - ', function () {

            var ctrl, scope, rootScope, state, stateParams, log, RepoService, httpBackend, REST_URL, q, deferred;


            beforeEach(inject(
                function (_$controller_, _$rootScope_, _$state_, _$stateParams_,
                          _$log_, _RepoService_, _$httpBackend_, _REST_URL_, _$q_) {

                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    state = _$state_;
                    stateParams = _$stateParams_;
                    log = _$log_;
                    RepoService = _RepoService_;
                    httpBackend = _$httpBackend_;
                    REST_URL = _REST_URL_;
                    q = _$q_;
                    deferred = q.defer();

                    stateParams = {repo: 'pulsekit', org: "x-formation"};

                    spyOn(RepoService, 'getContributors').and.returnValue(deferred.promise);

                    ctrl = _$controller_('ContributionCtrl', {

                        $rootScope: rootScope,
                        $scope: scope,
                        $log: log,
                        RepoService: RepoService,
                        $stateParams: stateParams

                    });
                }));

            it('ContributionCtrl should be initialized', function () {
                expect(ctrl).toBeDefined();
            });

            it('$scope.contributors should to be defined and equal null', function () {
                expect(scope.contributors).toBeDefined();
                expect(scope.contributors).toBeNull();
            });

            it('$scope.order should to be defined and equal "-contributions"', function () {
                expect(scope.order).toBeDefined();
                expect(scope.order).toBe('-contributions');
            });

            it('$scope.repoName should to be defined and equal "pulsekit"', function () {
                expect(scope.repoName).toBeDefined();
                expect(scope.repoName).toBe(stateParams.repo);
            });

            it('$scope.companyName should to be defined and equal "x-formation"', function () {
                expect(scope.companyName).toBeDefined();
                expect(scope.companyName).toBe(stateParams.org);
            });

            it('RepoService getContributors() should to be defined', function () {
                expect(RepoService.getContributors().then).toBeDefined();
            });

            it('RepoService getContributors() should resolve with "Repo list"', function () {
                var response = 'Repo list';

                deferred.resolve(response);

                scope.$apply();

                expect(scope.contributors).toBe(response);
                expect(RepoService.getContributors).toHaveBeenCalled();
            });

            it('RepoService getContributors() should reject promise', function () {

                deferred.reject();

                scope.$apply();

                expect(scope.contributors).toBeNull();
            });
        });
    });

})();