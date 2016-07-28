/**
 * Created by vlad on 26/07/16.
 */
(function () {
    'use strict';

    describe('githubStatisticsApp.main.controller module:', function () {

        beforeEach(function () {

            module('githubStatisticsApp.services');
            module('githubStatisticsApp.app.constant.config');
            module('githubStatisticsApp.controllers');

        });

        describe('MainCtrl - ', function () {

            var ctrl, scope, rootScope, log, RepoService, REST_URL, q, deferred;

            beforeEach(inject(
                function (_$controller_, _$rootScope_, _$log_, _RepoService_, _REST_URL_, _$q_) {

                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    log = _$log_;
                    RepoService = _RepoService_;
                    REST_URL = _REST_URL_;
                    q = _$q_;
                    deferred = q.defer();

                    spyOn(RepoService, 'getRepositories').and.returnValue(deferred.promise);

                    ctrl = _$controller_('MainCtrl', {

                        $rootScope: rootScope,
                        $scope: scope,
                        $log: log,
                        RepoService: RepoService

                    });
                }));

            it('MainCtrl should be initialized', function () {
                expect(ctrl).toBeDefined();
            });

            it('$scope.repositories should to be defined and equal null', function () {
                expect(scope.repositories).toBeDefined();
                expect(scope.repositories).toBeNull();
            });

            it('$scope.order should to be defined and equal "-forks"', function () {
                expect(scope.order).toBeDefined();
                expect(scope.order).toBe('-forks');
            });

            it('$scope.companyName should to be defined and equal "x-formation"', function () {
                expect(scope.companyName).toBeDefined();
                expect(scope.companyName).toBe('x-formation');
            });

            it('RepoService getRepositories() should to be defined', function () {
                expect(RepoService.getRepositories().then).toBeDefined();
            });

            it('RepoService getRepositories() should resolve with "Repo list"', function () {
                var response = 'Repo list';

                deferred.resolve(response);

                scope.$apply();

                expect(scope.repositories).toBe(response);
                expect(RepoService.getRepositories).toHaveBeenCalled();
            });

            it('RepoService getRepositories() should reject promise', function () {

                deferred.reject();

                scope.$apply();

                expect(scope.repositories).toBeNull();
            });
        });
    });

})();