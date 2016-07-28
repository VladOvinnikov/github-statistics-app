/**
 * Created by vlad on 27/07/16.
 */
(function () {
    'use strict';

    describe('githubStatisticsApp.app.router.config module:', function () {

        beforeEach(function () {

            module('ui.router');
            module('githubStatisticsApp.app.router.config');

        });

        describe('router.config - ', function () {

            var rootScope, state, httpBackend;

            beforeEach(inject(
                function (_$rootScope_, _$state_, _$httpBackend_) {

                    rootScope = _$rootScope_;
                    state = _$state_;
                    httpBackend = _$httpBackend_;

                }
            ));

            it('should change to the home state', function(){
                httpBackend.when('GET', '../views/main.html').respond(200);

                state.go('home');

                rootScope.$apply();

                //expect(state.current.name).toBe('home');

            })


        });
    });

})();