require.config({
  baseUrl: '../js',
  paths: {
    'jquery'        : '../vendor/jquery-2.0.3',
    'underscore'    : '../vendor/underscore-1.5.2',
    'backbone'      : '../vendor/backbone-1.1.0'
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

require.onError = function (err) {
    console.log(err)
};
 
require([
  '../tests/models/todoTest',
  '../tests/collections/todosTest'
], mocha.run);