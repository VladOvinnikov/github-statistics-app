/**
 * Created by vlad on 26/07/16.
 */
(function () {
    'use strict';

    describe('githubStatisticsApp.main.controller module:', function () {

        beforeEach(function () {

            //module('underscore');
            //module('ui.router');
            module('githubStatisticsApp.services');
            module('githubStatisticsApp.app.constant.config');
            module('githubStatisticsApp.controllers');
            //module('beautysiteApp.services');
            //module('beautysiteApp.app.config.URL');

        });

        describe('MainCtrl - ', function () {

            var ctrl, scope, rootScope, log, RepoService;

            beforeEach(inject(
                function (_$controller_, _$rootScope_, _$log_, _RepoService_) {

                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    log = _$log_;
                    RepoService = _RepoService_;

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


        });
    });

})();