require.config({
  baseUrl: '../',
  paths: {
    'jquery'        : 'vendor/jquery-2.0.3',
    'underscore'    : 'vendor/underscore-1.5.2',
    'backbone'      : 'vendor/backbone-1.1.0'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

 
require([
  'tests/models/todoTest'
], mocha.run);