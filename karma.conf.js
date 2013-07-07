// Karma configuration
// Generated on Thu Jun 13 2013 00:32:29 GMT+0200 (CEST)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,  

  { pattern: 'app/components/crafty/release/0.5.4/crafty.js', included: false },
  { pattern: 'app/components/jquery/jquery.min.js', included: false },
  { pattern: 'app/components/underscore/underscore-min.js', included: false },
  { pattern: 'app/scripts/**/*.js', included: false },
  { pattern: 'test/**/*Spec.js', included: false },

  'test/main.test.js',
];


// list of files to exclude
exclude = [
  'app/scripts/main.js'
];


preprocessors = {
  'app/scripts/**/*.js': 'coverage'
};


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];

coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DEBUG;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;
