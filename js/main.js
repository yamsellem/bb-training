/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
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
	paths: {
		jquery: '../vendor/jquery-2.0.3',
		underscore: '../vendor/underscore-1.5.2',
		backbone: '../vendor/backbone-1.1.0',
		text: '../vendor/text-2.0.10'
	}
});

require([
	'backbone',
	'routers/router'
], function (Backbone, Workspace) {
	var _sync = Backbone.sync;
	Backbone.sync = function(method, model, options) {
	  options.beforeSend = function(xhr) {
	    return xhr.setRequestHeader('X-User', 18000);
	  };
	  return _sync.call(this, method, model, options);
	};

	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();
});
