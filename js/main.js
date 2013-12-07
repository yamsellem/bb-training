$(function () {
    'use strict';

    var _sync = Backbone.sync;
    Backbone.sync = function(method, model, options) {
        options.beforeSend = function(xhr) {
            return xhr.setRequestHeader('X-User', 'yourname');
        };
        return _sync.call(this, method, model, options);
    };

    new Router();
    Backbone.history.start();
});
