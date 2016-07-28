//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './',

        files: [

            'app/bower_components/jquery/dist/jquery.min.js',
            'app/bower_components/underscore/underscore-min.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-underscore-module/angular-underscore-module.js',
            'app/config/*.js',
            'app/controllers/*.js',
            'app/services/*.js',
            'tests/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        preprocessors: {
            'app/!(bower_components)**/**/*.js': ['coverage']
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'tests/reports/coverage/'
        },

        logLevel: config.LOG_DEBUG,

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'sinon'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        singleRun: false
    });
};
