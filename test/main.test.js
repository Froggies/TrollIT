var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /Spec\.js$/.test(file);
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/scripts',

  paths: {
    "components": "../components",
    "jquery": "../components/jquery/jquery.min",
    'underscore': '../components/underscore/underscore-min',
    'crafty': '../components/crafty/release/0.5.4/crafty'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'crafty': {
      exports: 'Crafty'
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});